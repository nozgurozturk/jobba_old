const { makeExecutableSchemaFromModules } = require('../utils/modules')

const auth = require('./auth')
// const jobs = require('./jobs')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth
    // jobs
  ]
})
