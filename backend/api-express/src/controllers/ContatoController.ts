import { Request, Response } from "express";
import { contatoRepository } from "../repositories/ContatoRepository";
import { createContatoSchema, updateContatoSchema } from "../schemas";

export class ContatoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createContatoSchema.parse(req.body);
      const newContato = contatoRepository.create(validated);
      await contatoRepository.save(newContato);
      return res.status(201).json(newContato);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar contato", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const contatos = await contatoRepository.find({
        relations: ["pessoa", "responsavel"],
      });
      return res.status(200).json(contatos);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar contatos", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contato = await contatoRepository.findOneBy({
        id: Number(id),
      });
      if (!contato) {
        return res.status(404).json({ message: "Contato não encontrado" });
      }
      return res.status(200).json(contato);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar contato", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateContatoSchema.parse(req.body);
      const contato = await contatoRepository.findOneBy({
        id: Number(id),
      });
      if (!contato) {
        return res.status(404).json({ message: "Contato não encontrado" });
      }
      contatoRepository.merge(contato, validated);
      await contatoRepository.save(contato);
      return res.status(200).json(contato);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar contato", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contato = await contatoRepository.findOneBy({
        id: Number(id),
      });
      if (!contato) {
        return res.status(404).json({ message: "Contato não encontrado" });
      }
      await contatoRepository.delete(id);
      return res.status(200).json({ message: "Contato deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar contato", error });
    }
  }
}
