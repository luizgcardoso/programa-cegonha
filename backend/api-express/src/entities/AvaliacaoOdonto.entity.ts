import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Profissional } from "./Profissional.entity";
import { Agendamento } from "./Agendamento.entity";
import { Gestacao } from "./Gestacao.entity";

@Entity("avaliacoes_odonto")
export class AvaliacaoOdonto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  resultado: string;

  @Column({ type: "text", nullable: true })
  prescricoes: string;

  @Column({ type: "text", nullable: true })
  observacoes: string;

  @OneToOne(() => Agendamento, (agendamento) => agendamento.avaliacoes)
  @JoinColumn({ name: "idAgendamento" })
  agendamento: Agendamento;

  @ManyToOne(() => Gestacao, (gestacao) => gestacao.avaliacoesOdonto)
  @JoinColumn({ name: "idGestacao" })
  gestacao: Gestacao;

  @ManyToOne(
    () => Profissional,
    (profissional) => profissional.avaliacoesOdonto,
  )
  @JoinColumn({ name: "idProfissional" })
  profissionais: Profissional;
}
