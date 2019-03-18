import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import serveStatic = require('serve-static');

dotenv.config();

export interface Configuration {
  bodyParsers: {
    urlencoded: bodyParser.OptionsUrlencoded;
  };
  logger: {
    format: string;
    options: morgan.Options;
  };
  paths?: {
    public: string;
    views: string;
  };
  static: serveStatic.ServeStaticOptions;
}

export const configuration: Configuration = Object.freeze({
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
    public: path.join(__dirname, '..', 'public'),
    views: path.join(__dirname, '..', 'views')
  },
  static: {}
});
