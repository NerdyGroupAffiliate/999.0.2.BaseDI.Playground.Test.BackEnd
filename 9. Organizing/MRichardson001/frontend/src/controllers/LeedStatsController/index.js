import React from "react";
import get from "lodash/get";
import LeedStatsView from "../../components/LeedStatsView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import TextWritter from "../../helpers/text-writter/index";
import styles from "./styles.module.css";
import "./index.css";

export default props => {
  const title = get(props, "slice.primary.title", "");
  const sub_text = get(props, "slice.primary.sub_text", "");
  const leed_platinum_count = get(props, "slice.primary.leed_platinum_count", "");
  const leed_silver_count = get(props, "slice.primary.leed_silver_count", "");
  const leed_gold_count = get(props, "slice.primary.leed_gold_count", "");
  const leed_certified_count = get(props, "slice.primary.leed_certified_count", "");
  const energy_star_community_count = get(props,"slice.primary.energy_star_community_count", "");
  const energy_star_more_info = get(props, "slice.primary.energy_star_more_info",[],"");
  const leed_certified_communities = get(props,"slice.primary.leed_certified_communities", "");
  const lead_more_info = get(props, "slice.primary.leed_more_info", [], "");
  const image = BackgroundImageHandler(get(props, "data.primary.image"));

  return (
    <LeedStatsView>
      <title>{title}</title>
      <sub-text>{sub_text}</sub-text>
      <leed-ceritified-communities>
        {leed_certified_communities}
      </leed-ceritified-communities>
      <platinum-count>{leed_platinum_count}</platinum-count>
      <gold-count>{leed_gold_count}</gold-count>
      <silver-count>{leed_silver_count}</silver-count>
      <leed-certified>{leed_certified_count}</leed-certified>
      <energy-star-communities>
        {energy_star_community_count}
      </energy-star-communities>

      <leed-more-info>
        {lead_more_info !== "" && lead_more_info.map((item, index) => (
          <span
            key={`rich-text-block-${index}`}
            className="leed-more-info-rich-text-wrapper"
          >
            {TextWritter(item)}
          </span>
        ))}
      </leed-more-info>
      <energy-star-more-info>
        {energy_star_more_info !== "" && energy_star_more_info.map((item, index) => (
          <span
            key={`rich-text-block-${index}`}
            className="energy-star-more-info-rich-text-wrapper"
          >
            {TextWritter(item)}
          </span>
        ))}
      </energy-star-more-info>
      <image className={styles.sideImage} {...image} />
    </LeedStatsView>
  );
};
