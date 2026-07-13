import { AppDataSource } from "../database/data-source";
import { Paciente } from "../entities/Paciente";

export const pacientesRepository = AppDataSource.getRepository(Paciente);