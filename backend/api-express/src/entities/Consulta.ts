import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToMany, ManyToOne, CreateDateColumn, OneToMany, OneToOne } from "typeorm";
import { Bebe } from "./Bebe";
import { Paciente } from "./Paciente";
import { Profissional } from "./Profissional";
import { Timestamp } from "typeorm/browser/driver/mongodb/typings.js";
import { ConsultaPreNatal } from "./ConsultaPreNatal";
import { ConsultaBebe } from "./ConsultaBebe";
import { Agendamento } from "./Agendamento";

@Entity('consultas')
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoConsulta: boolean; // true = presencial, false = remota

  // @Column()
  // data: Date;

  // @Column()
  // hora: string;

  @Column()
  dataRetorno: Date;

  @Column()
  horaRetorno: string;

  @Column()
  pressaoArterial: string;

  @Column()
  frequenciaCardiaca: string;

  @Column()
  pesoPaciente: number;

  @Column()
  glicose: number;

  @Column()
  diagnostico: string;

  @Column()
  sintomas: string;

  @Column()
  prescricao: string;

  @Column()
  riscoPaciente: string;

  // @Column() //gestante, puerpera ou bebê
  // tipoPaciente: string;

  // // (caso seja consulta de gestante)
  // @Column({ nullable: true })
  // historicoGestacional: string;

  // @Column({ nullable: true })
  // idadeGestacional: number;

  // @Column({ nullable: true })
  // ultimaMenstruacao: Date;

  // (caso seja consulta de bebê)
  // @Column({ nullable: true })
  // alturaBebe: number;

  // @Column({ nullable: true })
  // pesoBebe: number;

  // @Column({ nullable: true })
  // cranioCefalico: number;

  // @Column({ nullable: true })
  // testeApgar: string;


  @Column({ nullable: true })
  observacao: string;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @Column()
  status: boolean;

  @ManyToOne(() => Paciente, paciente => paciente.consultas)
  @JoinColumn({ name: 'pacientes_idPaciente' })
  paciente: Paciente;

  // @ManyToOne(() => Bebe, bebe => bebe.consultas)
  // @JoinColumn({ name: 'bebes_idBebe' })
  // bebe: Bebe;


  @ManyToOne(() => Agendamento, agendamento => agendamento.avaliacoes)
  @JoinColumn({ name: 'agendamentos_idAgendamento' })
  agendamento: Agendamento;

  @ManyToOne(() => Profissional, profissional => profissional.consultas)
  @JoinColumn({ name: 'profissionais_idProfissional' })
  profissional: Profissional;

  @OneToOne(() => ConsultaPreNatal, consultaPreNatal => consultaPreNatal.consulta)
  consultaPreNatal: ConsultaPreNatal;

  @OneToOne(() => ConsultaBebe, consultaBebe => consultaBebe.consulta)
  consultaBebe: ConsultaBebe;
}