import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profissional } from "./Profissional.entity";

@Entity("areaCobertura")
export class AreaCobertura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificacao: string;

  @Column()
  qtdPacientes: number;

  @Column()
  status: boolean;

  @OneToOne(() => Profissional, (profissional) => profissional.areaCobertura)
  profissional: Profissional;
}
