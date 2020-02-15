const { gql, SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express')
const { defaultFiledResolver } = require('graphql')

const typeDef = gql`
  directive @isAuthenticated on FIELD_DEFINITION
`
class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition (field) {
    const { resolve = defaultFiledResolver } = field

    field.resolve = async function (...args) {
      const context = args[2]

      if (!context || !context.user) throw new AuthenticationError('Not Allowed')

      return resolve.apply(this, args)
    }
  }
}

module.exports = { typeDef, IsAuthenticatedDirective }
