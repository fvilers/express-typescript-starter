import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { configuration } from "./configuration";
import { errorHandler, notFound } from "./middlewares";
import { routes } from "./routes";

export const app = express();

// Remove next lines to disable the view engine
if (configuration.paths !== undefined) {
  app.set("views", configuration.paths.views);
  app.set("view engine", "hbs");
}

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded(configuration.bodyParsers.urlencoded));
app.use(logger(configuration.logger.format, configuration.logger.options));

if (configuration.paths !== undefined) {
  app.use(express.static(configuration.paths.public, configuration.static));
}

app.use("/", routes());
app.use("*", notFound());
app.use(errorHandler());
