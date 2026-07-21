import { AppDataSource } from "../database/data-source";
import { ConsultaAbertura } from "../entities/ConsultaAbertura.entity";

export const consultaAberturaRepository =
  AppDataSource.getRepository(ConsultaAbertura);
