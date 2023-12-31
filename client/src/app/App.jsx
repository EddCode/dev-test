import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import { Routing } from '@/router'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export function App () {
  return (
    <ApolloProvider client={client} >
      <Routing/>
    </ApolloProvider>
  )
}
