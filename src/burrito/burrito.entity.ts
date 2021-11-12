import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Burrito, Tortilla } from "./burrito.type";
import { IsBoolean, IsOptional, IsString } from "class-validator";

@Entity()
export class BurritoEntity extends BaseEntity implements Burrito {

  @PrimaryGeneratedColumn() id: number;
  @Column() @IsString() @IsOptional() beans: string;
  @Column() @IsString() @IsOptional() cheese: string;
  @Column() @IsString() @IsOptional() rice: string;
  @Column() @IsString() tortilla: Tortilla;
  @Column() @IsBoolean() hasGuac: boolean;
  @Column() @IsBoolean() hasSourCream: false;

}