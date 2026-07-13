import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Paciente } from "./Paciente";

@Entity('exames')
export class Exame {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  tipo: string;

  @Column()
  data: Date;

  @Column()
  urlAnexo: string;

  @Column()
  formatoAnexo: string;

  @Column()
  dataUpload: Date;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @ManyToOne(() => Paciente, paciente => paciente.gestacoes)
  @JoinColumn({ name: 'pacientes_idPaciente' })
  paciente: Paciente;

}