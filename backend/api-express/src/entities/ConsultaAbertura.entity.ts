import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { Profissional } from "./Profissional.entity";
import { Agendamento } from "./Agendamento.entity";
import { Gestacao } from "./Gestacao.entity";
import { AfericaoGestante } from "./AfericaoGestante.entity";

@Entity("consultasAbertura")
export class ConsultaAbertura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abortos: number;

  @Column()
  natimortos: number;

  @Column() // true: vulnerabilidade, false: habitual
  nivelRisco: boolean;

  @Column()
  dataUltimaMenstruacao: Date;

  @Column()
  idadeGestacional: number;

  @Column({ type: "text", nullable: true })
  comorbidades: string;

  @Column({ type: "text", nullable: true })
  prescricaoExames: string;

  @Column({ type: "text", nullable: true })
  prescricaoPreventivos: string;

  @Column({ type: "text", nullable: true })
  sintomas: string;

  @Column({ type: "text", nullable: true })
  observacoes: string;

  @Column() // realizada, pendente
  status: boolean;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @OneToOne(() => Gestacao, (gestacao) => gestacao.consultaAbertura)
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;

  @OneToOne(() => Agendamento, (agendamento) => agendamento.consultaAbertura)
  @JoinColumn({ name: "idAgendamento" })
  agendamento: Agendamento;

  @ManyToOne(
    () => Profissional,
    (profissional) => profissional.consultaAbertura,
  )
  @JoinColumn({ name: "idProfissional" })
  profissional: Profissional;

  @OneToOne(
    () => AfericaoGestante,
    (afericaoGestante) => afericaoGestante.consultaAbertura,
  )
  @JoinColumn({ name: "idAfericaoGestante" })
  afericaoGestante: AfericaoGestante;
}
