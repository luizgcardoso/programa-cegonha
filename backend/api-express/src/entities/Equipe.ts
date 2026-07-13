import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Profissional } from './Profissional';

@Entity('equipes')
export class Equipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @CreateDateColumn()
  dataCriacao: Date

  @CreateDateColumn({ nullable: true })
  dataAlteracao: Date

  @Column()
  status: boolean;

  @OneToMany(() => Profissional, profissional => profissional.equipe)
  profissionais: Profissional[];
}