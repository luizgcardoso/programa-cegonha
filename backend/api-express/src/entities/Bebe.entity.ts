import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { Gestacao } from "./Gestacao.entity";
import { Vacinacao } from "./Vacinacao.entity";
import { VisitaRecemNascido } from "./VisitaRecemNascido.entity";

@Entity("bebes")
export class Bebe {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  dataNascimento: Date;

  @Column()
  horaNascimento: Date;

  @Column()
  sexo: boolean;

  @Column() // true = parto normal, false = cesariana
  tipoParto: boolean;

  @Column()
  status: boolean;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @Column({ nullable: true })
  dataExclusao: Date;

  @ManyToOne(() => Gestacao, (gestacao) => gestacao.bebes)
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;

  @OneToOne(
    () => VisitaRecemNascido,
    (visitaRecemNascido) => visitaRecemNascido.bebe,
  )
  visitaRecemNascido: VisitaRecemNascido;

  @OneToMany(() => Vacinacao, (vacinacao) => vacinacao.bebe)
  vacinacoes: Vacinacao[];
}
