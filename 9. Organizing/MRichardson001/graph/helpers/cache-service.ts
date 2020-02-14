import * as NodeCache from 'node-cache';

class Cache {
  constructor(ttlSeconds: number) {
    this.cache = new NodeCache({
      stdTTL: ttlSeconds,
      checkperiod: ttlSeconds * 0.2,
      useClones: false
    });
  }

  private cache: NodeCache;

  get(key: string, storeFunction: any) {
    const value = this.cache.get(key);

    if (value) {
      return Promise.resolve(value);
    }

    return storeFunction().then((result: any) => {
      this.cache.set(key, result);
      return result;
    });
  }

  del(keys: string[]) {
    this.cache.del(keys);
  }

  flush() {
    this.cache.flushAll();
  }
}

export default Cache;
