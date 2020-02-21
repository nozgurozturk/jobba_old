const mongoose = require('mongoose')

// TODO : Change Status to Enumaration

const jobSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  uniqueId: {
    type: String,
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
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  originId: {
    type: String,
    require: true
  },
  detail: mongoose.Schema.Types.Mixed,
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
    ref: 'Job',
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

const Info = mongoose.model('Job', jobSchema)
const Detail = mongoose.model('JobDetail', jobDetailSchema)

module.exports = { Info, Detail }
