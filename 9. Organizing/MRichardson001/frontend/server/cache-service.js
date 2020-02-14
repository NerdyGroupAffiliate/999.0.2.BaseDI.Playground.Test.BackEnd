import NodeCache from "node-cache";

const promises = {};
const values = {};

class Cache {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false
    });
  }

  get(key, storeFunction) {
    const value = this.cache.get(key);

    if (value) {
      return Promise.resolve(value);
    }

    if (!promises[key]) {
      promises[key] = storeFunction()
        .then(result => {
          values[key] = result;
          delete promises[key];
          this.cache.set(key, result);
          return result;
        })
        .catch(e => {
          console.log(e);
          delete promises[key];
        });
    }
    return values[key] ? Promise.resolve(values[key]) : promises[key];
  }

  del(keys) {
    this.cache.del(keys);
  }

  flush() {
    this.cache.flushAll();
  }
}

export default Cache;
