import { Request, Response } from "express";
import { gestacaoRepository } from "../repositories/GestacaoRepository";
import { createGestacaoSchema, updateGestacaoSchema } from "../schemas";

export class GestacaoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createGestacaoSchema.parse(req.body);
      const newGestacao = gestacaoRepository.create(validated);
      await gestacaoRepository.save(newGestacao);
      return res.status(201).json(newGestacao);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar gestação", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const gestacoes = await gestacaoRepository.find({
        relations: ["paciente", "bebes"],
      });
      return res.status(200).json(gestacoes);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar gestações", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const gestacao = await gestacaoRepository.findOneBy({
        id: Number(id),
      });
      if (!gestacao) {
        return res.status(404).json({ message: "Gestação não encontrada" });
      }
      return res.status(200).json(gestacao);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar gestação", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateGestacaoSchema.parse(req.body);
      const gestacao = await gestacaoRepository.findOneBy({
        id: Number(id),
      });
      if (!gestacao) {
        return res.status(404).json({ message: "Gestação não encontrada" });
      }
      gestacaoRepository.merge(gestacao, validated);
      await gestacaoRepository.save(gestacao);
      return res.status(200).json(gestacao);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar gestação", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const gestacao = await gestacaoRepository.findOneBy({
        id: Number(id),
      });
      if (!gestacao) {
        return res.status(404).json({ message: "Gestação não encontrada" });
      }
      await gestacaoRepository.delete(id);
      return res.status(200).json({ message: "Gestação deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar gestação", error });
    }
  }
}
