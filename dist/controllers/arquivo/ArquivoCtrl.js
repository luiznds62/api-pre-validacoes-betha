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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const ArquivoDto_1 = require("../../dto/ArquivoDto");
const ReturnDTO_1 = require("../../common/ReturnDTO");
const ExceptionsMensagens_1 = require("../../common/ExceptionsMensagens");
const ArquivoService_1 = require("../../services/arquivo/ArquivoService");
let ArquivoCtrl = class ArquivoCtrl {
    constructor(arquivoService) {
        this.arquivoService = arquivoService;
    }
    cadastrarArquivo(arquivoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            var arquivo = yield arquivoDto.toDB();
            return yield this.arquivoService
                .cadastrar(arquivo)
                .then(function (arquivoDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivoDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    retornarPagina(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            var arquivo = yield this.arquivoService.buscarPeloUUID(uuid);
            var fs = require("fs");
            var stream = fs.createWriteStream(`${arquivo[0].uuid}.html`);
            stream.once("open", function (fd) {
                stream.write(arquivo[0].textoHtml);
                stream.end();
            });
            return stream;
        });
    }
    cadastrarTabelaCorrigida(uuid, tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .cadastrarTabelaCorrigida(uuid, tableId)
                .then(function (arquivoDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivoDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    cadastrarParagrafoCorrigido(uuid, paragrafoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .cadastrarParagrafoCorrigido(uuid, paragrafoId)
                .then(function (arquivoDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivoDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscarPeloId(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .buscarPeloUUID(uuid)
                .then(function (arquivoDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivoDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscarPeloIdEntidade(idEntidade) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .buscarPeloIdEntidade(idEntidade)
                .then(function (arquivoDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivoDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscarPorChave(chave) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .buscarPorChave(chave)
                .then(function (arquivosDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivosDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscarPorChaveLimiteRegistros(chave, quantidadeRegistros, ordenacao) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ordenacao === "asc") {
                ordenacao = 1;
            }
            if (ordenacao === "desc") {
                ordenacao = -1;
            }
            return yield this.arquivoService
                .buscarPorChaveLimiteRegistros(chave, quantidadeRegistros, ordenacao)
                .then(function (arquivosDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivosDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscarTodosArquivos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .buscarTodos()
                .then(function (arquivoDB) {
                return new ReturnDTO_1.ReturnDTO("", true, arquivoDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    atualizarArquivo(uuid, arquivoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            var arquivo = yield arquivoDto.toDB();
            return yield this.arquivoService
                .atualizaArquivo(uuid, arquivo)
                .then(function (retorno) {
                if (retorno === "0 - Arquivo alterado com sucesso!") {
                    return new ReturnDTO_1.ReturnDTO(retorno, false, "");
                }
                return new ReturnDTO_1.ReturnDTO(retorno, true, "");
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    deletarArquivo(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.arquivoService
                .removeArquivo(uuid)
                .then(function (retorno) {
                return new ReturnDTO_1.ReturnDTO(retorno, true, "");
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
};
__decorate([
    common_1.Post("/"),
    __param(0, common_1.BodyParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ArquivoDto_1.ArquivoDTO]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "cadastrarArquivo", null);
__decorate([
    common_1.Get("/html/:uuid"),
    __param(0, common_1.PathParams("uuid")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "retornarPagina", null);
__decorate([
    common_1.Post("/tabelaCorrigida/:uuid/:tableId"),
    __param(0, common_1.PathParams("uuid")), __param(0, common_1.Required()),
    __param(1, common_1.PathParams("tableId")), __param(1, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "cadastrarTabelaCorrigida", null);
__decorate([
    common_1.Post("/paragrafoCorrigido/:uuid/:paragrafoId"),
    __param(0, common_1.PathParams("uuid")), __param(0, common_1.Required()),
    __param(1, common_1.PathParams("paragrafoId")), __param(1, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "cadastrarParagrafoCorrigido", null);
__decorate([
    common_1.Get("/:uuid"),
    __param(0, common_1.PathParams("uuid")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "buscarPeloId", null);
__decorate([
    common_1.Get("/entidade/:idEntidade"),
    __param(0, common_1.PathParams("idEntidade")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "buscarPeloIdEntidade", null);
__decorate([
    common_1.Get("/chave/:chave"),
    __param(0, common_1.PathParams("chave")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "buscarPorChave", null);
__decorate([
    common_1.Get("/chave/:chave/:quantidadeRegistros/:ordenacao"),
    __param(0, common_1.PathParams("chave")),
    __param(1, common_1.PathParams("quantidadeRegistros")),
    __param(2, common_1.PathParams("ordenacao")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "buscarPorChaveLimiteRegistros", null);
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "buscarTodosArquivos", null);
__decorate([
    common_1.Put("/:uuid"),
    __param(0, common_1.PathParams("uuid")),
    __param(1, common_1.BodyParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ArquivoDto_1.ArquivoDTO]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "atualizarArquivo", null);
__decorate([
    common_1.Delete("/:uuid"),
    __param(0, common_1.PathParams("uuid")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArquivoCtrl.prototype, "deletarArquivo", null);
ArquivoCtrl = __decorate([
    common_1.Controller("/arquivo"),
    __metadata("design:paramtypes", [ArquivoService_1.ArquivoService])
], ArquivoCtrl);
exports.ArquivoCtrl = ArquivoCtrl;
//# sourceMappingURL=ArquivoCtrl.js.map