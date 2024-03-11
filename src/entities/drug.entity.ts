import { Entity, ManyToOne, PrimaryKey, Rel } from "@mikro-orm/core";
import { randomUUID } from "crypto";
import { DrugInfo } from "./drug-info.entity.js";
import { Clinic } from "./clinic.entity.js";
import { BaseEntity } from "./base.entity.js";

@Entity()
export class Drug extends BaseEntity {
  @PrimaryKey()
  id: string = randomUUID();

  @ManyToOne(() => DrugInfo)
  drugInfo: Rel<DrugInfo>;

  @ManyToOne(() => Clinic)
  clinic: Rel<Clinic>;
}
