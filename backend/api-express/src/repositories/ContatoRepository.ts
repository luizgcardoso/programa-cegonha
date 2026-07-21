import { AppDataSource } from "../database/data-source";
import { Contato } from "../entities/Contato.entity";

export const contatoRepository = AppDataSource.getRepository(Contato);
