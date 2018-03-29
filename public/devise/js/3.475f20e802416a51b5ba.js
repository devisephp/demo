webpackJsonp([3],{

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/users/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Modal__ = __webpack_require__("../devise/vue/src/components/utilities/Modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");


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
  name: 'UsersView',
  data: function data() {
    return {
      localValue: {},
      modulesToLoad: 1,
      showPassword: false
    };
  },
  mounted: function mounted() {
    this.retrieveAllUsers();
  },

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])('devise', ['getUsers', 'deleteUser', 'updateUser']), {
    requestSaveUser: function requestSaveUser() {
      this.updateUser({ user: this.user, data: this.localValue });
    },
    requestDeleteUser: function requestDeleteUser() {
      var self = this;
      this.deleteUser(this.user).then(function () {
        self.goToPage('devise-users-index');
      });
    },
    retrieveAllUsers: function retrieveAllUsers() {
      var self = this;
      this.getUsers().then(function () {
        self.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, self.localValue, self.user);
        window.bus.$emit('incrementLoadbar', self.modulesToLoad);
      });
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])('devise', ['user'])),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_2__utilities_Modal___default.a
  }
});

/***/ }),

/***/ "../devise/vue/src/components/users/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/users/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-732e998a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/users/Edit.vue")
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
Component.options.__file = "devise/vue/src/components/users/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-732e998a", Component.options)
  } else {
    hotAPI.reload("data-v-732e998a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-732e998a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/users/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c(
        "div",
        {
          staticClass:
            "dvs-flex dvs-items-stretch dvs-min-h-screen dvs-relative"
        },
        [
          _c("div", { attrs: { id: "devise-sidebar" } }, [
            _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [
              _vm._v("Manage User")
            ]),
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
                    _vm.goToPage("devise-users-index")
                  }
                }
              },
              [_vm._v("Back to Users")]
            ),
            _vm._v(" "),
            _c("ul", { staticClass: "dvs-list-reset dvs-mb-10" }, [
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "devise-alert-confirm",
                      rawName: "v-devise-alert-confirm",
                      value: {
                        callback: _vm.requestDeleteUser,
                        message: "Are you sure you want to delete this user?"
                      },
                      expression:
                        "{callback: requestDeleteUser, message: 'Are you sure you want to delete this user?'}"
                    }
                  ],
                  staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg"
                },
                [_vm._v("\n        Delete This User\n      ")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "devise-admin-content" } }, [
            _c("h3", { staticClass: "dvs-mb-8" }, [
              _vm._v(_vm._s(_vm.localValue.name) + " Settings")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dvs-mb-12" }, [
              _c(
                "form",
                [
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Name of User")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.localValue.name,
                          expression: "localValue.name"
                        }
                      ],
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        placeholder: "Name of the User"
                      },
                      domProps: { value: _vm.localValue.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.localValue, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.localValue.email,
                          expression: "localValue.email"
                        }
                      ],
                      attrs: {
                        type: "text",
                        autocomplete: "off",
                        placeholder: "Email of the User"
                      },
                      domProps: { value: _vm.localValue.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.localValue, "email", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  !_vm.showPassword
                    ? _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                        _c("label", [_vm._v("Edit Password?")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.showPassword,
                              expression: "showPassword"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.showPassword)
                              ? _vm._i(_vm.showPassword, null) > -1
                              : _vm.showPassword
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.showPassword,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.showPassword = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.showPassword = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.showPassword = $$c
                              }
                            }
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.showPassword
                    ? [
                        _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                          _c("label", [_vm._v("Password")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.localValue.password,
                                expression: "localValue.password"
                              }
                            ],
                            attrs: { type: "password", autocomplete: "off" },
                            domProps: { value: _vm.localValue.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.localValue,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                          _c("label", [_vm._v("Password Confirm")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.localValue.password_confirmation,
                                expression: "localValue.password_confirmation"
                              }
                            ],
                            attrs: { type: "password", autocomplete: "off" },
                            domProps: {
                              value: _vm.localValue.password_confirmation
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.localValue,
                                  "password_confirmation",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dvs-flex" }, [
                _c(
                  "button",
                  {
                    staticClass: "dvs-btn dvs-mr-2",
                    on: { click: _vm.requestSaveUser }
                  },
                  [_vm._v("Save")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "dvs-btn dvs-btn-plain dvs-mr-4",
                    on: {
                      click: function($event) {
                        _vm.goToPage("devise-users-index")
                      }
                    }
                  },
                  [_vm._v("Cancel")]
                )
              ])
            ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-732e998a", module.exports)
  }
}

/***/ })

});