const BaseScrapper = require('./base')

class Stackoverflow extends BaseScrapper {
  #title;
  #companyName;
  #location;
  #detail;
  #tag;
  #description;
  constructor (link) {
    super(link)
    this.#title = '.job-details--header .fs-headline1'
    this.#companyName = '.job-details--header .fs-body3 .fc-black-700'
    this.#location = '.job-details--header .fs-body3 .fc-black-500'
    this.#detail = '.job-details--about'
    this.#tag = '.post-tag'
  }

  async spider () {
    try {
      const DOM = await this.$()

      const title = DOM(this.#title).cleaner()
      const companyName = DOM(this.#companyName).cleaner()
      const location = DOM(this.#location).cleaner()

      const tags = []
      const tagParent = DOM('#overview-items').find(this.#tag)

      tagParent.each(function () {
        tags.push(DOM(this).cleaner())
      })

      let detail = {}
      const jobDetailParent = DOM(this.#detail).find('div')

      jobDetailParent.each(function () {
        DOM(this).find('div').map((i, el) => {
          const description = DOM(el)
            .find('span:nth-child(1)').cleaner()
          const info = DOM(el)
            .find('span:nth-child(2)').cleaner()
          // eslint-disable-next-line no-return-assign
          const property = description.replace(' ', '_').replace(':', '').toLowerCase()
          detail = { ...detail, [property]: info }
          return detail
        })
      })
      detail = {
        ...detail, companyName, location, tags
      }
      const job = {
        title, companyName, location, detail
      }
      // eslint-disable-next-line no-console
      return job
    } catch (error) {
      return new Error('DOM is not loaded')
    }
  }
}

module.exports = Stackoverflow
