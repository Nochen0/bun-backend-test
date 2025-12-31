import db from "./connection"
import { users } from "./schema"

async function seed() {
  console.log("🌱 Seeding database...")

  // optional: clear existing data
  await db.delete(users)

  await db.insert(users).values([
    {
      username: "enes",
      email: "enes@example.com",
      password: "hashedPassword1",
    },
    {
      username: "alice",
      email: "alice@example.com",
      password: "hashedPassword2",
    },
    {
      username: "bob",
      email: "bob@example.com",
      password: "hashedPassword3",
    },
  ])

  console.log("✅ Users seeded")
}

seed()
  .catch((err) => {
    console.error("❌ Seeding failed:", err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
