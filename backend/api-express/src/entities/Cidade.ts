import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Estado } from "./Estado"
import { Pessoa } from "./Pessoa"
import { Endereco } from "./Endereco"

@Entity('cidades')
export class Cidade {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  nome: string

  // @Column()
  // dataCriacao: Timestamp

  // @Column({nullable: true})
  // dataAlteracao: Timestamp

  // @Column({nullable: true})
  // dataExclusao: Timestamp

  @Column()
  status: boolean

  @OneToMany(() => Endereco, endereco => endereco.cidade)
  enderecos: Endereco[]

  @ManyToOne(() => Estado, estado => estado.cidades)
  @JoinColumn({ name: 'estados_idEstado' })
  estado: Estado
}