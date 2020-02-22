const BaseScrapper = require('./base')

class Glassdoor extends BaseScrapper {
  #title;
  #companyName;
  #location;
  #description;
  constructor (link) {
    super(link)
    this.#title = '.smarterBannerEmpInfo h2'
    this.#companyName = '.strong.ib'
    this.#location = '.subtle.ib'
    this.#description = '#JobDescriptionContainer'
  }

  async spiderInner () {
    try {
      const DOM = await this.$()

      const title = DOM(this.#title).cleaner()
      const companyName = DOM(this.#companyName).cleaner()
      const location = DOM(this.#location).cleaner().replace('- ', '')
      const description = DOM(this.#description).find('.desc').html()

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

module.exports = Glassdoor
