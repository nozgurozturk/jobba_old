// const throng = require('throng')
const mongoose = require('mongoose')
const url = require('url')
const app = require('./app')
const config = require('./config')

const mongoHost = new url.URL(config.MONGODB_URI).host

const start = async function () {
  const mongooseOptions = {
    useNewUrlParse: true,
    promiseLibrary: global.Promise
  }
  try {
    await Promise.all([mongoose.connect(config.MONGODB_URI, mongooseOptions), app.listen(config.PORT)])

    // eslint-disable-next-line no-console
    console.dir({
      isOnline: true,
      port: config.PORT,
      host: mongoHost
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Server can not started :', error)
  }
}
start()
// throng({
//   workers: config.WORKERS,
//   lifetime: Infinity
// }, start)
