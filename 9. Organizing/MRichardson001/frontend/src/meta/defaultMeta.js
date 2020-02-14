import React from "react";
import Helmet from "react-helmet-async";
import get from "lodash/get";
import ExtractMeta from "../helpers/extract-meta";

export default props => {
  const meta = ExtractMeta(get(props, "page"));
  return (
    <Helmet>
      {meta}
    </Helmet>
  );
};
