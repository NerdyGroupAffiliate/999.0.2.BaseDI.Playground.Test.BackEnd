import React from "react";
import get from "lodash/get";

import CardsExtendingBlocksMediumImageView from "../../components/CardsExtendingBlocksMediumImageView";
import CardsExtendingBlocksCardController from "../../controllers/CardsExtendingBlocksCardController";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import TextWritter from "../../helpers/text-writter";
import goldStar from "../../static/images/gold-star.png"

import styles from './styles.module.css';
import "./index.css";

export default props => {
  const tag = get(props, "data.primary.tag");
  const title = get(props, "data.primary.title");
  const image = BackgroundImageHandler(get(props, "data.primary.image"));

  const blockTitle1 = get(props, "data.primary.block_title_1");
  const blockBlurb1 = get(props, "data.primary.block_blurb_1");
  const blockTeaserText1 = get(props, "data.primary.block_teaser_text_1");
  const blockContent1 = get(props, "data.primary.block_content_1", []).map(ct =>
    TextWritter(ct)
  );

  const blockTitle2 = get(props, "data.primary.block_title_2");
  const blockBlurb2 = get(props, "data.primary.block_blurb_2");
  const blockTeaserText2 = get(props, "data.primary.block_teaser_text_2");
  const blockContent2 = get(props, "data.primary.block_content_2", []).map(ct =>
    TextWritter(ct)
  );

  const blockTitle3 = get(props, "data.primary.block_title_3");
  const blockBlurb3 = get(props, "data.primary.block_blurb_3");
  const blockTeaserText3 = get(props, "data.primary.block_teaser_text_3");
  const blockContent3 = get(props, "data.primary.block_content_3", []).map(ct =>
    TextWritter(ct)
  );

  const blockTitle4 = get(props, "data.primary.block_title_4");
  const blockBlurb4 = get(props, "data.primary.block_blurb_4");
  const blockTeaserText4 = get(props, "data.primary.block_teaser_text_4");
  const blockContent4 = get(props, "data.primary.block_content_4", []).map(ct =>
    TextWritter(ct)
  );

  return (
    <CardsExtendingBlocksMediumImageView>
      <tag className={styles.tag}>{tag}</tag>
      <title>{title}</title>
      <stamp src={goldStar} className={styles.goldStar} alt="Gold Star" />

      <right-column className='right-column'>
        <CardsExtendingBlocksCardController
          title={blockTitle1}
          blurb={blockBlurb1}
          teaserText={blockTeaserText1}
          content={blockContent1}
        />

        <CardsExtendingBlocksCardController
          title={blockTitle2}
          blurb={blockBlurb2}
          teaserText={blockTeaserText2}
          content={blockContent2}
        />
      </right-column>

      <left-column className='left-column'>
        <CardsExtendingBlocksCardController
          title={blockTitle3}
          blurb={blockBlurb3}
          teaserText={blockTeaserText3}
          content={blockContent3}
        />

        <CardsExtendingBlocksCardController
          title={blockTitle4}
          blurb={blockBlurb4}
          teaserText={blockTeaserText4}
          content={blockContent4}
        />
      </left-column>

      <image-wrapper {...image} className={styles.image} />
    </CardsExtendingBlocksMediumImageView>
  );
};
