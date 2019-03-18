import express from 'express';
import configuration from './configuration';
import routes from './routes';
import { notFound, errorHandler } from './middlewares';

const app = express();
app.set('namespace', 'express-typescript-starter:server');
app.set('views', configuration.paths.views);
app.set('view engine', 'hbs');
app.use('/', routes());
app.use('*', notFound());
app.use(errorHandler());

export default app;
