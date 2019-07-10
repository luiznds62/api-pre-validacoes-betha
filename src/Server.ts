import {
  GlobalAcceptMimesMiddleware,
  ServerLoader,
  ServerSettings
} from "@tsed/common";
import * as cors from "cors";
import "@tsed/swagger";
import { $log } from "ts-log-debug";

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const rootDir = __dirname;
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token"
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false
};

@ServerSettings({
  rootDir,
  acceptMimes: ["application/json"],
  mount: {
    "/api": `${rootDir}/**/*Ctrl.ts`
  },
  componentsScan: [
    `${rootDir}/services/**/**.ts`
  ],
  logger: {
    debug: false,
    logRequest: true,
    requestFields: [
      "reqId",
      "method",
      "url",
      "headers",
      "query",
      "params",
      "duration"
    ]
  },
  swagger: {
    path: "/api-docs"
  },
  calendar: {
    token: true
  },
  httpPort: process.env.PORT || 8080
})
export class Server extends ServerLoader {
  /**
   * Aqui é configurado o middleware necessário para a aplicação rodar.
   * @returns {Server}
   */
  $onMountingMiddlewares(): void | Promise<any> {
    this.use(GlobalAcceptMimesMiddleware)
      .use(cors(options))
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      );

    return null;
  }

  $onReady() {
    $log.debug("Servidor inicializado");
  }

  $onServerInitError(error): any {
    $log.error("Servidor encontrou um erro =>", error);
  }
}
