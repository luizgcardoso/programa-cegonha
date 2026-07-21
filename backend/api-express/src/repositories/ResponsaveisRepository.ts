import { AppDataSource } from "../database/data-source";
import { Responsavel } from "../entities/Responsavel.entity";

export const responsaveisRepository = AppDataSource.getRepository(Responsavel);
