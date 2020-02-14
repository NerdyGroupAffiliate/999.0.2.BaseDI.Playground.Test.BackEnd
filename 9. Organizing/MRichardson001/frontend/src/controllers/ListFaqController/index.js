import { get } from "lodash";
import React from "react";
import { withRouter } from "react-router-dom";
import ListFaqView from "../../components/ListFaqView";
import ListFaqItemManagerController from "../ListFaqItemManagerController";

import styles from './styles.module.css';

class ListFaq extends React.Component {
  state = {
    expanded: null,
  }

  setSelectedItem = (itemIndex) => {
    if (itemIndex === this.state.expanded){
      this.setState({ expanded: null});
    } else {
      this.setState({ expanded: itemIndex });
    }
  }


  render() {
  const { props } = this;
  const { expanded } = this.state;

  const title = get(props, "data.primary.title");
  const faqs = get(props, "data.items", []);


    return (
      <ListFaqView>
        <title className={styles.title}>{title}</title>

        <faq-list
          topelement={() =>
            faqs.map((faq, key) => (
              <ListFaqItemManagerController
                {...props}
                itemIndex={key}
                selected={expanded === key}
                setSelectedItem={this.setSelectedItem}
                faq={faq}
                key={`${key}_question`}
              />
            ))
          }
        />
      </ListFaqView>
    );
  }
}
export default withRouter(ListFaq);
