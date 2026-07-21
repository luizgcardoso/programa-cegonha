import { AppDataSource } from "../database/data-source";
import { AvaliacaoOdonto } from "../entities/AvaliacaoOdonto.entity";

export const avaliacaoOdontoRepository =
  AppDataSource.getRepository(AvaliacaoOdonto);
