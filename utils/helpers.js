"use strict"
;(function () {
  // globalThis nodejs和浏览器都代表全局
  var root =
    (typeof self == "object" && self.self === self && self) ||
    (typeof global == "object" && global.global === global && global) ||
    Function("return this")() ||
    {}

  var _ = function (obj) {
    if (obj instanceof _) return obj
    if (!(this instanceof _)) return new _(obj)
    this._wrapped = obj
  }

  var ArrayProto = Array.prototype
  var push = ArrayProto.push

  _.each = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i)
    }
    return arr
  }

  _.isFunction = (obj) => {
    return typeof obj == "function" || false
  }

  _.functions = (obj) => {
    var names = []
    for (let key in obj) {
      if (_.isFunction(obj[key])) names.push(key)
    }
    return names
  }

  _.mixin = (obj) => {
    _.each(_.functions(obj), (name) => {
      // 支持拓展
      var func = (_[name] = obj[name])
      _.prototype[name] = function () {
        var args = [this._wrapped]
        push.apply(args, arguments) // 合并参数
        return func.apply(_, args)
      }
    })
  }

  _.mixin(_)

  /**
   * 类似Ramda中的apply
   * @param {*} fn
   */
  _.spreadArgs = (fn) => (...args) => fn(...args)

  /**
   * 偏函数，前置参数在前后置参数在后
   * @param {*} fn
   * @param  {...any} presetArgs 前置参数
   * @returns
   * @example
   * partial((a, b) => a + b, 1)(2)
   * a === 1
   * b === 2
   */
  _.partial = (fn, ...presetArgs) => (...laterArgs) =>
    fn(...presetArgs, ...laterArgs)((root._ = _))

  /**
   * 功能与偏函数一样，只是参数变为对象
   * @param {*} fn
   * @param {*} presetObj
   */
  _.partialProps = (fn, presetObj) => (laterObj) =>
    fn(Object.assign({}, presetObj, laterObj))

  /**
   * 反转偏函数，后置参数在前，前置参数在后
   * @param {*} fn
   * @param  {...any} presetArgs 前置参数
   * @returns
   * @example
   * partialRight((a, b) => a + b, 1)(2)
   * a === 2
   * b === 1
   */
  _.partialRight = (fn, ...presetArgs) => (...laterArgs) =>
    fn(...laterArgs, ...presetArgs)

  /**
   * 严格的柯里化，一元函数，通过传递少的参数进行惰性求值
   * @param {*} fn
   * @param {*} arity 柯里化数
   * @param {*} nextCurried 下一个执行的柯里化
   * @returns
   * @example
   * const add = curry((a, b, c) => a + b + c)
   * add(1)(2)(3) === 6
   */
  _.curry = (fn, arity = fn.length, nextCurried) =>
    (nextCurried = (prevArgs) => (nextArg) => {
      const args = [...prevArgs, nextArg]
      return args.length === arity ? fn(...args) : nextCurried(args)
    })([])

  /**
   * 与严格柯里化功能一样，只是参数是对象
   * @param {*} fn
   * @param {*} arity
   * @param {*} nextCurried
   */
  _.curryProps = (fn, arity = 1, nextCurried) =>
    (nextCurried = (prevObj) => (nextObj) => {
      const [key] = Object.keys(nextObj)
      const allObj = Object.assign({}, prevObj, { [key]: nextObj[key] })
      return Object.keys(allObj).length >= arity
        ? fn(allObj)
        : nextCurried(allObj)
    })({})

  /**
   * 宽松柯里化，一次柯里化可以传递多个参数
   * @param {*} fn
   * @param {*} arity 柯里化数
   * @param {*} nextCurried 下一个执行的柯里化
   * @returns
   * @example
   * const add = curry((a, b, c) => a + b + c)
   * add(1)(2, 3) === 6
   */
  _.looseCurry = (fn, arity = fn.length, nextCurried) =>
    (nextCurried = (prevArgs) => (...nextArgs) => {
      const args = [...prevArgs, ...nextArgs]
      return args.length >= arity ? fn(...args) : nextCurried(args)
    })([])

  /**
   * 反柯里化
   * @param {*} fn
   * @returns
   * @example
   * curry(fn)(1, 2, 3) ===> fn(1, 2, 3)
   */
  _.uncurry = (fn) => (...args) => {
    let ret = fn
    for (let arg of args) {
      ret = ret(arg)
    }
    return ret
  }

  /**
   * 无参数风格，判断是否满足
   * 在FP库中称为complement(..)
   * @param {function} predicate
   * @requires boolean
   */
  _.not = (predicate) => (...args) => !predicate(...args)

  /**
   * 表示if条件
   * @param {function} predicate
   * @param {function} fn
   * @returns
   */
  _.when = (predicate, fn) => (...args) =>
    predicate(...args) ? fn(...args) : undefined

  /**
   * 组合函数
   * @param  {function[]} fns
   * @returns
   */
  _.compose = (...fns) =>
    fns.reverse().reduce((fn1, fn2) => (...args) => fn1(fn2(...args)))

  /**
   * 组合函数参数反转，功能与组合函数一样
   * @param  {function[]} fns
   * @returns
   */
  _.pipe = (...fns) => fns.reduce((fn1, fn2) => (...args) => fn1(fn2(...args)))

  /**
   * 节流函数
   * 每隔一段时间 执行一次函数
   * 防止频繁发送请求
   * 第一次出发立即执行
   * 如果在间隔时间内触发，应该让它在间隔末尾在执行一次
   * @param  {function} fns
   * @param  {number} t
   */
  _.throttle = function (fn, t) {
    let isFirst = true
    let execData = +new Date()
    let timer
    return function () {
      if (isFirst) {
        fn.apply(this, arguments)
        isFirst = false
        execData = +new Date()
      } else {
        const currentDate = +new Date()
        if (currentDate - execData >= t) {
          fn.apply(this, arguments)
          execData = +new Date()
        } else {
          const timeWait = t - (currentDate - execData)
          timer && clearTimeout(timer)
          timer = setTimeout(() => {
            fn.apply(this, arguments)
            execData = +new Date()
          }, timeWait)
        }
      }
    }
  }

  root._ = _
})()
