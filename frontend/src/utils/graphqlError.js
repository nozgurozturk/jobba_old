const errorMessage = 'GraphQL error: '

export default function graphqlError (err) {
  return JSON.stringify(err.message).replace(errorMessage, '').replace(/"/g, '')
}
