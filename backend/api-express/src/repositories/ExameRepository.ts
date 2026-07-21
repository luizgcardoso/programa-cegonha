import { AppDataSource } from "../database/data-source";
import { Exame } from "../entities/Exame.entity";

export const exameRepository = AppDataSource.getRepository(Exame);
