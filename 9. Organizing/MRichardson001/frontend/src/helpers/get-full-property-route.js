import get from "lodash/get";

const GetPropertyFullRoute = (property, appdata) => {
  if (!property || !appdata){
    return null;
  }
  let url;
  const uid = get(property, "data.sub-regions[0].sub-region.uid");
  let subregionId = null;
  let parentRegion = null;

  if (uid) {
    subregionId = (appdata.subregions || []).findIndex(sub => sub.uid === uid);
    if ((subregionId !== null || subregionId !== undefined) && appdata.subregions) {
      parentRegion = get(appdata.subregions[subregionId], 'data.region');
      url = `/apartments/${parentRegion.uid}/${appdata.subregions[subregionId].uid}-apartments`;
     }
  }
  return url;
};

export default GetPropertyFullRoute;
