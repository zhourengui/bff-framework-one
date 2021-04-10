# 搭建 BFF 架构（服务于前端的后端）

## 目录改造

├── README.md
├── app.js
├── assets
| ├── css
| ├── favicon.ico
| ├── img
| └── js
├── config
| ├── index.js
| └── path.js
├── controllers
| ├── ApiController.js
| ├── BooksController.js
| ├── Controller.js
| ├── IndexController.js
| ├── VueController.js
| └── index.js
├── logs
| └── error.log
├── middlewares
| └── ErrorHandler.js
├── models
| └── BooksModel.js
├── node_modules
| ├── @babel
| ├── @koa
| ├── @nicolo-ribaudo
| ├── @sindresorhus
| ├── @szmarczak
| ├── @types
| ├── @ungap
| ├── abbrev
| ├── accepts
| ├── agent-base
| ├── align-text
| ├── ansi-align
| ├── ansi-colors
| ├── ansi-regex
| ├── ansi-styles
| ├── any-promise
| ├── anymatch
| ├── argparse
| ├── arr-diff
| ├── arr-flatten
| ├── arr-union
| ├── array-unique
| ├── assertion-error
| ├── assign-symbols
| ├── async
| ├── async-each
| ├── asynckit
| ├── atob
| ├── axios
| ├── babel-plugin-dynamic-import-node
| ├── babel-plugin-polyfill-corejs2
| ├── babel-plugin-polyfill-corejs3
| ├── babel-plugin-polyfill-regenerator
| ├── balanced-match
| ├── base
| ├── binary-extensions
| ├── boxen
| ├── brace-expansion
| ├── braces
| ├── browser-stdout
| ├── browserslist
| ├── buffer-crc32
| ├── buffer-from
| ├── cache-base
| ├── cache-content-type
| ├── cacheable-request
| ├── call-bind
| ├── camelcase
| ├── caniuse-lite
| ├── center-align
| ├── chai
| ├── chalk
| ├── check-error
| ├── chokidar
| ├── ci-info
| ├── class-utils
| ├── cli-boxes
| ├── cliui
| ├── clone-response
| ├── co
| ├── collection-visit
| ├── color-convert
| ├── color-name
| ├── colorette
| ├── combined-stream
| ├── commander
| ├── commondir
| ├── component-emitter
| ├── concat-map
| ├── configstore
| ├── content-disposition
| ├── content-type
| ├── convert-source-map
| ├── cookiejar
| ├── cookies
| ├── copy-descriptor
| ├── core-js
| ├── core-js-compat
| ├── core-util-is
| ├── crypto-random-string
| ├── date-format
| ├── debug
| ├── decamelize
| ├── decode-uri-component
| ├── decompress-response
| ├── deep-eql
| ├── deep-equal
| ├── deep-extend
| ├── defer-to-connect
| ├── define-properties
| ├── define-property
| ├── delayed-stream
| ├── delegates
| ├── depd
| ├── destroy
| ├── diff
| ├── dot-prop
| ├── duplexer3
| ├── ee-first
| ├── electron-to-chromium
| ├── emoji-regex
| ├── encodeurl
| ├── end-of-stream
| ├── es-abstract
| ├── es-to-primitive
| ├── escalade
| ├── escape-goat
| ├── escape-html
| ├── escape-string-regexp
| ├── esutils
| ├── expand-brackets
| ├── extend-shallow
| ├── extglob
| ├── extract-zip
| ├── fast-safe-stringify
| ├── fd-slicer
| ├── fill-range
| ├── find-cache-dir
| ├── find-up
| ├── flat
| ├── flatted
| ├── follow-redirects
| ├── for-in
| ├── form-data
| ├── formidable
| ├── fragment-cache
| ├── fresh
| ├── fs-extra
| ├── fs-readdir-recursive
| ├── fs.realpath
| ├── fsevents
| ├── function-bind
| ├── gensync
| ├── get-caller-file
| ├── get-func-name
| ├── get-intrinsic
| ├── get-stream
| ├── get-value
| ├── glob
| ├── glob-parent
| ├── global-dirs
| ├── globals
| ├── got
| ├── graceful-fs
| ├── growl
| ├── has
| ├── has-bigints
| ├── has-flag
| ├── has-symbols
| ├── has-value
| ├── has-values
| ├── has-yarn
| ├── he
| ├── homedir-polyfill
| ├── http-assert
| ├── http-cache-semantics
| ├── http-errors
| ├── https-proxy-agent
| ├── ignore-by-default
| ├── import-lazy
| ├── imurmurhash
| ├── inflight
| ├── inherits
| ├── ini
| ├── is-accessor-descriptor
| ├── is-bigint
| ├── is-binary-path
| ├── is-boolean-object
| ├── is-buffer
| ├── is-callable
| ├── is-ci
| ├── is-core-module
| ├── is-data-descriptor
| ├── is-date-object
| ├── is-descriptor
| ├── is-extendable
| ├── is-extglob
| ├── is-fullwidth-code-point
| ├── is-generator-function
| ├── is-glob
| ├── is-installed-globally
| ├── is-negative-zero
| ├── is-npm
| ├── is-number
| ├── is-number-object
| ├── is-obj
| ├── is-path-inside
| ├── is-plain-obj
| ├── is-plain-object
| ├── is-regex
| ├── is-string
| ├── is-symbol
| ├── is-typedarray
| ├── is-windows
| ├── is-yarn-global
| ├── isarray
| ├── isexe
| ├── isobject
| ├── jpeg-js
| ├── js-tokens
| ├── js-yaml
| ├── jsesc
| ├── json-buffer
| ├── json5
| ├── jsonfile
| ├── keygrip
| ├── keyv
| ├── kind-of
| ├── koa
| ├── koa-compose
| ├── koa-convert
| ├── koa-send
| ├── koa-static
| ├── koa-swig
| ├── koa2-connect-history-api-fallback
| ├── latest-version
| ├── lazy-cache
| ├── locate-path
| ├── lodash
| ├── lodash.debounce
| ├── log-symbols
| ├── log4js
| ├── longest
| ├── lowercase-keys
| ├── lru-cache
| ├── make-dir
| ├── map-cache
| ├── map-visit
| ├── media-typer
| ├── methods
| ├── micromatch
| ├── mime
| ├── mime-db
| ├── mime-types
| ├── mimic-response
| ├── minimatch
| ├── minimist
| ├── mixin-deep
| ├── mocha
| ├── ms
| ├── nanoid
| ├── nanomatch
| ├── negotiator
| ├── node-environment-flags
| ├── node-modules-regexp
| ├── node-releases
| ├── nodemon
| ├── nopt
| ├── normalize-path
| ├── normalize-url
| ├── object-copy
| ├── object-inspect
| ├── object-keys
| ├── object-visit
| ├── object.assign
| ├── object.getownpropertydescriptors
| ├── object.pick
| ├── on-finished
| ├── once
| ├── only
| ├── optimist
| ├── p-cancelable
| ├── p-limit
| ├── p-locate
| ├── p-try
| ├── package-json
| ├── parse-passwd
| ├── parseurl
| ├── pascalcase
| ├── path-dirname
| ├── path-exists
| ├── path-is-absolute
| ├── path-parse
| ├── path-to-regexp
| ├── pathval
| ├── pend
| ├── picomatch
| ├── pify
| ├── pirates
| ├── pkg-dir
| ├── playwright
| ├── pngjs
| ├── posix-character-classes
| ├── prepend-http
| ├── process-nextick-args
| ├── progress
| ├── proper-lockfile
| ├── proxy-from-env
| ├── pstree.remy
| ├── pump
| ├── pupa
| ├── qs
| ├── randombytes
| ├── rc
| ├── readable-stream
| ├── readdirp
| ├── regenerate
| ├── regenerate-unicode-properties
| ├── regenerator-runtime
| ├── regenerator-transform
| ├── regex-not
| ├── regexpu-core
| ├── registry-auth-token
| ├── registry-url
| ├── regjsgen
| ├── regjsparser
| ├── remove-trailing-separator
| ├── repeat-element
| ├── repeat-string
| ├── require-directory
| ├── resolve
| ├── resolve-path
| ├── resolve-url
| ├── responselike
| ├── ret
| ├── retry
| ├── rfdc
| ├── right-align
| ├── rimraf
| ├── safe-buffer
| ├── safe-regex
| ├── semver
| ├── semver-diff
| ├── serialize-javascript
| ├── set-value
| ├── setprototypeof
| ├── side-channel
| ├── signal-exit
| ├── slash
| ├── snapdragon
| ├── snapdragon-node
| ├── snapdragon-util
| ├── source-map
| ├── source-map-resolve
| ├── source-map-support
| ├── source-map-url
| ├── split-string
| ├── stack-utils
| ├── static-extend
| ├── statuses
| ├── streamroller
| ├── string-width
| ├── string.prototype.trimend
| ├── string.prototype.trimstart
| ├── string_decoder
| ├── strip-ansi
| ├── strip-json-comments
| ├── superagent
| ├── supertest
| ├── supports-color
| ├── swig-templates
| ├── term-size
| ├── thenify
| ├── to-fast-properties
| ├── to-object-path
| ├── to-readable-stream
| ├── to-regex
| ├── to-regex-range
| ├── toidentifier
| ├── touch
| ├── tsscmp
| ├── type-detect
| ├── type-fest
| ├── type-is
| ├── typedarray-to-buffer
| ├── uglify-js
| ├── uglify-to-browserify
| ├── unbox-primitive
| ├── undefsafe
| ├── unicode-canonical-property-names-ecmascript
| ├── unicode-match-property-ecmascript
| ├── unicode-match-property-value-ecmascript
| ├── unicode-property-aliases-ecmascript
| ├── union-value
| ├── unique-string
| ├── universalify
| ├── unset-value
| ├── upath
| ├── update-notifier
| ├── urix
| ├── url-parse-lax
| ├── use
| ├── util-deprecate
| ├── utils-merge
| ├── v8flags
| ├── vary
| ├── which
| ├── which-boxed-primitive
| ├── wide-align
| ├── widest-line
| ├── window-size
| ├── wordwrap
| ├── workerpool
| ├── wrap-ansi
| ├── wrappy
| ├── write-file-atomic
| ├── ws
| ├── xdg-basedir
| ├── y18n
| ├── yallist
| ├── yargs
| ├── yargs-parser
| ├── yargs-unparser
| ├── yauzl
| ├── ylru
| └── yocto-queue
├── package-lock.json
├── package.json
├── tests
| ├── api.test.js
| └── e2e.test.js
├── utils
| ├── SafeRequest.js
| ├── helpers.js
| └── safeRequest.js
├── views
| ├── books
| ├── index.html
| └── index_vue.html
└── yarn.lock

