import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  OneToOne,
  DeleteDateColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa.entity";
import { Visita } from "./Visita.entity";

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

  @Column() //enum
  areaCobertura: string;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @DeleteDateColumn({ nullable: true })
  dataExclusao: Date;

  @Column()
  status: string;

  @OneToOne(() => Pessoa, (pessoa) => pessoa.profissional)
  @JoinColumn({ name: "pessoas_idPessoas" })
  pessoa: Pessoa;
}
