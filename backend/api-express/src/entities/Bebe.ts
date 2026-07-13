import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany, ManyToOne, OneToOne, CreateDateColumn } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Paciente } from "./Paciente";
import { Consulta } from "./Consulta";
import { Gestacao } from "./Gestacao";
import { ConsultaBebe } from "./ConsultaBebe";

@Entity('bebes')
export class Bebe {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  dataNascimento: Date

  @Column()
  horaNascimento: Date

  @Column()
  pesoNascimento: number

  @Column()
  sexo: boolean

  @Column() // true = parto normal, false = cesariana
  tipoParto: boolean

  @Column() // altura do bebê
  comprimentoNascimento: number

  @Column()
  apgar: number

  @Column()
  primeiraConsulta: Date

  @Column({ type: 'text', nullable: true })
  observacoes: string

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @Column()
  status: boolean

  @OneToOne(() => Pessoa, pessoa => pessoa.bebe)
  @JoinColumn({ name: 'pessoas_idPessoa' })
  pessoa: Pessoa

  // @ManyToOne(() => Paciente, paciente => paciente.bebes)
  // @JoinColumn({ name: 'pacientes_idPaciente' })
  // paciente: Paciente

  // @OneToMany(() => Consulta, consulta => consulta.bebe)
  // consultas: Consulta[]

  @OneToMany(() => ConsultaBebe, consultaBebe => consultaBebe.bebe)
  consultasBebes: ConsultaBebe[];

  @ManyToOne(() => Gestacao, gestacao => gestacao.bebes)
  @JoinColumn({ name: 'gestacoes_idGestacao' })
  gestacao: Gestacao
}

