import { Request, Response } from "express";
import { areaCoberturaRepository } from "../repositories/AreaCoberturaRepository";
import {
  createAreaCoberturaSchema,
  updateAreaCoberturaSchema,
} from "../schemas";

export class AreaCoberturaController {
  async create(req: Request, res: Response) {
    try {
      const validated = createAreaCoberturaSchema.parse(req.body);
      const newAreaCobertura = areaCoberturaRepository.create(validated);
      await areaCoberturaRepository.save(newAreaCobertura);
      return res.status(201).json(newAreaCobertura);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao criar área de cobertura", error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const areasCoberturas = await areaCoberturaRepository.find({
        relations: ["profissional"],
      });
      return res.status(200).json(areasCoberturas);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar áreas de cobertura", error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const areaCobertura = await areaCoberturaRepository.findOneBy({
        id: Number(id),
      });
      if (!areaCobertura) {
        return res
          .status(404)
          .json({ message: "Área de cobertura não encontrada" });
      }
      return res.status(200).json(areaCobertura);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar área de cobertura", error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const validated = updateAreaCoberturaSchema.parse(req.body);
      const areaCobertura = await areaCoberturaRepository.findOneBy({
        id: Number(id),
      });
      if (!areaCobertura) {
        return res
          .status(404)
          .json({ message: "Área de cobertura não encontrada" });
      }
      areaCoberturaRepository.merge(areaCobertura, validated);
      await areaCoberturaRepository.save(areaCobertura);
      return res.status(200).json(areaCobertura);
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Erro ao atualizar área de cobertura", error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const areaCobertura = await areaCoberturaRepository.findOneBy({
        id: Number(id),
      });
      if (!areaCobertura) {
        return res
          .status(404)
          .json({ message: "Área de cobertura não encontrada" });
      }
      await areaCoberturaRepository.delete(id);
      return res
        .status(200)
        .json({ message: "Área de cobertura deletada com sucesso" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro ao deletar área de cobertura", error });
    }
  }
}
