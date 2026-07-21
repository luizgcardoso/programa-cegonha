import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { Gestacao } from "./Gestacao.entity";
import { Bebe } from "./Bebe.entity";

@Entity("vacinacoes")
export class Vacinacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // enum
  nome: string;

  @Column()
  dataAplicacao: Date;

  @Column() //true:gestante, false: bebê
  tipoPaciente: boolean;

  @Column({ nullable: true })
  observacao: string;

  @ManyToOne(() => Gestacao, (gestacao) => gestacao.vacinacoes, {
    nullable: true,
  })
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;

  @ManyToOne(() => Bebe, (bebe) => bebe.vacinacoes, { nullable: true })
  @JoinColumn({ name: "idBebe" })
  bebe: Bebe;
}
