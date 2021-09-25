const Router = require("koa-router")
const portfolioService = require("../services/portfolio")
const portfolio = new Router()

portfolio.get("/crawling", async (ctx) => {
  console.log("/crawling requested")
  const data = await portfolioService.crawling()
  ctx.body = data
})

module.exports = portfolio
