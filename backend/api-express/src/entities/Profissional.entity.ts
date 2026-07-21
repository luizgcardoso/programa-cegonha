import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Pessoa } from "./Pessoa.entity";
import { AvaliacaoOdonto } from "./AvaliacaoOdonto.entity";
import { Visita } from "./Visita.entity";
import { AreaCobertura } from "./AreaCobertura.entity";
import { VisitaRecemNascido } from "./VisitaRecemNascido.entity";
import { ConsultaPreNatal } from "./ConsultaPreNatal.entity";
import { ConsultaAbertura } from "./ConsultaAbertura.entity";

@Entity("profissionais")
export class Profissional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  matricula: string;

  @Column() //enum
  cargo: string;

  @Column()
  equipe: string;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @Column({ nullable: true })
  dataExclusao: Date;

  @Column()
  status: boolean;

  @OneToOne(() => Pessoa, (pessoa) => pessoa.profissional)
  @JoinColumn({ name: "pessoas_idPessoas" })
  pessoa: Pessoa;

  @OneToMany(
    () => AvaliacaoOdonto,
    (avaliacaoOdonto) => avaliacaoOdonto.profissionais,
  )
  avaliacoesOdonto: AvaliacaoOdonto[];

  @OneToMany(() => Visita, (visita) => visita.profissional)
  visitas: Visita[];

  @OneToMany(
    () => ConsultaPreNatal,
    (consultaPreNatal) => consultaPreNatal.profissional,
  )
  consultasPreNatal: ConsultaPreNatal[];

  @OneToMany(
    () => ConsultaAbertura,
    (consultaAbertura) => consultaAbertura.profissional,
  )
  consultaAbertura: ConsultaAbertura;

  @OneToMany(
    () => VisitaRecemNascido,
    (visitaRecemNascido) => visitaRecemNascido.profissional,
  )
  visitaRecemNascido: VisitaRecemNascido;

  @OneToOne(() => AreaCobertura, (areaCobertura) => areaCobertura.profissional)
  @JoinColumn({ name: "idAreaCobertura" })
  areaCobertura: AreaCobertura;
}
