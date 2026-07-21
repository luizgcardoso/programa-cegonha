import { Request, Response } from "express";
import { pacientesRepository } from "../repositories/PacientesRepository";
import { createPacienteSchema, updatePacienteSchema } from "../schemas";

export class PacientesController {
  async create(req: Request, res: Response) {
    try {
      const validated = createPacienteSchema.parse(req.body);
      const newPaciente = pacientesRepository.create(validated);
      await pacientesRepository.save(newPaciente);
      return res.status(201).json(newPaciente);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Erro ao criar paciente", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const pacientes = await pacientesRepository.find({
        relations: ["pessoa", "gestacoes", "responsaveis"],
      });
      return res.status(200).json(pacientes);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar pacientes", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const paciente = await pacientesRepository.findOneBy({ id: Number(id) });
      if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
      }
      return res.status(200).json(paciente);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar paciente", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updatePacienteSchema.parse(req.body);
      const paciente = await pacientesRepository.findOneBy({ id: Number(id) });
      if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
      }
      pacientesRepository.merge(paciente, validated);
      await pacientesRepository.save(paciente);
      return res.status(200).json(paciente);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar paciente", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const paciente = await pacientesRepository.findOneBy({ id: Number(id) });
      if (!paciente) {
        return res.status(404).json({ message: "Paciente não encontrado" });
      }
      await pacientesRepository.delete(id);
      return res.status(200).json({ message: "Paciente deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar paciente", error });
    }
  }
}
