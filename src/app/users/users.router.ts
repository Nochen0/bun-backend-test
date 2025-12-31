import { Hono } from "hono"
import getAllController from "./controllers/getAll.controller"

export const usersRouter = new Hono({ strict: true })

usersRouter.get("/", ...getAllController)
