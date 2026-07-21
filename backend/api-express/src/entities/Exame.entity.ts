import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Gestacao } from "./Gestacao.entity";

@Entity("exames")
export class Exame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  @Column()
  data: Date;

  @Column()
  urlAnexo: string;

  @Column()
  formatoAnexo: string;

  @Column()
  dataUpload: Date;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @ManyToOne(() => Gestacao, (gestacao) => gestacao.exames)
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;
}
