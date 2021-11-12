import { Controller, Get, Query } from "@nestjs/common";
import { TableQueryParam } from "../table.helper";
import { Burrito, Tortilla } from "./burrito.type";
import { BurritoService } from "./burrito.service";

@Controller()
export class BurritoController {

  public constructor(
    private burritoService: BurritoService,
  ) { }

  @Get('burritos')
  public findBurritos (
    @Query() params: TableQueryParam<Burrito>
  ): Promise<Burrito[]> {
    return this.burritoService.findRows(params)
  }
}

