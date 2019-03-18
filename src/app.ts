import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { configuration } from './configuration';
import { routes } from './routes';
import { notFound, errorHandler } from './middlewares';

export const app = express();
app.set('namespace', 'express-typescript-starter:server');

// Remove next 2 lines to disable the view engine
app.set('views', configuration.paths.views);
app.set('view engine', 'hbs');

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded(configuration.bodyParsers.urlencoded));
app.use(logger(configuration.logger.format, configuration.logger.options));
app.use(express.static(configuration.paths.public, configuration.static));
app.use('/', routes());
app.use('*', notFound());
app.use(errorHandler());
