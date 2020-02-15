const { GraphQLScalarType, Kind } = require('graphql')
const { gql } = require('apollo-server-express')

const typeDef = gql`
  scalar DateTime
`
const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'ISO Format Date',
  parseValue (value) {
    return value
  },
  parseLiteral (ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value)
    }
    return null
  }
})

module.exports = { typeDef, resolvers: { DateTime } }
