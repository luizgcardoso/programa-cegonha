import { AppDataSource } from "../database/data-source";
import { VisitaRecemNascido } from "../entities/VisitaRecemNascido.entity";

export const visitaRecemNascidoRepository =
  AppDataSource.getRepository(VisitaRecemNascido);
