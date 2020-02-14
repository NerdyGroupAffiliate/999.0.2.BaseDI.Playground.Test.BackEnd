import Configs from '../config';
// tslint:disable-next-line
const Prismic = require('prismic-javascript');

// Initialize the prismic.io api
const initCms = () =>
  Prismic.getApi(Configs.cms.prismic.url);

export default initCms;
