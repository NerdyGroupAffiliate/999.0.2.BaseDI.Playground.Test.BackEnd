const moment = require('moment');

export const getQuote = (property, floorplan, date) => {
  if (property.lease_service === "RealPage") {
    return null;
  }
  let moveInDate = moment(date).format('MM/DD/YYYY');
  return `https://${property.entrata_domain}.prospectportal.com/?module=check_availability&property[id]=${property.entrataPropertyId}&property_floorplan[id]=${floorplan.entrataFloorplanId}&move_in_date=${moveInDate}&is_responsive_snippet=1&host_domain=www.amli.com&snippet_type=website`;
}
