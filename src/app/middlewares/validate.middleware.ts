import { prettifyError, ZodError, type ZodType } from "zod/v4"
import { validator } from "hono/validator"

type CustomValidationTargets = "query" | "param"

function validate<T>(target: CustomValidationTargets, schema: ZodType<T>) {
  return validator(target, async (value, c) => {
    try {
      const data = schema.parse(value) as T
      return data
    } catch (e) {
      if (e instanceof ZodError) {
        return c.json(prettifyError(e), 400)
      }
      throw e
    }
  })
}

export default validate
