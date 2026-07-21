import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bebe } from "./Bebe.entity";
import { VisitaRecemNascido } from "./VisitaRecemNascido.entity";

@Entity("afericoesBebes")
export class AfericaoBebe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() //true: grave, false: normal
  risco: boolean;

  @Column()
  altura: number;

  @Column()
  peso: number;

  @Column()
  cranioCefalico: number;

  @Column()
  testeApgar: number;

  @OneToOne(
    () => VisitaRecemNascido,
    (visitaRecemNascido) => visitaRecemNascido.afericaoBebe,
  )
  visitaRecemNascido: VisitaRecemNascido;
}
