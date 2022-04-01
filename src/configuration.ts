import bodyParser from "body-parser";
import dotenv from "dotenv";
import http from "http";
import morgan from "morgan";
import path from "path";
import serveStatic = require("serve-static");

dotenv.config();

export interface Configuration {
  bodyParsers: {
    urlencoded: bodyParser.OptionsUrlencoded;
  };
  logger: {
    format: string;
    options: morgan.Options<http.IncomingMessage, http.ServerResponse>;
  };
  paths?: {
    public: string;
    views: string;
  };
  static?: serveStatic.ServeStaticOptions;
}

export const configuration: Configuration = {
  bodyParsers: {
    urlencoded: { extended: true },
  },
  logger: {
    format: process.env.MORGAN_FORMAT || "dev",
    options: {
      skip: () => process.env.MORGAN_SKIP === "true" || false,
    },
  },
  paths: {
    public: path.join(__dirname, "..", "public"),
    views: path.join(__dirname, "..", "views"),
  },
  static: {},
} as const;
