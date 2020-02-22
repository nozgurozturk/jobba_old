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
    this.#description = '.job-details__spaced section:nth-child(4)'
  }

  async spiderInner () {
    try {
      const DOM = await this.$()

      const title = DOM(this.#title).cleaner()
      const companyName = DOM(this.#companyName).cleaner()
      const location = DOM(this.#location).cleaner()

      const tags = []
      const tagParent = DOM('#overview-items').find(this.#tag)
      const description = DOM(this.#description).html()
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
          let property = description.toLowerCase().split(' ').map(afterSpace => afterSpace.charAt(0).toUpperCase() + afterSpace.slice(1)).join('')
          property = property.charAt(0).toLowerCase() + property.slice(1).replace(':', '')
          detail = { ...detail, [property]: info }
          return detail
        })
      })
      detail = {
        ...detail, tags, description, companyName, location
      }
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

module.exports = Stackoverflow
