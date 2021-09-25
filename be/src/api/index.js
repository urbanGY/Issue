const Router = require("koa-router")
const api = new Router()
const portfolio = require("./portfolio")

api.use("/portfolio", portfolio.routes())

module.exports = api
