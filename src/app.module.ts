import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurritoModule } from "./burrito/burrito.module";
import { TypeOrmModule } from "@nestjs/typeorm";

const generatedTypeOrmModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: `${__dirname}/test.db`,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  synchronize: true,
});

@Module({
  imports: [
    BurritoModule,
    generatedTypeOrmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
