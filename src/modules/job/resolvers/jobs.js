const Job = require('../../../models/job')

const jobs = async (_) => {
  const jobs = await Job.Info
    .find()
    .populate('user')

  return jobs
}

module.exports = jobs
