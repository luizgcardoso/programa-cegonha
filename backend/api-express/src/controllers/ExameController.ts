import { Request, Response } from "express";
import { exameRepository } from "../repositories/ExameRepository";
import { createExameSchema, updateExameSchema } from "../schemas";

export class ExameController {
  async create(req: Request, res: Response) {
    try {
      const validated = createExameSchema.parse(req.body);
      const newExame = exameRepository.create(validated);
      await exameRepository.save(newExame);
      return res.status(201).json(newExame);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar exame", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const exames = await exameRepository.find({
        relations: ["gestacao"],
      });
      return res.status(200).json(exames);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar exames", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const exame = await exameRepository.findOneBy({
        id: Number(id),
      });
      if (!exame) {
        return res.status(404).json({ message: "Exame não encontrado" });
      }
      return res.status(200).json(exame);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar exame", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateExameSchema.parse(req.body);
      const exame = await exameRepository.findOneBy({
        id: Number(id),
      });
      if (!exame) {
        return res.status(404).json({ message: "Exame não encontrado" });
      }
      exameRepository.merge(exame, validated);
      await exameRepository.save(exame);
      return res.status(200).json(exame);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar exame", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const exame = await exameRepository.findOneBy({
        id: Number(id),
      });
      if (!exame) {
        return res.status(404).json({ message: "Exame não encontrado" });
      }
      await exameRepository.delete(id);
      return res.status(200).json({ message: "Exame deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao deletar exame", error });
    }
  }
}
