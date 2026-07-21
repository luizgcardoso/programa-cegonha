import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Profissional } from "./Profissional.entity";
import { Agendamento } from "./Agendamento.entity";
import { Gestacao } from "./Gestacao.entity";
import { AfericaoGestante } from "./AfericaoGestante.entity";

@Entity("consultasPreNatal")
export class ConsultaPreNatal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // true: vulnerabilidade, false: habitual
  nivelRisco: boolean;

  @Column()
  dataUltimaMenstruacao: Date;

  @Column()
  idadeGestacional: number;

  @Column() // realizada, pendente
  status: boolean;

  @Column({ type: "text", nullable: true })
  sintomas: string;

  @Column({ type: "text", nullable: true })
  observacoes: string;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @ManyToOne(() => Gestacao, (gestacao) => gestacao.consultasPreNatal)
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;

  @OneToOne(() => Agendamento, (agendamento) => agendamento.consultasPreNatal)
  @JoinColumn({ name: "idAgendamento" })
  agendamento: Agendamento;

  @ManyToOne(
    () => Profissional,
    (profissional) => profissional.consultasPreNatal,
  )
  @JoinColumn({ name: "idProfissional" })
  profissional: Profissional;

  @OneToOne(() => AfericaoGestante, (afericao) => afericao.consultaPreNatal)
  @JoinColumn({ name: "idAfericaoGestante" })
  afericaoGestante: AfericaoGestante;
}
