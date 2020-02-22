const BaseScrapper = require('./base')

class Linkedin extends BaseScrapper {
  #title;
  #companyName;
  #location;
  #tag;
  #experienceLevel;
  #jobType;
  #industry;
  #description;
  constructor (link) {
    super(link)
    this.#title = '.topcard__title, .jobs-details-top-card__job-title'
    this.#companyName = '.sub-nav-cta__optional-url, .jobs-details-top-card__company-url'
    this.#location = '.topcard__flavor--bullet, .jobs-details-top-card__bullet'
    this.#tag = '.jobs-ppc-criteria__value'
    this.#experienceLevel = '.job-criteria__item:nth-child(1)>.job-criteria__text, .js-formatted-exp-body'
    this.#jobType = '.job-criteria__item:nth-child(2)>.job-criteria__text, .js-formatted-employment-status-body'
    this.#industry = '.job-criteria__item:nth-child(4)>.job-criteria__text, .js-formatted-industries-list' // This is List
    this.#description = '.description__text--rich, .jobs-box__html-content'
  }

  async spiderInner () {
    try {
      const DOM = await this.$()

      const title = DOM(this.#title).cleaner()
      const companyName = DOM(this.#companyName).cleaner()
      const location = DOM(this.#location).cleaner()
      const experienceLevel = DOM(this.#experienceLevel).cleaner()
      const jobType = DOM(this.#jobType).cleaner()
      const industry = DOM(this.#industry).cleaner()
      const tagParent = DOM(this.#tag)
      const description = DOM(this.#description).html()
      const tags = []

      if (!!tagParent && tagParent.length > 0) {
        tagParent.each(function () {
          tags.push(DOM(this).cleaner())
        })
      }

      const detail = { companyName, location, tags, experienceLevel, jobType, industry, description }

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

module.exports = Linkedin
