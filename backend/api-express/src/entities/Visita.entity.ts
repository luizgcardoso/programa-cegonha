import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { Paciente } from "./Paciente.entity";
import { Profissional } from "./Profissional.entity";
import { Agendamento } from "./Agendamento.entity";
import { Gestacao } from "./Gestacao.entity";

@Entity("visitas")
export class Visita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ultimaConsultaRealizada: Date;

  @Column({ nullable: true })
  pressaoArterial: number;

  @Column()
  movimentosFetais: boolean;

  @Column({ type: "text", nullable: true })
  vulnerabilidades: string;

  @Column({ type: "text", nullable: true })
  observacoes: string;

  @Column({ type: "text", nullable: true })
  recomendacoes: string;

  @Column() // realizada, pendente
  status: boolean;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @OneToOne(() => Agendamento, (agendamento) => agendamento.visitas)
  @JoinColumn({ name: "idAgendamento" })
  agendamento: Agendamento;

  @ManyToOne(() => Gestacao, (gestacao) => gestacao.visitas)
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;

  @ManyToOne(() => Profissional, (profissional) => profissional.visitas)
  @JoinColumn({ name: "idProfissionais" })
  profissional: Profissional;
}
