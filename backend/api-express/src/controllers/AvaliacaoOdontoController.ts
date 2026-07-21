import { Request, Response } from "express";
import { avaliacaoOdontoRepository } from "../repositories/AvaliacaoOdontoRepository";
import {
  createAvaliacaoOdontoSchema,
  updateAvaliacaoOdontoSchema,
} from "../schemas";

export class AvaliacaoOdontoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createAvaliacaoOdontoSchema.parse(req.body);
      const newAvaliacao = avaliacaoOdontoRepository.create(validated);
      await avaliacaoOdontoRepository.save(newAvaliacao);
      return res.status(201).json(newAvaliacao);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar avaliação odontológica", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const avaliacoes = await avaliacaoOdontoRepository.find({
        relations: ["gestacao", "profissional", "agendamento"],
      });
      return res.status(200).json(avaliacoes);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar avaliações odontológicas", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await avaliacaoOdontoRepository.findOneBy({
        id: Number(id),
      });
      if (!avaliacao) {
        return res
          .status(404)
          .json({ message: "Avaliação odontológica não encontrada" });
      }
      return res.status(200).json(avaliacao);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar avaliação odontológica", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateAvaliacaoOdontoSchema.parse(req.body);
      const avaliacao = await avaliacaoOdontoRepository.findOneBy({
        id: Number(id),
      });
      if (!avaliacao) {
        return res
          .status(404)
          .json({ message: "Avaliação odontológica não encontrada" });
      }
      avaliacaoOdontoRepository.merge(avaliacao, validated);
      await avaliacaoOdontoRepository.save(avaliacao);
      return res.status(200).json(avaliacao);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar avaliação odontológica", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const avaliacao = await avaliacaoOdontoRepository.findOneBy({
        id: Number(id),
      });
      if (!avaliacao) {
        return res
          .status(404)
          .json({ message: "Avaliação odontológica não encontrada" });
      }
      await avaliacaoOdontoRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Avaliação odontológica deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar avaliação odontológica", error });
    }
  }
}
