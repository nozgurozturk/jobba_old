const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const bodyParser = require('body-parser')

const context = require('./utils/context')
const schema = require('./modules')

// TODO : Error handlings
// TODO : Testing

const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await context.getUser(req)
  })
})

const app = express()

server.applyMiddleware({
  path: '/',
  app
})
app.use(bodyParser.json())

module.exports = app
