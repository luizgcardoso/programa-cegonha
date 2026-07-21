import { Request, Response } from "express";
import { estadosRepository } from "../repositories/EstadosRepository";
import { createEstadoSchema, updateEstadoSchema } from "../schemas";

export class EstadosController {
  async create(req: Request, res: Response) {
    try {
      const validated = createEstadoSchema.parse(req.body);
      const newEstado = estadosRepository.create(validated);
      await estadosRepository.save(newEstado);
      return res.status(201).json(newEstado);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar estado", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const estados = await estadosRepository.find();
      return res.status(200).json(estados);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar estados", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const estado = await estadosRepository.findOneBy({ id: Number(id) });
      if (!estado) {
        return res.status(404).json({ message: "Estado não encontrado" });
      }
      return res.status(200).json(estado);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar estado", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateEstadoSchema.parse(req.body);
      const estado = await estadosRepository.findOneBy({ id: Number(id) });
      if (!estado) {
        return res.status(404).json({ message: "Estado não encontrado" });
      }
      estadosRepository.merge(estado, validated);
      await estadosRepository.save(estado);
      return res.status(200).json(estado);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar estado", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const estado = await estadosRepository.findOneBy({ id: Number(id) });
      if (!estado) {
        return res.status(404).json({ message: "Estado não encontrado" });
      }
      await estadosRepository.delete(id);
      return res.status(200).json({ message: "Estado deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao deletar estado", error });
    }
  }
}
