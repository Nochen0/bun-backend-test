import { prettifyError } from "zod"
import { coerce, object, url, ZodError, type z } from "zod/v4"

const envSchema = object({
  DATABASE_URL: url(),
  PORT: coerce.number().default(3000),
})

export let env: z.infer<typeof envSchema>

try {
  env = envSchema.parse(process.env)
} catch (e) {
  if (e instanceof ZodError) {
    console.error(prettifyError(e))
    process.exit(1)
  }

  throw e
}
