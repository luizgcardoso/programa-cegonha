import { AppDataSource } from "../database/data-source";
import { Estado } from "../entities/Estado";

export const estadosRepository = AppDataSource.getRepository(Estado);
