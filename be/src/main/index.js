const Router = require("koa-router")
const main = new Router()

main.get("/", async (ctx) => {    
  ctx.body = "hello?"
})

module.exports = main
