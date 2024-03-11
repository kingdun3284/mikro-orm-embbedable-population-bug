import { Embeddable, ManyToOne, Property } from "@mikro-orm/core";
import { Ingredient } from "./ingredient.entity.js";

@Embeddable()
export class DrugInfoIngredient {
  @Property({ type: "number", columnType: "numeric(10,2)" })
  quantity!: number;

  @ManyToOne(() => Ingredient)
  ingredient: Ingredient;
}
