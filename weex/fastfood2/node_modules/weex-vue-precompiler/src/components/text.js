const util = require('../util')
const {
  extend,
  getStaticStyleObject
} = util

function getLinesStaticStyle (n) {
  return {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    '-webkit-line-clamp': `${n}`
  }
}

exports.processLines = function (el) {
  const tag = el._origTag || el.tag
  if (
    this.config.preservedTags.indexOf(tag) > -1
    && tag !== 'text') {
    return
  }
  const staticStyle = getStaticStyleObject(el)
  const n = parseInt(staticStyle.lines)
  if (n > 0 && !isNaN(n)) {
    extend(staticStyle, getLinesStaticStyle(n))
    el.staticStyle = JSON.stringify(staticStyle)
  }
}

exports.processText = function (
  el,
  attrsMap,
  attrsList,
  attrs,
  staticClass
) {
  const finalClass = staticClass + ' weex-el weex-text'
  el.staticClass = `"${finalClass}"`
  attrs.push({
    name: `weex-type`,
    value: '"text"'
  })
  delete el.ns
  el.plain = false
}
