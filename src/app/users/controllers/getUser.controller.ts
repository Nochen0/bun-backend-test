import { eq } from "drizzle-orm"
import db from "../../../db/connection"
import { users } from "../../../db/schema"
import factory from "../../factory"
import { HTTPException } from "hono/http-exception"
import getUserSchema from "../schemas/getUser.schema"
import validate from "../../middlewares/validate.middleware"

// "/users/:id"

const getUserController = factory.createHandlers(
  validate("param", getUserSchema),
  async (c) => {
    const { id } = c.req.valid("param")

    try {
      const data = await db.select().from(users).where(eq(users.id, id))
      return c.json({ user: data })
    } catch (e) {
      throw new HTTPException(400, {
        message: `User with id: ${id} not found`,
      })
    }
  },
)

export default getUserController
