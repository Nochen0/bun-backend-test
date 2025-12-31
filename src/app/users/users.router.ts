import { Hono } from "hono"
import getAllController from "./controllers/getAll.controller"
import getUserController from "./controllers/getUser.controller"

export const usersRouter = new Hono({ strict: true })

usersRouter.get("/", ...getAllController)
usersRouter.get("/:id", ...getUserController)
