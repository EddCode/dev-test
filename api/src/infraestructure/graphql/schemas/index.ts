import { authQuery, authType } from '../../../Auth/infra/gateway/graphql'
import { userQuery, userType, userMutation } from '../../../User/infra/gateway/graphql'

export const typeDefs = `
  ${authType}
  ${userType}

  type Query {
    ${authQuery}
    ${userQuery}
  }

  type Mutation {
    ${userMutation}
  }
`