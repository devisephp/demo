webpackJsonp([2],{

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/users/Index.vue":
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UsersIndex',
  data: function data() {
    return {
      modulesToLoad: 1,
      showCreate: false,
      newUser: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  mounted: function mounted() {
    this.retrieveAllUsers();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('devise', ['getUsers', 'createUser']), {
    requestCreateUser: function requestCreateUser() {
      var self = this;
      this.createUser(this.newUser).then(function () {
        self.newUser.name = null;
        self.newUser.email = null;
        self.newUser.password = null;
        self.newUser.password_confirmation = false;
        self.showCreate = false;
      });
    },
    retrieveAllUsers: function retrieveAllUsers() {
      var loadbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.getUsers().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad);
        }
      });
    },
    loadUser: function loadUser(id) {
      this.$router.push({ name: 'devise-users-edit', params: { userId: id } });
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('devise', ['users']), {
    createInvalid: function createInvalid() {
      return this.newUser.name === null || this.newUser.email === null || this.newUser.password === null || this.newUser.password_confirmation === null || this.newUser.password !== this.newUser.password_confirmation;
    }
  }),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_1__utilities_Modal___default.a
  }
});

/***/ }),

/***/ "../devise/vue/src/components/users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/users/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48656df1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/users/Index.vue")
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
Component.options.__file = "devise/vue/src/components/users/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48656df1", Component.options)
  } else {
    hotAPI.reload("data-v-48656df1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48656df1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/users/Index.vue":
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
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Users")]),
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
            [_vm._v("\n        Create New User\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "devise-admin-content" } },
        [
          _c("h2", { staticClass: "dvs-mb-10" }, [_vm._v("Current Users")]),
          _vm._v(" "),
          _vm._l(_vm.users.data, function(user) {
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
                  [_vm._v("\n        " + _vm._s(user.name) + "\n      ")]
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
                        staticClass: "dvs-btn dvs-btn-xs",
                        on: {
                          click: function($event) {
                            _vm.loadUser(user.id)
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
            ? _c("devise-modal", { staticClass: "dvs-z-50" }, [
                _c("h4", { staticClass: "dvs-mb-4" }, [
                  _vm._v("Create new user")
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
                        value: _vm.newUser.name,
                        expression: "newUser.name"
                      }
                    ],
                    attrs: { type: "text", placeholder: "Name of the User" },
                    domProps: { value: _vm.newUser.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newUser, "name", $event.target.value)
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
                        value: _vm.newUser.email,
                        expression: "newUser.email"
                      }
                    ],
                    attrs: { type: "text", placeholder: "Email of the User" },
                    domProps: { value: _vm.newUser.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newUser, "email", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                  _c("label", [_vm._v("Password")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newUser.password,
                        expression: "newUser.password"
                      }
                    ],
                    attrs: { type: "password" },
                    domProps: { value: _vm.newUser.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newUser, "password", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                  _c("label", [_vm._v("Confirm Password")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newUser.password_confirmation,
                        expression: "newUser.password_confirmation"
                      }
                    ],
                    attrs: { type: "password" },
                    domProps: { value: _vm.newUser.password_confirmation },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newUser,
                          "password_confirmation",
                          $event.target.value
                        )
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
                    on: { click: _vm.requestCreateUser }
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
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-48656df1", module.exports)
  }
}

/***/ })

});