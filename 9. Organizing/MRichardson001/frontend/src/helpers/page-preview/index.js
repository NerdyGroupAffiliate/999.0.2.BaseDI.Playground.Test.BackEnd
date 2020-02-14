import React from "react";
import queryString from "query-string";
import get from "lodash/get";
import config from "../../config";
const Prismic = require("prismic-javascript");

class PagePreview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }
  componentWillMount() {
    this.preview();
  }

  linkResolver = doc => {
    const shouldRedirect =
      doc.type !== "staff_member" &&
      doc.type !== "unit" &&
      doc.type !== "tag" &&
      doc.type !== "special";
    if (shouldRedirect) {
      if (doc.type === "amenities_page") {
        this.props.history.push(`/${doc.data.property.uid}/amenities`, {
          preview: doc
        });
      } else if (doc.type === "floor_plan") {
        const property = get(doc, "data.properties[0].property");
        this.props.history.push(
          `/${property.uid}/floorplan/${doc.data.amli_id}/${doc.id}`,
          {
            preview: doc
          }
        );
      } else if (doc.type === "short_term_furnished") {
        const property = get(doc, "data.property");
        this.props.history.push(`/${property.uid}/short-term-furnished`, {
          preview: doc
        });
      } else if (doc.type === "location_page") {
        const property = get(doc, "data.property");
        this.props.history.push(`/${property.uid}/location`, {
          preview: doc
        });
      } else {
        this.props.history.push(`/${doc.uid}`, { preview: doc });
      }
    } else {
      this.setState({ error: "Page does not Support previews" });
    }
    return `/${doc.uid}`;
  };

  preview = () => {
    const params = queryString.parse(this.props.location.search.slice(1));
    Prismic.getApi(config.PRISMIC_URL)
      .then(api => {
        api.previewSession(params.token, this.linkResolver, "/");
      })
      .catch(error => this.setState({ error }));
  };
  render() {
    return (
      <p
        style={{
          alignSelf: "center",
          width: "100%",
          textAlign: "center",
          fontSize: 25,
          marginTop: 25,
          fontFamily: '"Monotype madera", sans-serif',
          color: this.state.error ? "red" : "inherit"
        }}
      >
        {this.state.error ? "Preview not Available!" : "Loading previews..."}
      </p>
    );
  }
}

export default PagePreview;
