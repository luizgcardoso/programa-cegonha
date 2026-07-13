import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1783887568549 implements MigrationInterface {
    name = 'Default1783887568549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gestacoes" ("id" SERIAL NOT NULL, "dataUltimaMenstruacao" TIMESTAMP NOT NULL, "dataProvavelParto" TIMESTAMP NOT NULL, "dataParto" TIMESTAMP, "tipoParto" boolean, "status" boolean NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "pacientes_idPaciente" integer, CONSTRAINT "PK_7e25cc511a45f971c5eac44fd1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "equipes" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, CONSTRAINT "PK_9f0bfc492ee9542b0c0f42eb21d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacinas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "fabricante" character varying NOT NULL, "dataFabricacao" TIMESTAMP NOT NULL, "dataValidade" TIMESTAMP NOT NULL, "lote" character varying NOT NULL, "fasesAplicacao" character varying NOT NULL, "descricao" character varying, "contraIndicacoes" text NOT NULL, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "dataExclusao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, CONSTRAINT "PK_e16f61530d871f2b74346c233ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacinacoes" ("id" SERIAL NOT NULL, "dataAplicacao" TIMESTAMP NOT NULL, "tipoPaciente" character varying NOT NULL, "idadeGestacional" character varying, "observacao" character varying, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, "pacientes_idPaciente" integer, "profissionais_idProfissional" integer, CONSTRAINT "PK_b9cb45916355f0a98138f36715e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agendamentos" ("id" SERIAL NOT NULL, "data" TIMESTAMP NOT NULL, "hora" character varying NOT NULL, "dataRetorno" TIMESTAMP NOT NULL, "horaRetorno" character varying NOT NULL, "status" boolean NOT NULL, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, CONSTRAINT "PK_3890b7448ebc7efdfd1d43bf0c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "avaliacoes_odonto" ("id" SERIAL NOT NULL, "resultado" text NOT NULL, "observacoes" text, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, "agendamentos_idAgendamento" integer, "pacientes_idPaciente" integer, "profissionais_idProfissional" integer, CONSTRAINT "PK_4f9532543556006f3fffcbd38a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profissionais" ("id" SERIAL NOT NULL, "matricula" character varying NOT NULL, "funcao" character varying NOT NULL, "observacao" text, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, "dataExclusao" TIMESTAMP, "status" boolean NOT NULL, "pessoas_idPessoas" integer, "equipes_idEquipe" integer, CONSTRAINT "REL_7207fdd2c3678ec18665095550" UNIQUE ("pessoas_idPessoas"), CONSTRAINT "PK_a6a3048111c78bd06ecd3b1360c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consultasPreNatal" ("id" SERIAL NOT NULL, "idadeGestacional" character varying NOT NULL, "dataUltimaMenstruacao" TIMESTAMP NOT NULL, "alturaUterina" integer NOT NULL, "batimentosCardiacos" integer NOT NULL, "historicoGestacional" text, "consultas_id" integer, CONSTRAINT "REL_7c46626609a2fa17bfc6f49d9d" UNIQUE ("consultas_id"), CONSTRAINT "PK_6f56fad0328d41059b6121b69cd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consultas" ("id" SERIAL NOT NULL, "tipoConsulta" boolean NOT NULL, "dataRetorno" TIMESTAMP NOT NULL, "horaRetorno" character varying NOT NULL, "pressaoArterial" character varying NOT NULL, "frequenciaCardiaca" character varying NOT NULL, "pesoPaciente" integer NOT NULL, "glicose" integer NOT NULL, "diagnostico" character varying NOT NULL, "sintomas" character varying NOT NULL, "prescricao" character varying NOT NULL, "riscoPaciente" character varying NOT NULL, "observacao" character varying, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, "pacientes_idPaciente" integer, "agendamentos_idAgendamento" integer, "profissionais_idProfissional" integer, CONSTRAINT "PK_889a9011f1854a60a6aae1c6d80" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "consultasBebes" ("id" integer NOT NULL, "alturaBebe" integer NOT NULL, "cranioCefalico" integer NOT NULL, "testeApgar" integer NOT NULL, "bebes_id" integer, "consultas_id" integer, CONSTRAINT "REL_e9c0fd1534702dea4a66610898" UNIQUE ("consultas_id"), CONSTRAINT "PK_8d6d3b1a1df2bc565c497ee2e3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bebes" ("id" SERIAL NOT NULL, "dataNascimento" TIMESTAMP NOT NULL, "horaNascimento" TIMESTAMP NOT NULL, "pesoNascimento" integer NOT NULL, "sexo" boolean NOT NULL, "tipoParto" boolean NOT NULL, "comprimentoNascimento" integer NOT NULL, "apgar" integer NOT NULL, "primeiraConsulta" TIMESTAMP NOT NULL, "observacoes" text, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, "pessoas_idPessoa" integer, "gestacoes_idGestacao" integer, CONSTRAINT "REL_b50000f3706608bec4ef0c925c" UNIQUE ("pessoas_idPessoa"), CONSTRAINT "PK_3f4979b93326f22802322acab18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pessoas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "dataNascimento" TIMESTAMP NOT NULL, "sexo" boolean NOT NULL, "profissao" character varying, "estadoCivil" character varying NOT NULL, "nacionalidade" character varying NOT NULL, "cpf" character varying NOT NULL, "email" character varying, "telefone" character varying NOT NULL, "tipoSanguineo" character varying NOT NULL, "comorbidades" character varying NOT NULL, "alergias" character varying NOT NULL, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, "dataExclusao" TIMESTAMP, "status" boolean NOT NULL, CONSTRAINT "UQ_7661e2cfd87d77d744a92ce43d3" UNIQUE ("cpf"), CONSTRAINT "PK_fa8104cfc91dc207880a73a1acd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "responsaveis" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "parentesco" character varying NOT NULL, "status" boolean NOT NULL, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, CONSTRAINT "PK_79aa857625cefa30a1eb63b1209" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exames" ("id" SERIAL NOT NULL, "tipo" character varying NOT NULL, "data" TIMESTAMP NOT NULL, "urlAnexo" character varying NOT NULL, "formatoAnexo" character varying NOT NULL, "dataUpload" TIMESTAMP NOT NULL, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, "pacientes_idPaciente" integer, CONSTRAINT "PK_a52615f52a6d51d4e23aa0a0b5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pacientes" ("id" SERIAL NOT NULL, "nivelRisco" character varying NOT NULL, "responsavel" boolean NOT NULL, "observacao" text, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, "dataExclusao" TIMESTAMP, "status" boolean NOT NULL, "pessoas_idPessoas" integer, "examesId" integer, CONSTRAINT "REL_cfb82c7b96309c26525bb0020a" UNIQUE ("pessoas_idPessoas"), CONSTRAINT "PK_aa9c9f624ff22fc06c44d8b1609" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "visitas" ("id" SERIAL NOT NULL, "faseAcompanhamento" character varying NOT NULL, "pressaoArterial" character varying, "observacao" text, "dataCriacao" TIMESTAMP NOT NULL DEFAULT now(), "dataAlteracao" TIMESTAMP DEFAULT now(), "status" boolean NOT NULL, "agendamentos_idAgendamento" integer, "pacientes_idPacientes" integer, "profissionais_idProfissionais" integer, CONSTRAINT "PK_d1245dc9e45b6dd4eef05f68bba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" SERIAL NOT NULL, "logradouro" character varying NOT NULL, "numeroResidencial" character varying NOT NULL, "cep" character varying NOT NULL, "complemento" character varying, "bairro" character varying NOT NULL, "status" boolean NOT NULL, "dataCriacao" TIMESTAMP NOT NULL, "dataAlteracao" TIMESTAMP, "cidades_idCidade" integer, CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cidades" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "status" boolean NOT NULL, "estados_idEstado" integer, CONSTRAINT "PK_cc606d4fea4335e32bd19f3a9fa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "estados" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "sigla" character varying NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_3d9a9f2658d5086012f27924d30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacinas_vacinacoes" ("vacinacao_id" integer NOT NULL, "vacina_id" integer NOT NULL, CONSTRAINT "PK_a972ba55aa0d47a6885272ba503" PRIMARY KEY ("vacinacao_id", "vacina_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9a5021e0e1c5390cf789caf750" ON "vacinas_vacinacoes" ("vacinacao_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ac11b0c2271fbc3045132d02ed" ON "vacinas_vacinacoes" ("vacina_id") `);
        await queryRunner.query(`CREATE TABLE "pacientes_responsaveis" ("paciente_id" integer NOT NULL, "responsavel_id" integer NOT NULL, CONSTRAINT "PK_85931e3f086718851d2b56cb7b7" PRIMARY KEY ("paciente_id", "responsavel_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d234afd6af08f6605d86e14197" ON "pacientes_responsaveis" ("paciente_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_dfcea0bb280ea082a86a7b9d20" ON "pacientes_responsaveis" ("responsavel_id") `);
        await queryRunner.query(`ALTER TABLE "gestacoes" ADD CONSTRAINT "FK_81e26b94ead93294d29203407f5" FOREIGN KEY ("pacientes_idPaciente") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vacinacoes" ADD CONSTRAINT "FK_9a16946211d04cc3ef1409e3074" FOREIGN KEY ("pacientes_idPaciente") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vacinacoes" ADD CONSTRAINT "FK_fc0e9dfe46f90c7b86fd9645383" FOREIGN KEY ("profissionais_idProfissional") REFERENCES "profissionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes_odonto" ADD CONSTRAINT "FK_a1f66b99dd471cf095b6803e0d7" FOREIGN KEY ("agendamentos_idAgendamento") REFERENCES "agendamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes_odonto" ADD CONSTRAINT "FK_136d00713f5cc9daef5a5df6cc8" FOREIGN KEY ("pacientes_idPaciente") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "avaliacoes_odonto" ADD CONSTRAINT "FK_0c3e2ba4eac1a23f6b5013349a9" FOREIGN KEY ("profissionais_idProfissional") REFERENCES "profissionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profissionais" ADD CONSTRAINT "FK_7207fdd2c3678ec18665095550e" FOREIGN KEY ("pessoas_idPessoas") REFERENCES "pessoas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profissionais" ADD CONSTRAINT "FK_3c63dfaf4590b751af96d12f853" FOREIGN KEY ("equipes_idEquipe") REFERENCES "equipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultasPreNatal" ADD CONSTRAINT "FK_7c46626609a2fa17bfc6f49d9dd" FOREIGN KEY ("consultas_id") REFERENCES "consultas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultas" ADD CONSTRAINT "FK_46c24a344a756551339c074b3e3" FOREIGN KEY ("pacientes_idPaciente") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultas" ADD CONSTRAINT "FK_30eb564b4bb9394fa5460b0682e" FOREIGN KEY ("agendamentos_idAgendamento") REFERENCES "agendamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultas" ADD CONSTRAINT "FK_f3f312e4c20579a8590082e4e99" FOREIGN KEY ("profissionais_idProfissional") REFERENCES "profissionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultasBebes" ADD CONSTRAINT "FK_ec87afd8b3c713c63ff6f803b4e" FOREIGN KEY ("bebes_id") REFERENCES "bebes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consultasBebes" ADD CONSTRAINT "FK_e9c0fd1534702dea4a666108985" FOREIGN KEY ("consultas_id") REFERENCES "consultas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bebes" ADD CONSTRAINT "FK_b50000f3706608bec4ef0c925c0" FOREIGN KEY ("pessoas_idPessoa") REFERENCES "pessoas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bebes" ADD CONSTRAINT "FK_017442fdf85248269ab2e248ebc" FOREIGN KEY ("gestacoes_idGestacao") REFERENCES "gestacoes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exames" ADD CONSTRAINT "FK_5416bbb44a12e2b5f89a1826b47" FOREIGN KEY ("pacientes_idPaciente") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "FK_cfb82c7b96309c26525bb0020a4" FOREIGN KEY ("pessoas_idPessoas") REFERENCES "pessoas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes" ADD CONSTRAINT "FK_ca615f9bb29f30e88403e10d15d" FOREIGN KEY ("examesId") REFERENCES "exames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitas" ADD CONSTRAINT "FK_eb1658fc6adde4c67c2e6ac3a47" FOREIGN KEY ("agendamentos_idAgendamento") REFERENCES "agendamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitas" ADD CONSTRAINT "FK_6aae5fece0741ba004c922ebacb" FOREIGN KEY ("pacientes_idPacientes") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visitas" ADD CONSTRAINT "FK_b59117532f98fc4e4e3c558d365" FOREIGN KEY ("profissionais_idProfissionais") REFERENCES "profissionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_e5dc50dc3a19a78ba3d6aa8df59" FOREIGN KEY ("cidades_idCidade") REFERENCES "cidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cidades" ADD CONSTRAINT "FK_26fdc1287cd3546d3445ae61fab" FOREIGN KEY ("estados_idEstado") REFERENCES "estados"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vacinas_vacinacoes" ADD CONSTRAINT "FK_9a5021e0e1c5390cf789caf7504" FOREIGN KEY ("vacinacao_id") REFERENCES "vacinas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "vacinas_vacinacoes" ADD CONSTRAINT "FK_ac11b0c2271fbc3045132d02ed9" FOREIGN KEY ("vacina_id") REFERENCES "vacinacoes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pacientes_responsaveis" ADD CONSTRAINT "FK_d234afd6af08f6605d86e14197f" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pacientes_responsaveis" ADD CONSTRAINT "FK_dfcea0bb280ea082a86a7b9d206" FOREIGN KEY ("responsavel_id") REFERENCES "responsaveis"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacientes_responsaveis" DROP CONSTRAINT "FK_dfcea0bb280ea082a86a7b9d206"`);
        await queryRunner.query(`ALTER TABLE "pacientes_responsaveis" DROP CONSTRAINT "FK_d234afd6af08f6605d86e14197f"`);
        await queryRunner.query(`ALTER TABLE "vacinas_vacinacoes" DROP CONSTRAINT "FK_ac11b0c2271fbc3045132d02ed9"`);
        await queryRunner.query(`ALTER TABLE "vacinas_vacinacoes" DROP CONSTRAINT "FK_9a5021e0e1c5390cf789caf7504"`);
        await queryRunner.query(`ALTER TABLE "cidades" DROP CONSTRAINT "FK_26fdc1287cd3546d3445ae61fab"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_e5dc50dc3a19a78ba3d6aa8df59"`);
        await queryRunner.query(`ALTER TABLE "visitas" DROP CONSTRAINT "FK_b59117532f98fc4e4e3c558d365"`);
        await queryRunner.query(`ALTER TABLE "visitas" DROP CONSTRAINT "FK_6aae5fece0741ba004c922ebacb"`);
        await queryRunner.query(`ALTER TABLE "visitas" DROP CONSTRAINT "FK_eb1658fc6adde4c67c2e6ac3a47"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "FK_ca615f9bb29f30e88403e10d15d"`);
        await queryRunner.query(`ALTER TABLE "pacientes" DROP CONSTRAINT "FK_cfb82c7b96309c26525bb0020a4"`);
        await queryRunner.query(`ALTER TABLE "exames" DROP CONSTRAINT "FK_5416bbb44a12e2b5f89a1826b47"`);
        await queryRunner.query(`ALTER TABLE "bebes" DROP CONSTRAINT "FK_017442fdf85248269ab2e248ebc"`);
        await queryRunner.query(`ALTER TABLE "bebes" DROP CONSTRAINT "FK_b50000f3706608bec4ef0c925c0"`);
        await queryRunner.query(`ALTER TABLE "consultasBebes" DROP CONSTRAINT "FK_e9c0fd1534702dea4a666108985"`);
        await queryRunner.query(`ALTER TABLE "consultasBebes" DROP CONSTRAINT "FK_ec87afd8b3c713c63ff6f803b4e"`);
        await queryRunner.query(`ALTER TABLE "consultas" DROP CONSTRAINT "FK_f3f312e4c20579a8590082e4e99"`);
        await queryRunner.query(`ALTER TABLE "consultas" DROP CONSTRAINT "FK_30eb564b4bb9394fa5460b0682e"`);
        await queryRunner.query(`ALTER TABLE "consultas" DROP CONSTRAINT "FK_46c24a344a756551339c074b3e3"`);
        await queryRunner.query(`ALTER TABLE "consultasPreNatal" DROP CONSTRAINT "FK_7c46626609a2fa17bfc6f49d9dd"`);
        await queryRunner.query(`ALTER TABLE "profissionais" DROP CONSTRAINT "FK_3c63dfaf4590b751af96d12f853"`);
        await queryRunner.query(`ALTER TABLE "profissionais" DROP CONSTRAINT "FK_7207fdd2c3678ec18665095550e"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes_odonto" DROP CONSTRAINT "FK_0c3e2ba4eac1a23f6b5013349a9"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes_odonto" DROP CONSTRAINT "FK_136d00713f5cc9daef5a5df6cc8"`);
        await queryRunner.query(`ALTER TABLE "avaliacoes_odonto" DROP CONSTRAINT "FK_a1f66b99dd471cf095b6803e0d7"`);
        await queryRunner.query(`ALTER TABLE "vacinacoes" DROP CONSTRAINT "FK_fc0e9dfe46f90c7b86fd9645383"`);
        await queryRunner.query(`ALTER TABLE "vacinacoes" DROP CONSTRAINT "FK_9a16946211d04cc3ef1409e3074"`);
        await queryRunner.query(`ALTER TABLE "gestacoes" DROP CONSTRAINT "FK_81e26b94ead93294d29203407f5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dfcea0bb280ea082a86a7b9d20"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d234afd6af08f6605d86e14197"`);
        await queryRunner.query(`DROP TABLE "pacientes_responsaveis"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ac11b0c2271fbc3045132d02ed"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9a5021e0e1c5390cf789caf750"`);
        await queryRunner.query(`DROP TABLE "vacinas_vacinacoes"`);
        await queryRunner.query(`DROP TABLE "estados"`);
        await queryRunner.query(`DROP TABLE "cidades"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "visitas"`);
        await queryRunner.query(`DROP TABLE "pacientes"`);
        await queryRunner.query(`DROP TABLE "exames"`);
        await queryRunner.query(`DROP TABLE "responsaveis"`);
        await queryRunner.query(`DROP TABLE "pessoas"`);
        await queryRunner.query(`DROP TABLE "bebes"`);
        await queryRunner.query(`DROP TABLE "consultasBebes"`);
        await queryRunner.query(`DROP TABLE "consultas"`);
        await queryRunner.query(`DROP TABLE "consultasPreNatal"`);
        await queryRunner.query(`DROP TABLE "profissionais"`);
        await queryRunner.query(`DROP TABLE "avaliacoes_odonto"`);
        await queryRunner.query(`DROP TABLE "agendamentos"`);
        await queryRunner.query(`DROP TABLE "vacinacoes"`);
        await queryRunner.query(`DROP TABLE "vacinas"`);
        await queryRunner.query(`DROP TABLE "equipes"`);
        await queryRunner.query(`DROP TABLE "gestacoes"`);
    }

}
