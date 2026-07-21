import { AppDataSource } from "../database/data-source";
import { ConsultaPreNatal } from "../entities/ConsultaPreNatal.entity";

export const consultaPreNatalRepository =
  AppDataSource.getRepository(ConsultaPreNatal);
