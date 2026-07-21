import { Request, Response } from "express";
import { profissionaisRepository } from "../repositories/ProfissionaisRepository";
import { createProfissionalSchema, updateProfissionalSchema } from "../schemas";

export class ProfissionaisController {
  async create(req: Request, res: Response) {
    try {
      const validated = createProfissionalSchema.parse(req.body);
      const newProfissional = profissionaisRepository.create(validated);
      await profissionaisRepository.save(newProfissional);
      return res.status(201).json(newProfissional);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar profissional", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const profissionais = await profissionaisRepository.find({
        relations: ["pessoa", "areaCobertura"],
      });
      return res.status(200).json(profissionais);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar profissionais", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const profissional = await profissionaisRepository.findOneBy({
        id: Number(id),
      });
      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }
      return res.status(200).json(profissional);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar profissional", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateProfissionalSchema.parse(req.body);
      const profissional = await profissionaisRepository.findOneBy({
        id: Number(id),
      });
      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }
      profissionaisRepository.merge(profissional, validated);
      await profissionaisRepository.save(profissional);
      return res.status(200).json(profissional);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar profissional", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const profissional = await profissionaisRepository.findOneBy({
        id: Number(id),
      });
      if (!profissional) {
        return res.status(404).json({ message: "Profissional não encontrado" });
      }
      await profissionaisRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Profissional deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar profissional", error });
    }
  }
}
