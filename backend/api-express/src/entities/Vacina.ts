import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { Vacinacao } from "./Vacinacao";

@Entity('vacinas')
export class Vacina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  fabricante: string;

  @Column()
  dataFabricacao: Date;

  @Column()
  dataValidade: Date;

  @Column()
  lote: string;

  @Column() // analisar necessidade
  fasesAplicacao: string;

  @Column({ nullable: true })
  descricao: string;

  @Column({ type: 'text' })
  contraIndicacoes: string;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @CreateDateColumn({ nullable: true })
  dataExclusao: Date

  @Column()
  status: boolean;

  @ManyToMany(() => Vacinacao, vacinacao => vacinacao.vacinas)
  @JoinTable({ name: 'vacinas_vacinacoes',
    joinColumn: { name: 'vacinacao_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'vacina_id', referencedColumnName: 'id' }
  })
  vacinacao: Vacinacao[];

}