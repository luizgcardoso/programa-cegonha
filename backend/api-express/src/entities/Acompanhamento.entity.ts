import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Paciente } from "./Paciente.entity";
import { Profissional } from "./Profissional.entity";

@Entity("acompanhamentos")
export class Acompanhamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // true: vulnerabilidade, false: habitual
  nivelRisco: string;

  @Column()
  quantidadeVisitasRealizadas: number;

  @Column()
  quantidadeConsultasRealizadas: number;

  @Column()
  examesRealizados: string;

  @Column()
  vacinacoesRealizadas: string;

  @Column()
  hasAvaliacaoOdontologica: boolean;

  @Column()
  observacoes: string;

  @Column()
  status: string;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @DeleteDateColumn({ nullable: true })
  dataExclusao: Date;

  @OneToOne(() => Paciente, (paciente) => paciente.acompanhamento)
  @JoinColumn({ name: "pacientes_idPaciente" })
  paciente: Paciente;

  @OneToOne(() => Profissional, (profissional) => profissional.acompanhamento)
  @JoinColumn({ name: "profissionais_idProfissional" })
  profissional: Profissional;
}
