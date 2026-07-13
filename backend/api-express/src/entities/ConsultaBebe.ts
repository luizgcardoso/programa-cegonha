import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Bebe } from "./Bebe";
import { Consulta } from "./Consulta";

@Entity('consultasBebes')
export class ConsultaBebe {

  @PrimaryColumn()
  id: number;

  @Column()
  alturaBebe: number;

  @Column()
  cranioCefalico: number;

  @Column()
  testeApgar: number;

  @ManyToOne(() => Bebe, bebe => bebe.consultasBebes)
  @JoinColumn({ name: 'bebes_id' })
  bebe: Bebe;

  @OneToOne(() => Consulta, consulta => consulta.consultaBebe)
  @JoinColumn({ name: 'consultas_id' })
  consulta: Consulta;
}