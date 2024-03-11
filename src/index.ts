import { MikroORM, QueryOrder } from "@mikro-orm/postgresql";
import { Drug } from "./entities/drug.entity.js";
import { DrugInfo } from "./entities/drug-info.entity.js";

const orm = await MikroORM.init();
const em = orm.em.fork();
await orm.getSchemaGenerator().dropSchema({ wrap: false });
await orm.getSchemaGenerator().updateSchema({ wrap: false });
const result = await em.find(
  Drug,
  {},
  {
    populate: ["drugInfo.drugInfoIngredient.ingredient"],
  }
);
console.log(result);
