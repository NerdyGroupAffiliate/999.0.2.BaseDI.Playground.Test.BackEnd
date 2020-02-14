import * as Sentry from '@sentry/node';
import initCms from '../../cms/init';
import AMLIAxiosClient from '../../helpers/amli-axios-client';

// tslint:disable-next-line
const Prismic = require('prismic-javascript');

export default async (obj: any, args: any, context: any) => {
  const api = await initCms();
  const { propertyId, floorplanId, amliFloorplanId, moveInDate, pets = 'any' } = args;

  const amliUnitsProm: any = AMLIAxiosClient.get(
    !!floorplanId
      ? '/Units/GetAvailableSearchByFloorplanId'
      : '/Data/GetCommunityUnitsByPropertyId',
    {
      params: !!amliFloorplanId
        ? {
          floorplanId: amliFloorplanId,
          moveInDate,
          pets
        }
        : {
          propertyId
        }
    }
  );

  const query = [Prismic.Predicates.at('document.type', 'unit')];

  if (!!floorplanId) {
    query.push(
      Prismic.Predicates.at('my.unit.floor_plans.floor_plan', floorplanId)
    );
  }

  const cmsProm = await api.query(query, { pageSize: 100 });
  const allPrismicUnits: any = [];

  const getPaginatedResults = async () => {
    if (cmsProm && cmsProm.results) {
      allPrismicUnits.push(...cmsProm.results);
      let currentPage = 1;

      while (currentPage < cmsProm.total_pages) {
        currentPage++;
        const getData = async () => {
          const prismicUnits = await api.query(query, { pageSize: 100, page: currentPage });
          if (prismicUnits && prismicUnits.results) {
            allPrismicUnits.push(...prismicUnits.results);
          }
          return allPrismicUnits;
        };
        await getData.apply(currentPage);

      }
    }
    return allPrismicUnits;
  };

  try {
    const [amliUnits, results] = await Promise.all([amliUnitsProm, getPaginatedResults()]);

    const units =
      amliUnits.floorplanSummaries && amliUnits.floorplanSummaries.length
        ? amliUnits.floorplanSummaries[0].units
        : amliUnits;


    const sqftMin =
      amliUnits.floorplanSummaries && amliUnits.floorplanSummaries.length
        ? amliUnits.floorplanSummaries[0].sqftMin
        : null;

    const sqftMax =
      amliUnits.floorplanSummaries && amliUnits.floorplanSummaries.length
        ? amliUnits.floorplanSummaries[0].sqFtMax
        : null;

    const unitIds = (units || []).map((unit: any) => unit.unitId);

    const pricingParams = unitIds.map((id: string) => ({
      unitId: id,
      ...(moveInDate ? { requestedStartDate: moveInDate } : {})
    }));
    const pricingProms: any =
      pricingParams.map((params: {}) =>
        AMLIAxiosClient.get('/Pricing/GetPricingModelByUnitIdAsync', {
          params
        })
      ) || [];

    const pricing = await Promise.all(pricingProms);

    const output: any = [];
    if (results && results.length) {
      results.forEach((item: any) => {
        // @ts-ignore
        const index = units.findIndex(
          (it: any) => +it.unitId === +item.data.amli_id
        );
        const pricingIndex = pricing.findIndex(
          (it: any) => +it.UnitId === +item.data.amli_id
        );
        if (index !== undefined && index !== null && index >= 0) {
          output.push({
            // @ts-ignore
            ...units[index],
            sqftMax,
            sqftMin,
            prismicUnitNumber: item.data.unit_number,
            cms: item,
            ...(pricingIndex > -1 ? { pricing: pricing[pricingIndex] } : {})
          });
        }
      });
    }

    // sort the output by the 'displayOrder' value that is provided from AMLI Services
    const displayOrder = output.sort((a: any, b: any) => b.displayOrder < a.displayOrder ? 1 : -1);

    return displayOrder;
  } catch (e) {
    Sentry.captureException(e);
  }
};
