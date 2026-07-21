import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa.entity";
import { Responsavel } from "./Responsavel.entity";

@Entity("contatos")
export class Contato {
  @PrimaryGeneratedColumn()
  id: string;

  @Column() //true: pessoa, false: responsavel
  titular: boolean;

  @Column({ nullable: true })
  email: string;

  @Column()
  telefonePrincipal: string;

  @Column({ nullable: true })
  telefoneSecundario: string;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.contatos, { nullable: true })
  @JoinColumn({ name: "idPessoa" })
  pessoa: Pessoa;

  @ManyToOne(() => Responsavel, (responsavel) => responsavel.contatos, {
    nullable: true,
  })
  @JoinColumn({ name: "idResponsavel" })
  responsavel: Responsavel;
}
