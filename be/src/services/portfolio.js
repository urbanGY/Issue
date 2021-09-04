const axios = require("axios")
const cheerio = require("cheerio")
const { BASE_URL, LIST } = require("../constant/crawling")

const crawling = async () => {
  const html = await axios.get(`${BASE_URL}${LIST}`)
  const $ = cheerio.load(html.data)
  const grid = $('table[id="grid"]').find("tbody > tr")

  const list = grid.map((_, elem) => {
    const sym = $(elem).find("td.sym")
    const topHoldings = sym.map((_, holdings) => {
      const contents = $(holdings).find("span.tit_ctl > div").contents()
      const details = contents.map((_, content) => $(content).text())

      return {
        ticker: $(holdings).find("span.tit_ctl a").text(),
        href: $(holdings).find("span.tit_ctl a").attr("href"),
        name: $(holdings).find("span.tit_ctl > div > b").text(),
        ratio: details[2],
        reportedPrice: details[4],
      }
    })

    return {
      name: $(elem).find("td.man").text(),
      href: BASE_URL + $(elem).find("td.man a").attr("href"),
      value: $(elem).find("td.val").text(),
      numOfStocks: $(elem).find("td.cnt").text(),
      topHoldings: [...topHoldings],
    }
  })

  return [...list]
}

// const stringfy = (list) => {

// }
module.exports = {
  crawling,
}
