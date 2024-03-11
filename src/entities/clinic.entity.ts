import { Collection, Entity, OneToMany, PrimaryKey } from "@mikro-orm/core";
import { randomUUID } from "crypto";
import { Drug } from "./drug.entity.js";
import { BaseEntity } from "./base.entity.js";

@Entity()
export class Clinic extends BaseEntity {
  @OneToMany(() => Drug, (d) => d.clinic)
  drugs = new Collection<Drug>(this);
}
