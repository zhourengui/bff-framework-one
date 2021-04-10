import Router from "@koa/router"
import IndexController from "./IndexController"
import BooksController from "./BooksController"
import VueController from "./VueController"
import ApiController from "./ApiController"
const indexController = new IndexController()
const apiController = new ApiController()
const vueController = new VueController()
const booksController = new BooksController()

const router = Router()

function initController(app) {
  router.get("/", indexController.actionIndex)
  router.get("/vue", vueController.actionIndex)
  router.get("/books/list", booksController.actionBooksList)
  router.get("/api/getDataList", apiController.actionDataList)
  app
    .use(router.routes())
    // 丰富header头
    .use(router.allowedMethods())
}

module.exports = initController
