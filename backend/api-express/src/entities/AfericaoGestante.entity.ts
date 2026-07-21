import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConsultaAbertura } from "./ConsultaAbertura.entity";
import { ConsultaPreNatal } from "./ConsultaPreNatal.entity";

@Entity("afericoesGestante")
export class AfericaoGestante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  glicose: number;

  @Column()
  peso: number;

  @Column()
  pressaoArterial: number;

  @Column()
  alturaUterina: number;

  @Column()
  batimentosCardiacos: number;

  @Column()
  edemas: boolean;

  @Column()
  movimentosFetais: boolean;

  @Column({ type: "text", nullable: true })
  avaliacaoEdemas: string;

  @OneToOne(
    () => ConsultaPreNatal,
    (consultasPreNatal) => consultasPreNatal.afericaoGestante,
  )
  consultaPreNatal: ConsultaPreNatal;

  @OneToOne(
    () => ConsultaAbertura,
    (consultaAbertura) => consultaAbertura.afericaoGestante,
  )
  consultaAbertura: ConsultaAbertura;
}
