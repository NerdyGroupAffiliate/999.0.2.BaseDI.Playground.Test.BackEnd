import React from "react";
import get from "lodash/get";
import { graphql } from "react-apollo";
import IndexView from "../../views/IndexView";
import { pageQuery } from "../../graphql/queries/pageQuery";

const Index = ({ data }) => {
  if (data.loading) {
    return <IndexView />;
  }
  const slices = get(data, 'page.data.body') || [];
  const page = get(data, 'page');
  return (
    <IndexView page={page} slices={slices} />
  );
};

export default graphql(pageQuery, {
  options: props => ({
    variables: {
      id: "home"
    }
  })
})(Index);
