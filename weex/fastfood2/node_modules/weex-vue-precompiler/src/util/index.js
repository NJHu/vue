const esprima = require('esprima')

exports.extend = function (to, from) {
  if (!to) { return }
  const args = Array.prototype.slice.call(arguments, 1)
  for (let i = 0, l = args.length; i < l; i++) {
    const from = args[i]
    if (!from) { continue }
    for (const k in from) {
      if (from.hasOwnProperty(k)) {
        to[k] = from[k]
      }
    }
  }
  return to
}

const camelizeRE = /-(\w)/g
exports.camelize = str => {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

const hyphenateRE = /([^-])([A-Z])/g
exports.hyphenate = str => {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase()
}

exports.getStaticStyleObject = function (el) {
  let staticStyle = el.staticStyle
  try {
    staticStyle = JSON.parse(staticStyle)
  }
  catch (e) {
    staticStyle = {}
  }
  return staticStyle || {}
}

const parseAst = function parseAst (val) {
  let statement = 'a = '
  if (typeof val === 'object') {
    statement += `${JSON.stringify(val)}`
  }
  else {
    statement += val
  }
  const cached = parseAst._cached[statement]
  if (cached) {
    return cached
  }
  const ast = esprima.parse(statement)
    .body[0].expression.right
  parseAst._cached[statement] = ast
  return ast
}
parseAst._cached = {}
exports.parseAst = parseAst
