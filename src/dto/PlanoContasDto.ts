import { PlanoContas } from "../interfaces/PlanoContas";
import { Exception } from "../common/Exception";
import { Conta } from "../interfaces/Conta";

export class PlanoContasDTO {
  exercicio: number;
  planoContas: Conta[];

  async fromDB(planocontas: PlanoContas) {
    this.exercicio = planocontas.exercicio;
    this.planoContas = planocontas.planoContas;
  }

  async toDB(): Promise<PlanoContas> {
    var planoContasDB: PlanoContas = {
      exercicio: this.exercicio,
      planoContas: this.planoContas,
    };

    planoContasDB.exercicio = this.exercicio;
    planoContasDB.planoContas = this.planoContas;

    return planoContasDB;
  }
}
