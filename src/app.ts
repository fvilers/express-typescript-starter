import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import { configuration } from './configuration';
import { routes } from './routes';
import { notFound, errorHandler } from './middlewares';

export const app = express();
app.set('namespace', 'express-typescript-starter:server');
app.set('views', configuration.paths.views);
app.set('view engine', 'hbs');

app.use(compression());
app.use(helmet());
app.use('/', routes());
app.use('*', notFound());
app.use(errorHandler());
