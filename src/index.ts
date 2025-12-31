import { Hono } from "hono"
import "./db/connection"
import { usersRouter } from "./app/users/users.router"
import type { HTTPResponseError } from "hono/types"
import type { HTTPExceptionFunction } from "hono/timeout"
import { HTTPException } from "hono/http-exception"

const app = new Hono({ strict: true })

app.get("/", (c) => c.text("Hello Bun!"))

app.route("/users", usersRouter)

app.notFound((c) => {
  return c.text("Custom 404 Message", 404)
})

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    c.status(err.status)
    console.log(err.status)
  }
  return c.text(err.message)
})

export default app
