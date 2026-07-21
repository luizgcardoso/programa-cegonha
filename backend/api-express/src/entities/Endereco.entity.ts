import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Cidade } from "./Cidade.entity";
import { Pessoa } from "./Pessoa.entity";
import { Responsavel } from "./Responsavel.entity";

@Entity("enderecos")
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isResponsavel: boolean;

  @Column()
  logradouro: string;

  @Column()
  numeroResidencial: string;

  @Column()
  cep: string;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  status: boolean;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.enderecos, { nullable: true })
  @JoinColumn({ name: "idPessoa" })
  pessoa: Pessoa;

  @ManyToOne(() => Responsavel, (responsavel) => responsavel.enderecos, {
    nullable: true,
  })
  @JoinColumn({ name: "idResponsavel" })
  responsavel: Responsavel;

  @ManyToOne(() => Cidade, (cidade) => cidade.enderecos)
  @JoinColumn({ name: "idCidade" })
  cidade: Cidade;
}
