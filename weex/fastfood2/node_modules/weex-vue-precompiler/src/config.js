const config = {
  eventMap: {
    click: 'weex$tap',
    scroll: 'weex$scroll'
  },
  // these components should auto bind events with .native.
  weexRegisteredComponents: [
    'input',
    'switch',
    'list',
    'scroller',
    'waterfall',
    'header',
    'loading',
    'refresh',
    'loading-indicator',
    'slider',
    'cycleslider',
    'slider-neighbor',
    'indicator',
    'textarea',
    'video',
    'web'
  ],
  aliweexComponents: [
    // aliweex
    'tabheader',
    'mask',
    'richtext',
    'appbar',
    'parallax'
  ],
  // these components should not bind events with .native.
  weexBuiltInComponents: [
    'div',
    'container',
    'text',
    'image',
    'img',
    'cell',
    'a'
  ],
  // add .stop to stop propagation for weex native events only.
  // user defined events may not have the stopPropagation method.
  weexEvents: [
    'click',
    'tap',
    'scroll',
    // gesture
    'touchstart',
    'touchend',
    'touchmove',
    'swipe',
    'panstart',
    'panmove',
    'panend',
    'longpress',
    'long',
    // input & switch & slider
    'input',
    'key',
    'keyup',
    'keydown',
    'return',
    'change',
    'focus',
    'blur',
    'active',
    // appear series.
    'appear',
    'disappear',
    'offsetAppear',
    'offsetDisappear',
    // refresh & loading
    'refresh',
    'pullingdown',
    'loading',
    // video
    'start',
    'pause',
    'finish',
    'fail'
  ],
  preservedTags: [
    'a',
    'container',
    'div',
    'image',
    'img',
    'text',
    'input',
    'switch',
    'list',
    'scroller',
    'waterfall',
    'slider',
    'indicator',
    'loading-indicator',
    'loading',
    'refresh',
    'textarea',
    'video',
    'web'
  ],
  autoprefixer: {
    browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
  },
  px2rem: {
    rootValue: 75,
    minPixelValue: 1.01
  },
  bindingStyleNamesForPx2Rem: [
    'width',
    'height',
    'left',
    'right',
    'top',
    'bottom',
    'border',
    'borderRadius',
    'borderWidth',
    'borderLeft',
    'borderRight',
    'borderTop',
    'borderBottom',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth',
    'margin',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'padding',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'fontSize',
    'lineHeight',
    'transform',
    'webkitTransform',
    'WebkitTransform',
    'mozTransform',
    'MozTransform',
    'itemSize'
  ]
}

module.exports = config
