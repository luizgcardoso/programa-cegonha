import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  DeleteDateColumn,
} from "typeorm";
import { Paciente } from "./Paciente.entity";
import { Profissional } from "./Profissional.entity";

@Entity("pessoas")
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // true: profissional, false: paciente
  tipoPessoa: boolean;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  dataNascimento: Date;

  @Column() // true: masculino, false: feminino
  sexo: boolean;

  @Column()
  estadoCivil: string;

  @Column()
  nacionalidade: string;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @DeleteDateColumn({ nullable: true })
  dataExclusao: Date;

  @Column()
  status: string;

  @OneToOne(() => Paciente, (paciente) => paciente.pessoa, { nullable: true })
  paciente: Paciente;

  @OneToOne(() => Profissional, (profissional) => profissional.pessoa, {
    nullable: true,
  })
  profissional: Profissional;
}
