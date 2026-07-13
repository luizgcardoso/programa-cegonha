import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Profissional } from "./Profissional";
import { Agendamento } from "./Agendamento";

@Entity('visitas')
export class Visita {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // data: Date;

  // @Column()
  // hora: string;

  // @Column({ nullable: true })
  // dataRetorno: Date;

  @Column()
  faseAcompanhamento: string;

  @Column({ nullable: true })
  pressaoArterial: string;

  // @Column({ type: 'text', nullable: true })
  // historicoVacinacoes: string;

  @Column({ type: 'text', nullable: true })
  observacao: string;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @Column()
  status: boolean;

  @ManyToOne(() => Agendamento, agendamento => agendamento.avaliacoes)
  @JoinColumn({ name: 'agendamentos_idAgendamento' })
  agendamento: Agendamento;

  @ManyToOne(() => Paciente, paciente => paciente.visitas)
  @JoinColumn({ name: 'pacientes_idPacientes' })
  paciente: Paciente;

  @ManyToOne(() => Profissional, profissional => profissional.visitas)
  @JoinColumn({ name: 'profissionais_idProfissionais' })
  profissional: Profissional;
}