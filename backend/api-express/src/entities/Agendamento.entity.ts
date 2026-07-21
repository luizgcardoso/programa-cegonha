import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AvaliacaoOdonto } from "./AvaliacaoOdonto.entity";
import { Visita } from "./Visita.entity";
import { ConsultaPreNatal } from "./ConsultaPreNatal.entity";
import { ConsultaAbertura } from "./ConsultaAbertura.entity";
import { VisitaRecemNascido } from "./VisitaRecemNascido.entity";

@Entity("agendamentos")
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  hora: string;

  @Column({ nullable: true })
  dataRetorno: Date;

  @Column({ nullable: true })
  horaRetorno: string;

  @Column()
  status: boolean;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @Column({ nullable: true })
  dataExclusao: Date;

  @OneToOne(() => AvaliacaoOdonto, (avaliacao) => avaliacao.agendamento)
  avaliacoes: AvaliacaoOdonto;

  @OneToOne(
    () => VisitaRecemNascido,
    (visitaRecemNascido) => visitaRecemNascido.agendamento,
  )
  visitaRecemNascido: VisitaRecemNascido;

  @OneToOne(() => Visita, (visita) => visita.agendamento)
  visitas: Visita;

  @OneToOne(
    () => ConsultaPreNatal,
    (consultasPreNatal) => consultasPreNatal.agendamento,
  )
  consultasPreNatal: ConsultaPreNatal;

  @OneToOne(
    () => ConsultaAbertura,
    (consultaAbertura) => consultaAbertura.agendamento,
  )
  consultaAbertura: ConsultaAbertura;
}
