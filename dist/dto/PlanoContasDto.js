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
class PlanoContasDTO {
    fromDB(planocontas) {
        return __awaiter(this, void 0, void 0, function* () {
            this.exercicio = planocontas.exercicio;
            this.planoContas = planocontas.planoContas;
        });
    }
    toDB() {
        return __awaiter(this, void 0, void 0, function* () {
            var planoContasDB = {
                exercicio: this.exercicio,
                planoContas: this.planoContas,
            };
            planoContasDB.exercicio = this.exercicio;
            planoContasDB.planoContas = this.planoContas;
            return planoContasDB;
        });
    }
}
exports.PlanoContasDTO = PlanoContasDTO;
//# sourceMappingURL=PlanoContasDto.js.map