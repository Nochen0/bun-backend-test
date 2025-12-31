import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core"

export const users = pgTable("USERS", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 32 }).notNull().unique(),
  email: varchar("email", { length: 64 }).notNull().unique(),
  password: varchar("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
})
