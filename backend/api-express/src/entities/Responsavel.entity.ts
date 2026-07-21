import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Paciente } from "./Paciente.entity";
import { Contato } from "./Contato.entity";
import { Endereco } from "./Endereco.entity";

@Entity("responsaveis")
export class Responsavel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  parentesco: string;

  @Column()
  status: boolean;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @ManyToMany(() => Paciente, (paciente) => paciente.responsaveis)
  pacientes: Paciente[];

  @OneToMany(() => Contato, (contato) => contato.responsavel)
  contatos: Contato[];

  @OneToMany(() => Endereco, (endereco) => endereco.responsavel)
  enderecos: Endereco[];
}
