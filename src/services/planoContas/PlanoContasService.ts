import { Service } from "@tsed/common";
import { NeDBPlanoContas } from "../nedb/NeDBPlanoContas";
import { PlanoContas } from "../../interfaces/PlanoContas";
import { Conta } from "../../interfaces/Conta";

@Service()
export class PlanoContasService {
  neDBService = new NeDBPlanoContas();

  constructor() {}

  async cadastrar(planocontas: PlanoContas) {
    return await this.neDBService.create(planocontas);
  }

  async buscarTodos(): Promise<PlanoContas[]> {
    return await this.neDBService.findAllDocuments();
  }

  async buscarPeloExercicio(exercicio: number): Promise<PlanoContas> {
    return await this.neDBService.getByExercicio(exercicio);
  }

  async atualizaPlanoContas(exercicio: number, planocontas: any) {
    return await this.neDBService.updatePlanoContas(exercicio, planocontas);
  }

  async removeplanocontas(exercicio: number) {
    return await this.neDBService.deleteByExercicio(exercicio);
  }
}
