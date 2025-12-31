import { Hono } from "hono"
import "./db/connection"
import { usersRouter } from "./app/users/users.router"

const app = new Hono({ strict: true })

app.get("/", (c) => c.text("Hello Bun!"))

app.route("/users", usersRouter)

app.notFound((c) => {
  return c.text("Custom 404 Message", 404)
})

app.onError((err, c) => {
  console.error(`${err}`)
  return c.text("Custom Error Message", 500)
})

export default app
