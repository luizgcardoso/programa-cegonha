import reflect from 'reflect-metadata';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  entities: [
    "src/entities/*.ts"
  ],
  migrations: ["src/database/migrations/*.ts"],
  subscribers: [],
});

