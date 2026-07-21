import { Request, Response } from "express";
import { agendamentoRepository } from "../repositories/AgendamentoRepository";
import { createAgendamentoSchema, updateAgendamentoSchema } from "../schemas";

export class AgendamentoController {
  async create(req: Request, res: Response) {
    try {
      const validated = createAgendamentoSchema.parse(req.body);
      const newAgendamento = agendamentoRepository.create(validated);
      await agendamentoRepository.save(newAgendamento);
      return res.status(201).json(newAgendamento);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar agendamento", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const agendamentos = await agendamentoRepository.find();
      return res.status(200).json(agendamentos);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar agendamentos", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const agendamento = await agendamentoRepository.findOneBy({
        id: Number(id),
      });
      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }
      return res.status(200).json(agendamento);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar agendamento", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateAgendamentoSchema.parse(req.body);
      const agendamento = await agendamentoRepository.findOneBy({
        id: Number(id),
      });
      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }
      agendamentoRepository.merge(agendamento, validated);
      await agendamentoRepository.save(agendamento);
      return res.status(200).json(agendamento);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar agendamento", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const agendamento = await agendamentoRepository.findOneBy({
        id: Number(id),
      });
      if (!agendamento) {
        return res.status(404).json({ message: "Agendamento não encontrado" });
      }
      await agendamentoRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Agendamento deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar agendamento", error });
    }
  }
}
