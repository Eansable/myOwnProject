import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const teamTable = pgTable("teams", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text()
});