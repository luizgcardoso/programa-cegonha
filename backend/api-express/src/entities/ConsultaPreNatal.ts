import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Consulta } from "./Consulta";

@Entity('consultasPreNatal')
export class ConsultaPreNatal {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column()
  idadeGestacional: string;

  @Column()
  dataUltimaMenstruacao: Date;

  @Column()
  alturaUterina: number;

  @Column()
  batimentosCardiacos: number;

  @Column({type: 'text', nullable: true})
  historicoGestacional: string;

  // analisar se  há relacionamento com gestacoes (FK)

  @OneToOne(() => Consulta, consulta => consulta.consultaPreNatal)
  @JoinColumn({ name: 'consultas_id' })
  consulta: Consulta;
} 