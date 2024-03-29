const { UserInputError, ApolloError } = require('apollo-server-express')
const Job = require('../../../models/job')
const Helper = require('../utils/helpers')
const Identifier = require('../scrapper')

const createInfo = async (_, { title, origin, status, link, detail, uniqueId }, { user }) => {
  try {
    const userId = user._id.toString()

    const existingJob = await Job.Info.findOne({ uniqueId })

    if (existingJob) throw new UserInputError('You saved this job before')

    const newJob = new Job.Info({
      user: userId,
      title,
      origin,
      status,
      link,
      detail,
      uniqueId
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
    return new ApolloError(error)
  }
}

const createJobWithLink = async (_, { link }, { user }) => {
  try {
    const userId = user._id.toString()

    const { name, originId, host } = await Helper.linkResolver(link)

    const uniqueId = await Helper.uniqueIdGenerator(originId, name)

    const existingJob = await Job.Info.findOne({ uniqueId })

    if (existingJob) throw new UserInputError('You saved this job before')

    const dedicatedJob = await Identifier(link, name, originId, host)

    const newJob = new Job.Info({
      user: userId,
      origin: name,
      status: 0,
      link,
      uniqueId,
      ...dedicatedJob
    })
    await newJob.populate('user').execPopulate()

    return newJob.save()
  } catch (error) {
    return new ApolloError(error)
  }
}

module.exports = { createDetail, createInfo, createJobWithLink }
