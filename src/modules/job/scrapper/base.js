const cheerio = require('cheerio')
const rp = require('request-promise')

class BaseScrapper {
  constructor (link) {
    this.link = link
  }

  async $ () {
    try {
      const html = await rp({
        uri: this.link,
        rejectUnauthorized: false,
        headers: {
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'accept-language': 'en-US,en;q=0.8,ms;q=0.6',
          'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
        }
      }, function (err, response, body) {
        if (err) throw new Error('Not redirected')
        return body
      })

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
