const cheerio = require('cheerio')
const rp = require('request-promise')

class BaseScrapper {
  constructor (link) {
    this.link = link
  }

  async $ () {
    try {
      const html = await rp(this.link)
      if (!html) throw new Error('HTML is empty')
      const DOM = cheerio.load(html)

      DOM.prototype.cleaner = function () {
        return this.text().replace(/–\n/g, '').trim()
      }

      return DOM
    } catch (error) {
      return new Error('Can\'t load data from link ')
    }
  }
}
module.exports = BaseScrapper
