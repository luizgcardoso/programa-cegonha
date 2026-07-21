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
import { Responsavel } from "./Responsavel.entity";

@Entity("pacientes")
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hasResponsavel: boolean;

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
  status: boolean;

  @OneToOne(() => Pessoa, (pessoa) => pessoa.paciente)
  @JoinColumn({ name: "pessoas_idPessoas" })
  pessoa: Pessoa;

  @OneToMany(() => Gestacao, (gestacao) => gestacao.paciente)
  gestacoes: Gestacao[];

  @ManyToMany(() => Responsavel, (responsavel) => responsavel.pacientes, {
    nullable: true,
  })
  @JoinTable({
    name: "pacientes_responsaveis",
    joinColumn: { name: "paciente_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "responsavel_id", referencedColumnName: "id" },
  })
  responsaveis: Responsavel[];
}
