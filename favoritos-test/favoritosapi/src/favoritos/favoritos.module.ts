import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anime } from './anime.entity';
import { favoritosController } from './favoritos.controller';
import { AnimeSave } from './animesave.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Anime, AnimeSave])],
  controllers: [favoritosController],
  providers: [
    {
      provide: 'PG_POOL',
      useValue: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        synchronize: true,
      },
    },
  ],
})
export class favoritosModule {}
