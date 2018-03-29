webpackJsonp([1],{

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_debounce__ = __webpack_require__("../devise/vue/node_modules/v-debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_v_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_Modal__ = __webpack_require__("../devise/vue/src/components/utilities/Modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utilities_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");


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
  name: 'PagesIndex',
  data: function data() {
    return {
      modulesToLoad: 3,
      showCreate: false,
      searchDelay: 1000,
      searchTerm: '',
      autosuggest: {
        data: []
      },
      newPage: {
        template_id: null,
        language_id: null,
        translated_from_page_id: 0,
        title: null,
        slug: null,
        canonical: null,
        head: null,
        footer: null,
        middleware: 'web',
        published: false
      }
    };
  },
  mounted: function mounted() {
    this.retrieveAllPages();
    this.retrieveAllTemplates();
    this.retrieveAllLanguages();
  },

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])('devise', ['getPages', 'searchPages', 'getLanguages', 'getTemplates', 'createPage']), {
    requestCreatePage: function requestCreatePage() {
      var self = this;
      this.createPage(this.newPage).then(function () {
        self.newPage.template_id = null;
        self.newPage.language_id = null;
        self.newPage.title = null;
        self.newPage.slug = null;
        self.newPage.published = false;
        self.showCreate = false;
      });
    },
    retrieveAllPages: function retrieveAllPages() {
      var loadbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.getPages().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad);
        }
      });
    },
    retrieveAllTemplates: function retrieveAllTemplates() {
      var self = this;
      this.getTemplates().then(function () {
        window.bus.$emit('incrementLoadbar', self.modulesToLoad);
      });
    },
    retrieveAllLanguages: function retrieveAllLanguages() {
      var self = this;
      this.getLanguages().then(function () {
        window.bus.$emit('incrementLoadbar', self.modulesToLoad);
      });
    },
    loadPage: function loadPage(id) {
      this.$router.push({ name: 'devise-pages-view', params: { pageId: id } });
    },
    requestSearch: function requestSearch(term) {
      var self = this;
      if (term !== '') {
        this.searchPages(term).then(function (data) {
          self.autosuggest = data;
          if (data.data.length < 1) {
            window.bus.$emit('showMessage', { title: 'No Suggestions Found', message: 'We couldn\'t find any pages with the term: "' + term + '".' });
          }
        });
      } else {
        this.autosuggest = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, {});
      }
    }
  }),
  watch: {
    searchTerm: function searchTerm(newValue) {
      this.requestSearch(newValue);
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapGetters */])('devise', ['templates', 'pages', 'languages', 'templates']), {
    createInvalid: function createInvalid() {
      return this.newPage.title === null || this.newPage.template_id === null || this.newPage.language_id === null || this.newPage.slug === null;
    }
  }),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_3__utilities_Modal___default.a
  },
  directives: {
    debounce: __WEBPACK_IMPORTED_MODULE_2_v_debounce___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/v-debounce/debounce.js":
/***/ (function(module, exports) {

module.exports = function debounce (fn, delay) {
  var timeoutID = null
  return function () {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}


/***/ }),

/***/ "../devise/vue/node_modules/v-debounce/index.js":
/***/ (function(module, exports, __webpack_require__) {

const debounce = __webpack_require__("../devise/vue/node_modules/v-debounce/debounce.js")

directive.debounce = debounce

// Attach directive to element and wait for input to stop. Default timeout 800ms or 0.8s.
function directive (el, bind) {
  if (bind.value !== bind.oldValue) { // change debounce only if interval has changed
    el.oninput = directive.debounce(function (e) {
      el.dispatchEvent(createNewEvent('change'))
    }, parseInt(bind.value) || 800)
  }
}

// IE Support
function createNewEvent(eventName) {
  if (typeof(Event) === 'function') {
    var e = new Event(eventName)
  } else {
    var e = document.createEvent('Event')
    e.initEvent(eventName, true, true)
  }
  return e
}

module.exports = directive


/***/ }),

/***/ "../devise/vue/src/components/pages/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e84d4ad\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/Index.vue")
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
Component.options.__file = "devise/vue/src/components/pages/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e84d4ad", Component.options)
  } else {
    hotAPI.reload("data-v-1e84d4ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e84d4ad\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/Index.vue":
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
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Pages")]),
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
              staticClass:
                "dvs-cursor-pointer dvs-mb-6 dvs-text-lg dvs-cursor-pointer",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.showCreate = true
                }
              }
            },
            [_vm._v("\n        Create New Page\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "devise-admin-content" } },
        [
          _c("h2", { staticClass: "dvs-mb-10" }, [
            _vm._v("Current Site Pages")
          ]),
          _vm._v(" "),
          _c("fieldset", { staticClass: "dvs-fieldset dvs-mb-8" }, [
            _c("label", [_vm._v("Search Pages")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.lazy",
                  value: _vm.searchTerm,
                  expression: "searchTerm",
                  modifiers: { lazy: true }
                },
                {
                  name: "debounce",
                  rawName: "v-debounce",
                  value: _vm.searchDelay,
                  expression: "searchDelay"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.searchTerm },
              on: {
                change: function($event) {
                  _vm.searchTerm = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "dvs-relative" }, [
              _c(
                "ul",
                {
                  staticClass:
                    "dvs-list-reset dvs-bg-white dvs-absolute dvs-shadow-lg"
                },
                _vm._l(_vm.autosuggest.data, function(suggestion, key) {
                  return _c(
                    "li",
                    {
                      staticClass:
                        "dvs-border-b dvs-border-grey-lighter dvs-p-4 dvs-cursor-pointer",
                      on: {
                        click: function($event) {
                          _vm.loadPage(key)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n            " + _vm._s(suggestion) + "\n          "
                      )
                    ]
                  )
                })
              )
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.pages.data, function(page) {
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
                      "dvs-min-w-2/5 dvs-text-xl dvs-font-bold dvs-pr-8"
                  },
                  [_vm._v("\n        " + _vm._s(page.title) + "\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dvs-min-w-1/5 dvs-text-normal dvs-px-8 dvs-font-mono"
                  },
                  [_vm._v("\n        " + _vm._s(page.slug) + "\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dvs-w-2/5 dvs-px-8 dvs-flex dvs-justify-end"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass:
                          "dvs-btn dvs-btn-plain dvs-btn-xs dvs-mr-2",
                        attrs: { href: page.slug }
                      },
                      [_vm._v("Go")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "dvs-btn dvs-btn-xs",
                        on: {
                          click: function($event) {
                            _vm.loadPage(page.id)
                          }
                        }
                      },
                      [_vm._v("Manage")]
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
                      _vm.showTranslate = false
                    }
                  }
                },
                [
                  _c("h4", { staticClass: "dvs-mb-4" }, [
                    _vm._v("Create new page")
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Page Title")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newPage.title,
                          expression: "newPage.title"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Title of the Page" },
                      domProps: { value: _vm.newPage.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newPage, "title", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Template")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newPage.template_id,
                            expression: "newPage.template_id"
                          }
                        ],
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.newPage,
                              "template_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { domProps: { value: null } }, [
                          _vm._v("Please select a template")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.templates.data, function(template) {
                          return _c(
                            "option",
                            { domProps: { value: template.id } },
                            [_vm._v(_vm._s(template.name))]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Language")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newPage.language_id,
                            expression: "newPage.language_id"
                          }
                        ],
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.newPage,
                              "language_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { domProps: { value: null } }, [
                          _vm._v("Please select a language")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.languages.data, function(language) {
                          return _c(
                            "option",
                            { domProps: { value: language.id } },
                            [_vm._v(_vm._s(language.code))]
                          )
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Slug")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dvs-flex" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newPage.slug,
                            expression: "newPage.slug"
                          }
                        ],
                        attrs: { type: "text", placeholder: "Url of the Page" },
                        domProps: { value: _vm.newPage.slug },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.newPage, "slug", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Published?")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "dvs-flex" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newPage.published,
                            expression: "newPage.published"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.newPage.published)
                            ? _vm._i(_vm.newPage.published, null) > -1
                            : _vm.newPage.published
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.newPage.published,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.newPage,
                                    "published",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.newPage,
                                    "published",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.newPage, "published", $$c)
                            }
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn",
                      attrs: { disabled: _vm.createInvalid },
                      on: { click: _vm.requestCreatePage }
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
    require("vue-hot-reload-api")      .rerender("data-v-1e84d4ad", module.exports)
  }
}

/***/ })

});