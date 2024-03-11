import {
  Collection,
  Embedded,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Rel,
} from "@mikro-orm/core";
import { randomUUID } from "crypto";
import { DrugInfoIngredient } from "./drug-info-ingredient.embeddable.js";
import { Clinic } from "./clinic.entity.js";
import { Drug } from "./drug.entity.js";
import { BaseEntity } from "./base.entity.js";

@Entity()
export class DrugInfo extends BaseEntity {
  @PrimaryKey()
  id: string = randomUUID();

  @Embedded(() => DrugInfoIngredient, { array: true })
  drugInfoIngredient?: DrugInfoIngredient[] = [];

  @OneToMany(() => Drug, (drug) => drug.drugInfo, { nullable: true })
  drugs = new Collection<Drug>(this);

  @ManyToOne(() => Clinic, { nullable: true })
  clinic?: Clinic;
}
