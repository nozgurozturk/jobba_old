const jwt = require('jsonwebtoken')
const config = require('../config')

const create = userId => new Promise((resolve, reject) => {
  jwt.sign({
    userId
  }, config.JWT_SECRET, {
    expiresIn: config.JWT_LIFE_TIME
  },
  (error, token) => {
    if (error) return reject(error)

    resolve(token)
  })
})

const decode = token => new Promise((resolve, reject) => {
  jwt.verify(token, config.JWT_SECRET, (error, decodedToken) => {
    if (error) return reject(error)

    resolve(decodedToken)
  })
})

module.exports = { create, decode }
