import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToMany, ManyToOne, CreateDateColumn } from "typeorm";
import { Paciente } from "./Paciente";
import { Profissional } from "./Profissional";
import { Agendamento } from "./Agendamento";

@Entity('avaliacoes_odonto')
export class AvaliacaoOdonto {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // data: Date;

  // @Column()
  // hora: string;

  @Column({ type: 'text' })
  resultado: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @Column()
  status: boolean;

  @ManyToOne(() => Agendamento, agendamento => agendamento.avaliacoes)
  @JoinColumn({ name: 'agendamentos_idAgendamento' })
  agendamento: Agendamento;

  @ManyToOne(() => Paciente, paciente => paciente.avaliacoesOdonto)
  @JoinColumn({ name: 'pacientes_idPaciente' })
  paciente: Paciente;

  @ManyToOne(() => Profissional, profissional => profissional.avaliacoesOdonto)
  @JoinColumn({ name: 'profissionais_idProfissional' })
  profissionais: Profissional;
}