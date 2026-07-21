import { AppDataSource } from "../database/data-source";
import { Pessoa } from "../entities/Pessoa.entity";

export const pessoasRepository = AppDataSource.getRepository(Pessoa);
