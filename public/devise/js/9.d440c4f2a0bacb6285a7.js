webpackJsonp([9],{

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/developers/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DevelopersIndex'
});

/***/ }),

/***/ "../devise/vue/src/components/developers/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/developers/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3f1f6b76\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/developers/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "devise/vue/src/components/developers/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f1f6b76", Component.options)
  } else {
    hotAPI.reload("data-v-3f1f6b76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3f1f6b76\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/developers/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dvs-p-8" }, [
    _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Developers")]),
    _vm._v(" "),
    _c(
      "a",
      {
        staticClass:
          "dvs-mb-8 dvs-block dvs-uppercase dvs-font-bold dvs-text-xs",
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.goToPage("devise-index")
          }
        }
      },
      [_vm._v("Back to Main Menu")]
    ),
    _vm._v(" "),
    _c("ul", { staticClass: "dvs-list-reset" }, [
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.goToPage("devise-slices-index")
            }
          }
        },
        [_vm._v("\n      Slices\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.goToPage("devise-sites-index")
            }
          }
        },
        [_vm._v("\n      Sites\n    ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f1f6b76", module.exports)
  }
}

/***/ })

});