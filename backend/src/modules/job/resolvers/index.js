const job = require('./job')
const jobs = require('./jobs')
const Job = require('./createJob')

const resolvers = {
  Query: {
    job,
    jobs
  },
  Mutation: {
    createJob: Job.createInfo,
    createJobDetail: Job.createDetail,
    createJobWithLink: Job.createJobWithLink
  }
}

module.exports = resolvers
