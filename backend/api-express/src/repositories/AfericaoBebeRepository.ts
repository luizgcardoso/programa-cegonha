import { AppDataSource } from "../database/data-source";
import { AfericaoBebe } from "../entities/AfericaoBebe.entity";

export const afericaoBebeRepository = AppDataSource.getRepository(AfericaoBebe);
