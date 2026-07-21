import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Cidade } from "./Cidade.entity";

@Entity("estados")
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sigla: string;

  @Column()
  status: boolean;

  @OneToMany(() => Cidade, (cidade) => cidade.estado)
  cidades: Cidade[];
}
