const { UserInputError, ApolloError } = require('apollo-server-express')

const Stackoverflow = require('./stackoverflow')
const Glassdoor = require('./glassdoor')
const Indeed = require('./indeed')
const Linkedin = require('./linkedin')

const Identifier = async (link, name, originId, host) => {
  let job = {}
  try {
    switch (name) {
      case 'stackoverflow':
        job = await new Stackoverflow(link).spiderInner()
        break
      case 'glassdoor':
        job = await new Glassdoor(link).spiderInner()
        break
      case 'linkedin':
        job = await new Linkedin(link).spiderInner()
        break
      case 'indeed':
        job = await new Indeed(link, originId, host).spiderInner()
        break
      default:
        return new UserInputError('There is no matched Scrapper, Sorry :(')
    }
    return job
  } catch (error) {
    return new ApolloError('Cant identify Scrapper')
  }
}

module.exports = Identifier
