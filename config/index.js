import path from "path"

let config = {
  // 公共的配置
  viewDir: path.join(__dirname, "../views"),
  assetsDir: path.join(__dirname, "../", "assets"),
  utilsDir: path.join(__dirname, "../utils"),
}

if (process.env.NODE_ENV === "development") {
  const devConfig = {
    port: 3000,
    cache: false,
  }
  config = {
    ...config,
    ...devConfig,
  }
}

if (process.env.NODE_ENV === "production") {
  const devConfig = {
    port: 80,
    cache: "memory",
  }
  config = {
    ...config,
    ...devConfig,
  }
}

export default config
