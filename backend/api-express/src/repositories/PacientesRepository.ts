import { AppDataSource } from "../database/data-source";
import { Paciente } from "../entities/Paciente.entity";

export const pacientesRepository = AppDataSource.getRepository(Paciente);