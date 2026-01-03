import factory from "../factory"

const mockAuthMiddleware = factory.createMiddleware(async (c, next) => {
  c.set("mockAuthData", { username: "asd", id: "asdid" })
  await next()
})

export default mockAuthMiddleware
