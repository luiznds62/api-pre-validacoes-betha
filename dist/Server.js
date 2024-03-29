"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const cors = require("cors");
require("@tsed/swagger");
const ts_log_debug_1 = require("ts-log-debug");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const rootDir = __dirname;
const options = {
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
let Server = class Server extends common_1.ServerLoader {
    /**
     * Aqui é configurado o middleware necessário para a aplicação rodar.
     * @returns {Server}
     */
    $onMountingMiddlewares() {
        this.use(common_1.GlobalAcceptMimesMiddleware)
            .use(cors(options))
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true
        }));
        return null;
    }
    $onReady() {
        ts_log_debug_1.$log.debug("Servidor inicializado");
    }
    $onServerInitError(error) {
        ts_log_debug_1.$log.error("Servidor encontrou um erro =>", error);
    }
};
Server = __decorate([
    common_1.ServerSettings({
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
        httpPort: "192.168.41.2:3005",
        httpsPort: "192.168.41.2:3006"
        //httpPort: process.env.PORT || 8080
    })
], Server);
exports.Server = Server;
//# sourceMappingURL=Server.js.map