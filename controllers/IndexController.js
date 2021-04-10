import Controller from "./Controller"

class IndexController extends Controller {
  constructor() {
    super()
  }

  async actionIndex(ctx) {
    ctx.body = await ctx.render("index")
    // throw new Error("自定义错误")
  }
}

export default IndexController
