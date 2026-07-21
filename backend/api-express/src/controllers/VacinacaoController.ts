import { Request, Response } from "express";
import { vacinacaoRepository } from "../repositories/VacinacaoRepository";
import { createVacinacaoSchema, updateVacinacaoSchema } from "../schemas";

export class VacinacaoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createVacinacaoSchema.parse(req.body);
      const newVacinacao = vacinacaoRepository.create(validated);
      await vacinacaoRepository.save(newVacinacao);
      return res.status(201).json(newVacinacao);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar vacinação", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const vacinacoes = await vacinacaoRepository.find({
        relations: ["gestacao", "bebe"],
      });
      return res.status(200).json(vacinacoes);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar vacinações", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const vacinacao = await vacinacaoRepository.findOneBy({
        id: Number(id),
      });
      if (!vacinacao) {
        return res.status(404).json({ message: "Vacinação não encontrada" });
      }
      return res.status(200).json(vacinacao);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar vacinação", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateVacinacaoSchema.parse(req.body);
      const vacinacao = await vacinacaoRepository.findOneBy({
        id: Number(id),
      });
      if (!vacinacao) {
        return res.status(404).json({ message: "Vacinação não encontrada" });
      }
      vacinacaoRepository.merge(vacinacao, validated);
      await vacinacaoRepository.save(vacinacao);
      return res.status(200).json(vacinacao);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar vacinação", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const vacinacao = await vacinacaoRepository.findOneBy({
        id: Number(id),
      });
      if (!vacinacao) {
        return res.status(404).json({ message: "Vacinação não encontrada" });
      }
      await vacinacaoRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Vacinação deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar vacinação", error });
    }
  }
}
