
import React from "react";
import get from "lodash/get";
import ListTallView from "../../components/ListTallView";
import BackgroundImageHandler from "../../helpers/components-data-handlers/background-image-handler";
import './index.css';

export default props => {
  const { slice } = props;
  const title = get(slice, "primary.title");
  const text_blurb = get(slice, "primary.text_blurb");
  const items = get(slice, "items", []);
  const image = BackgroundImageHandler(get(slice, "primary.image"));

  return (
    <ListTallView>
      <wrapper {...image}>
        <title>{title}</title>
        <text-blurb>{text_blurb}</text-blurb>

          <list>

          {items.map((item, index) => (
            <li className="list-item"
              key={`professional-development_${index}`}
              >
              <img src="../images/icon-plus-career-benefit.svg" alt="plus logo" className="image-11"/>
              <div className="text-block-10">{item.list_item}</div>
            </li>
          ))}

          </list>

      </wrapper>
    </ListTallView>
  );
};
