// { "framework": "Vue"} 

webpackJsonp([0],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(24),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b803f218",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/huxupeng/MyProjects/fullstack/weex/fastfood2/src/pages/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b803f218", Component.options)
  } else {
    hotAPI.reload("data-v-b803f218", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6283797b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b803f218\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b803f218\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.main-wrapper[data-v-b803f218] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    flex-direction: column;\n}\n#input-name[data-v-b803f218] {\n    width: 2.66667rem;\n    height: 0.58667rem;\n    background-color: red;\n}\n/*宽：720px=100%         高：1250px =100%*/\n.testImage[data-v-b803f218] {\n    width: 9.6rem;\n    height: 9.6rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

//    var modal = weex.requireModule('modal')
exports.default = {
    data: function data() {
        return {
            msg: '12321321'
        };
    },
    created: function created() {
        //            console.log('will show toast')
        //            modal.toast({
        //                message: '初始化成功。',
        //                duration: 5
        //            })
    }
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-wrapper weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('p', {
    staticClass: " weex-el weex-text",
    attrs: {
      "weex-type": "text"
    }
  }, [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('div', {
    staticClass: " weex-ct weex-div",
    attrs: {
      "weex-type": "div"
    }
  }, [_c('input', {
    attrs: {
      "id": "input-name",
      "type": "text"
    }
  })]), _vm._v(" "), _c('figure', {
    staticClass: "testImage weex-el weex-image",
    attrs: {
      "src": "http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png",
      "data-img-src": "http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png",
      "weex-type": "image"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b803f218", module.exports)
  }
}

/***/ })

});