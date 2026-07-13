import { Column, CreateDateColumn, DataTypeNotSupportedError, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bebe } from "./Bebe";
import { Paciente } from "./Paciente";

@Entity('gestacoes')
export class Gestacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataUltimaMenstruacao: Date;

  @Column()
  dataProvavelParto: Date;

  @Column({ nullable: true })
  dataParto: Date;

  @Column({ nullable: true })
  tipoParto: boolean; // true = parto normal, false = cesariana

  @Column()
  status: boolean;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @ManyToOne(() => Paciente, paciente => paciente.gestacoes)
  @JoinColumn({ name: 'pacientes_idPaciente' })
  paciente: Paciente;

  @OneToMany(() => Bebe, bebe => bebe.gestacao)
  bebes: Bebe[]
}