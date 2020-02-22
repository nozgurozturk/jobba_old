const { makeExecutableSchemaFromModules } = require('../utils/modules')

const auth = require('./auth')
const job = require('./job')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    job
  ]
})
