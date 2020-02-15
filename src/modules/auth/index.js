const resolvers = require('./resolvers')
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  extend type Query {
    me: User @isAuthenticated
  }

  extend type Mutation {
    login(
      userName: String!,
      password: String!
    ): AuthData

    signup(
      email: String!,
      userName: String!,
      password: String!
    ): AuthData
  }

  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }

  type User {
    id: ID!
    email: String!
    userName: String!
    password: String!
  }
`

module.exports = {
  typeDefs: [typeDefs],
  resolvers
}
