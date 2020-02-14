import get from "lodash/get";

const GatherNavData = props => {

  if(!props){
    return null;
  }
  const regions = get(props, "data.pages", []).filter(
    page => page && page.type === "region"
  );
  const aboutUs = get(props, "data.pages", []).filter(
    page => page && page.type === "standard_page" && page.data.parent.uid && page.data.parent.uid === "about-us"
  );
  const careers = get(props, "data.pages", []).filter(
    page => page && page.type === "standard_page" && page.data.parent.uid && page.data.parent.uid === "careers"
  );
  const footerLinks = get(props, "data.pages", []).filter(
    page => page && page.type === "standard_page" && page.data.show_in_footer_nav === "Yes"
  );

  return { regions, aboutUs, careers, footerLinks };
}

export default GatherNavData;
