import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1784673905997 implements MigrationInterface {
    name = 'Default1784673905997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "dataCriacao"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "dataAlteracao"`);
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "titular"`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "isResponsavel" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" DROP COLUMN "isResponsavel"`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "titular" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "dataAlteracao" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD "dataCriacao" TIMESTAMP NOT NULL`);
    }

}
