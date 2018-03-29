webpackJsonp([4],{

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/slices/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_Modal__ = __webpack_require__("../devise/vue/src/components/utilities/Modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utilities_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

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
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SlicesIndex',
  data: function data() {
    return {
      modulesToLoad: 1,
      showCreate: false,
      showEdit: false,
      editAddLanguage: null,
      editSlice: {
        id: null,
        name: null
      },
      newSlice: {
        name: null,
        view: null
      }
    };
  },
  mounted: function mounted() {
    this.retrieveAllSlices();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('devise', ['getSlices', 'createSlice', 'updateSlice', 'deleteSlice']), {
    requestCreateSlice: function requestCreateSlice() {
      var self = this;
      this.createSlice(this.newSlice).then(function () {
        self.newSlice.name = null;
        self.newSlice.view = null;
        self.showCreate = false;
      });
    },
    showEditSlice: function showEditSlice(slice) {
      this.editSlice.id = slice.id;
      this.editSlice.name = slice.name;
      this.showEdit = true;
    },
    requestEditSlice: function requestEditSlice() {
      var self = this;
      this.updateSlice({ slice: this.originalSlice(this.editSlice.id), data: this.editSlice }).then(function () {
        self.editSlice.id = null;
        self.editSlice.name = null;
        self.showEdit = false;
      });
    },
    requestDeleteSlice: function requestDeleteSlice(slice) {
      var self = this;
      this.deleteSlice(slice).then(function () {
        self.retrieveAllSlices();
      });
    },
    retrieveAllSlices: function retrieveAllSlices() {
      var loadbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.getSlices().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad);
        }
      });
    },
    originalSlice: function originalSlice(id) {
      return this.slices.data.find(function (slice) {
        return slice.id === id;
      });
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('devise', ['slices']), {
    createInvalid: function createInvalid() {
      return this.newSlice.name === null || this.newSlice.view === null;
    },
    editInvalid: function editInvalid() {
      return this.editSlice.name === null;
    }
  }),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_1__utilities_Modal___default.a
  }
});

/***/ }),

/***/ "../devise/vue/src/components/slices/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/slices/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-89ee3ca4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/slices/Index.vue")
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
Component.options.__file = "devise/vue/src/components/slices/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89ee3ca4", Component.options)
  } else {
    hotAPI.reload("data-v-89ee3ca4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-89ee3ca4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/slices/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "dvs-flex dvs-justify-end dvs-items-stretch dvs-min-h-screen dvs-relative"
    },
    [
      _c("div", { attrs: { id: "devise-sidebar" } }, [
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Slices")]),
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
                _vm.goToPage("devise-developers-index")
              }
            }
          },
          [_vm._v("Back to Developers")]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dvs-list-reset" }, [
          _c(
            "li",
            {
              staticClass:
                "dvs-cursor-pointer dvs-mb-6 dvs-text-lg dvs-cursor-pointer",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.showCreate = true
                }
              }
            },
            [_vm._v("\n        Create New Slice\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "devise-admin-content" } },
        [
          _c("h2", { staticClass: "dvs-mb-10" }, [_vm._v("Current Slices")]),
          _vm._v(" "),
          _vm._l(_vm.slices.data, function(slice) {
            return _c(
              "div",
              {
                staticClass:
                  "dvs-mb-6 dvs-rounded-sm dvs-bg-white dvs-shadow-sm dvs-flex dvs-justify-between dvs-items-center"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "dvs-min-w-2/5 dvs-text-base dvs-font-bold dvs-pr-8"
                  },
                  [
                    _vm._v("\n        " + _vm._s(slice.name)),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "dvs-font-mono dvs-font-normal" },
                      [_vm._v(_vm._s(slice.domain))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dvs-min-w-1/5 dvs-text-sm dvs-font-mono dvs-pr-8"
                  },
                  [_vm._v("\n        " + _vm._s(slice.view) + "\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dvs-w-2/5 dvs-px-8 dvs-flex dvs-justify-end"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "dvs-btn dvs-btn-xs dvs-mr-2",
                        on: {
                          click: function($event) {
                            _vm.showEditSlice(slice)
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "devise-alert-confirm",
                            rawName: "v-devise-alert-confirm",
                            value: {
                              callback: _vm.requestDeleteSlice,
                              arguments: slice,
                              message:
                                "Are you sure you want to delete this slice?"
                            },
                            expression:
                              "{callback: requestDeleteSlice, arguments: slice, message: 'Are you sure you want to delete this slice?'}"
                          }
                        ],
                        staticClass: "dvs-btn dvs-btn-xs"
                      },
                      [_vm._v("Delete")]
                    )
                  ]
                )
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.showCreate
            ? _c(
                "devise-modal",
                {
                  staticClass: "dvs-z-50",
                  on: {
                    close: function($event) {
                      _vm.showCreate = false
                    }
                  }
                },
                [
                  _c("h4", { staticClass: "dvs-mb-4" }, [
                    _vm._v("Create new slice")
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newSlice.name,
                          expression: "newSlice.name"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Name of the Slice" },
                      domProps: { value: _vm.newSlice.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newSlice, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("help", { staticClass: "dvs-mb-8" }, [
                    _vm._v(
                      'The view file that you are referencing will be located in the resources/views directory of your project and needs to be referenced through dot notation. For example, if you\'re referencing "/resources/views/heros/main-hero.blade.php" you will need to put "heros.main-hero" in this field.'
                    )
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("View")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newSlice.view,
                          expression: "newSlice.view"
                        }
                      ],
                      attrs: { type: "text", placeholder: "View of the Slice" },
                      domProps: { value: _vm.newSlice.view },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newSlice, "view", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn",
                      attrs: { disabled: _vm.createInvalid },
                      on: { click: _vm.requestCreateSlice }
                    },
                    [_vm._v("Create")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn dvs-btn-plain",
                      on: {
                        click: function($event) {
                          _vm.showCreate = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.showEdit
            ? _c(
                "devise-modal",
                {
                  staticClass: "dvs-z-50",
                  on: {
                    close: function($event) {
                      _vm.showEdit = false
                    }
                  }
                },
                [
                  _c("h4", { staticClass: "dvs-mb-4" }, [_vm._v("Edit slice")]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editSlice.name,
                          expression: "editSlice.name"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Name of the Slice" },
                      domProps: { value: _vm.editSlice.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editSlice, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn",
                      attrs: { disabled: _vm.editInvalid },
                      on: { click: _vm.requestEditSlice }
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn dvs-btn-plain",
                      on: {
                        click: function($event) {
                          _vm.showEdit = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ]
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-89ee3ca4", module.exports)
  }
}

/***/ })

});