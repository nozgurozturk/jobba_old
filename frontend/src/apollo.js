import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getToken } from './utils/token'

const httpLink = createHttpLink({
  uri: 'http://localhost:5001'
})

const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getToken()
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })
  return forward(operation)
})

const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export { apolloProvider }
