import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bebe } from "./Bebe.entity";
import { Agendamento } from "./Agendamento.entity";
import { Profissional } from "./Profissional.entity";
import { AfericaoBebe } from "./AfericaoBebe.entity";

@Entity("visitaRecemNascido")
export class VisitaRecemNascido {
  @PrimaryGeneratedColumn()
  id: string;

  @Column() //enum
  tipoAmamentacao: string;

  @Column({ type: "text", nullable: true })
  prescricaoTestes: string;

  @Column({ type: "text", nullable: true })
  prescricaoVacinas: string;

  @Column({}) // true: normal, false: doente
  saudeUmbigo: boolean;

  @Column({ type: "text", nullable: true })
  observacoes: string;

  @Column() // realizada, pendente
  status: boolean;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @OneToOne(() => Agendamento, (agendamento) => agendamento.visitaRecemNascido)
  @JoinColumn({ name: "idAgendamento" })
  agendamento: Agendamento;

  @OneToOne(() => Bebe, (bebe) => bebe.visitaRecemNascido)
  @JoinColumn({ name: "idBebe" })
  bebe: Bebe;

  @OneToOne(
    () => AfericaoBebe,
    (afericaoBebe) => afericaoBebe.visitaRecemNascido,
  )
  @JoinColumn({ name: "idAfericaoBebe" })
  afericaoBebe: AfericaoBebe;

  @ManyToOne(
    () => Profissional,
    (profissional) => profissional.visitaRecemNascido,
  )
  @JoinColumn({ name: "idProfissionais" })
  profissional: Profissional;
}
