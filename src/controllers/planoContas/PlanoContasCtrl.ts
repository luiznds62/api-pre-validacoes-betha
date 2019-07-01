import {
  BodyParams,
  Controller,
  Delete,
  Get,
  PathParams,
  Post,
  Put,
  Required
} from "@tsed/common";
import { PlanoContas } from "../../interfaces/PlanoContas";
import { PlanoContasDTO } from "../../dto/PlanoContasDto";
import { ReturnDTO } from "../../common/ReturnDTO";
import { ExceptionMensagens } from "../../common/ExceptionsMensagens";
import { PlanoContasService } from "../../services/planoContas/PlanoContasService";

@Controller("/planocontas")
export class PlanoContasCtrl {
  constructor(private planoContasService: PlanoContasService) {}

  @Post("/")
  async cadastrarplanocontas(@BodyParams() planoContasDto: PlanoContasDTO) {
    var planocontas = await planoContasDto.toDB();

    return await this.planoContasService
      .cadastrar(planocontas)
      .then(function(planocontasDB: PlanoContas) {
        return new ReturnDTO("", true, planocontasDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Get("/")
  async buscarTodosPlanoContas() {
    return await this.planoContasService
      .buscarTodos()
      .then(function(planocontasDB: PlanoContas[]) {
        return new ReturnDTO("", true, planocontasDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Get("/:exercicio")
  async buscaPlanoPorExercicio(@PathParams("exercicio") exercicio: number) {
    return await this.planoContasService
      .buscarPeloExercicio(exercicio)
      .then(function(planocontasDB: PlanoContas) {
        return new ReturnDTO("", true, planocontasDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Put("/:exercicio")
  async atualizarPlanoContas(
    @PathParams("exercicio") exercicio: number,
    @BodyParams() planocontasDto: PlanoContasDTO
  ) {
    var planocontas = await planocontasDto.toDB();

    return await this.planoContasService
      .atualizaPlanoContas(exercicio, planocontas)
      .then(function(retorno: string) {
        if (retorno === "0 - Plano Contas alterado com sucesso!") {
          return new ReturnDTO(retorno, false, "");
        }
        return new ReturnDTO(retorno, true, "");
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Delete("/:exercicio")
  async deletarPlanoContas(@PathParams("exercicio") @Required() exercicio: number) {
    return await this.planoContasService
      .removeplanocontas(exercicio)
      .then(function(retorno: string) {
        return new ReturnDTO(retorno, true, "");
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }
}
