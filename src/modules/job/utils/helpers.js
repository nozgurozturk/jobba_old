
const validator = [
  '\\(stackoverflow)(\\/jobs\\/)\\w+?(\\/)\\',
  '\\(glassdoor.com)(/Job/)\\',
  '\\(glassdoor.com/)(job-listing/)\\S+?(jl=)\\',
  '\\(linkedin.com/)(jobs/)(search/)\\S+?(currentJobId=)\\',
  '\\(linkedin.com/)(jobs/)(view/)\\S+?(/)\\',
  '\\(indeed.com/)(jobs)\\S+?(vjk=)\\',
  '\\(indeed.com/)(viewjob)\\S+?(jk=)\\'
]

const origins = ['stackoverflow', 'glassdoor', 'linkedin', 'indeed']

const uniqueIdGenerator = (id, origin) => new Promise((resolve, reject) => {
  let ascii = 0
  origin.split('').map(char => {
    ascii += char.charCodeAt(0)
  })
  if (ascii <= 0) {
    reject(new Error('Unique Id is not generated'))
  } else {
    resolve(ascii.toString() + id.toString())
  }
})

const linkValidator = (link) => {
  validator.forEach((regex, index) => {
    if (link.match(regex, link)) return index + 1
  })
}

const originIdentifier = (link) => {
  let org
  origins.forEach((origin) => {
    if (link.indexOf(origin) >= 0) {
      org = origin
    }
  })
  return org
}

module.exports = { originIdentifier, linkValidator, uniqueIdGenerator }
