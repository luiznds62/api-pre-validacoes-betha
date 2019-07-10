import { Arquivo } from "../interfaces/Arquivo";
import { Exception } from "../common/Exception";

export class ArquivoDTO {
  uuid: string;
  idEntidade: string;
  tabelaCorrigida: Object[];
  paragrafoCorrigido: Object[];
  dataGeracao: Date;
  quantidadeErros: number;
  quantidadeAvisos: number;
  quantidadeErrosFixo: number;
  quantidadeAvisosFixo: number;
  textoHtml: string;
  chave: Object[];

  async fromDB(arquivo: Arquivo) {
    this.uuid = arquivo.uuid;
    this.idEntidade = arquivo.idEntidade;
    this.tabelaCorrigida = arquivo.tabelaCorrigida;
    this.paragrafoCorrigido = arquivo.paragrafoCorrigido;
    this.dataGeracao = arquivo.dataGeracao;
    this.quantidadeErros = arquivo.quantidadeErros;
    this.quantidadeAvisos = arquivo.quantidadeAvisos;
    this.quantidadeErrosFixo = arquivo.quantidadeErrosFixo;
    this.quantidadeAvisosFixo = arquivo.quantidadeAvisosFixo;
    this.textoHtml = arquivo.textoHtml;
    this.chave = arquivo.chave;
  }

  async toDB(): Promise<Arquivo> {
    var arquivoDB: Arquivo = {
      uuid: this.uuid,
      idEntidade: this.idEntidade,
      tabelaCorrigida: this.tabelaCorrigida,
      paragrafoCorrigido: this.paragrafoCorrigido,
      dataGeracao: this.dataGeracao,
      quantidadeErros: this.quantidadeErros,
      quantidadeAvisos: this.quantidadeAvisos,
      quantidadeErrosFixo: this.quantidadeErrosFixo,
      quantidadeAvisosFixo: this.quantidadeAvisosFixo,
      textoHtml: this.textoHtml,
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
    arquivoDB.textoHtml = this.textoHtml;
    arquivoDB.chave = this.chave;

    return arquivoDB;
  }
}
