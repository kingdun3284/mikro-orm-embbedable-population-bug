import { Migrator } from "@mikro-orm/migrations";
import { defineConfig } from "@mikro-orm/postgresql";

export default defineConfig({
  allowGlobalContext: false,
  autoJoinRefsForFilters: false,
  entitiesTs: [
    "./src/entities/**/*.entity.ts",
    "./src/entities/**/*.embeddable.ts",
  ],
  entities: [
    "./dist/entities/**/*.entity.js",
    "./dist/entities/**/*.embeddable.js",
  ],
  extensions: [Migrator],
  dbName: "test",
  user: "test",
  password: "test",
  port: 5432,
  host: "localhost",
});
