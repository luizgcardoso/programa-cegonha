import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinColumn, CreateDateColumn } from "typeorm";
import { Vacina } from "./Vacina";
import { Pessoa } from "./Pessoa";
import { Profissional } from "./Profissional";
import { Paciente } from "./Paciente";

@Entity('vacinacoes')
export class Vacinacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataAplicacao: Date;

  @Column() //gestante, puerpera ou bebê
  tipoPaciente: string

  @Column({ nullable: true })
  idadeGestacional: string;

  /* 
  analisar
  
    @Column({ nullable: true })
    semanasBebe: number;
  */
  @Column({ nullable: true })
  observacao: string;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @Column()
  status: boolean;

  @ManyToMany(() => Vacina, vacina => vacina.vacinacao)
  vacinas: Vacina[];

  @ManyToOne(() => Paciente, paciente => paciente.vacinacoes)
  @JoinColumn({ name: 'pacientes_idPaciente' })
  paciente: Paciente;

  /*
   analisar necessidade

  @ManyToOne(() => Bebe, bebe => bebe.vacinacoes)
  @JoinColumn({ name: 'bebes_idBebe'})
  bebe: Bebe;
*/

  @ManyToOne(() => Profissional, profissional => profissional.vacinacoes)
  @JoinColumn({ name: 'profissionais_idProfissional' })
  profissional: Profissional;
}