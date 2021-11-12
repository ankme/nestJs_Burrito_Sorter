import { BaseEntity } from "typeorm";

export class Utils {

  public static convertInterfaceToEntity<Interface, Entity extends BaseEntity & Interface> (
    source: Interface,
    cnstrctr: new () => Entity,
  ): Entity {
    const entity = new cnstrctr();
    for (const [key, value] of Object.entries(source)) {
      entity[key] = value;
    }
    return entity;
  }

  public static convertManyInterfacesToEntities<Interface, Entity extends BaseEntity & Interface> (
    sources: Interface[],
    cnstrctr: new () => Entity,
  ) {
    return sources.map(source =>
      Utils.convertInterfaceToEntity(source, cnstrctr));
  }
}
