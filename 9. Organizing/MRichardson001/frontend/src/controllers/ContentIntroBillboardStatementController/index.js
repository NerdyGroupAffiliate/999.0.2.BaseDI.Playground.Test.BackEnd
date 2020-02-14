import React from "react";
import get from "lodash/get";
import ContentIntroBillboardStatementView from "../../components/ContentIntroBillboardStatementView";
import TextWritter from "../../helpers/text-writter";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import styles from './styles.module.css'

function ContentIntroBillBoardStatement(props) {
  const statement = get(props, "data.primary.statement", []);
  const image = BackgroundImageHandler(
    get(props, "data.primary.background_image")
  );
  return (
    <ContentIntroBillboardStatementView>
      <wrapper className={styles.image} {...image}>
        <statement className={styles.statement}>{statement.map(item => TextWritter(item))}</statement>
      </wrapper>
    </ContentIntroBillboardStatementView>
  );
}

export default ContentIntroBillBoardStatement;
