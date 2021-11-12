import { Module } from '@nestjs/common';
import { BurritoController } from "./burrito.controller";
import { BurritoService } from "./burrito.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BurritoEntity } from "./burrito.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BurritoEntity])],
  controllers: [BurritoController],
  providers: [BurritoService],
})
export class BurritoModule {}