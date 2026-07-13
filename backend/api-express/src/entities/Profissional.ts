import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, OneToMany, ManyToOne, OneToOne } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Equipe } from "./Equipe";
import { Vacinacao } from "./Vacinacao";
import { AvaliacaoOdonto } from "./AvaliacaoOdonto";
import { Visita } from "./Visita";
import { Consulta } from "./Consulta";

@Entity('profissionais')
export class Profissional {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  matricula: string;

  @Column()
  funcao: string;

  /*
   Analisando se haverá necessidade
  @Column()
  pacientesAtendidos: number;
  */
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



  @OneToOne(() => Pessoa, pessoa => pessoa.profissional)
  @JoinColumn({ name: 'pessoas_idPessoas' })
  pessoa: Pessoa;

  @ManyToOne(() => Equipe, equipe => equipe.profissionais)
  @JoinColumn({ name: 'equipes_idEquipe' })
  equipe: Equipe;

  @OneToMany(() => Consulta, consulta => consulta.profissional)
  consultas: Consulta[]

  @OneToMany(() => Vacinacao, vacinacao => vacinacao.profissional)
  vacinacoes: Vacinacao[];

  @OneToMany(() => AvaliacaoOdonto, avaliacaoOdonto => avaliacaoOdonto.profissionais)
  avaliacoesOdonto: AvaliacaoOdonto[];

  @OneToMany(() => Visita, visita => visita.profissional)
  visitas: Visita[];
}