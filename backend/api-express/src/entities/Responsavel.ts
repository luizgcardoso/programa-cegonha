import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Paciente } from "./Paciente";

@Entity('responsaveis')
export class Responsavel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  parentesco: string;

  @Column()
  status: boolean;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @ManyToMany(() => Paciente, paciente => paciente.responsaveis)
  pacientes: Paciente[];

}