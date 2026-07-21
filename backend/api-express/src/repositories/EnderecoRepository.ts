import { AppDataSource } from "../database/data-source";
import { Endereco } from "../entities/Endereco.entity";

export const enderecoRepository = AppDataSource.getRepository(Endereco);
