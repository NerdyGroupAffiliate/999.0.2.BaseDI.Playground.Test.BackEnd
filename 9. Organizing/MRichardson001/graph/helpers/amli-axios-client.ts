import axios from 'axios';
import config from '../config';

const MAX_CONCURRENT_REQUESTS = 15;
const INTERVAL_MS = 50;
let PENDING_REQUESTS = 0;

const createAxiosClient = (url: string, customTimeout?: number) => {
  const client = axios.create({
    baseURL: url,
    timeout: customTimeout ? customTimeout : 10000
  });
  client.interceptors.request.use((cfg: any) => new Promise((resolve, _) => {
    cfg.metadata = { startTime: new Date() };
    cfg.params = { ...cfg.params, authKey: config.amli.authtoken };
    cfg.headers = { ...cfg.headers, common: { ...cfg.headers.common, authKey: config.amli.authtoken } };
    // Logic to ensure only 5 request are being done at once
    const interval = setInterval(() => {
      if (PENDING_REQUESTS < MAX_CONCURRENT_REQUESTS) {
        PENDING_REQUESTS++;
        clearInterval(interval);
        resolve(cfg);
      }
    }, INTERVAL_MS);
  }));

  client.interceptors.response.use(
    (res: any) => {
      res.config.metadata.endTime = new Date();
      res.duration =
        res.config.metadata.endTime - res.config.metadata.startTime;
          console.log(`\n[DEBUG]: ${res.config.url} : ${res.duration}ms\n`);
          console.log(`\n[DEBUG API MAIN]: ${config.amli.apiurl} : ${res.duration}ms\n`);
          console.log(`\n[DEBUG API EMAIL]: ${config.amli.emailapi} : ${res.duration}ms\n`);
          console.log(`\n[DEBUG API PRICING]: ${config.amli.pricingapi} : ${res.duration}ms\n`);
          console.log(`\n[DEBUG API REAL PAGE]: ${config.amli.realpageapi} : ${res.duration}ms\n`);

      PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
      return res && res.data;
    },
    (err: any) => {
      console.error(err);
      PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
      return Promise.reject(err);
    }
  );
  return client;
};

const AMLIAxiosClient = createAxiosClient(config.amli.apiurl);
export const AMLIAxiosClientExtendedTimeout =  createAxiosClient(config.amli.apiurl, 60000);
export const AMLIPricingAxiosClient = createAxiosClient(config.amli.pricingapi);
export const AMLIEmailAxiosClient = createAxiosClient(config.amli.emailapi);
export const AMLIRealPageAxiosClient = createAxiosClient(
  config.amli.realpageapi
);

export default AMLIAxiosClient;
