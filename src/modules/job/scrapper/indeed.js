const BaseScrapper = require('./base')

class Indeed extends BaseScrapper {
  #title;
  #companyName;
  #location;
  #description;
  constructor (link, originId, host) {
    super(link)
    this.#title = '.title a, .jobsearch-JobInfoHeader-title'
    this.#companyName = '.company, .jobsearch-JobInfoHeader-subtitle'
    this.#location = '.location, .icl-IconFunctional--location+span'
    this.#description = '.summary, #jobDescriptionText'
    this.originId = originId
    this.host = host
  }

  async spiderInner () {
    try {
      const DOM = await this.$()
      let parent = ''

      if (this.host === 6) parent = `#pj_${this.originId} `

      const title = DOM(parent + this.#title).cleaner()
      const companyName = DOM(parent + this.#companyName).cleaner()
      const location = DOM(parent + this.#location).cleaner().replace('- ', '')
      const description = DOM(parent + this.#description).html()

      const detail = { description, companyName, location }

      const job = {
        title, detail
      }
      // eslint-disable-next-line no-console
      return job
    } catch (error) {
      return new Error('DOM is not loaded')
    }
  }
}

module.exports = Indeed
