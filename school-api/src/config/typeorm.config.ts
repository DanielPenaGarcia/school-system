import { environment } from "@env/environment";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: environment.db.host,
    port: environment.db.port,
    username: environment.db.username,
    password: environment.db.password,
    database: environment.db.database,
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
}