import { object, uuid } from "zod/v4"

const getUserSchema = object({
  id: uuid(),
})

export default getUserSchema
