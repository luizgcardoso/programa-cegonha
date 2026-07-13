import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { Cidade } from "./Cidade"
import { Bebe } from "./Bebe"
import { Paciente } from "./Paciente"
import { Profissional } from "./Profissional"

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  nome: string

  @Column()
  dataNascimento: Date

  @Column()
  sexo: boolean

  @Column({ nullable: true }) // vai ser obrigatorio de acordo com o tipo de pessoa (profissional, paciente, bebe)
  profissao: string

  @Column()
  estadoCivil: string

  @Column()
  nacionalidade: string

  // @Column({ nullable: true })
  // nomeMae: string

  // @Column({ nullable: true })
  // nomePai: string

  @Column({ unique: true })
  cpf: string

  // @Column()
  // cep: string

  // @Column({ type: 'text' })
  // bairro: string

  // @Column({ type: 'text' })
  // logradouro: string

  // @Column()
  // numeroResidencial: string

  @Column({ nullable: true })
  email: string

  @Column()
  telefone: string

  @Column()
  tipoSanguineo: string

  @Column()
  comorbidades: string

  @Column()
  alergias: string

  @Column()
  dataCriacao: Date

  @Column({ nullable: true })
  dataAlteracao: Date

  @Column({ nullable: true })
  dataExclusao: Date

  @Column()
  status: boolean

  // @ManyToOne(() => Cidade, cidade => cidade.pessoas)
  // @JoinColumn({ name: 'cidades_idCidade' })
  // cidade: Cidade

  @OneToOne(() => Bebe, bebe => bebe.pessoa)
  bebe: Bebe

  @OneToOne(() => Paciente, paciente => paciente.pessoa)
  paciente: Paciente

  @OneToOne(() => Profissional, profissional => profissional.pessoa)
  profissional: Profissional

}