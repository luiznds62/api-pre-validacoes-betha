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
import { Arquivo } from "../../interfaces/Arquivo";
import { ArquivoDTO } from "../../dto/ArquivoDto";
import { ReturnDTO } from "../../common/ReturnDTO";
import { ExceptionMensagens } from "../../common/ExceptionsMensagens";
import { ArquivoService } from "../../services/arquivo/ArquivoService";

@Controller("/arquivo")
export class ArquivoCtrl {
  constructor(private arquivoService: ArquivoService) {}

  @Post("/")
  async cadastrarArquivo(@BodyParams() arquivoDto: ArquivoDTO) {
    var arquivo = await arquivoDto.toDB();

    return await this.arquivoService
      .cadastrar(arquivo)
      .then(function(arquivoDB: Arquivo) {
        return new ReturnDTO("", true, arquivoDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Post("/tabelaCorrigida/:uuid/:tableId")
  async cadastrarTabelaCorrigida(
    @PathParams("uuid") @Required() uuid: string,
    @PathParams("tableId") @Required() tableId: string
  ) {
    return await this.arquivoService
      .cadastrarTabelaCorrigida(uuid, tableId)
      .then(function(arquivoDB: Arquivo) {
        return new ReturnDTO("", true, arquivoDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Post("/paragrafoCorrigido/:uuid/:paragrafoId")
  async cadastrarParagrafoCorrigido(
    @PathParams("uuid") @Required() uuid: string,
    @PathParams("paragrafoId") @Required() paragrafoId: string
  ) {
    return await this.arquivoService
      .cadastrarParagrafoCorrigido(uuid, paragrafoId)
      .then(function(arquivoDB: Arquivo) {
        return new ReturnDTO("", true, arquivoDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Get("/:uuid")
  async buscarPeloId(@PathParams("uuid") @Required() uuid: string) {
    return await this.arquivoService
      .buscarPeloUUID(uuid)
      .then(function(arquivoDB: Arquivo) {
        return new ReturnDTO("", true, arquivoDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Get("/entidade/:idEntidade")
  async buscarPeloIdEntidade(
    @PathParams("idEntidade") @Required() idEntidade: string
  ) {
    return await this.arquivoService
      .buscarPeloIdEntidade(idEntidade)
      .then(function(arquivoDB: Arquivo[]) {
        return new ReturnDTO("", true, arquivoDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Get("/chave/:chave")
  async buscarPorChave(@PathParams("chave") chave: string) {
    return await this.arquivoService
      .buscarPorChave(chave)
      .then(function(arquivosDB: Arquivo[]) {
        return new ReturnDTO("", true, arquivosDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Get("/chave/:chave/:quantidadeRegistros/:ordenacao")
  async buscarPorChaveLimiteRegistros(
    @PathParams("chave") chave: string,
    @PathParams("quantidadeRegistros") quantidadeRegistros: number,
    @PathParams("ordenacao") ordenacao: any
  ) {
    if (ordenacao === "asc") {
      ordenacao = 1;
    }
    if (ordenacao === "desc") {
      ordenacao = -1;
    }
    return await this.arquivoService
      .buscarPorChaveLimiteRegistros(chave, quantidadeRegistros, ordenacao)
      .then(function(arquivosDB: Arquivo[]) {
        return new ReturnDTO("", true, arquivosDB);
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
  async buscarTodosArquivos() {
    return await this.arquivoService
      .buscarTodos()
      .then(function(arquivoDB: Arquivo[]) {
        return new ReturnDTO("", true, arquivoDB);
      })
      .catch(function() {
        new ReturnDTO(
          new ExceptionMensagens().mensagemPadraoBanco,
          false,
          null
        );
      });
  }

  @Put("/:uuid")
  async atualizarArquivo(
    @PathParams("uuid") uuid: string,
    @BodyParams() arquivoDto: ArquivoDTO
  ) {
    var arquivo = await arquivoDto.toDB();

    return await this.arquivoService
      .atualizaArquivo(uuid, arquivo)
      .then(function(retorno: string) {
        if (retorno === "0 - Arquivo alterado com sucesso!") {
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

  @Delete("/:uuid")
  async deletarArquivo(@PathParams("uuid") @Required() uuid: string) {
    return await this.arquivoService
      .removeArquivo(uuid)
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
