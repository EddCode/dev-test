import { authResolvers } from '../../../Auth/infra/gateway/graphql'
import { userResolvers, userMutationResolver } from '../../../User/infra/gateway/graphql'

export const resolvers = {
  Query: {
    ...authResolvers,
    ...userResolvers
  },
  Mutation: {
    ...userMutationResolver
  }
}