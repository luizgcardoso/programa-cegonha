import { Request, Response } from "express";
import { consultaAberturaRepository } from "../repositories/ConsultaAberturaRepository";
import {
  createConsultaAberturaSchema,
  updateConsultaAberturaSchema,
} from "../schemas";

export class ConsultaAberturaController {
  async create(req: Request, res: Response) {
    try {
      const validated = createConsultaAberturaSchema.parse(req.body);
      const newConsulta = consultaAberturaRepository.create(validated);
      await consultaAberturaRepository.save(newConsulta);
      return res.status(201).json(newConsulta);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar consulta de abertura", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const consultas = await consultaAberturaRepository.find({
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
        .json({ message: "Erro ao buscar consultas de abertura", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const consulta = await consultaAberturaRepository.findOneBy({
        id: Number(id),
      });
      if (!consulta) {
        return res
          .status(404)
          .json({ message: "Consulta de abertura não encontrada" });
      }
      return res.status(200).json(consulta);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar consulta de abertura", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateConsultaAberturaSchema.parse(req.body);
      const consulta = await consultaAberturaRepository.findOneBy({
        id: Number(id),
      });
      if (!consulta) {
        return res
          .status(404)
          .json({ message: "Consulta de abertura não encontrada" });
      }
      consultaAberturaRepository.merge(consulta, validated);
      await consultaAberturaRepository.save(consulta);
      return res.status(200).json(consulta);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar consulta de abertura", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const consulta = await consultaAberturaRepository.findOneBy({
        id: Number(id),
      });
      if (!consulta) {
        return res
          .status(404)
          .json({ message: "Consulta de abertura não encontrada" });
      }
      await consultaAberturaRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Consulta de abertura deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar consulta de abertura", error });
    }
  }
}
