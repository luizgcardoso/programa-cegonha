import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Estado } from "./Estado.entity";
import { Pessoa } from "./Pessoa.entity";
import { Endereco } from "./Endereco.entity";

@Entity("cidades")
export class Cidade {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  status: boolean;

  @OneToMany(() => Endereco, (endereco) => endereco.cidade)
  enderecos: Endereco[];

  @ManyToOne(() => Estado, (estado) => estado.cidades)
  @JoinColumn({ name: "idEstado" })
  estado: Estado;
}
