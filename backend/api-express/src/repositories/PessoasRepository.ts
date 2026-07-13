import { AppDataSource } from "../database/data-source";
import { Pessoa } from "../entities/Pessoa";

export const pessoasRepository = AppDataSource.getRepository(Pessoa);