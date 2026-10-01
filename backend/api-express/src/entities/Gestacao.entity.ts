import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bebe } from "./Bebe.entity";
import { Paciente } from "./Paciente.entity";
import { Visita } from "./Visita.entity";

@Entity("gestacoes")
export class Gestacao {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column() // true: vulnerabilidade, false: habitual
  // nivelRisco: string;

  @Column()
  dataUltimaMenstruacao: Date;

  @Column()
  dataProvavelParto: Date;

  @Column({ nullable: true })
  dataParto: Date;

  @Column({ nullable: true })
  tipoParto: string; // "normal" = parto normal, "cesariana" = cesariana

  @Column()
  idadeGestacional: number;

  @Column()
  qtdConsultasRealizadas: number;

  @Column()
  qtdVisitasRealizadas: number;

  @Column()
  status: string;

  @CreateDateColumn()
  dataCriacao: Date;

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date;

  @ManyToOne(() => Paciente, (paciente) => paciente.gestacoes)
  @JoinColumn({ name: "pacientes_idPaciente" })
  paciente: Paciente;

  @OneToMany(() => Bebe, (bebe) => bebe.gestacao)
  bebes: Bebe[];

  @OneToMany(() => Exame, (exame) => exame.gestacao)
  exames: Exame[];

  @OneToMany(() => Visita, (visita) => visita.gestacao)
  visitas: Visita[];

  @OneToMany(() => Vacinacao, (vacinacao) => vacinacao.gestacao)
  vacinacoes: Vacinacao[];

  @OneToMany(
    () => AvaliacaoOdonto,
    (avaliacaoOdonto) => avaliacaoOdonto.gestacao,
  )
  avaliacoesOdonto: AvaliacaoOdonto[];

  @OneToMany(
    () => ConsultaPreNatal,
    (consultasPreNatal) => consultasPreNatal.gestacao,
  )
  consultasPreNatal: ConsultaPreNatal[];

  @OneToOne(
    () => ConsultaAbertura,
    (consultaAbertura) => consultaAbertura.gestacao,
  )
  consultaAbertura: ConsultaAbertura;
}
