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
const PlanoContasDto_1 = require("../../dto/PlanoContasDto");
const ReturnDTO_1 = require("../../common/ReturnDTO");
const ExceptionsMensagens_1 = require("../../common/ExceptionsMensagens");
const PlanoContasService_1 = require("../../services/planoContas/PlanoContasService");
let PlanoContasCtrl = class PlanoContasCtrl {
    constructor(planoContasService) {
        this.planoContasService = planoContasService;
    }
    cadastrarplanocontas(planoContasDto) {
        return __awaiter(this, void 0, void 0, function* () {
            var planocontas = yield planoContasDto.toDB();
            return yield this.planoContasService
                .cadastrar(planocontas)
                .then(function (planocontasDB) {
                return new ReturnDTO_1.ReturnDTO("", true, planocontasDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscarTodosPlanoContas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.planoContasService
                .buscarTodos()
                .then(function (planocontasDB) {
                return new ReturnDTO_1.ReturnDTO("", true, planocontasDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    buscaPlanoPorExercicio(exercicio) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.planoContasService
                .buscarPeloExercicio(exercicio)
                .then(function (planocontasDB) {
                return new ReturnDTO_1.ReturnDTO("", true, planocontasDB);
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    atualizarPlanoContas(exercicio, planocontasDto) {
        return __awaiter(this, void 0, void 0, function* () {
            var planocontas = yield planocontasDto.toDB();
            return yield this.planoContasService
                .atualizaPlanoContas(exercicio, planocontas)
                .then(function (retorno) {
                if (retorno === "0 - Plano Contas alterado com sucesso!") {
                    return new ReturnDTO_1.ReturnDTO(retorno, false, "");
                }
                return new ReturnDTO_1.ReturnDTO(retorno, true, "");
            })
                .catch(function () {
                new ReturnDTO_1.ReturnDTO(new ExceptionsMensagens_1.ExceptionMensagens().mensagemPadraoBanco, false, null);
            });
        });
    }
    deletarPlanoContas(exercicio) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.planoContasService
                .removeplanocontas(exercicio)
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
    __metadata("design:paramtypes", [PlanoContasDto_1.PlanoContasDTO]),
    __metadata("design:returntype", Promise)
], PlanoContasCtrl.prototype, "cadastrarplanocontas", null);
__decorate([
    common_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlanoContasCtrl.prototype, "buscarTodosPlanoContas", null);
__decorate([
    common_1.Get("/:exercicio"),
    __param(0, common_1.PathParams("exercicio")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlanoContasCtrl.prototype, "buscaPlanoPorExercicio", null);
__decorate([
    common_1.Put("/:exercicio"),
    __param(0, common_1.PathParams("exercicio")),
    __param(1, common_1.BodyParams()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, PlanoContasDto_1.PlanoContasDTO]),
    __metadata("design:returntype", Promise)
], PlanoContasCtrl.prototype, "atualizarPlanoContas", null);
__decorate([
    common_1.Delete("/:exercicio"),
    __param(0, common_1.PathParams("exercicio")), __param(0, common_1.Required()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlanoContasCtrl.prototype, "deletarPlanoContas", null);
PlanoContasCtrl = __decorate([
    common_1.Controller("/planocontas"),
    __metadata("design:paramtypes", [PlanoContasService_1.PlanoContasService])
], PlanoContasCtrl);
exports.PlanoContasCtrl = PlanoContasCtrl;
//# sourceMappingURL=PlanoContasCtrl.js.map