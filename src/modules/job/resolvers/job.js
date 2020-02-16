const { UserInputError } = require('apollo-server-express')
const Job = require('../../../models/job')

const job = async (_, args) => {
  const { id } = args
  const job = await Job
    .findById(id)
    .populate('user')

  if (!job) {
    throw new UserInputError('Not found')
  }

  return job
}

module.exports = job
