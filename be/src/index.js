const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()
const api = require("./api")

router.use("/api", api.routes())

app.use(router.routes()).use(router.allowedMethods())
app.listen(process.env.PORT || 4000, () => {
  console.log(`server listening to port ${4000} or ${process.env.PORT}`)
})
