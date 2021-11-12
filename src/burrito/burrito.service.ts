import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { SortDirection, TableQueryCriteria, TableQueryParam } from "../table.helper";
import { Burrito, Tortilla, Beans, Rice, Cheese } from "./burrito.type";
import { InjectRepository } from "@nestjs/typeorm";
import { BurritoEntity } from "./burrito.entity";
import { FindManyOptions, Repository } from "typeorm";
import { Utils } from "../utils";

@Injectable()
export class BurritoService implements OnModuleInit {

  private logger = new Logger(BurritoService.name);

  public constructor (
    @InjectRepository(BurritoEntity) private burritoRepo: Repository<Burrito>,
  ) { }

  public async onModuleInit(): Promise<BurritoEntity[]> {
    this.logger.debug('starting routine')
    await this.burritoRepo.clear();
    this.logger.debug('cleared')
    const bs = generateBurritos();
    this.logger.debug(`Generated ${bs.length} burritos`)
    const x = await this.addRows(bs);
    this.logger.debug(`Saved ${x.length} burritos successfully`);
    return x;
  }

  public addRows (burritos: Burrito[]): Promise<BurritoEntity[]> {
    const e = Utils.convertManyInterfacesToEntities(burritos, BurritoEntity);
    return this.burritoRepo.save(e);
 }

  public findRows (params: TableQueryParam<Burrito>): Promise<Burrito[]> {
    const query: FindManyOptions = { where: {} };
    for (const [key, value] of Object.entries(params)) {
      switch (key) {
        case 'direction':
        case 'byColumn':
        case 'page':
        case 'itemsPerPage':
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const _: keyof TableQueryCriteria<unknown> = key; // for type-checking, do not delete
          break;
        default:
          query.where[key] = value;
      }
    }
    return this.burritoRepo.find(query);
  }
}

function generateBurritos (numToGenerate = 200): Burrito[] {
  const xs: Burrito[] = [];
  for (let i = 0; i < numToGenerate; i++) {
    xs.push(generateBurrito());
  }
  return xs;
}

function generateBurrito(): Burrito {
  //TODO Randomize new Burrito attribute values
  return {
    tortilla: getRandomValueFromEnum(Tortilla),
    beans: getRandomValueFromEnum(Beans),
    cheese: getRandomValueFromEnum(Cheese),
    rice: getRandomValueFromEnum(Rice),
    hasGuac: Math.random() < 0.5,
    hasSourCream: false,
  };
}

type ObjectKey = string | number | symbol;
type Enum<E extends ObjectKey> = { [key: string]: E };

// assumes enums are always given string aliases
function getRandomValueFromEnum<E extends ObjectKey> (yourEnum: Enum<E>): E {
  const keys = Object.keys(yourEnum);
  return yourEnum[keys[Math.floor(Math.random() * keys.length)]];
}