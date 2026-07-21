import { Request, Response } from "express";
import { afericaoBebeRepository } from "../repositories/AfericaoBebeRepository";
import { createAfericaoBebeSchema, updateAfericaoBebeSchema } from "../schemas";

export class AfericaoBebeController {
  async create(req: Request, res: Response) {
    try {
      const validated = createAfericaoBebeSchema.parse(req.body);
      const newAfericaoBebe = afericaoBebeRepository.create(validated);
      await afericaoBebeRepository.save(newAfericaoBebe);
      return res.status(201).json(newAfericaoBebe);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar afericaoBebe", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const afericaoBebes = await afericaoBebeRepository.find();
      return res.status(200).json(afericaoBebes);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar afericaoBebes", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const afericaoBebe = await afericaoBebeRepository.findOneBy({
        id: Number(id),
      });
      if (!afericaoBebe) {
        return res.status(404).json({ message: "AfericaoBebe não encontrado" });
      }
      return res.status(200).json(afericaoBebe);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar afericaoBebe", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateAfericaoBebeSchema.parse(req.body);
      const afericaoBebe = await afericaoBebeRepository.findOneBy({
        id: Number(id),
      });
      if (!afericaoBebe) {
        return res.status(404).json({ message: "AfericaoBebe não encontrado" });
      }
      afericaoBebeRepository.merge(afericaoBebe, validated);
      await afericaoBebeRepository.save(afericaoBebe);
      return res.status(200).json(afericaoBebe);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar afericaoBebe", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const afericaoBebe = await afericaoBebeRepository.findOneBy({
        id: Number(id),
      });
      if (!afericaoBebe) {
        return res.status(404).json({ message: "AfericaoBebe não encontrado" });
      }
      await afericaoBebeRepository.delete(id);
      return res
        .status(200)
        .json({ message: "AfericaoBebe deletado com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar afericaoBebe", error });
    }
  }
}
