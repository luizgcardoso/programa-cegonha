import { AppDataSource } from "../database/data-source";
import { Agendamento } from "../entities/Agendamento.entity";

export const agendamentoRepository = AppDataSource.getRepository(Agendamento);
