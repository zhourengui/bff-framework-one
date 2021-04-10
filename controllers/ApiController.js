import Controller from "./Controller"
import BooksModel from "../models/BooksModel"

class IndexController extends Controller {
  constructor() {
    super()
  }

  async actionDataList(ctx) {
    const booksModel = new BooksModel()
    const result = await booksModel.getBooksList()
    ctx.body = result.data
  }
}

export default IndexController
