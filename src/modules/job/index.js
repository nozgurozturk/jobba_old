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
    ): JobInput

    createJobDetail(
      jobType: String,
      role: String,
      experienceLevel: String,
      industry: String,
      experience: String,
      companyName: String,
      location: String,
      tags: [String!],
      description: String
    ): DetailInput

    createJobWithLink(
      link: String!
    ): Job
  }

  type JobInput {
    user: User
    title: String!,
    origin: String,
    status: Int!,
    link: String!,
  }

  type WithLinkInput {
    link: String!
  }
  type DetailInput {
    job : Job!
    jobType: String,
    role: String,
    experienceLevel: String,
    industry: String,
    experience: String,
    companyName: String,
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
    detail: Detail,
    uniqueId: Int!
  }

  type Detail {
    id: ID!
    jobType: String,
    role: String,
    experienceLevel: String,
    industry: String,
    experience: String,
    companyName: String,
    location: String,
    tags: [String!],
    description: String
  }
`

module.exports = {
  typeDefs: [typeDefs],
  resolvers
}
