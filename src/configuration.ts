import path from 'path';

export const configuration = Object.freeze({
  bodyParsers: {
    urlencoded: { extended: true }
  },
  logger: {
    format: process.env.MORGAN_FORMAT || 'dev',
    options: {
      skip: () => process.env.MORGAN_SKIP === 'true' || false
    }
  },
  paths: {
    views: path.join(__dirname, '..', 'views')
  }
});
