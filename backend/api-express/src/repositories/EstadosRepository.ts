import { AppDataSource } from "../database/data-source";
import { Estado } from "../entities/Estado.entity";

export const estadosRepository = AppDataSource.getRepository(Estado);
