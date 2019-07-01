import { Service } from "@tsed/common";
import { NeDBArquivo } from "../nedb/NeDBArquivo";
import { Arquivo } from "../../interfaces/Arquivo";

@Service()
export class ArquivoService {
  neDBService = new NeDBArquivo();

  constructor() {}

  async cadastrar(arquivo: Arquivo) {
    return await this.neDBService.create(arquivo);
  }

  async cadastrarTabelaCorrigida(uuid: string, tableId: string) {
    return await this.neDBService.createTabelaCorrigida(uuid, tableId);
  }

  async cadastrarParagrafoCorrigido(uuid: string, paragrafoId: string) {
    return await this.neDBService.createParagrafoCorrigido(uuid, paragrafoId);
  }

  async buscarTodos() {
    return await this.neDBService.findAllDocuments();
  }

  async buscarPeloId(id: string){
    return await this.neDBService.getById(id);
  }

  async buscarPeloIdEntidade(idEntidade: string) {
    return await this.neDBService.getByIdEntidade(idEntidade);
  }

  async buscarPeloUUID(uuid: string){
    return await this.neDBService.getByUUID(uuid);
  }

  async buscarPorChave(parametros: string) {
    return await this.neDBService.getByChave(parametros);
  }

  async buscarPorChaveLimiteRegistros(
    parametros: string,
    quantidadeRegistros: number,
    ordenacao: number
  ): Promise<Arquivo[]> {
    return await this.neDBService.getByChaveLimit(
      parametros,
      quantidadeRegistros,
      ordenacao
    );
  }

  async atualizaArquivo(uuid: string, arquivo: Arquivo) {
    return await this.neDBService.updateArquivo(uuid, arquivo);
  }

  async removeArquivo(uuid) {
    return await this.neDBService.deleteById(uuid);
  }
}
