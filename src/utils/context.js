const token = require('./token')
const User = require('../models/user')

// const TOKEN_HEADER_NAME = 'x-token'

const getUser = async req => {
  if (!req) return null

  if (!req.headers.authorization) return 'Bearer Token is not found'

  const tokenHeader = req.headers.authorization.split(' ')[1]
  if (!tokenHeader) return 'Token is not found'

  try {
    const decodedToken = await token.decode(tokenHeader)
    return await User.findById(decodedToken.userId)
  } catch (error) {
    return null
  }
}

module.exports = { getUser }
