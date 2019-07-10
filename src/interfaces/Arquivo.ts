export interface Arquivo {
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
}
