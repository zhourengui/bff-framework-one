import Controller from "./Controller"

class VueController extends Controller {
  constructor() {
    super()
  }

  async actionIndex(ctx) {
    ctx.body = await ctx.render("index_vue")
  }
}

export default VueController
