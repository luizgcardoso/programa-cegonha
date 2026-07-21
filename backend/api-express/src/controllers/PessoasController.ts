import { Request, Response } from "express";
import { pessoasRepository } from "../repositories/PessoasRepository";
import { createPessoaSchema, updatePessoaSchema } from "../schemas";
export class PessoasController {
  async create(req: Request, res: Response) {
    try {
      const validated = createPessoaSchema.parse(req.body);
      const newPessoa = pessoasRepository.create(validated);
      await pessoasRepository.save(newPessoa);
      return res.status(201).json(newPessoa);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar pessoa", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const pessoas = await pessoasRepository.find();
      return res.status(200).json(pessoas);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar pessoas", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pessoa = await pessoasRepository.findOneBy({ id: Number(id) });
      if (!pessoa) {
        return res.status(404).json({ message: "Pessoa não encontrada" });
      }
      return res.status(200).json(pessoa);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao buscar pessoa", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updatePessoaSchema.parse(req.body);
      const pessoa = await pessoasRepository.findOneBy({ id: Number(id) });
      if (!pessoa) {
        return res.status(404).json({ message: "Pessoa não encontrada" });
      }
      pessoasRepository.merge(pessoa, validated);
      await pessoasRepository.save(pessoa);
      return res.status(200).json(pessoa);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar pessoa", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pessoa = await pessoasRepository.findOneBy({ id: Number(id) });
      if (!pessoa) {
        return res.status(404).json({ message: "Pessoa não encontrada" });
      }
      await pessoasRepository.update(id, {
        dataExclusao: new Date(),
        status: false,
      });
      await pessoasRepository.softDelete(id);
      return res.status(200).json({ message: "Pessoa deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro ao deletar pessoa", error });
    }
  }
}
