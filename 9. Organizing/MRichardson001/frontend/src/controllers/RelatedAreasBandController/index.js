import React from 'react';
import get from "lodash/get";
import RelatedAreasBandView from '../../components/RelatedAreasBandView';
import BackgroundImageHandler from '../../helpers/components-data-handlers/background-image-handler';
import CapitalizeFirsts from "../../helpers/capitalize-first-letter";
import "./index.css";
import { withRouter } from "react-router";
import styles from './styles.module.css';

const RelatedAreasBand = props => {
  const { slice } = props;
  const title = get(slice, "primary.title");
  const subtitle = get(slice, "primary.subtitle");
  const subregionLink1 = get(slice, "primary.subregion_1.slug");
  const subregionImage1 = BackgroundImageHandler(get(props, "subRegions[0].primary_image"));
  const subregionName1 = CapitalizeFirsts(get(slice, "primary.subregion_1.uid"));
  const subregionLink2 = get(slice, "primary.subregion_2.slug");
  const subregionImage2 = BackgroundImageHandler(get(props, "subRegions[1].primary_image"));
  const subregionName2 = CapitalizeFirsts(get(slice, "primary.subregion_2.uid"));
  const subregionLink3 = get(slice, "primary.subregion_3.slug");
  const subregionImage3 = BackgroundImageHandler(get(props, "subRegions[2].primary_image"));
  const subregionName3 = CapitalizeFirsts(get(slice, "primary.subregion_3.uid"));
  const subregionCount = props.subRegions.length;

  return (
    <RelatedAreasBandView>
      <title>{title}</title>
      <subtitle>{subtitle}</subtitle>
      {
        subregionLink1 ?
          <subregion-wrapper-1
            href={`${subregionLink1}-apartments`}
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`${subregionLink1}-apartments`);
            }}
            {...subregionImage1}
            className={[styles.region, `regions${subregionCount}`].join(" ")}
          >
            <subregion-name-1>{subregionName1}</subregion-name-1>
          </subregion-wrapper-1>
        : null
      }
      {
        subregionLink2 ?
          <subregion-wrapper-2
            href={`${subregionLink2}-apartments`}
            onClick={e => {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              props.history.push(`${subregionLink2}-apartments`);
            }}
            {...subregionImage2}
            className={[styles.region, `regions${subregionCount}`].join(" ")}
          >
            <subregion-name-2>{subregionName2}</subregion-name-2>
          </subregion-wrapper-2>
        : null
      }
      {
        subregionLink3 ?
          <subregion-wrapper-3
           href={`${subregionLink3}-apartments`}
           onClick={e => {
            if (e && e.preventDefault) {
              e.preventDefault();
            }
            props.history.push(`${subregionLink3}-apartments`);
          }}
           {...subregionImage3}
           className={[styles.region, `regions${subregionCount}`].join(" ")}
          >
            <subregion-name-3>{subregionName3}</subregion-name-3>
          </subregion-wrapper-3>
        : null
      }
    </RelatedAreasBandView>
  );
}

export default withRouter(RelatedAreasBand);
