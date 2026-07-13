import { Request, Response } from 'express';
import { estadosRepository } from '../repositories/EstadosRepository';
export class EstadosController {
  async create(req: Request, res: Response) {
    const { nome, sigla, status } = req.body;

    try {
      const newEstado = estadosRepository.create({
        nome,
        sigla,
        status
      });
      console.log(newEstado);
      await estadosRepository.save(newEstado);
      return res.status(201).json(newEstado);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro ao criar estado', error });
    }
  }
}