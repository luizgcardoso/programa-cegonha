import { AppDataSource } from "../database/data-source";
import { Bebe } from "../entities/Bebe.entity";

export const bebesRepository = AppDataSource.getRepository(Bebe);
