import { AppDataSource } from "../database/data-source";
import { AreaCobertura } from "../entities/AreaCobertura.entity";

export const areaCoberturaRepository =
  AppDataSource.getRepository(AreaCobertura);
