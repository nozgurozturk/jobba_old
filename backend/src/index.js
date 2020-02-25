// const throng = require('throng')
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
  } = config

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const start = async function () {
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
  }
  try {
    await Promise.all([mongoose.connect(url, mongooseOptions), app.listen(config.PORT)])

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
