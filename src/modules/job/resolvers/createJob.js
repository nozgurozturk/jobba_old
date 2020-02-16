const Job = require('../../../models/job')

const createInfo = async (_, { title, origin, status, link, detail, uniqueId }, { user }) => {
  try {
    const existingJob = await Job.Info.findOne({ uniqueId })
    if (existingJob) throw new Error('You saved this job before')
    // TODO : UniqueId Generator (combine link which is contain jobid and origin)

    const userId = user._id.toString()

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
    return error
  }
}

module.exports = { createDetail, createInfo }

// https://www.glassdoor.com/Job/istanbul-ibm-z-software-engineer-jobs-SRCH_IL.0,8_IC3361434_KO9,32.htm?src=GD_JOB_AD&srs=MEMBER_HOME_RECOMMENDED&jl=3447606883&ao=882633&s=320&guid=000001704ae62fa19585f5965ef64b03&pos=104&t=SEARCH_RESULTS_JOBS_HIGHRELEVANCY
// https://tr.indeed.com/jobs?q=front%20end%20developer&l=istanbulda&vjk=b001035ec2b0a7a9
// https://de.indeed.com/jobs?q=front%20end&l=Berlin&ts=1581248021549&rq=1&rsIdx=0&fromage=last&newcount=44&advn=1330271522011977&vjk=6f3c410fd692b09a

// https://stackoverflow.com/jobs/363899/front-end-engineer-angular-propertyguru-pte-ltd
// b001035ec2b0a7a9
// 6f3c410fd692b09a
