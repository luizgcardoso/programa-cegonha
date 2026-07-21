import { AppDataSource } from "../database/data-source";
import { Cidade } from "../entities/Cidade.entity";

export const cidadeRepository = AppDataSource.getRepository(Cidade);
