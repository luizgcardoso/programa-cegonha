import { Request, Response } from "express";
import { bebesRepository } from "../repositories/BebesRepository";
import { createBebeSchema, updateBebeSchema } from "../schemas";

export class BebesController {
  async create(req: Request, res: Response) {
    try {
      const validated = createBebeSchema.parse(req.body);
      const newBebe = bebesRepository.create(validated);
      await bebesRepository.save(newBebe);
      return res.status(201).json(newBebe);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar bebê", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const bebes = await bebesRepository.find({
        relations: ["gestacao"],
      });
      return res.status(200).json(bebes);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar bebês", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const bebe = await bebesRepository.findOneBy({
        id: Number(id),
      });
      if (!bebe) {
        return res.status(404).json({ message: "Bebê não encontrado" });
      }
      return res.status(200).json(bebe);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar bebê", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateBebeSchema.parse(req.body);
      const bebe = await bebesRepository.findOneBy({
        id: Number(id),
      });
      if (!bebe) {
        return res.status(404).json({ message: "Bebê não encontrado" });
      }
      bebesRepository.merge(bebe, validated);
      await bebesRepository.save(bebe);
      return res.status(200).json(bebe);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao atualizar bebê", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const bebe = await bebesRepository.findOneBy({
        id: Number(id),
      });
      if (!bebe) {
        return res.status(404).json({ message: "Bebê não encontrado" });
      }
      await bebesRepository.delete(id);
      return res.status(200).json({ message: "Bebê deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao deletar bebê", error });
    }
  }
}
