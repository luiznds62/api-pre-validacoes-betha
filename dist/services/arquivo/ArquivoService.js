"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@tsed/common");
const NeDBArquivo_1 = require("../nedb/NeDBArquivo");
let ArquivoService = class ArquivoService {
    constructor() {
        this.neDBService = new NeDBArquivo_1.NeDBArquivo();
    }
    cadastrar(arquivo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.create(arquivo);
        });
    }
    cadastrarTabelaCorrigida(uuid, tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.createTabelaCorrigida(uuid, tableId);
        });
    }
    cadastrarParagrafoCorrigido(uuid, paragrafoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.createParagrafoCorrigido(uuid, paragrafoId);
        });
    }
    buscarTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.findAllDocuments();
        });
    }
    buscarPeloId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.getById(id);
        });
    }
    buscarPeloIdEntidade(idEntidade) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.getByIdEntidade(idEntidade);
        });
    }
    buscarPeloUUID(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.getByUUID(uuid);
        });
    }
    buscarPorChave(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.getByChave(parametros);
        });
    }
    buscarPorChaveLimiteRegistros(parametros, quantidadeRegistros, ordenacao) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.getByChaveLimit(parametros, quantidadeRegistros, ordenacao);
        });
    }
    atualizaArquivo(uuid, arquivo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.updateArquivo(uuid, arquivo);
        });
    }
    removeArquivo(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.neDBService.deleteById(uuid);
        });
    }
};
ArquivoService = __decorate([
    common_1.Service(),
    __metadata("design:paramtypes", [])
], ArquivoService);
exports.ArquivoService = ArquivoService;
//# sourceMappingURL=ArquivoService.js.map