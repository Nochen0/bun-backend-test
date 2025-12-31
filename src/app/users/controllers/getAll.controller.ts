import db from "../../../db/connection"
import { users } from "../../../db/schema"
import factory from "../../factory"

const getAllController = factory.createHandlers(async (c) => {
  const data = await db.select().from(users)
  return c.json({ users: data })
})

export default getAllController
