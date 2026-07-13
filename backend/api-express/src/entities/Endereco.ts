import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Cidade } from "./Cidade";

@Entity('enderecos')
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logradouro: string;

  @Column()
  numeroResidencial: string;

  @Column()
  cep: string;

  @Column({ nullable: true })
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  status: boolean;

  @Column()
  dataCriacao: Date;

  @Column({ nullable: true })
  dataAlteracao: Date;

  @ManyToOne(() => Cidade, cidade => cidade.enderecos)
  @JoinColumn({ name: 'cidades_idCidade' })
  cidade: Cidade;
} 