import { Request, Response } from "express";
import { visitaRepository } from "../repositories/VisitaRepository";
import { createVisitaSchema, updateVisitaSchema } from "../schemas";

export class VisitaController {
  async create(req: Request, res: Response) {
    try {
      const validated = createVisitaSchema.parse(req.body);
      const newVisita = visitaRepository.create(validated);
      await visitaRepository.save(newVisita);
      return res.status(201).json(newVisita);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar visita", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const visitas = await visitaRepository.find({
        relations: ["gestacao", "profissional", "agendamento"],
      });
      return res.status(200).json(visitas);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar visitas", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const visita = await visitaRepository.findOneBy({
        id: Number(id),
      });
      if (!visita) {
        return res.status(404).json({ message: "Visita não encontrada" });
      }
      return res.status(200).json(visita);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar visita", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateVisitaSchema.parse(req.body);
      const visita = await visitaRepository.findOneBy({
        id: Number(id),
      });
      if (!visita) {
        return res.status(404).json({ message: "Visita não encontrada" });
      }
      visitaRepository.merge(visita, validated);
      await visitaRepository.save(visita);
      return res.status(200).json(visita);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar visita", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const visita = await visitaRepository.findOneBy({
        id: Number(id),
      });
      if (!visita) {
        return res.status(404).json({ message: "Visita não encontrada" });
      }
      await visitaRepository.delete(id);
      return res.status(200).json({ message: "Visita deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao deletar visita", error });
    }
  }
}
