class ErrorHandler {
  static error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next()
        // if (ctx.status === 404) {
        //   ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="#放置自己首页的地址#" homePageName="回到我的主页"></script>`
        // }
      } catch (e) {
        logger.error(e)
        ctx.body = "服务器发生错误，正在积极修复"
      }
    })
  }
}

export default ErrorHandler
