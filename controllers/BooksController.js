import BooksModel from "../models/BooksModel"
import Controller from "./Controller"

class BooksController extends Controller {
  constructor() {
    super()
  }

  async actionBooksList(ctx) {
    const booksModel = new BooksModel()
    const result = await booksModel.getBooksList()
    ctx.body = await ctx.render("books/list", {
      data: result.data,
    })
  }
}

export default BooksController
