import path from 'path';

export interface Configuration {
  bodyParsers: {
    urlencoded: {
      extended: boolean;
    };
  };
  paths: {
    views: string;
  };
}

export const configuration = Object.freeze({
  bodyParsers: {
    urlencoded: { extended: true }
  },
  paths: {
    views: path.join(__dirname, '..', 'views')
  }
});
