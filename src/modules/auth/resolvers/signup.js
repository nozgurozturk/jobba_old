const { UserInputError } = require('apollo-server-express')
const bcrypt = require('bcrypt')
const User = require('../../../models/user')

const signup = async (_, { userName, email, password }) => {
  try {
    const existingUser = await User.findOne({ userName })

    if (existingUser) throw new UserInputError('This user is already exist')

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      email,
      userName,
      hashedPassword
    })
    return {
      ...user._doc,
      id: user._id,
      hashedPassword: null
    }
  } catch (error) {
    return error
  }
}

module.exports = signup
