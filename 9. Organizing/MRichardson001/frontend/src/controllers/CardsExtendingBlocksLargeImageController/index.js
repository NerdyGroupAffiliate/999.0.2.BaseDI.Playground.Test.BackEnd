import React from "react";
import get from "lodash/get";
import CardsExtendingBlocksLargeImageView from "../../components/CardsExtendingBlocksLargeImageView";
import TextWritter from "../../helpers/text-writter";
import CardsExtendingBlocksCardView from "../../components/CardsExtendingBlocksCardView";
import goldStar from "../../static/images/gold-star.png"

import styles from './styles.module.css';
import "./index.css";

function CardsExtendingBlocksLargeImage(props) {
  const tag = get(props, "data.primary.tag");
  const title = get(props, "data.primary.title");
  const image = get(props, "data.primary.image.url");
  const alt = get(props, "data.primary.image.alt");

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

  return (
    <CardsExtendingBlocksLargeImageView>
      <image-wrapper src={image} srcSet={null} className={styles.image} alt={alt || ""} />
      <title-wrapper>
        <tag>{tag}</tag>
        <logo className={styles.goldStar} src={goldStar} alt="Gold Star" />
        <title>{title}</title>
      </title-wrapper>
      <cardsExtendingBlocksCardViewList0>
        <CardsExtendingBlocksCardView.Controller
          title={blockTitle1}
          blurb={blockBlurb1}
          teaserText={blockTeaserText1}
          content={blockContent1}
        />
        <CardsExtendingBlocksCardView.Controller
          title={blockTitle2}
          blurb={blockBlurb2}
          teaserText={blockTeaserText2}
          content={blockContent2}
        />
      </cardsExtendingBlocksCardViewList0>
      <right-column>
        <CardsExtendingBlocksCardView.Controller
          title={blockTitle3}
          blurb={blockBlurb3}
          teaserText={blockTeaserText3}
          content={blockContent3}
        />
      </right-column>
    </CardsExtendingBlocksLargeImageView>
  );
}

export default CardsExtendingBlocksLargeImage;
