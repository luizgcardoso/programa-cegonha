import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Cidade } from "./Cidade";
import { Pessoa } from "./Pessoa";

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

  @ManyToOne(() => Pessoa, pessoa => pessoa.enderecos)
  @JoinColumn({ name: 'pessoas_idPessoa' })
  pessoa: Pessoa;

  @ManyToOne(() => Cidade, cidade => cidade.enderecos)
  @JoinColumn({ name: 'cidades_idCidade' })
  cidade: Cidade;
} 