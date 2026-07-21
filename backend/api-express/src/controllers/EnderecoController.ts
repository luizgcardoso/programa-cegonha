import { Request, Response } from "express";
import { enderecoRepository } from "../repositories/EnderecoRepository";
import { createEnderecoSchema, updateEnderecoSchema } from "../schemas";

export class EnderecoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createEnderecoSchema.parse(req.body);
      const newEndereco = enderecoRepository.create(validated);
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
