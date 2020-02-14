const moment = require('moment');

const PropertyFormatDate = (date) => (
  moment(date).format('MM/DD/YY')
)

export default PropertyFormatDate;
