import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import NotFoundView from "../../views/NotFoundView";
import GatherNavData from "../../helpers/gather-navbar-data";
import { pagesQuery } from "../../graphql/queries";


function NotFound(props) {
    const links = GatherNavData(props);
    //useEffect(() => {
    //    props.history.replace('/');
    //}, [])
    return (
    <NotFoundView links={links}>
      <try-looking
        href="/"
        onClick={e => {
          if (e) {
            e.preventDefault();
          }
          props.history.replace("/");
        }}
      />
      <keep-exploring
        href="/"
        onClick={e => {
          if (e) {
            e.preventDefault();
          }
          props.history.replace("/");
        }}
      />
    </NotFoundView>
  );
}

export default withRouter(graphql(pagesQuery)(NotFound));
