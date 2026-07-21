import { AppDataSource } from "../database/data-source";
import { AfericaoGestante } from "../entities/AfericaoGestante.entity";

export const afericaoGestanteRepository =
  AppDataSource.getRepository(AfericaoGestante);
