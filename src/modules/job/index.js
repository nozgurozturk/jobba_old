const resolvers = require('./resolvers')
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  extend type Query {
    job(id: ID): Job @isAuthenticated
    jobs : [Job] @isAuthenticated
  }

  extend type Mutation {
    createJob(
      title: String!,
      origin: String,
      status: Int!,
      link: String!,
      uniqueId: String!
    ): JobInput

    createJobDetail(
      type: String,
      role: String,
      industry: String,
      experience: String,
      compantName: String,
      location: String,
      tags: [String!],
      description: String
    ): DetailInput
  }

  type JobInput {
    user: User
    title: String!,
    origin: String,
    status: Int!,
    link: String!,
    uniqueId: String!
  }

  type DetailInput {
    job : Job!
    type: String,
    role: String,
    industry: String,
    experience: String,
    compantName: String,
    location: String,
    tags: [String!],
    description: String
  }

  type Job {
    id: ID!
    title: String!,
    origin: String,
    status: Int!,
    link: String!,
    detail: Detail!,
    uniqueId: String!
  }

  type Detail {
    id: ID!
    type: String,
    role: String,
    industry: String,
    experience: String,
    compantName: String,
    location: String,
    tags: [String!],
    description: String
  }
`

module.exports = {
  typeDefs: [typeDefs],
  resolvers
}
