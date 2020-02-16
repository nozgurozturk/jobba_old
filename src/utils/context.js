const { SyntaxError, ValidationError, AuthenticationError } = require('apollo-server-express')
const token = require('./token')
const User = require('../models/user')

const getUser = async req => {
  if (!req) return null

  if (!req.headers.authorization) return new AuthenticationError('Token is not found')

  const tokenHeader = req.headers.authorization.split(' ')[1]
  if (!tokenHeader) return new ValidationError('Token is not correct')
  try {
    const decodedToken = await token.decode(tokenHeader)
    const user = await User.findById(decodedToken.userId)
    if (!user) return new ValidationError('User not found', '204')
    return user
  } catch (error) {
    return new SyntaxError('Internal server error')
  }
}

module.exports = { getUser }
