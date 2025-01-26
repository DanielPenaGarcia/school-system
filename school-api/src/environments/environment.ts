import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
    production: false,
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '1234',
        database: process.env.DB_NAME || 'school',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret'
    }
}