const { AuthenticationError } = require('apollo-server-express')
const bcrypt = require('bcrypt')
const config = require('../../../config')
const token = require('../../../utils/token')
const User = require('../../../models/user')

const login = async (_, { userName, password }) => {
  const user = await User.findOne({
    userName
  })
  if (!user) throw new AuthenticationError('User is not exist')

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword)

  if (!isPasswordValid) throw new AuthenticationError('Password is not correct')

  const _token = token.create(user._id)

  return {
    user: {
      ...user._doc,
      id: user._id
    },
    token: _token,
    tokenExpiration: config.JWT_LIFE_TIME
  }
}

module.exports = login