## 搭建

### 技术栈

Koa 一系列配套系列
nodemon
pm2
@koa/router
koa-swig + co
koa-static 静态资源服务器

### 真假路由

/about --> 后端/about --> 404 --> fallback --> 后端/ --> vue 页面 --> url /about --> vue-router -> /about

koa2-connect-history-api-fallback 真假路由转换

### 错误处理

洋葱模型
日志收集 log4js：时间、级别、分类

### ES6/system.js

解决浏览器不支持 ES6 语法

system.js 解决不兼容问题，需要通过 babel 打包成 systemjs 认识的语法
@babel/plugin-transform-modules-systemjs
@babel/core
@babel/cli

```bash
$ babel --plugins @babel/plugin-transform-modules-systemjs ./assets/js/index.js -o ./assets/js/system_bundle.js
```

```html
<script src="https://cdn.bootcdn.net/ajax/libs/systemjs/6.8.3/system.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.min.js"></script>
<script type="module">
  import("/js/index.js").then((res) => {
    console.error("esmodule", res.default)
  })
</script>
<script>
  System.import("/js/system_bundle.js").then((res) => {
    console.error("systemmodule", res.default)
  })
</script>
```

https://github.com/samthor/html-modules-polyfill

NodeJS 中使用 ES6，使用@babel/node、@babel/preset-env、@babel/core

线上环境使用 gulp

## 封装 axios

## 函数式编程

lodash、underscore

封装函数工具库

基本特点：

- 通过函数对数据进行转化
- 通过串联多个函数来求结果

## 测试

接口测试、e2e 测试

Playwright(只能使用 npm 安装)、mocha(配合 supertest 做接口测试)、chai
