import { AppDataSource } from "../database/data-source";
import { Vacinacao } from "../entities/Vacinacao.entity";

export const vacinacaoRepository = AppDataSource.getRepository(Vacinacao);
