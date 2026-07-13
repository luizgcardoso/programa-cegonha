import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne, ManyToMany, JoinTable } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Bebe } from "./Bebe";
import { Consulta } from "./Consulta";
import { Vacinacao } from "./Vacinacao";
import { AvaliacaoOdonto } from "./AvaliacaoOdonto";
import { Visita } from "./Visita";
import { Gestacao } from "./Gestacao";
import { Responsavel } from "./Responsavel";
import { Exame } from "./Exame";

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nivelRisco: string;

  @Column()
  responsavel: boolean

  @Column({ type: 'text', nullable: true })
  observacao: string;

  @Column()
  dataCriacao: Date

  @Column({ nullable: true })
  dataAlteracao: Date

  @Column({ nullable: true })
  dataExclusao: Date

  @Column()
  status: boolean;

  @OneToOne(() => Pessoa, pessoa => pessoa.paciente)
  @JoinColumn({ name: 'pessoas_idPessoas' })
  pessoa: Pessoa;

  @OneToMany(() => Gestacao, gestacao => gestacao.paciente)
  gestacoes: Gestacao[];

  // @OneToMany(() => Bebe, bebe => bebe.paciente)
  // bebes: Bebe[];

  @ManyToMany(() => Responsavel, responsavel => responsavel.pacientes)
  @JoinTable({ name: 'pacientes_responsaveis',
    joinColumn: { name: 'paciente_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'responsavel_id', referencedColumnName: 'id' }
  })
  responsaveis: Responsavel[];

  @OneToMany(() => Consulta, consulta => consulta.paciente)
  consultas: Consulta[];

  @OneToMany(() => Vacinacao, vacinacao => vacinacao.paciente)
  vacinacoes: Vacinacao[];

  @OneToMany(() => AvaliacaoOdonto, avaliacaoOdonto => avaliacaoOdonto.paciente)
  avaliacoesOdonto: AvaliacaoOdonto[];

  @OneToMany(() => Visita, visita => visita.paciente)
  visitas: Visita[];

  @ManyToOne(() => Exame, exame => exame.paciente)
  exames: Exame[];
}