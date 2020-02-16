const { UserInputError, ApolloError } = require('apollo-server-express')
const Job = require('../../../models/job')
const Helper = require('../utils/helpers')

const createInfo = async (_, { title, origin, status, link, detail, originId }, { user }) => {
  try {
    const userId = user._id.toString()

    const uniqueId = await Helper.UniqueIdGenerator(originId, origin)

    const existingJob = await Job.Info.findOne({ uniqueId })

    if (existingJob) throw new UserInputError('You saved this job before')

    const newJob = new Job.Info({
      user: userId,
      title,
      origin,
      status,
      link,
      detail,
      uniqueId,
      originId
    })

    await newJob.populate('user').execPopulate()

    return newJob.save()
  } catch (error) {
    return error
  }
}

const createDetail = async (_, { type, role, industry, experience, companyName, location, tags, description }, { job }) => {
  try {
    const jobId = job._id.toString()

    const newJob = new Job.Detail({
      job: jobId,
      type,
      role,
      industry,
      experience,
      companyName,
      location,
      tags,
      description
    })
    await newJob.populate('job').execPopulate()
    return newJob.save()
  } catch (error) {
    return new ApolloError('Internal server error')
  }
}

module.exports = { createDetail, createInfo }
