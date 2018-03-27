/**
 * @fileOverview to wrap object leterals with _px2rem()
 */

const esprima = require('esprima')
const escodegen = require('escodegen')
const bindingStyleNamesForPx2Rem = require('../config').bindingStyleNamesForPx2Rem

const { parseAst } = require('../util')
const { getCompiler, getTransformer } = require('wxv-transformer')

function alreadyTransformed (node) {
  if (node
    && node.type === 'CallExpression'
    && node.callee
    && (node.callee.name + ''.match(/_processExclusiveStyle|_px2rem/)))
  {
    return true
  }
  return false
}

/**
 * transform :style="{width:w}" => :style="{width:_px2rem(w, rootValue)}"
 * This kind of style binding with object literal is a good practice.
 * @param {ObjectExpression} obj
 */
function transformObject (obj, origTagName, rootValue) {
  const compiler = getCompiler(origTagName)
  if (compiler) {
    return compiler.compile(obj, bindingStyleNamesForPx2Rem, rootValue)
  }
  const properties = obj.properties
  for (let i = 0, l = properties.length; i < l; i++) {
    const prop = properties[i]
    const keyNode = prop.key
    const keyType = keyNode.type
    const key = keyType === 'Literal' ? keyNode.value : keyNode.name
    const valNode = prop.value
    if (alreadyTransformed(valNode)) {
      continue
    }
    if (bindingStyleNamesForPx2Rem.indexOf(key) > -1) {
      prop.value = {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: '_px2rem'
        },
        arguments: [valNode, { type: 'Literal', value: rootValue }]
      }
    }
  }
}

/**
 * transform :style="someObj" => :style="_px2rem(someObj, opts)"
 * This kind of binding with object variable could cause runtime
 * performance reducing.
 * @param {Identifier} node
 * @param {string} tagName
 */
function transformVariable (node, tagName, rootValue) {
  if (alreadyTransformed(node)) {
    return node
  }

  let callName = '_px2rem'
  const args = [node, { type: 'Literal', value: rootValue }]
  const transformer = getTransformer(tagName)
  if (transformer) {
    // special treatment for exclusive styles, such as text-lines
    callName = '_processExclusiveStyle'
    args.push({
      type: 'Literal',
      value: tagName,
    })
  }
  return {
    type: 'CallExpression',
    callee: {
      type: 'Identifier',
      name: callName
    },
    arguments: args
  }
}

function styleBindingHook (
  el,
  attrsMap,
  attrsList,
  attrs,
  staticClass
) {
  const styleBinding = el.styleBinding
  if (!styleBinding) {
    return
  }
  let ast = parseAst(styleBinding.trim())
  const { rootValue } = this.config.px2rem
  if (ast.type === 'ArrayExpression') {
    const elements = ast.elements
    for (let i = 0, l = elements.length; i < l; i++) {
      const element = elements[i]
      if (element.type === 'ObjectExpression') {
        transformObject(element, el._origTag || el.tag, rootValue)
      }
      /**
       * otherwise element.type ===
       *  - 'Identifier': varaibles
       *  - 'MemberExpression': member of varaibles
       */
      else {
        elements[i] = transformVariable(element, el._origTag || el.tag, rootValue)
      }
    }
  }
  else if (ast.type === 'ObjectExpression') {
    transformObject(ast, el._origTag || el.tag, rootValue)
  }
  else {
    /**
     * ast.type ===
     *  - Identifier (varaible)
     *  - MemberExpression (somObj.somProp)
     */
    ast = transformVariable(ast, el._origTag || el.tag, rootValue)
  }
  const res = escodegen.generate(ast, {
    format: {
      indent: {
        style: ' '
      },
      newline: '',
    }
  })
  // console.log('res:', res)
  el.styleBinding = res
}

module.exports = styleBindingHook
