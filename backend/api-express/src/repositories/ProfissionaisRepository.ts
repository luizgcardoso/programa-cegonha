import { AppDataSource } from "../database/data-source";
import { Profissional } from "../entities/Profissional.entity";

export const profissionaisRepository =
  AppDataSource.getRepository(Profissional);
