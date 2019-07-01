import { Service } from "@tsed/common";
import { PlanoContas } from "../../interfaces/PlanoContas";
var Datastore = require("nedb");
var db = new Datastore({
  filename: "planoContas.json"
});

@Service()
export class NeDBPlanoContas {
  constructor() {
    db.loadDatabase(function(err) {
      if (err) {
        console.log(`Erros no database Plano Contas >> ${err}`);
      }
    });
  }

  async create(planocontas: PlanoContas) {
    return new Promise((resolve, reject) => {
      db.insert(planocontas, function(err, newDoc) {
        if (err) {
          reject(err);
        } else {
          resolve(`${newDoc} - Plano Contas criado com sucesso!`);
        }
      });
    });
  }

  async findAllDocuments() {
    return new Promise((resolve, reject) => {
      db.find({}).exec(function(err, docs) {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    });
  }

  async getByExercicio(exercicio: number) {
    return new Promise((resolve, reject) => {
      db.find({ exercicio: exercicio }).exec(function(err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  }

  async updatePlanoContas(exercicio: number, planocontas: Object[]) {
    return new Promise((resolve, reject) => {
      db.update({ exercicio: exercicio }, planocontas, function(err, numReplaced) {
        if (err) {
          reject(err);
        }
        resolve(`${numReplaced} - Plano Contas alterado com sucesso!`);
      });
    });
  }

  async deleteByExercicio(exercicio: number) {
    return new Promise((resolve, reject) => {
      db.remove({ exercicio: exercicio }, {}, function(err, numRemoved) {
        if (err) {
          reject(err);
        }
        resolve(`${numRemoved} - Plano Contas removido com sucesso!`);
      });
    });
  }
}
