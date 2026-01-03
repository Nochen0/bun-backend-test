import { createFactory } from "hono/factory"

type Payload = {
  username: string
  id: string
}

type Env = {
  Variables: {
    mockAuthData: Payload
  }
}

const factory = createFactory<Env>()

export default factory
