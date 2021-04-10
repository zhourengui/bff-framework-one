import path from "path"
const resolve = (dir) => path.join(__dirname, dir)

export default {
  views: resolve("../views"),
  assets: resolve("../assets"),
}
