
const getApi = () => {
    switch (process.env.REACT_APP_ENV) {
        case "staging":
            return "https://prod1backendcentral.centralus.cloudapp.azure.com/graphql";
        case "production":
            return "https://prod1backendcentral.centralus.cloudapp.azure.com/graphql";
        case "development":
            return "https://prod1backendcentral.centralus.cloudapp.azure.com/graphql";
        default:
            return "https://prod1backendcentral.centralus.cloudapp.azure.com/graphql";
    }
}; 

//const getApi = () => {
//  switch (process.env.REACT_APP_ENV) {
//    case "staging":
//      return "https://devamligraphqlserver.azurewebsites.net/graphql";
//    case "production":
//      return "https://amligraphqlserver.azurewebsites.net/graphql";
//    case "development":
//      return "http://localhost:8000/graphql";
//    default:
//      return "https://devamligraphqlserver.azurewebsites.net/graphql";
//  }
//};

const getSentryDSN = () => {
  switch (process.env.REACT_APP_ENV) {
    case "staging":
      return "https://d621c6a07d974685864ff5abaadcb228@sentry.io/1424282";
    case "production":
      return "https://911e9c176ccc4060ad951bda29058426@sentry.io/1424279";
    case "development":
      return "https://b7b93d630aec43079bb75af32c23f9e8@sentry.io/1421934";
    default:
      return "https://b7b93d630aec43079bb75af32c23f9e8@sentry.io/1421934";
  }
};
const getServiceBus = () => {
  switch (process.env.REACT_APP_ENV) {
      case "staging":
      return {
        connectionString: "Endpoint=sb://amlicomprod.servicebus.windows.net/;SharedAccessKeyName=testq1_sap;SharedAccessKey=Ry4ZVITVZ0c0beV2rmB0IjtZAUB88dNgLfok9HuU2zU=;",
        queueName: 'testq1'
      };
      case "production":
        return {
        connectionString: "Endpoint=sb://amlicomprod.servicebus.windows.net/;SharedAccessKeyName=Send;SharedAccessKey=uo4kJzFYemL+2WB+tSUTqOxoYgrahxQZKk3Juc/eA7g=;",
        queueName: 'prodq'
      };
    default:
      return {}
  }
};

const config = {
  IS_DEV: process.env.REACT_APP_ENV === 'development' || false,
  CLIENT_BUILD_VERSION: process.env.REACT_APP_BUILD_VERSION, 
  SERVER_BUILD_VERSION: process.env.SERVER_BUILD_VERSION, 
  BLOB_STORAGE_URL: process.env.BLOB_STORAGE_URL, 
  GRAPHQL_URL:
    process.env.GRAPHQL_SERVER_URL ||
    process.env.REACT_APP_GRAPHQL_SERVER_URL ||
    getApi(),
  GOOGLE_MAPS_API_KEY:
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
    "AIzaSyBxlNfkUf6dfzCGX7gk42NSOAtj_9LCcp0",
  GOOGLE_MAPS_LIBRARIES:
  ['geometry' ,'places', 'drawing'],
  PRISMIC_URL:
    process.env.PRISMIC_URL ||
    process.env.REACT_APP_PRISMIC_URL ||
    "https://amli-website.cdn.prismic.io/api/v2",
  SENTRY_DSN: getSentryDSN(),
  SERVICE_BUS: getServiceBus(),
  ENTITIES_DATA_FIELDS: [
    'name',
    'parent',
    'amli_id',
    'latitude',
    'longitude',
    'unit_id',
    'author',
    'show_in_top_level_nav',
    'top_level_nav_position',
    'show_in_sub_level_nav',
    'sub_level_nav_position',
    'parent_dropdown_position',
    'show_in_footer_nav',
    'footer_nav_position',
    'home_page_hover_image',
    'staff_type',
    'region',
    'regions',
    'subregions',
    'subregion',
    'sub-region',
    'sub-regions',
    'properties',
    'property',
    'residential_unit_count',
    'retail_space_sqft',
    'header',
    'primary_property_image',
    'residential_unit_count',
    'resident_portal_link',
    'floorplan_header',
    'contact_header',
    'feedback_link',
    'image',
    'published_date',
    'post_main_image',
    'region_guide',
    'header',
    'header_image',
    'header_title',
    'cta_link',
    'header_title_highlight_words',
    'cta_text',
    'primary_color',
    'secondary_color',
    'home_page_description',
    'enable_pricing_availability_page',
    'page_title',
    'meta_description',
    'social_share_image',
    'og_description',
    'og_title',
    'meta_canonical'
  ],
  HOMEPAGE_ID: 'XDbCdhAAACEAV3T1',
  OVERLAY_VIEW: '__SECRET_OVERLAY_VIEW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
};

export default config;
