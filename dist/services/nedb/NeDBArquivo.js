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
var Datastore = require("nedb");
var db = new Datastore({
    filename: "arquivo.json"
});
let NeDBArquivo = class NeDBArquivo {
    constructor() {
        db.loadDatabase(function (err) {
            if (err) {
                console.log(`Erros no database Arquivo >> ${err}`);
            }
        });
    }
    create(arquivo) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.insert(arquivo, function (err, newDoc) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(`${newDoc} - Arquivo criado com sucesso!`);
                    }
                });
            });
        });
    }
    createTabelaCorrigida(uUID, tableId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.update({ uuid: uUID }, { $push: { tabelaCorrigida: tableId } }, function (err, numReplaced) {
                    if (err) {
                        reject(err);
                    }
                    resolve(`${numReplaced} - Arquivo alterado com sucesso!`);
                });
            });
        });
    }
    createParagrafoCorrigido(uUID, paragrafoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.update({ uuid: uUID }, { $push: { paragrafoCorrigido: paragrafoId } }, function (err, numReplaced) {
                    if (err) {
                        reject(err);
                    }
                    resolve(`${numReplaced} - Arquivo alterado com sucesso!`);
                });
            });
        });
    }
    findAllDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.find({})
                    .sort({ dataGeracao: 1 })
                    .exec(function (err, docs) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(docs);
                    }
                });
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.find({ _id: id })
                    .sort({ dataGeracao: 1 })
                    .exec(function (err, doc) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(doc);
                    }
                });
            });
        });
    }
    getByIdEntidade(idEntidade) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.find({ idEntidade: idEntidade })
                    .sort({ dataGeracao: 1 })
                    .exec(function (err, doc) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(doc);
                    }
                });
            });
        });
    }
    getByUUID(uUID) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.find({ uuid: uUID })
                    .sort({ dataGeracao: 1 })
                    .exec(function (err, docs) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(docs);
                    }
                });
            });
        });
    }
    getByChave(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.find({ chave: parametros }).exec(function (err, docs) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(docs);
                    }
                });
            });
        });
    }
    getByChaveLimit(parametros, quantidadeRegistros, ordenacao) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.find({ chave: parametros })
                    .sort({ dataGeracao: ordenacao })
                    .limit(quantidadeRegistros)
                    .exec(function (err, docs) {
                    if (err) {
                        reject(err);
                    }
                    resolve(docs);
                });
            });
        });
    }
    updateArquivo(uUID, arquivo) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.update({ uuid: uUID }, arquivo, function (err, numReplaced) {
                    if (err) {
                        reject(err);
                    }
                    resolve(`${numReplaced} - Arquivo alterado com sucesso!`);
                });
            });
        });
    }
    deleteById(uUID) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                db.remove({ uuid: uUID }, {}, function (err, numRemoved) {
                    if (err) {
                        reject(err);
                    }
                    resolve(`${numRemoved} - Arquivo removido com sucesso!`);
                });
            });
        });
    }
};
NeDBArquivo = __decorate([
    common_1.Service(),
    __metadata("design:paramtypes", [])
], NeDBArquivo);
exports.NeDBArquivo = NeDBArquivo;
//# sourceMappingURL=NeDBArquivo.js.map