import path from 'path';

export interface Configuration {
  paths: {
    views: string;
  };
}

const configuration = Object.freeze({
  paths: {
    views: path.join(__dirname, '..', 'views')
  }
});

export default configuration;
