import { Service } from "@tsed/common";
import { Arquivo } from "../../interfaces/Arquivo";
var Datastore = require("nedb");
var db = new Datastore({
  filename: "arquivo.json"
});

@Service()
export class NeDBArquivo {
  constructor() {
    db.loadDatabase(function(err) {
      if (err) {
        console.log(`Erros no database Arquivo >> ${err}`);
      }
    });
  }

  async create(arquivo: Arquivo) {
    return new Promise((resolve, reject) => {
      db.insert(arquivo, function(err, newDoc) {
        if (err) {
          reject(err);
        } else {
          resolve(`${newDoc} - Arquivo criado com sucesso!`);
        }
      });
    });
  }

  async createTabelaCorrigida(uUID: string, tableId: string) {
    return new Promise((resolve, reject) => {
      db.update(
        { uuid: uUID },
        { $push: { tabelaCorrigida: tableId } },
        function(err, numReplaced) {
          if (err) {
            reject(err);
          }
          resolve(`${numReplaced} - Arquivo alterado com sucesso!`);
        }
      );
    });
  }

  async createParagrafoCorrigido(uUID: string, paragrafoId: string) {
    return new Promise((resolve, reject) => {
      db.update(
        { uuid: uUID },
        { $push: { paragrafoCorrigido: paragrafoId } },
        function(err, numReplaced) {
          if (err) {
            reject(err);
          }
          resolve(`${numReplaced} - Arquivo alterado com sucesso!`);
        }
      );
    });
  }

  async findAllDocuments(){
    return new Promise((resolve, reject) => {
      db.find({})
        .sort({ dataGeracao: 1 })
        .exec(function(err, docs) {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        });
    });
  }

  async getById(id: string){
    return new Promise((resolve, reject) => {
      db.find({ _id: id })
        .sort({ dataGeracao: 1 })
        .exec(function(err, doc) {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        });
    });
  }

  async getByIdEntidade(idEntidade: string) {
    return new Promise((resolve, reject) => {
      db.find({ idEntidade: idEntidade })
        .sort({ dataGeracao: 1 })
        .exec(function(err, doc) {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        });
    });
  }

  async getByUUID(uUID: string): Promise<Arquivo> {
    return new Promise((resolve, reject) => {
      db.find({ uuid: uUID })
        .sort({ dataGeracao: 1 })
        .exec(function(err, docs) {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        });
    });
  }

  async getByChave(parametros: string): Promise<Arquivo[]> {
    return new Promise((resolve, reject) => {
      db.find({ chave: parametros }).exec(function(err, docs) {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  async getByChaveLimit(
    parametros: string,
    quantidadeRegistros: number,
    ordenacao: number
  ): Promise<Arquivo[]> {
    return new Promise((resolve, reject) => {
      db.find({ chave: parametros })
        .sort({ dataGeracao: ordenacao })
        .limit(quantidadeRegistros)
        .exec(function(err, docs) {
          if (err) {
            reject(err);
          }
          resolve(docs);
        });
    });
  }

  async updateArquivo(uUID: String, arquivo: Arquivo) {
    return new Promise((resolve, reject) => {
      db.update({ uuid: uUID }, arquivo, function(err, numReplaced) {
        if (err) {
          reject(err);
        }
        resolve(`${numReplaced} - Arquivo alterado com sucesso!`);
      });
    });
  }

  async deleteById(uUID: String) {
    return new Promise((resolve, reject) => {
      db.remove({ uuid: uUID }, {}, function(err, numRemoved) {
        if (err) {
          reject(err);
        }
        resolve(`${numRemoved} - Arquivo removido com sucesso!`);
      });
    });
  }
}
