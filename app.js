import Koa from "koa"
import initController from "./controllers/index.js"
import serve from "koa-static"
import render from "koa-swig"
import { historyApiFallback } from "koa2-connect-history-api-fallback"
import co from "co"
import config from "./config/index.js"
import ErrorHandler from "./middlewares/ErrorHandler"
import log4js from "log4js"

const app = new Koa()

log4js.configure({
  // 日志存放目录
  appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
  // 日志分类 记录lebel大于目标等级的错误
  categories: { default: { appenders: ["globalError"], level: "error" } },
})

const logger = log4js.getLogger("globalError")

app.context.render = co.wrap(
  render({
    root: config.viewDir,
    autoescape: true, // v-html v-text
    cache: config.cache,
    ext: "html",
    writeBody: false,
    varControls: ["[[", "]]"], // 解决与Vue语法冲突问题
  })
)

ErrorHandler.error(app, logger)

app.use(serve(config.assetsDir))
app.use(serve(config.utilsDir))
app.use(historyApiFallback({ index: "/vue", whiteList: ["/api"] }))

initController(app)

app.listen(config.port, () => {
  console.log(`Server Is Running At Post ${config.port}`)
})
