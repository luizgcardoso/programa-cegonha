import { Request, Response } from "express";
import { visitaRecemNascidoRepository } from "../repositories/VisitaRecemNascidoRepository";
import {
  createVisitaRecemNascidoSchema,
  updateVisitaRecemNascidoSchema,
} from "../schemas";

export class VisitaRecemNascidoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createVisitaRecemNascidoSchema.parse(req.body);
      const newVisita = visitaRecemNascidoRepository.create(validated);
      await visitaRecemNascidoRepository.save(newVisita);
      return res.status(201).json(newVisita);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar visita de recém-nascido", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const visitas = await visitaRecemNascidoRepository.find({
        relations: ["bebe", "profissional", "agendamento", "afericaoBebe"],
      });
      return res.status(200).json(visitas);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar visitas de recém-nascido", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const visita = await visitaRecemNascidoRepository.findOneBy({
        id: Number(id),
      });
      if (!visita) {
        return res
          .status(404)
          .json({ message: "Visita de recém-nascido não encontrada" });
      }
      return res.status(200).json(visita);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar visita de recém-nascido", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateVisitaRecemNascidoSchema.parse(req.body);
      const visita = await visitaRecemNascidoRepository.findOneBy({
        id: Number(id),
      });
      if (!visita) {
        return res
          .status(404)
          .json({ message: "Visita de recém-nascido não encontrada" });
      }
      visitaRecemNascidoRepository.merge(visita, validated);
      await visitaRecemNascidoRepository.save(visita);
      return res.status(200).json(visita);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar visita de recém-nascido", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const visita = await visitaRecemNascidoRepository.findOneBy({
        id: Number(id),
      });
      if (!visita) {
        return res
          .status(404)
          .json({ message: "Visita de recém-nascido não encontrada" });
      }
      await visitaRecemNascidoRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Visita de recém-nascido deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar visita de recém-nascido", error });
    }
  }
}
