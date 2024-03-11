import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { randomUUID } from "crypto";
import { Clinic } from "./clinic.entity.js";
import { BaseEntity } from "./base.entity.js";

@Entity()
export class Ingredient extends BaseEntity {
  @PrimaryKey()
  id: string = randomUUID();

  @Property()
  name: string;

  @ManyToOne(() => Clinic, { nullable: true })
  clinic?: Clinic;
}
