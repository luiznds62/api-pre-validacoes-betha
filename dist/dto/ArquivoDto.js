"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ArquivoDTO {
    fromDB(arquivo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.uuid = arquivo.uuid;
            this.idEntidade = arquivo.idEntidade;
            this.tabelaCorrigida = arquivo.tabelaCorrigida;
            this.paragrafoCorrigido = arquivo.paragrafoCorrigido;
            this.dataGeracao = arquivo.dataGeracao;
            this.quantidadeErros = arquivo.quantidadeErros;
            this.quantidadeAvisos = arquivo.quantidadeAvisos;
            this.quantidadeErrosFixo = arquivo.quantidadeErrosFixo;
            this.quantidadeAvisosFixo = arquivo.quantidadeAvisosFixo;
            this.chave = arquivo.chave;
        });
    }
    toDB() {
        return __awaiter(this, void 0, void 0, function* () {
            var arquivoDB = {
                uuid: this.uuid,
                idEntidade: this.idEntidade,
                tabelaCorrigida: this.tabelaCorrigida,
                paragrafoCorrigido: this.paragrafoCorrigido,
                dataGeracao: this.dataGeracao,
                quantidadeErros: this.quantidadeErros,
                quantidadeAvisos: this.quantidadeAvisos,
                quantidadeErrosFixo: this.quantidadeErrosFixo,
                quantidadeAvisosFixo: this.quantidadeAvisosFixo,
                chave: this.chave
            };
            arquivoDB.uuid = this.uuid;
            arquivoDB.idEntidade = this.idEntidade;
            arquivoDB.tabelaCorrigida = this.tabelaCorrigida;
            arquivoDB.paragrafoCorrigido = this.paragrafoCorrigido;
            arquivoDB.dataGeracao = this.dataGeracao;
            arquivoDB.quantidadeErros = this.quantidadeErros;
            arquivoDB.quantidadeAvisos = this.quantidadeAvisos;
            arquivoDB.quantidadeErrosFixo = this.quantidadeErrosFixo;
            arquivoDB.quantidadeAvisosFixo = this.quantidadeAvisosFixo;
            arquivoDB.chave = this.chave;
            return arquivoDB;
        });
    }
}
exports.ArquivoDTO = ArquivoDTO;
//# sourceMappingURL=ArquivoDto.js.map