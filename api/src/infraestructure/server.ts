import Fastify from 'fastify'
import cors from '@fastify/cors'
import { config } from './config'
import GQL from 'mercurius'
import { typeDefs, resolvers } from './graphql'
import { db } from './db/lowdb'
import {tokenVerify} from '../shared/jwt'

const fastify = Fastify({
  logger: config.server.logger
})

fastify.register(cors)

fastify.register(GQL, {
  schema: typeDefs,
  resolvers,
  graphiql: config.server.logger,
  context: (request) => {
    const header = request.headers.authorization
    const user = tokenVerify(header)
    
    return {
      ...user
    }
  }
})


const start = async (): Promise<void> => {
  try {
    const {port, host} = config.server
    await db.read()
    await fastify.listen({ port, host })
  }catch(err) {
    fastify.log.error(err)
  }
}

export { start }
