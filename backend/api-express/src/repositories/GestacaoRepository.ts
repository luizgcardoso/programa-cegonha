import { AppDataSource } from "../database/data-source";
import { Gestacao } from "../entities/Gestacao.entity";

export const gestacaoRepository = AppDataSource.getRepository(Gestacao);
