import { Request, Response } from "express";
import { responsaveisRepository } from "../repositories/ResponsaveisRepository";
import { createResponsavelSchema, updateResponsavelSchema } from "../schemas";

export class ResponsaveisController {
  async create(req: Request, res: Response) {
    try {
      const validated = createResponsavelSchema.parse(req.body);
      const newResponsavel = responsaveisRepository.create(validated);
      await responsaveisRepository.save(newResponsavel);
      return res.status(201).json(newResponsavel);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar responsável", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const responsaveis = await responsaveisRepository.find({
        relations: ["pacientes"],
      });
      return res.status(200).json(responsaveis);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar responsáveis", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const responsavel = await responsaveisRepository.findOneBy({
        id: Number(id),
      });
      if (!responsavel) {
        return res.status(404).json({ message: "Responsável não encontrado" });
      }
      return res.status(200).json(responsavel);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar responsável", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateResponsavelSchema.parse(req.body);
      const responsavel = await responsaveisRepository.findOneBy({
        id: Number(id),
      });
      if (!responsavel) {
        return res.status(404).json({ message: "Responsável não encontrado" });
      }
      responsaveisRepository.merge(responsavel, validated);
      await responsaveisRepository.save(responsavel);
      return res.status(200).json(responsavel);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar responsável", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const responsavel = await responsaveisRepository.findOneBy({
        id: Number(id),
      });
      if (!responsavel) {
        return res.status(404).json({ message: "Responsável não encontrado" });
      }
      await responsaveisRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Responsável deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar responsável", error });
    }
  }
}
