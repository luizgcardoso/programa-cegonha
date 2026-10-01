import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Paciente } from "./Paciente.entity";

@Entity("agendamentos")
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  hora: string;

  @Column({ nullable: true })
  dataRetorno: Date;

  @Column({ nullable: true })
  horaRetorno: string;

  @Column()
  status: boolean;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @DeleteDateColumn({ nullable: true })
  dataExclusao: Date;

  @OneToOne(() => Paciente, (paciente) => paciente.acompanhamento, { nullable: true })
  paciente: Paciente;
}
