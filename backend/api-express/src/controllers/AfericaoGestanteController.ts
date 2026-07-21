import { Request, Response } from "express";
import { afericaoGestanteRepository } from "../repositories/AfericaoGestanteRepository";
import {
  createAfericaoGestanteSchema,
  updateAfericaoGestanteSchema,
} from "../schemas";

export class AfericaoGestanteController {
  async create(req: Request, res: Response) {
    try {
      const validated = createAfericaoGestanteSchema.parse(req.body);
      const newAfericaoGestante = afericaoGestanteRepository.create(validated);
      await afericaoGestanteRepository.save(newAfericaoGestante);
      return res.status(201).json(newAfericaoGestante);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar afericaoGestante", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const afericaoGestantes = await afericaoGestanteRepository.find();
      return res.status(200).json(afericaoGestantes);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar afericaoGestantes", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const afericaoGestante = await afericaoGestanteRepository.findOneBy({
        id: Number(id),
      });
      if (!afericaoGestante) {
        return res
          .status(404)
          .json({ message: "AfericaoGestante não encontrado" });
      }
      return res.status(200).json(afericaoGestante);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar afericaoGestante", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateAfericaoGestanteSchema.parse(req.body);
      const afericaoGestante = await afericaoGestanteRepository.findOneBy({
        id: Number(id),
      });
      if (!afericaoGestante) {
        return res
          .status(404)
          .json({ message: "AfericaoGestante não encontrado" });
      }
      afericaoGestanteRepository.merge(afericaoGestante, validated);
      await afericaoGestanteRepository.save(afericaoGestante);
      return res.status(200).json(afericaoGestante);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar afericaoGestante", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const afericaoGestante = await afericaoGestanteRepository.findOneBy({
        id: Number(id),
      });
      if (!afericaoGestante) {
        return res
          .status(404)
          .json({ message: "AfericaoGestante não encontrado" });
      }
      await afericaoGestanteRepository.delete(id);
      return res
        .status(200)
        .json({ message: "AfericaoGestante deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar afericaoGestante", error });
    }
  }
}
