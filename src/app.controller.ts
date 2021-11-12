import { Controller, Get, Param, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('myPath')
  yes(): string {
    return 'Doody Worked.';
  }

  @Get('name/:id')
  getNameById (
    @Param('id') id: string,
    @Query('jo') jo: string,
    @Query('bob') bob: string,
  ): string {
    return (jo && bob)
        ? `You entered: ${id}. jo: ${jo}, bob: ${bob}. `
        : 'There is only one name, and it is Reginald.';
  }
}
