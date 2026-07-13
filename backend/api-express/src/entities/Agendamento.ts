import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consulta } from "./Consulta";
import { AvaliacaoOdonto } from "./AvaliacaoOdonto";
import { Visita } from "./Visita";

@Entity('agendamentos')
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column()
  hora: string;

  @Column()
  dataRetorno: Date;

  @Column()
  horaRetorno: string;

  @Column()
  status: boolean;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @OneToMany(() => AvaliacaoOdonto, avaliacao => avaliacao.agendamento)
  avaliacoes: AvaliacaoOdonto[];

  @OneToMany(() => Visita, visita => visita.agendamento)
  visitas: Visita[];

  @OneToMany(() => Consulta, consulta => consulta.agendamento)
  consultas: Consulta[];

}