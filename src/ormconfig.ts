import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';

dotenv.config();

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'test',
    entities: ['src/**/*.entity.ts'],
    migrations: ['migrations/*.ts'],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: true,
});
