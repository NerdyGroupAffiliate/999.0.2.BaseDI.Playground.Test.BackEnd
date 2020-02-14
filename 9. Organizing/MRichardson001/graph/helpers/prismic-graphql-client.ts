import axios from 'axios';
import config from '../config';

const PrismicGraphqlClient = axios.create({
  baseURL: config.cms.prismic.graphql,
  timeout: 10000
});

PrismicGraphqlClient.interceptors.response.use(
  (res: any) => res && res.data,
  (err: any) => {
    console.error(err);
    return Promise.reject(err);
  }
);

export default PrismicGraphqlClient;
