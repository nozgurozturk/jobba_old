const mongoose = require('mongoose')

// TODO : Change Status to Enumaration

const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
})

const jobDetailSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: false
  },
  industry: {
    type: String,
    required: false
  },
  experience: {
    type: String,
    required: false
  },
  companyName: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: false
  }
})

const Job = mongoose.model('Job', jobSchema)
const JobDetail = mongoose.model('JobDetail', jobDetailSchema)

module.exports = { Job, JobDetail }
