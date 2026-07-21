import { Request, Response } from "express";
import { consultaPreNatalRepository } from "../repositories/ConsultaPreNatalRepository";
import {
  createConsultaPreNatalSchema,
  updateConsultaPreNatalSchema,
} from "../schemas";

export class ConsultaPreNatalController {
  async create(req: Request, res: Response) {
    try {
      const validated = createConsultaPreNatalSchema.parse(req.body);
      const newConsulta = consultaPreNatalRepository.create(validated);
      await consultaPreNatalRepository.save(newConsulta);
      return res.status(201).json(newConsulta);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar consulta pré-natal", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const consultas = await consultaPreNatalRepository.find({
        relations: [
          "gestacao",
          "profissional",
          "agendamento",
          "afericaoGestante",
        ],
      });
      return res.status(200).json(consultas);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar consultas pré-natal", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const consulta = await consultaPreNatalRepository.findOneBy({
        id: Number(id),
      });
      if (!consulta) {
        return res
          .status(404)
          .json({ message: "Consulta pré-natal não encontrada" });
      }
      return res.status(200).json(consulta);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar consulta pré-natal", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateConsultaPreNatalSchema.parse(req.body);
      const consulta = await consultaPreNatalRepository.findOneBy({
        id: Number(id),
      });
      if (!consulta) {
        return res
          .status(404)
          .json({ message: "Consulta pré-natal não encontrada" });
      }
      consultaPreNatalRepository.merge(consulta, validated);
      await consultaPreNatalRepository.save(consulta);
      return res.status(200).json(consulta);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar consulta pré-natal", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const consulta = await consultaPreNatalRepository.findOneBy({
        id: Number(id),
      });
      if (!consulta) {
        return res
          .status(404)
          .json({ message: "Consulta pré-natal não encontrada" });
      }
      await consultaPreNatalRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Consulta pré-natal deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar consulta pré-natal", error });
    }
  }
}
