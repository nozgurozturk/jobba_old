
// const validator = [
//   /(stackoverflow)(\/jobs\/)\\w+?(\/)/g,
//   /(glassdoor.com)(\/Job\/)/g,
//   /(glassdoor.com\/)(job-listing\/)\\S+?(jl=)/g,
//   /(linkedin.com\/)(jobs\/)(search\/)\\S+?(currentJobId=)/g,
//   /(linkedin.com\/)(jobs\/)(view\/)/g,
//   /(indeed.com\/)(jobs)(vjk=)/g,
//   /(indeed.com\/)(viewjob)(jk=)/g
// ]
// TODO : Refactor Data Structre beacuse some of properties are same value
const origins = [
  {
    validation: /(stackoverflow.com)(\/jobs\/)/g,
    host: 1,
    name: 'stackoverflow',
    beforeKey: 'jobs/',
    afterKey: '/'
  },
  {
    validation: /(stackoverflow.com)(\/jobs\\?)/g,
    host: 2,
    name: 'stackoverflow',
    beforeKey: 'jobs?id=',
    afterKey: null
  },
  {
    validation: /(glassdoor.com)(\/job-listing\/)/g,
    host: 3,
    name: 'glassdoor',
    beforeKey: 'jl=',
    afterKey: '&'
  },
  {
    validation: /(linkedin.com)(\/jobs\/)(search)/g,
    host: 4,
    name: 'linkedin',
    beforeKey: 'currentJobId=',
    afterKey: '&'
  },
  {
    validation: /(linkedin.com)(\/jobs\/)(view)/g,
    host: 5,
    name: 'linkedin',
    beforeKey: 'view/',
    afterKey: '/'
  },
  {
    validation: /(indeed.com)(\/jobs)/i,
    host: 6,
    name: 'indeed',
    beforeKey: 'vjk=',
    afterKey: null
  },
  {
    validation: /(indeed.com)?(\bjk=)/g,
    host: 7,
    name: 'indeed',
    beforeKey: 'jk=',
    afterKey: '&'
  }]

// const origins = ['stackoverflow', 'glassdoor', 'linkedin', 'indeed']

const linkResolver = (link) => new Promise((resolve, reject) => {
  let name, originId, host
  for (let index = 0; index < origins.length; index++) {
    const origin = origins[index]
    if (origin.validation.test(link)) {
      name = origin.name
      host = origin.host
      originId = link.split(origin.beforeKey)[1].split(origin.afterKey)[0]
      break
    }
  }
  if (name) {
    resolve({ name, originId, host })
  } else {
    reject(new Error('Cant find origin'))
  }
})

const uniqueIdGenerator = (id, origin) => new Promise((resolve, reject) => {
  let ascii = 0
  let pointer = 0

  while (pointer < origin.length) {
    ascii += origin.charCodeAt(pointer)
    pointer++
  }

  if (ascii <= 0) {
    reject(new Error('Unique Id is not generated'))
  } else {
    const unique = ascii + id
    resolve(unique)
  }
})

module.exports = { uniqueIdGenerator, linkResolver }
