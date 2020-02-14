import * as dotenv from 'dotenv';

const envPaths = {
  test: '.env.test',
  staging: '.env.staging',
  production: '.env.production'
};

const path = (envPaths as any)[process.env.APP_ENV as string] || '.env.dev';
dotenv.config({ path });

const {
  NODE_ENV,
  APP_ENV,
  DEBUG,
  LOG_LEVEL,
  PASSWORD_SALT,
  TOKEN_SECRET,
  USE_NGINX_SOCKET,
  SENDGRID_USERNAME,
  SENDGRID_PASSWORD,
  REDIS_URL,
  POSTGRES_URL,
  MONGODB_URL,
  PRISMIC_URL,
  PRISMIC_GRAPHQL_URL,
  PORT,
  SENTRY_DSN,
  REVIEWPUSH_EMAIL,
  REVIEWPUSH_PASSWORD,
  AMLI_AUTH_TOKEN,
  AMLI_API_URL,
  AMLI_EMAIL_API_URL,
  AMLI_PRICING_API_URL,
  AMLI_REALPAGE_API_URL
} = process.env;

const getDSN = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return SENTRY_DSN;
    case 'staging':
      return (
        SENTRY_DSN ||
        'https://1c9335a1ad5b4cec8b7eb84baffc4171@sentry.io/1455227'
      );
    case 'production':
      return (
        SENTRY_DSN ||
        'https://3a556a3885a84207ac75bb25430d58c0@sentry.io/1455232'
      );
  }
};

const config = {
  NODE_ENV,
  APP_ENV,
  isDevelopment: NODE_ENV === 'development' || DEBUG,
  port: USE_NGINX_SOCKET ? '/tmp/nginx.socket' : PORT || 8000,
  auth: {
    passwordSalt: PASSWORD_SALT || '',
    tokenSecret: TOKEN_SECRET || '',
    expires: {
      access: 7200, // seconds, 2 hours
      refresh: 604800 // seconds, 1 week
    }
  },
  notifications: {
    sendgrid: {
      username: SENDGRID_USERNAME,
      password: SENDGRID_PASSWORD
    }
  },
  logging: {
    DEBUG,
    LOG_LEVEL: LOG_LEVEL || 'info'
  },
  cms: {
    prismic: {
      url: PRISMIC_URL,
      graphql: PRISMIC_GRAPHQL_URL
    }
  },
  reviewpush: {
    email: REVIEWPUSH_EMAIL || '',
    password: REVIEWPUSH_PASSWORD || ''
  },
  database: {
    redis: {
      url: REDIS_URL
    },
    postgres: {
      url: POSTGRES_URL
    },
    mongodb: {
      url: MONGODB_URL
    }
  },
  amli: {
    apiurl: AMLI_API_URL || '',
    authtoken: AMLI_AUTH_TOKEN || '',
    pricingapi: AMLI_PRICING_API_URL || '',
    realpageapi: AMLI_REALPAGE_API_URL || '',
    emailapi: AMLI_EMAIL_API_URL || ''
  },
  embedded_feed: {
    url: 'https://go.reviewpush.com/embedded/feed/aace6c3b26440a8fab90d9a7206162fd/'
  },
  sentry: {
    dsn: getDSN()
  }
};
export default config;
