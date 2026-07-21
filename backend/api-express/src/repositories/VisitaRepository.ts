import { AppDataSource } from "../database/data-source";
import { Visita } from "../entities/Visita.entity";

export const visitaRepository = AppDataSource.getRepository(Visita);
