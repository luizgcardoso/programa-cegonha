import { Request, Response } from "express";
import { enderecoRepository } from "../repositories/EnderecoRepository";
import {
  createEnderecoPessoaSchema,
  createEnderecoResponsavelSchema,
  updateEnderecoSchema,
} from "../schemas";
import {
  cidadeRepository,
  estadosRepository,
  pessoasRepository,
  responsaveisRepository,
} from "../repositories";
import ViaCepService from "../services/ViaCepService";
import { NotFoundError } from "../utils/api-error";

export class EnderecoController {
  async createEndPessoa(req: Request, res: Response) {
    try {
      const { idPessoa } = req.params;
      const pessoa = await pessoasRepository.findOneBy({
        id: Number(idPessoa),
      });
      if (!pessoa) {
        throw new NotFoundError("Pessoa não encontrado");
      }

      const validated = createEnderecoPessoaSchema.parse(req.body);

      const enderecoViaCep = await ViaCepService.buscar(validated.cep);
      console.log(enderecoViaCep);
      const estado = await estadosRepository.findOneBy({
        sigla: enderecoViaCep.uf,
      });
      if (!estado) {
        throw new NotFoundError("Estado não encontrado");
      }

      const cidade = await cidadeRepository.findOne({
        where: {
          nome: enderecoViaCep.localidade,
          estado: {
            id: estado.id,
          },
        },
        relations: ["estado"],
      });
      if (!cidade) {
        throw new NotFoundError("Cidade não encontrado");
      }
      validated.logradouro = enderecoViaCep.logradouro;
      validated.bairro = enderecoViaCep.bairro;
      const newEndereco = enderecoRepository.create({
        ...validated,

        pessoa,
        cidade,
      });
      // enderecoRepository.merge(newEndereco, { pessoa, cidade });
      await enderecoRepository.save(newEndereco);
      return res.status(201).json(newEndereco);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar endereço", error });
    }
  }

  async createEndResponsavel(req: Request, res: Response) {
    try {
      const { idResponsavel } = req.params;
      const responsavel = await responsaveisRepository.findOneBy({
        id: Number(idResponsavel),
      });
      if (!responsavel) {
        return res.status(404).json({ message: "Pessoa não identificada" });
      }
      const validated = createEnderecoResponsavelSchema.parse(req.body);
      const newEndereco = enderecoRepository.create(validated);
      enderecoRepository.merge(newEndereco, { responsavel: responsavel });
      await enderecoRepository.save(newEndereco);
      return res.status(201).json(newEndereco);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar endereço", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const enderecos = await enderecoRepository.find({
        relations: ["pessoa", "responsavel", "cidade"],
      });
      return res.status(200).json(enderecos);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar endereços", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const endereco = await enderecoRepository.findOneBy({
        id: Number(id),
      });
      if (!endereco) {
        return res.status(404).json({ message: "Endereço não encontrado" });
      }
      return res.status(200).json(endereco);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar endereço", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateEnderecoSchema.parse(req.body);
      const endereco = await enderecoRepository.findOneBy({
        id: Number(id),
      });
      if (!endereco) {
        return res.status(404).json({ message: "Endereço não encontrado" });
      }
      enderecoRepository.merge(endereco, validated);
      await enderecoRepository.save(endereco);
      return res.status(200).json(endereco);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar endereço", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const endereco = await enderecoRepository.findOneBy({
        id: Number(id),
      });
      if (!endereco) {
        return res.status(404).json({ message: "Endereço não encontrado" });
      }
      await enderecoRepository.delete(id);
      return res.status(200).json({ message: "Endereço deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar endereço", error });
    }
  }
}
