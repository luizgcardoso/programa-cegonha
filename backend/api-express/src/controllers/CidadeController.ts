import { Request, Response } from "express";
import { cidadeRepository } from "../repositories/CidadeRepository";
import { createCidadeSchema, updateCidadeSchema } from "../schemas";
import { estadosRepository } from "../repositories";

export class CidadeController {
  async create(req: Request, res: Response) {
    try {
      const { idEstado } = req.params;
      const estado = await estadosRepository.findOneBy({
        id: Number(idEstado),
      });
      if (!estado) {
        return res.status(404).json({ message: "Estado não identificado" });
      }
      const validated = createCidadeSchema.parse(req.body);
      const newCidade = cidadeRepository.create(validated);
      cidadeRepository.merge(newCidade, { estado: estado });
      await cidadeRepository.save(newCidade);
      return res.status(201).json(newCidade);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar cidade", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const cidades = await cidadeRepository.find();
      return res.status(200).json(cidades);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar cidades", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cidade = await cidadeRepository.findOneBy({
        id: Number(id),
      });
      if (!cidade) {
        return res.status(404).json({ message: "Cidade não encontrada" });
      }
      return res.status(200).json(cidade);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar cidade", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateCidadeSchema.parse(req.body);
      const cidade = await cidadeRepository.findOneBy({
        id: Number(id),
      });
      if (!cidade) {
        return res.status(404).json({ message: "Cidade não encontrada" });
      }
      cidadeRepository.merge(cidade, validated);
      await cidadeRepository.save(cidade);
      return res.status(200).json(cidade);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar cidade", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cidade = await cidadeRepository.findOneBy({
        id: Number(id),
      });
      if (!cidade) {
        return res.status(404).json({ message: "Cidade não encontrada" });
      }
      await cidadeRepository.delete(id);
      return res.status(200).json({ message: "Cidade deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao deletar cidade", error });
    }
  }
}
