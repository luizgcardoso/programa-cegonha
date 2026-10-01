import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  JoinTable,
  DeleteDateColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa.entity";
import { Gestacao } from "./Gestacao.entity";
import { Acompanhamento } from "./Acompanhamento.entity";

@Entity("pacientes")
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hasResponsavel: boolean;

  @Column({ nullable: true })
  nomeResponsavel: string;

  @Column({ nullable: true })
  telefoneResponsavel: string;

  // @Column()
  // qtdGestacoes: number;

  @Column()
  tipoSanguineo: string;

  @Column({ nullable: true })
  alergias: string;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @DeleteDateColumn({ nullable: true })
  dataExclusao: Date;

  @Column()
  status: string;

  @OneToOne(() => Pessoa, (pessoa) => pessoa.paciente)
  @JoinColumn({ name: "pessoas_idPessoas" })
  pessoa: Pessoa;

  @OneToMany(() => Gestacao, (gestacao) => gestacao.paciente)
  gestacoes: Gestacao[];

  @OneToOne(() => Acompanhamento, (acompanhamento) => acompanhamento.paciente)
  acompanhamento: Acompanhamento;
}
