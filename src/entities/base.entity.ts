import { Enum, Filter, PrimaryKey, Property } from "@mikro-orm/core";
import { randomUUID } from "crypto";

export enum EntityState {
  AVAILABLE = "Available",
  DELETED = "Deleted",
}

@Filter({
  name: "valid",
  cond: { entityState: EntityState.AVAILABLE },
  default: true,
})
export abstract class BaseEntity {
  @PrimaryKey()
  id: string = randomUUID();

  @Property({ nullable: true })
  createdAt?: Date = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt?: Date = new Date();

  @Enum({ items: () => EntityState, nullable: true })
  entityState?: EntityState = EntityState.AVAILABLE;
}
