webpackJsonp([11],{

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/Devise.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_utilities_Loadbar__ = __webpack_require__("../devise/vue/src/components/utilities/Loadbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_utilities_Loadbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_utilities_Loadbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_media_manager_MediaManager__ = __webpack_require__("../devise/vue/src/components/media-manager/MediaManager.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_media_manager_MediaManager___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_media_manager_MediaManager__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_utilities_Messages__ = __webpack_require__("../devise/vue/src/components/utilities/Messages.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_utilities_Messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_utilities_Messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_Editor__ = __webpack_require__("../devise/vue/src/components/pages/Editor.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_pages_Editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slice__ = __webpack_require__("../devise/vue/src/Slice.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Slice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_templates_Index__ = __webpack_require__("../devise/vue/src/components/templates/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_templates_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_templates_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_templates_Edit__ = __webpack_require__("../devise/vue/src/components/templates/Edit.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_templates_Edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_templates_Edit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_templates_Preview__ = __webpack_require__("../devise/vue/src/components/templates/Preview.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_templates_Preview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_templates_Preview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menu_User__ = __webpack_require__("../devise/vue/src/components/menu/User.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_menu_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_menu_User__);
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
  name: 'Devise',
  data: function data() {
    return {
      showLoadbar: false,
      loadbarPercentage: 0,
      templateMode: false,
      editorMode: false,
      adminClosed: false,
      wideAdmin: false,
      page: {
        title: null,
        body: null,
        slices: {},
        previewMode: 'desktop'
      }
    };
  },
  mounted: function mounted() {
    if (typeof window.template !== 'undefined') {
      this.templateMode = true;
    } else {
      this.initDevise();
      this.editorMode = true;
    }

    this.$nextTick(function () {
      setTimeout(function () {
        window.bus.$emit('devise-loaded');
      }, 10);
    });

    this.checkWidthOfInterface(this.$route);
  },

  methods: {
    initDevise: function initDevise() {
      try {
        if (!this.isPreviewFrame) {
          window.page.previewMode = 'desktop';
          this.page = window.page;
        } else {
          this.page = window.parent.page;
        }
      } catch (e) {
        console.warn('Devise: window.page or window.parent.page not found. Nothing to render');
      }

      window.devise = this;
    },
    checkWidthOfInterface: function checkWidthOfInterface(route) {
      // If the route has the wide parameter set it to it's value
      if (route.meta) {
        this.wideAdmin = route.meta.wide;
      } else {
        this.wideAdmin = false;
      }
    },
    getComponent: function getComponent(slice) {
      return window.deviseComponents[slice.name];
    },
    closeAdmin: function closeAdmin() {
      this.adminClosed = !this.adminClosed;
      if (this.adminClosed) {
        this.goToPage('devise-page-editor');
        this.wideAdmin = false;
      }
    }
  },
  computed: {
    currentUrl: function currentUrl() {
      return window.location.href;
    },
    isPreviewFrame: function isPreviewFrame() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
  },
  watch: {
    '$route': function $route(newRoute) {
      this.checkWidthOfInterface(newRoute);
    }
  },
  components: {
    Loadbar: __WEBPACK_IMPORTED_MODULE_0__components_utilities_Loadbar___default.a,
    Messages: __WEBPACK_IMPORTED_MODULE_2__components_utilities_Messages___default.a,
    MediaManager: __WEBPACK_IMPORTED_MODULE_1__components_media_manager_MediaManager___default.a,
    PageEditor: __WEBPACK_IMPORTED_MODULE_3__components_pages_Editor___default.a,
    Slice: __WEBPACK_IMPORTED_MODULE_4__Slice___default.a,
    TemplateIndex: __WEBPACK_IMPORTED_MODULE_5__components_templates_Index___default.a,
    TemplateEdit: __WEBPACK_IMPORTED_MODULE_6__components_templates_Edit___default.a,
    TemplatePreview: __WEBPACK_IMPORTED_MODULE_7__components_templates_Preview___default.a,
    User: __WEBPACK_IMPORTED_MODULE_8__components_menu_User___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/Slice.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Slice__ = __webpack_require__("../devise/vue/src/Slice.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Slice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Slice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DeviseSlice',
  created: function created() {
    this.hydrateMissingProperties();
  },

  methods: {
    hydrateMissingProperties: function hydrateMissingProperties() {
      var config = this.sliceConfig(this.slice).config;

      // Loop through the config for this slice and check to see that all the
      // fields are present. If they aren't it's just because they haven't been
      // hydrated via the editor yet.
      for (var prop in config) {
        // Ok, so the property is missing from the slice.fields object so we're
        // going to add in a stub for the render.
        if (!this.slice.hasOwnProperty(prop)) {
          this.addMissingProperty(prop);
        }
      }
    },
    addMissingProperty: function addMissingProperty(property) {
      // We just add all the properties because.... why not?
      this.$set(this.slice, property, {
        text: null,
        url: null,
        target: null,
        color: null,
        checked: null
      });
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('devise', ['sliceConfig']), {
    currentView: function currentView() {
      if (this.slice.config) {
        return window.deviseComponents[this.slice.name];
      }
      return window.deviseComponents[this.slice.metadata.name];
    }
  }),
  components: {
    Slice: __WEBPACK_IMPORTED_MODULE_1__Slice___default.a
  },
  props: ['slice']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/Slices.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slice__ = __webpack_require__("../devise/vue/src/Slice.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Slice__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DeviseSlices',
  functional: true,
  render: function render(h, ctx) {
    if (ctx.props.devise.slices && ctx.props.devise.slices.length) {
      return ctx.props.devise.slices.map(function (s) {
        if (s.settings && s.settings.numberOfInstances) {
          var placeholderSlices = [];
          for (var i = 0; i < s.settings.numberofInstances; i++) {
            placeholderSlices.push(h(__WEBPACK_IMPORTED_MODULE_0__Slice___default.a, {
              props: {
                slice: s
              }
            }));
          }
          return placeholderSlices;
        } else {
          return h(__WEBPACK_IMPORTED_MODULE_0__Slice___default.a, {
            props: {
              slice: s
            }
          });
        }
      });
    }
  },
  mounted: function mounted() {
    // Emit the bus event to notifify that we are done loading
    this.$nextTick(function () {
      // Emit the bus event to notifify that we are done loading
      window.bus.$emit('devise-loaded');
    });
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/media-manager/Breadcrumbs.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    chooseDirectory: function chooseDirectory(directory) {
      this.$emit('chooseDirectory', directory);
    },
    goToHome: function goToHome() {
      this.chooseDirectory('');
    }
  },
  computed: {
    directoriesObj: function directoriesObj() {
      var directoriesObj = {};
      var directoriesStr = '';
      var directoriesArr = this.currentDirectory.split('.');

      for (var i = 0; i < directoriesArr.length; i++) {
        directoriesStr += directoriesArr[i];
        directoriesObj[directoriesStr] = directoriesArr[i];
        directoriesStr += '.';
      }

      return directoriesObj;
    }
  },
  props: ['currentDirectory']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/media-manager/MediaManager.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Loadbar__ = __webpack_require__("../devise/vue/src/components/utilities/Loadbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Loadbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_Loadbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumbs__ = __webpack_require__("../devise/vue/src/components/media-manager/Breadcrumbs.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Breadcrumbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue2_dropzone__ = __webpack_require__("../devise/vue/node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue2_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue2_dropzone__);

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
  data: function data() {
    return {
      show: false,
      loaded: false,
      listMode: true,
      directoryToCreate: '',
      target: null,
      callback: null
    };
  },
  mounted: function mounted() {
    this.startOpenerListener();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('devise', ['setCurrentDirectory', 'getCurrentFiles', 'getCurrentDirectories', 'openFile', 'closeFile', 'deleteFile', 'createDirectory', 'deleteDirectory']), {
    startOpenerListener: function startOpenerListener() {
      var self = this;

      window.bus.$on('devise-launch-media-manager', function (_ref) {
        var target = _ref.target,
            callback = _ref.callback;

        self.callback = callback;
        self.target = target;
        self.changeDirectories('');
        self.show = true;
      });
    },
    changeDirectories: function changeDirectories(directory) {
      var self = this;
      self.loaded = false;

      self.setCurrentDirectory(directory).then(function () {
        self.getCurrentFiles().then(function () {
          self.getCurrentDirectories().then(function () {
            self.loaded = true;
          });
        });
      });
    },
    isActive: function isActive(file) {
      return file.used_count > 0;
    },
    uploadSuccess: function uploadSuccess() {
      window.bus.$emit('showMessage', { title: 'Upload Complete', message: 'Your upload has been successfully completed' });
      this.changeDirectories(this.currentDirectory);
    },
    uploadError: function uploadError(file, message) {
      window.bus.$emit('showError', { title: 'Upload Error', message: 'There was a problem uploading your file. Either the file was too large or it has been uploaded too many times.' });
    },
    getUrlParam: function getUrlParam(paramName) {
      var reParam = new RegExp('(?:[?&]|&)' + paramName + '=([^&]+)', 'i');
      var match = window.location.search.match(reParam);

      return match && match.length > 1 ? match[1] : null;
    },
    selectFile: function selectFile(file) {
      if (this.target) {
        this.target.value = file.url;
      }

      if (this.callback) {
        this.callback(file);
      }

      this.show = false;
    },
    requestDeleteFile: function requestDeleteFile(file) {
      if (this.isActive(file)) {
        if (window.confirm('This file is associated with fields on the site. Are you 100% positive you want to delete it?')) {
          this.confirmedDeleteFile(file);
        }
      } else {
        this.confirmedDeleteFile(file);
      }
    },
    confirmedDeleteFile: function confirmedDeleteFile(file) {
      var self = this;
      this.deleteFile(file).then(function () {
        self.changeDirectories(self.currentDirectory);
      });
    },
    requestCreateDirectory: function requestCreateDirectory() {
      var self = this;

      // check to see if the directory already exists in the current location
      var existingMatches = this.directories.filter(function (dir) {
        return dir.name === self.directoryToCreate;
      });

      if (existingMatches.length === 0) {
        this.createDirectory({ directory: self.currentDirectory, name: self.directoryToCreate }).then(function () {
          self.changeDirectories(self.currentDirectory);
          self.directoryToCreate = '';
        });
      } else {
        window.bus.$emit('showError', { title: 'Duplicate Name', message: 'There was already a directory with this name created in the current location.' });
      }
    },
    requestDeleteDirectory: function requestDeleteDirectory() {
      var self = this;
      this.deleteDirectory(self.currentDirectory).then(function () {
        self.changeDirectories('');
      });
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('devise', ['files', 'directories', 'currentDirectory']), {
    dropzoneOptions: function dropzoneOptions() {
      return {
        url: '/api/devise/media?directory=' + this.currentDirectory,
        dictDefaultMessage: "<span class='dvs-cursor-pointer'><i class='ion-android-attach'></i> Upload</span>",
        method: 'post',
        createImageThumbnails: false,
        headers: {
          'X-XSRF-TOKEN': window.csrfToken
        }
      };
    }
  }),
  components: {
    'loadbar': __WEBPACK_IMPORTED_MODULE_2__utilities_Loadbar___default.a,
    'breadcrumbs': __WEBPACK_IMPORTED_MODULE_3__Breadcrumbs___default.a,
    vueDropzone: __WEBPACK_IMPORTED_MODULE_4_vue2_dropzone___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/menu/User.vue":
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DeviseUser',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/Editor.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SliceEditor__ = __webpack_require__("../devise/vue/src/components/pages/SliceEditor.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SliceEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SliceEditor__);

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
  name: 'PageEditor',
  data: function data() {
    return {
      previewMode: 'desktop',
      slices: [],
      pageSettingsOpen: false,
      pageContentOpen: true
    };
  },
  mounted: function mounted() {
    this.slices = this.page.slices;
  },

  methods: {
    togglePageSettings: function togglePageSettings() {
      this.pageSettingsOpen = !this.pageSettingsOpen;
      this.pageContentOpen = false;
    },
    togglePageContent: function togglePageContent() {
      var _this = this;

      this.pageContentOpen = !this.pageContentOpen;
      if (!this.pageContentOpen) {
        this.slices.map(function (s) {
          return _this.closeSlice(s);
        });
      }
      this.pageSettingsOpen = false;
    },
    toggleSlice: function toggleSlice(slice) {
      var _this2 = this;

      this.slices.map(function (s) {
        return _this2.closeSlice(s);
      });
      this.$set(slice.metadata, 'open', !slice.metadata.open);
    },
    closeSlice: function closeSlice(slice) {
      this.$set(slice.metadata, 'open', false);
    },
    setPreviewMode: function setPreviewMode(mode) {
      this.previewMode = mode;
      window.page.previewMode = mode;
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('devise', ['sliceConfig', 'fieldConfig'])),
  props: ['page'],
  components: {
    SliceEditor: __WEBPACK_IMPORTED_MODULE_2__SliceEditor___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/SliceEditor.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SliceEditor__ = __webpack_require__("../devise/vue/src/components/pages/SliceEditor.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SliceEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SliceEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_Checkbox__ = __webpack_require__("../devise/vue/src/components/pages/editor/Checkbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__editor_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_Color__ = __webpack_require__("../devise/vue/src/components/pages/editor/Color.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_Color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__editor_Color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_Image__ = __webpack_require__("../devise/vue/src/components/pages/editor/Image.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__editor_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editor_Link__ = __webpack_require__("../devise/vue/src/components/pages/editor/Link.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editor_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__editor_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editor_Number__ = __webpack_require__("../devise/vue/src/components/pages/editor/Number.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editor_Number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__editor_Number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_Textarea__ = __webpack_require__("../devise/vue/src/components/pages/editor/Textarea.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editor_Textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__editor_Textarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editor_Text__ = __webpack_require__("../devise/vue/src/components/pages/editor/Text.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editor_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__editor_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editor_Wysiwyg__ = __webpack_require__("../devise/vue/src/components/pages/editor/Wysiwyg.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editor_Wysiwyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__editor_Wysiwyg__);


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
  name: 'SliceEditor',
  data: function data() {
    return {
      slices: []
    };
  },
  mounted: function mounted() {
    this.slices = this.slice.slices;
  },

  methods: {
    toggleSlice: function toggleSlice(slice) {
      var _this = this;

      this.slices.map(function (s) {
        return _this.closeSlice(s);
      });
      this.$set(slice.metadata, 'open', !slice.metadata.open);
    },
    closeSlice: function closeSlice(slice) {
      this.$set(slice.metadata, 'open', false);
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('devise', ['fieldConfig']), {
    fields: function fields() {
      var fields = {};
      for (var potentialField in this.slice) {
        if (this.slice.hasOwnProperty(potentialField) && potentialField !== 'slices' && potentialField !== 'metadata' && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.slice[potentialField]) === 'object') {
          fields[potentialField] = this.slice[potentialField];
          if (typeof fields[potentialField].enabled === 'undefined') {
            this.$set(fields[potentialField], 'enabled', true);
          }
        }
      }
      return fields;
    }
  }),
  props: ['slice'],
  components: {
    SliceEditor: __WEBPACK_IMPORTED_MODULE_3__SliceEditor___default.a,
    CheckboxEditor: __WEBPACK_IMPORTED_MODULE_4__editor_Checkbox___default.a,
    ColorEditor: __WEBPACK_IMPORTED_MODULE_5__editor_Color___default.a,
    ImageEditor: __WEBPACK_IMPORTED_MODULE_6__editor_Image___default.a,
    LinkEditor: __WEBPACK_IMPORTED_MODULE_7__editor_Link___default.a,
    NumberEditor: __WEBPACK_IMPORTED_MODULE_8__editor_Number___default.a,
    TextareaEditor: __WEBPACK_IMPORTED_MODULE_9__editor_Textarea___default.a,
    TextEditor: __WEBPACK_IMPORTED_MODULE_10__editor_Text___default.a,
    WysiwygEditor: __WEBPACK_IMPORTED_MODULE_11__editor_Wysiwyg___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Checkbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Toggle__ = __webpack_require__("../devise/vue/src/components/utilities/Toggle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_Toggle__);
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
  name: 'CheckboxEditor',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value', 'options'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_Strings__["a" /* default */]],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_0__Field___default.a,
    Toggle: __WEBPACK_IMPORTED_MODULE_2__utilities_Toggle___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Color.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_color__ = __webpack_require__("../devise/vue/node_modules/vue-color/dist/vue-color.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Field__);

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
  name: 'ColorEditor',
  data: function data() {
    return {
      originalColor: null,
      localValue: {},
      color: '#296BE9'
    };
  },
  mounted: function mounted() {
    this.originalColor = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.value);
    this.localValue = this.value;
    this.setDefault();
  },

  methods: {
    setDefault: function setDefault() {
      if (this.localValue.color === null) {
        if (this.options.default) {
          this.color = this.options.default;
        }
      } else {
        this.color = this.localValue.color;
      }
    },
    updateColor: function updateColor(color) {
      this.color = color.hex;
      this.localValue.color = color.hex;
    },
    cancel: function cancel() {
      this.$emit('cancel');
      this.$refs.field.showEditor = false;
    },
    selectColor: function selectColor(color) {
      this.color = color.hex;
      this.localValue.color = color.hex;
      this.updateValue();

      this.$refs.field.showEditor = false;
    },
    updateValue: function updateValue() {
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  computed: {
    getMaxLength: function getMaxLength() {
      if (typeof this.settings !== 'undefined' && typeof this.settings.maxlength !== 'undefined') {
        return this.settings.maxlength;
      }
      return '';
    }
  },
  props: ['value', 'options'],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_2__Field___default.a,
    'photoshop-picker': __WEBPACK_IMPORTED_MODULE_1_vue_color__["Photoshop"]
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Field.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_Toggle__ = __webpack_require__("../devise/vue/src/components/utilities/Toggle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utilities_Toggle__);

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
  name: 'FieldEditor',
  data: function data() {
    return {
      localValue: {},
      showEditor: false
    };
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      self.localValue = self.value;
    });
  },

  methods: {
    update: function update(event) {
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    },
    cancel: function cancel() {
      this.$emit('cancel');
      this.showEditor = false;
    },
    enabledTip: function enabledTip(enabled) {
      if (enabled) {
        return 'This field is enabled';
      }
      return 'This field is not enabled. Edit the field and toggle the enable switch to turn it on.';
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('devise', ['fieldConfig'])),
  props: ['value', 'options'],
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_Strings__["a" /* default */]],
  components: {
    Toggle: __WEBPACK_IMPORTED_MODULE_3__utilities_Toggle___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Image.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Field__);
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
  name: 'TextEditor',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    },
    launchMediaManager: function launchMediaManager(event) {
      window.bus.$emit('devise-launch-media-manager', {
        callback: this.mediaSelected
      });
    },
    mediaSelected: function mediaSelected(media) {
      this.localValue.url = media.url;
      this.updateValue();
    }
  },
  computed: {
    getMaxLength: function getMaxLength() {
      if (typeof this.settings !== 'undefined' && typeof this.settings.maxlength !== 'undefined') {
        return this.settings.maxlength;
      }
      return '';
    }
  },
  props: ['value', 'options'],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_0__Field___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Link.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Field__);
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
  name: 'LinkEditor',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  computed: {
    getMaxLength: function getMaxLength() {
      if (typeof this.settings !== 'undefined' && typeof this.settings.maxlength !== 'undefined') {
        return this.settings.maxlength;
      }
      return '';
    }
  },
  props: ['value', 'options'],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_0__Field___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Number.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Field__);
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
  name: 'NumberEditor',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  computed: {
    getMaxLength: function getMaxLength() {
      if (typeof this.settings !== 'undefined' && typeof this.settings.maxlength !== 'undefined') {
        return this.settings.maxlength;
      }
      return '';
    }
  },
  props: ['value', 'options'],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_0__Field___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Text.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Field__);
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
  name: 'TextEditor',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  computed: {
    getMaxLength: function getMaxLength() {
      if (typeof this.settings !== 'undefined' && typeof this.settings.maxlength !== 'undefined') {
        return this.settings.maxlength;
      }
      return '';
    }
  },
  props: ['value', 'options'],
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Strings__["a" /* default */]],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_1__Field___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Textarea.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");
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
  name: 'TextAreaEditor',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  computed: {
    getMaxLength: function getMaxLength() {
      if (typeof this.settings !== 'undefined' && typeof this.settings.maxlength !== 'undefined') {
        return this.settings.maxlength;
      }
      return '';
    }
  },
  props: ['value', 'options'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_Strings__["a" /* default */]],
  components: {
    FieldEditor: __WEBPACK_IMPORTED_MODULE_0__Field___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Wysiwyg.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trix__ = __webpack_require__("../devise/vue/node_modules/trix/dist/trix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_trix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Toggle__ = __webpack_require__("../devise/vue/src/components/utilities/Toggle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_Toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_Toggle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Field__ = __webpack_require__("../devise/vue/src/components/pages/editor/Field.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Field__);
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
  name: 'WysiwygEditor',
  data: function data() {
    return {
      theId: '',
      theEditor: null,
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
    this.resolveId();
    this.resolveEditor();
    this.hydrate();
  },

  methods: {
    resolveId: function resolveId() {
      this.theId = this.id;
      if (this.id === '') {
        this.theId = this.randomString(8);
      }
    },
    resolveEditor: function resolveEditor() {
      var self = this;
      this.$nextTick(function () {
        self.theEditor = self.$refs.trixeditor.editor;
      });
    },
    hydrate: function hydrate() {
      var self = this;
      this.$nextTick(function () {
        self.theEditor.insertHTML(self.value.text);
      });
    },
    update: function update(event) {
      this.localValue.text = event.target.value;
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value', 'options', 'namekey'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_Strings__["a" /* default */]],
  components: {
    Toggle: __WEBPACK_IMPORTED_MODULE_2__utilities_Toggle___default.a,
    FieldEditor: __WEBPACK_IMPORTED_MODULE_3__Field___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Slice__ = __webpack_require__("../devise/vue/src/Slice.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Slice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Slice__);

//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TemplateEdit',
  data: function data() {
    return {
      localValue: {}
    };
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      window.bus.$emit('devise-wide-admin');
    });
    this.retrieveAllTemplates();
    this.getSlices();
    this.addListeners();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('devise', ['getTemplates', 'getSlices']), {
    retrieveAllTemplates: function retrieveAllTemplates() {
      var self = this;
      this.getTemplates().then(function () {
        self.localValue = self.template;
      });
    },
    addListeners: function addListeners() {
      var self = this;
      window.addEventListener('message', function (event) {
        if (event.data === 'goBack') {
          self.goToPage('devise-templates-index');
        }
      }, false);
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('devise', ['slices', 'template'])),
  components: {
    Slice: __WEBPACK_IMPORTED_MODULE_2__Slice___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/Index.vue":
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TemplatesIndex',
  data: function data() {
    return {
      modulesToLoad: 1,
      showCreate: false,
      newTemplate: {
        name: null,
        layout: null
      }
    };
  },
  mounted: function mounted() {
    this.retrieveAllTemplates();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])('devise', ['getTemplates', 'createTemplate', 'deleteTemplate']), {
    requestCreateTemplate: function requestCreateTemplate() {
      var self = this;
      this.createTemplate(this.newTemplate).then(function () {
        self.newTemplate.name = null;
        self.newTemplate.layout = null;
        self.showCreate = false;
      });
    },
    requestDeleteTemplate: function requestDeleteTemplate(template) {
      var self = this;
      this.deleteTemplate(template).then(function () {
        self.retrieveAllTemplates();
      });
    },
    retrieveAllTemplates: function retrieveAllTemplates() {
      var loadbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.getTemplates().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad);
        }
      });
    },
    goToTemplate: function goToTemplate(template) {
      this.$router.push({ name: 'devise-templates-edit', params: { templateId: template.id } });
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('devise', ['templates']), {
    createInvalid: function createInvalid() {
      return this.newTemplate.name === null || this.newTemplate.layout === null;
    }
  }),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_1__utilities_Modal___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/Preview.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker_locale_en__ = __webpack_require__("../devise/vue/node_modules/faker/locale/en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_faker_locale_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_tables_SuperTable__ = __webpack_require__("../devise/vue/src/components/utilities/tables/SuperTable.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_tables_SuperTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utilities_tables_SuperTable__);


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
  name: 'TemplatePreview',
  data: function data() {
    return {
      localValue: {},
      addSlice: {
        show: false,
        type: 'single',
        direction: null,
        slice: null,
        referenceSlice: null
      },
      modelEditor: null,
      createChildren: null,
      childModelToAdd: null,
      sliceToAdd: null,
      templateSettingsOpen: false,
      templateLayoutOpen: true,
      dataLoaded: false
    };
  },
  mounted: function mounted() {
    var self = this;
    self.getTemplates().then(function () {
      self.localValue = window.template;
      self.getSlices().then(function () {
        self.localValue.slices = self.buildTemplateForPreview();
        self.dataLoaded = true;
      });
    });
  },

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])('devise', ['getTemplates', 'updateTemplate', 'getSlices', 'getModels', 'getModelSettings']), {
    requestSaveTemplate: function requestSaveTemplate() {
      var self = this;

      this.updateTemplate(this.localValue).then(function () {
        self.goToTemplates();
      });
    },
    goToTemplates: function goToTemplates() {
      window.parent.postMessage('goBack', '*');
    },
    theSlice: function theSlice(s) {
      if (!s.hasOwnProperty('slice_id')) {
        s.slice_id = s.id;
      }
      return this.slices.data.find(function (slice) {
        return slice.id === s.slice_id;
      });
    },
    requestAddSlice: function requestAddSlice(_ref) {
      var direction = _ref.direction,
          slice = _ref.slice;

      this.addSlice.direction = direction;
      this.addSlice.show = true;
      this.addSlice.referenceSlice = slice;
    },
    confirmAddSlice: function confirmAddSlice() {
      this.addSlice.show = false;
      var position = this.localValue.slices.indexOf(this.addSlice.referenceSlice);
      if (position < 0) {
        position = 0;
      }

      var newSlice = this.buildSliceForPreview(this.addSlice.slice);
      newSlice.type = this.addSlice.type;

      if (this.addSlice.direction === 'above') {
        this.localValue.slices.splice(position, 0, newSlice);
      } else {
        this.localValue.slices.splice(position + 1, 0, newSlice);
      }
    },
    togglePageSettings: function togglePageSettings() {
      this.templateSettingsOpen = !this.templateSettingsOpen;
      this.templateLayoutOpen = false;
    },
    togglePageContent: function togglePageContent() {
      this.templateLayoutOpen = !this.templateLayoutOpen;
      this.templateSettingsOpen = false;
    },
    toggleSlice: function toggleSlice(slice) {
      var _this = this;

      this.localValue.slices.map(function (s) {
        return _this.closeSlice(s);
      });
      this.$set(slice.metadata, 'open', !slice.metadata.open);
    },
    toggleModelControls: function toggleModelControls(component) {
      if (this.modelEditor === null) {
        this.modelEditor = component;
        this.getModelSettings(component.model_query);
      } else {
        this.modelEditor = null;
      }
    },
    toggleCreateChildrenSlices: function toggleCreateChildrenSlices(component) {
      if (this.createChildren === null) {
        this.createChildren = component;
      } else {
        this.createChildren = null;
      }
    },
    addSubSliceToCreate: function addSubSliceToCreate(type) {
      this.$set(this.createChildren, 'childToCreate', {
        type: type
      });

      if (type === 'model') {
        this.getModels();
      }
    },
    selectSliceForNewChild: function selectSliceForNewChild() {
      this.$set(this.createChildren.childToCreate, 'slice', this.sliceToAdd);

      if (this.createChildren.childToCreate.type === 'single' || this.createChildren.childToCreate.type === 'repeatable') {
        this.pushNewChildSlice();
      }
    },
    pushNewChildSlice: function pushNewChildSlice() {
      var modelQuery = this.childModelToAdd ? 'class=' + this.childModelToAdd.class : null;

      this.createChildren.slices.push({
        id: 0,
        label: this.createChildren.childToCreate.slice.name,
        metadata: {
          open: true,
          settings: {
            numberOfInstances: 1
          }
        },
        config: {},
        type: this.createChildren.childToCreate.type,
        model_query: modelQuery,
        name: this.createChildren.childToCreate.slice.component,
        slice_id: this.createChildren.childToCreate.slice.id,
        slices: []
      });

      this.childModelToAdd = null;
      this.createChildren = null;
    },
    modelEditorDone: function modelEditorDone() {
      this.modelEditor.update();
      this.modelEditor = null;
    },
    closeSlice: function closeSlice(slice) {
      this.$set(slice.metadata, 'open', false);
    },
    buildTemplateForPreview: function buildTemplateForPreview() {
      var self = this;
      return this.localValue.slices.map(function (slice) {
        return self.buildSliceForPreview(slice);
      });
    },
    buildSliceForPreview: function buildSliceForPreview(slice) {
      var self = this;
      var sliceInfo = this.theSlice(slice);
      var component = window.deviseComponents[sliceInfo.component];

      // Set the metadata object if it isn't present
      if (typeof slice.metadata === 'undefined') {
        this.$set(slice, 'metadata', { 'open': false });
      }

      // Create the settings if they don't exist
      if (typeof slice.metadata.settings === 'undefined') {
        this.$set(slice.metadata, 'settings', {
          numberOfInstances: 1
        });
      }

      // Set the type to single if it isn't present
      if (typeof slice.metadata.type === 'undefined') {
        this.$set(slice.metadata, 'type', 'single');
      }

      // Set the slices proprety if it isn't there yet
      if (typeof slice.slices === 'undefined') {
        this.$set(slice, 'slices', []);
      }

      // Set the label property if it isn't present
      if (typeof slice.label === 'undefined') {
        this.$set(slice, 'label', sliceInfo.name);
      }

      // Set the model_query property if it isn't present
      if (typeof slice.model_query === 'undefined') {
        this.$set(slice, 'model_query', '');
      }

      // Set the model_query property if it isn't present
      if (typeof slice.config === 'undefined' || slice.config === null) {
        this.$set(slice, 'config', {});
      }

      // Hydrate those fields if they don't exist
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(component.config).forEach(function (key, index) {
        if (typeof slice.config[key] === 'undefined') {
          if (component.config[key].type === 'text') {
            self.$set(slice.config, key, { enabled: true, text: __WEBPACK_IMPORTED_MODULE_2_faker_locale_en___default.a.lorem.words(5) });
          }
          if (component.config[key].type === 'wysiwyg') {
            self.$set(slice.config, key, { enabled: true, text: '<div>' + __WEBPACK_IMPORTED_MODULE_2_faker_locale_en___default.a.lorem.words(15) + '</div>' });
          }
          if (component.config[key].type === 'color') {
            self.$set(slice.config, key, { enabled: true, color: '#f66d9b' });
          }
          if (component.config[key].type === 'number') {
            self.$set(slice.config, key, { enabled: true, text: '1000' });
          }
          if (component.config[key].type === 'textarea') {
            self.$set(slice.config, key, { enabled: true, text: __WEBPACK_IMPORTED_MODULE_2_faker_locale_en___default.a.lorem.words(15) });
          }
          if (component.config[key].type === 'link') {
            self.$set(slice.config, key, { enabled: true, text: 'A Link', url: __WEBPACK_IMPORTED_MODULE_2_faker_locale_en___default.a.internet.url(), target: '_self' });
          }
          if (component.config[key].type === 'image') {
            self.$set(slice.config, key, { enabled: true, url: __WEBPACK_IMPORTED_MODULE_2_faker_locale_en___default.a.image.cats() });
          }
        }
      });

      //
      slice = this.buildParentSliceForPreview(slice);

      self.$set(slice.config, 'slices', slice.slices);

      slice.name = this.theSlice(slice).component;

      console.log(slice);

      return slice;
    },
    buildParentSliceForPreview: function buildParentSliceForPreview(slice) {
      var self = this;

      slice.slices = slice.slices.map(function (s) {
        return self.buildSliceForPreview(s);
      });

      return slice;
    },
    getComponent: function getComponent(component) {
      return window.deviseComponents[component];
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])('devise', ['slices', 'template', 'models', 'modelSettings'])),
  components: {
    SuperTable: __WEBPACK_IMPORTED_MODULE_4__utilities_tables_SuperTable___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/PreviewSettings.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_Color__ = __webpack_require__("../devise/vue/src/components/templates/controls/Color.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_Color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__controls_Color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_Checkbox__ = __webpack_require__("../devise/vue/src/components/templates/controls/Checkbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__controls_Checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls_Image__ = __webpack_require__("../devise/vue/src/components/templates/controls/Image.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__controls_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controls_Link__ = __webpack_require__("../devise/vue/src/components/templates/controls/Link.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controls_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__controls_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_Number__ = __webpack_require__("../devise/vue/src/components/templates/controls/Number.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_Number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__controls_Number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controls_Textarea__ = __webpack_require__("../devise/vue/src/components/templates/controls/Textarea.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controls_Textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__controls_Textarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls_Text__ = __webpack_require__("../devise/vue/src/components/templates/controls/Text.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controls_Text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__controls_Text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls_Wysiwyg__ = __webpack_require__("../devise/vue/src/components/templates/controls/Wysiwyg.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controls_Wysiwyg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__controls_Wysiwyg__);


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











// import SuperTable from './../utilities/tables/SuperTable'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TemplatePreviewSettings',
  data: function data() {
    return {
      showControls: false,
      localValue: {
        update: this.updateValue,
        settings: {
          numberOfInstances: 1
        }
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    },
    theSlice: function theSlice() {
      var self = this;
      return this.slices.data.find(function (slice) {
        return slice.id === self.localValue.slice_id;
      });
    },
    toggleSlice: function toggleSlice() {
      this.$emit('toggleSlice');
    },
    toggleShowControls: function toggleShowControls() {
      if (this.localValue.type === 'model') {
        this.$emit('toggleModelControls', this.localValue);
      } else {
        this.showControls = !this.showControls;
      }
    },
    toggleModelControls: function toggleModelControls(component) {
      this.$emit('toggleModelControls', component);
    },
    toggleShowCreateChildrenSlices: function toggleShowCreateChildrenSlices(component) {
      this.$emit('toggleCreateChildrenSlices', this.localValue);
    },
    toggleCreateChildrenSlices: function toggleCreateChildrenSlices(component) {
      this.$emit('toggleCreateChildrenSlices', component);
    },
    addSlice: function addSlice(direction) {
      this.$emit('addSlice', { direction: direction, slice: this.value });
    },
    addSubSlice: function addSubSlice(params) {
      this.$emit('addSlice', params);
    },
    getComponent: function getComponent(component) {
      return window.deviseComponents[component];
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])('devise', ['slices', 'sliceConfig', 'fieldConfig', 'template'])),
  watch: {
    value: function value(newValue) {
      this.localValue = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, this.localValue, newValue);
    }
  },
  props: ['value'],
  components: {
    CheckboxControls: __WEBPACK_IMPORTED_MODULE_4__controls_Checkbox___default.a,
    ColorControls: __WEBPACK_IMPORTED_MODULE_3__controls_Color___default.a,
    ImageControls: __WEBPACK_IMPORTED_MODULE_5__controls_Image___default.a,
    LinkControls: __WEBPACK_IMPORTED_MODULE_6__controls_Link___default.a,
    NumberControls: __WEBPACK_IMPORTED_MODULE_7__controls_Number___default.a,
    TextareaControls: __WEBPACK_IMPORTED_MODULE_8__controls_Textarea___default.a,
    TextControls: __WEBPACK_IMPORTED_MODULE_9__controls_Text___default.a,
    WysiwygControls: __WEBPACK_IMPORTED_MODULE_10__controls_Wysiwyg___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Checkbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Color.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

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
  data: function data() {
    return {
      localValue: {
        color: ''
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      if (this.localValue.color.charAt(0) !== '#') {
        this.localValue.color = '#' + this.localValue.color;
      }
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Image.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en__ = __webpack_require__("../devise/vue/node_modules/faker/locale/en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_faker_locale_en__);

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
  data: function data() {
    return {
      localValue: {
        url: '',
        settings: {
          width: 800,
          height: 600,
          category: 'cats'
        }
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.localValue.url = __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default.a.image.imageUrl(this.localValue.settings.width, this.localValue.settings.height, this.localValue.settings.category);
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Link.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

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
  data: function data() {
    return {
      localValue: {
        text: '',
        url: '',
        target: ''
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Number.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

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
  data: function data() {
    return {
      localValue: {
        text: ''
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Text.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en__ = __webpack_require__("../devise/vue/node_modules/faker/locale/en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_faker_locale_en__);

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
  data: function data() {
    return {
      localValue: {
        text: '',
        settings: {
          numberOfWords: 5
        }
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.localValue.text = __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default.a.lorem.words(this.localValue.settings.numberOfWords);
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Textarea.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en__ = __webpack_require__("../devise/vue/node_modules/faker/locale/en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_faker_locale_en__);

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
  data: function data() {
    return {
      localValue: {
        text: '',
        settings: {
          numberOfWords: 15
        }
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.localValue.text = __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default.a.lorem.words(this.localValue.settings.numberOfWords);
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Wysiwyg.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en__ = __webpack_require__("../devise/vue/node_modules/faker/locale/en.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_faker_locale_en__);

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
  data: function data() {
    return {
      localValue: {
        text: '',
        settings: {
          numberOfWords: 15
        }
      }
    };
  },
  mounted: function mounted() {
    this.localValue = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.localValue, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.localValue.text = __WEBPACK_IMPORTED_MODULE_1_faker_locale_en___default.a.lorem.words(this.localValue.settings.numberOfWords);
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  props: ['value']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Loadbar.vue":
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loadbarPercentage: 0,
      modulesLoaded: 0
    };
  },
  mounted: function mounted() {
    // The loadbar works in two ways - listening for incrementations or by
    // passing through a prop. If you pass through a prop it's up to the parent
    // to update the percentage and get to 100%
    if (this.percentage > 0) {
      this.loadbarPercentage = this.percentage;
    } else {
      this.addListeners();
    }
  },

  methods: {
    addListeners: function addListeners() {
      window.bus.$on('incrementLoadbar', this.incrementLoadbar);
    },
    incrementLoadbar: function incrementLoadbar(numberOfModulesToLoad) {
      this.modulesLoaded++;
      this.loadbarPercentage = this.modulesLoaded / numberOfModulesToLoad;
      this.checkIfLoaded();
    },
    checkIfLoaded: function checkIfLoaded() {
      var self = this;
      if (this.loadbarPercentage >= 1) {
        this.showLoadbar = false;
        setTimeout(function () {
          self.loadbarPercentage = 0;
          self.modulesLoaded = 0;
        }, 1000);
      }
    }
  },
  watch: {
    percentage: function percentage(newValue) {
      this.loadbarPercentage = newValue;
    }
  },
  props: {
    percentage: {
      type: Number,
      default: -1
    }
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Messages.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");
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
  data: function data() {
    return {
      title: null,
      errors: [],
      messages: []
    };
  },
  mounted: function mounted() {
    var self = this;
    window.bus.$on('showError', function (error) {
      self.addError(error);
    });

    window.bus.$on('showMessage', function (payload) {
      self.addMessage(payload);
    });
  },

  methods: {
    addError: function addError(error) {
      var self = this;
      // Error came from axios most likely
      if (typeof error.response !== 'undefined' && typeof error.response.data !== 'undefined' && typeof error.response.data.errors !== 'undefined') {
        this.title = error.response.data.message;
        for (var property in error.response.data.errors) {
          if (error.response.data.errors.hasOwnProperty(property)) {
            var e = error.response.data.errors[property];
            self.appendError({
              code: error.response.status,
              title: error.response.statusText,
              message: e[0]
            });
          }
        }
      } else if (typeof error.data !== 'undefined' && error.data !== null) {
        self.appendError({
          code: error.status,
          title: error.data.error,
          message: error.data.message
        });
      } else if (typeof error === 'string') {
        self.appendError({
          code: '',
          title: 'Uh-Oh!',
          message: error
        });
      } else {
        self.appendError({
          code: error.status,
          title: 'Unable to reach server',
          message: 'Please check your internet connection'
        });
      }
    },
    appendError: function appendError(payload) {
      var self = this;
      var existingError = this.errors.find(function (error) {
        return error.message === payload.message;
      });

      if (!existingError) {
        var error = {
          code: payload.code,
          title: payload.title,
          message: payload.message
        };
        this.errors.unshift(error);

        window._.debounce(function () {
          self.errors.pop();
        }, 5000)();
      }
    },
    closeErrors: function closeErrors() {
      this.errors.splice(0);
    },
    addMessage: function addMessage(payload) {
      var self = this;
      var existingMessage = this.messages.find(function (message) {
        return message.message === payload.message;
      });

      if (!existingMessage) {
        var message = {
          title: payload.title,
          message: payload.message
        };
        this.messages.unshift(message);

        window._.debounce(function () {
          self.messages.pop();
        }, 5000)();
      }
    },
    closeMessages: function closeMessages() {
      this.messages.splice(0);
    }
  },
  computed: {
    mainTitle: function mainTitle() {
      if (this.title === null) {
        return 'There was a Problem';
      } else {
        return this.title;
      }
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_Strings__["a" /* default */]]
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Modal.vue":
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


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Toggle.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DeviseToggle',
  data: function data() {
    return {
      localValue: true
    };
  },
  mounted: function mounted() {
    this.localValue = this.value;
  },

  methods: {
    updateValue: function updateValue() {
      // Emit the number value through the input event
      this.$emit('input', this.localValue);
      this.$emit('change', this.localValue);
    }
  },
  watch: {
    value: function value(newValue) {
      this.localValue = this.value;
    }
  },
  props: ['value', 'id']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Cell.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Cell',
  data: function data() {
    return {
      eventName: ''
    };
  },
  created: function created() {
    this.$options.template = '<div>' + this.contents + '</div>';
  },

  methods: {
    emit: function emit(event) {
      this.eventName = event;
      // TODO - Bus needs to be defined
      // Bus.$emit(event, this.record)
    }
  },
  props: ['contents', 'record']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/ColumnControls.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search__ = __webpack_require__("../devise/vue/src/components/utilities/tables/Search.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sort__ = __webpack_require__("../devise/vue/src/components/utilities/tables/Sort.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sort___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Sort__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Related__ = __webpack_require__("../devise/vue/src/components/utilities/tables/Related.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Related___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Related__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dates__ = __webpack_require__("../devise/vue/src/components/utilities/tables/Dates.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dates___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Dates__);

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
  name: 'ColumnControls',
  data: function data() {
    return {
      show: false,
      localFilters: null
    };
  },
  mounted: function mounted() {
    this.localFilters = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.localFilters, this.value);
  },

  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.localFilters);
      this.$emit('change', this.localFilters);
    },
    clearAll: function clearAll() {
      this.localFilters = {
        related: {},
        search: {},
        sort: {},
        dates: {},
        page: '1'
      };
      this.updateValue();
    },
    hide: function hide() {
      var self = this;
      // hacky need to find a better way to have the column clickable
      this.$nextTick(function () {
        self.show = false;
      });
    }
  },
  computed: {
    shouldDisplayControls: function shouldDisplayControls() {
      return typeof this.column.sort !== 'undefined' || typeof this.column.search !== 'undefined' || typeof this.column.related !== 'undefined' || typeof this.column.dates !== 'undefined';
    }
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    value: {}
  },
  components: {
    search: __WEBPACK_IMPORTED_MODULE_1__Search___default.a,
    sort: __WEBPACK_IMPORTED_MODULE_2__Sort___default.a,
    dates: __WEBPACK_IMPORTED_MODULE_4__Dates___default.a,
    related: __WEBPACK_IMPORTED_MODULE_3__Related___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Dates.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_flatpickr_component__ = __webpack_require__("../devise/vue/node_modules/vue-flatpickr-component/dist/vue-flatpickr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_flatpickr_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_flatpickr_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../devise/vue/node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SuperTableDates',
  data: function data() {
    return {
      afterConfig: {
        enableTime: false,
        dateFormat: 'F d Y'
      },
      beforeConfig: {
        enableTime: false,
        dateFormat: 'F d Y'
      },
      after: '',
      before: '',
      dates: {
        after: '',
        before: ''
      },
      searchMethod: null,
      preventUpdate: false
    };
  },
  created: function created() {
    var dates = this.filters[this.type].dates;
    if (dates.hasOwnProperty(this.column)) {
      var range = dates[this.column];
      if (range.hasOwnProperty('after') && range.after !== '') {
        this.after = __WEBPACK_IMPORTED_MODULE_2_moment___default()(range.after, 'YYYY-MM-DD').format('MMMM D YYYY');
        this.dates.after = range.after;
      }
      if (range.hasOwnProperty('before') && range.before !== '') {
        this.before = __WEBPACK_IMPORTED_MODULE_2_moment___default()(range.before, 'YYYY-MM-DD').format('MMMM D YYYY');
        this.dates.before = range.before;
      }
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(['updateFilters']), {
    onAfterChange: function onAfterChange(selectedDates, dateStr, instance) {
      this.dates.after = dateStr ? __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateStr, 'MMMM D YYYY').format('YYYY-MM-DD') : '';
      this.update();
    },
    onBeforeChange: function onBeforeChange(selectedDates, dateStr, instance) {
      this.dates.before = dateStr ? __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateStr, 'MMMM D YYYY').format('YYYY-MM-DD') : '';
      this.update();
    },
    clear: function clear() {
      this.after = '';
      this.before = '';
    },
    update: function update() {
      var filterPayload = {};

      filterPayload[this.type] = this.filters[this.type];
      filterPayload[this.type].dates[this.column] = this.dates;
      filterPayload[this.type].page = 1;

      this.updateFilters(filterPayload);
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])(['filters'])),
  components: {
    flatPickr: __WEBPACK_IMPORTED_MODULE_1_vue_flatpickr_component___default.a
  },
  props: ['type', 'column']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Pagination.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

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
  name: 'SuperTablePagination',
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['updateFilters']), {
    update: function update(page) {
      var filterPayload = {};

      filterPayload[this.type] = this.filters[this.type];
      filterPayload[this.type].page = page;

      this.updateFilters(filterPayload);
    },
    isCurrentPage: function isCurrentPage(page) {
      return page === this.meta.pagination.current_page;
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['filters'])),
  props: ['meta', 'type']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Related.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

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
  name: 'SuperTableRelated',
  data: function data() {
    return {
      selected: [],
      relatedFilter: ''
    };
  },
  mounted: function mounted() {
    var related = this.filters[this.type].related;
    if (related.hasOwnProperty(this.options.field)) {
      this.selected = this.filters[this.type].related[this.options.field];
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['updateFilters']), {
    clear: function clear() {
      this.selected = [];
      this.relatedFilter = '';
      this.update();
    },
    update: function update() {
      var filterPayload = this.filters;

      if (this.selected.length > 0) {
        filterPayload[this.type].related[this.options.field] = this.selected;
        filterPayload[this.type].page = 1;
      } else {
        delete filterPayload[this.type].related[this.options.field];
      }

      this.updateFilters(filterPayload);
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    filteredOptions: function filteredOptions() {
      var filteredRelated = [];
      var self = this;

      if (typeof self.relatedFilter !== 'undefined' && self.relatedFilter !== '') {
        // TODO - REDO THIS SO WE DON'T HAVE TO USE UNDERSCORE
        // filteredRelated = _.pick(self[self.options.data], function (value, key) {
        //   return value.name.toLowerCase().includes(self.relatedFilter.toLowerCase())
        // })
      } else {
        return this[this.options.data];
      }

      return filteredRelated;
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['filters', 'categoriesList'])),
  props: ['options', 'type']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Search.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_Strings__ = __webpack_require__("../devise/vue/src/mixins/Strings.js");

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
  name: 'SuperTableSearch',
  data: function data() {
    return {
      localFilters: null
    };
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      self.localFilters = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.localFilters, this.value);
    });
  },

  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.localFilters);
      this.$emit('change', this.localFilters);
    },
    clear: function clear() {
      this.localFilters = '';
      this.updateValue();
    }
  },
  computed: {
    uiType: function uiType() {
      if (typeof this.options !== 'undefined') {
        if (Array.isArray(this.options)) {
          return 'array-select';
        } else {
          return 'object-select';
        }
      }

      return 'field';
    }
  },
  watch: {
    value: function value(newValue) {
      this.localFilters = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.localFilters, newValue);
    }
  },
  props: ['value', 'column', 'options'],
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_Strings__["a" /* default */]]
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Sort.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

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
  name: 'SuperTableSort',
  data: function data() {
    return {
      direction: null
    };
  },
  mounted: function mounted() {
    var sort = this.filters[this.type].sort;
    if (sort.hasOwnProperty(this.column)) {
      this.direction = sort[this.column];
    }
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['updateFilters']), {
    clear: function clear() {
      this.removeFilter();
    },
    update: function update() {
      var filterPayload = {};

      filterPayload[this.type] = this.filters[this.type];
      filterPayload[this.type].sort[this.column] = this.direction;

      this.updateFilters(filterPayload);
    },
    checkRemove: function checkRemove(value) {
      if (this.direction === value) {
        this.removeFilter();
      }
    },
    removeFilter: function removeFilter() {
      this.direction = null;
      var filterPayload = {};

      filterPayload[this.type] = this.filters[this.type];
      delete filterPayload[this.type].sort[this.column];

      this.updateFilters(filterPayload);
    }
  }),
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['filters'])),
  props: ['type', 'column']
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/SuperTable.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuex_utils_common__ = __webpack_require__("../devise/vue/src/vuex/utils/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColumnControls__ = __webpack_require__("../devise/vue/src/components/utilities/tables/ColumnControls.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColumnControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ColumnControls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ToggleColumns__ = __webpack_require__("../devise/vue/src/components/utilities/tables/ToggleColumns.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ToggleColumns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ToggleColumns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pagination__ = __webpack_require__("../devise/vue/src/components/utilities/tables/Pagination.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Cell__ = __webpack_require__("../devise/vue/src/components/utilities/tables/Cell.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Cell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Cell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

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
  name: 'SuperTable',
  data: function data() {
    return {
      theOptions: {
        showLinks: true
      },
      filters: {
        related: {},
        search: {},
        sort: {},
        dates: {},
        page: '1'
      },
      refreshRecords: null,
      records: [],
      meta: {}
    };
  },

  mounted: function mounted() {
    // Merge options
    this.theOptions.showLinks = this.showLinks;
    this.requestRefreshRecords();
  },
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapActions */])('devise', ['getModelRecords']), {
    updateValue: function updateValue() {
      var modelQuery = this.value + '&' + __WEBPACK_IMPORTED_MODULE_1__vuex_utils_common__["a" /* default */].buildFilterParams(this.filters);
      this.$emit('input', modelQuery);
      this.$emit('change', modelQuery);
      this.$nextTick(function () {
        this.$emit('done', modelQuery);
      });
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    requestRefreshRecords: function requestRefreshRecords() {
      var self = this;

      clearTimeout(this.refreshRecords);

      this.refreshRecords = setTimeout(function () {
        self.getModelRecords({
          model: self.value,
          filters: self.filters
        }).then(function (response) {
          self.records = response.data;
        });
      }, 500);
    },
    showControls: function showControls(key) {
      if (this.$refs.hasOwnProperty(key) && this.$refs[key][0].show === false) {
        this.$refs[key][0].show = true;
      }
    },

    // Checks to see if the key includes a period meaning that its a property of a property
    getRecordColumn: function getRecordColumn(record, key) {
      if (!key.includes('.')) {
        return record[key];
      } else {
        return this.getRecordColumnTraversal(record, key);
      }
    },

    // Get in there and get the property at the bottom of the stack
    getRecordColumnTraversal: function getRecordColumnTraversal(record, key) {
      var parts = key.split('.[].');

      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];

        // If it's the array part
        if (i % 2 === 1) {
          record = this.getFormattedStringFromArray(record, part);
        } else {
          record = [record].concat(part.split('.')).reduce(function (a, b) {
            return a[b];
          });
        }
      }

      return record;
    },
    getFormattedStringFromArray: function getFormattedStringFromArray(record, part) {
      var finalString = '';

      for (var i = 0; i < record.length; i++) {
        if (i > 0) {
          finalString += ', ';
        }

        finalString += record[i][part];
      }

      return finalString;
    },
    showColumn: function showColumn(column) {
      return column.show === true || typeof column.show === 'undefined';
    }
  }),
  watch: {
    filters: function filters() {
      this.requestRefreshRecords();
    }
  },
  props: {
    value: {
      type: String
    },
    columns: {
      type: Array,
      required: true
    },
    showLinks: {
      type: Boolean
    }
  },
  components: {
    'column-controls': __WEBPACK_IMPORTED_MODULE_2__ColumnControls___default.a,
    'toggle-columns': __WEBPACK_IMPORTED_MODULE_3__ToggleColumns___default.a,
    'pagination': __WEBPACK_IMPORTED_MODULE_4__Pagination___default.a,
    'cell': __WEBPACK_IMPORTED_MODULE_5__Cell___default.a
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/ToggleColumns.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");

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
  name: 'ToggleColumns',
  data: function data() {
    return {
      show: false,
      columns: []
    };
  },
  mounted: function mounted() {
    this.columns = this.value;

    for (var i = 0; i < this.columns.length; i++) {
      if (typeof this.columns[i].show === 'undefined') {
        this.$set(this.columns[i], 'show', true);
      }
    }
  },

  methods: {
    update: function update() {
      // TODO - This is current an error and needs to be ported for Devise
      // local.set(this.type + '-columns-' + this.currentTeam.id, this.columns)

      this.$emit('input', this.columns);
    }
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['currentTeam'])),
  props: {
    value: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "../devise/vue/node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-431939e5\",\"scoped\":false,\"hasInlineConfig\":true}!../devise/vue/node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!../devise/vue/src/Devise.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../devise/vue/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n      -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: .67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n/* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: .35em .75em .625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\n/* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width\n * https://goo.gl/pYtbK7\n * 2. Change the default font family in all browsers (opinionated)\n */\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  font-family: sans-serif; /* 2 */\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background: transparent;\n  padding: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  margin: 0;\n}\n\n/**\n * Suppress the focus outline on elements that cannot be accessed via keyboard.\n * This prevents an unwanted focus outline from appearing around elements that\n * might still respond to pointer events.\n */\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * Allow adding a border to an element by just adding a border-width.\n *\n * By default, the way the browser specifies that an element should have no\n * border is by setting it's border-style to `none` in the user-agent\n * stylesheet.\n *\n * In order to easily add borders to elements by just setting the `border-width`\n * property, we change the default border-style for all elements to `solid`, and\n * use border-width to hide them instead. This way our `border` utilities only\n * need to set the `border-width` property instead of the entire `border`\n * shorthand, making our border utilities much more straightforward to compose.\n *\n * https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n*::before,\n*::after {\n  border-width: 0;\n  border-style: solid;\n  border-color: #dae1e7;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\n\n/**\n * Temporary reset for a change introduced in Chrome 62 but now reverted.\n *\n * We can remove this when the reversion is in a normal Chrome release.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  border-radius: 0;\n}\ntextarea {\n  resize: vertical;\n}\nimg {\n  max-width: 100%;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: inherit;\n  opacity: .5;\n}\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  color: inherit;\n  opacity: .5;\n}\ninput::-ms-input-placeholder,\ntextarea::-ms-input-placeholder {\n  color: inherit;\n  opacity: .5;\n}\ninput::placeholder,\ntextarea::placeholder {\n  color: inherit;\n  opacity: .5;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n.dvs-badge {\n  padding: .25rem;\n}\n.dvs-badge-empty {\n  width: 10px;\n  height: 10px;\n  border-radius: 9999px;\n}\n.dvs-blocker {\n  background-color: #22292f;\n  opacity: .75;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 40;\n}\n.dvs-blocker.dvs-blocker-light {\n  opacity: .25;\n}\n.dvs-btn {\n  padding: 1rem;\n  background-color: #2b6ed8;\n  border-radius: .25rem;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: .875rem;\n  -webkit-transition: background-color .5s;\n  transition: background-color .5s;\n}\n.dvs-btn:focus {\n  outline-style: none;\n}\n.dvs-btn.dvs-toggle {\n  background-color: #8795a1;\n}\n.dvs-btn.dvs-toggle.dvs-on {\n  background-color: #38c172;\n}\n.dvs-btn.dvs-btn-plain {\n  background-color: #b8c2cc;\n}\n.dvs-btn.dvs-btn-plain:hover {\n  background-color: #2b6ed8;\n}\n.dvs-btn.dvs-btn-ghost {\n  background-color: transparent;\n  border-width: 2px;\n  border-color: #2b6ed8;\n  color: #2b6ed8;\n}\n.dvs-btn.dvs-btn-ghost:hover {\n  background-color: #2b6ed8;\n  color: #fff;\n}\n.dvs-btn.dvs-btn-sm {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.dvs-btn.dvs-btn-xs {\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n  padding-left: .75rem;\n  padding-right: .75rem;\n  font-size: .75rem;\n}\n.dvs-btn.dvs-btn-lg {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 1.125rem;\n}\n.dvs-btn:disabled {\n  background-color: #dae1e7;\n}\n.dvs-outline-none:focus {\n  outline: 0;\n}\n.dvs-card {\n  padding: 2rem;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n  border-radius: .125rem;\n}\n.vc-photoshop {\n  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;\n}\n.vc-ps-fields .vc-input__input {\n  padding-left: .5rem;\n  padding-right: .5rem;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n}\n#devise-container {\n  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  overflow: scroll;\n}\n#devise-admin-open {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  opacity: .25;\n  cursor: pointer;\n  font-size: 1.875rem;\n  margin-left: 1rem;\n  margin-bottom: 1rem;\n  z-index: 50;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#devise-admin-open:hover {\n  opacity: 1;\n  margin-left: 1.1rem;\n  margin-bottom: 1.1rem;\n}\n#devise-admin {\n  z-index: 30;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  overflow: scroll;\n  margin-left: -1px;\n  width: 350px;\n  -webkit-transition: left .5s ease-out;\n  transition: left .5s ease-out;\n}\n#devise-admin-shim {\n  border-right-width: 1px;\n  border-color: #dae1e7;\n  background-color: #fff;\n  min-width: 350px;\n  width: 350px;\n  -webkit-transition: width .25s ease-out, min-width .25s ease-out;\n  transition: width .25s ease-out, min-width .25s ease-out;\n}\n.devise-content {\n  z-index: 10;\n  -webkit-transition: width .25s ease-out, height .25s ease-out, margin .25s ease-out;\n  transition: width .25s ease-out, height .25s ease-out, margin .25s ease-out;\n  width: 100%;\n}\n.devise-content.tablet {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  border-radius: .25rem;\n  width: 768px;\n  height: 1024px;\n}\n.devise-content.mobile-landscape {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  margin-top: 6rem;\n  margin-bottom: 6rem;\n  border-radius: .25rem;\n  width: 600px;\n  height: 320px;\n}\n.devise-content.mobile-portrait {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  border-radius: .25rem;\n  width: 320px;\n  height: 600px;\n}\n#devise-container.admin-closed #devise-admin {\n  left: -500px;\n}\n#devise-container.admin-closed #devise-admin-shim {\n  min-width: 0;\n  width: 0;\n}\n#devise-container.admin-closed #devise-content {\n  width: 100%;\n}\n#devise-container.admin-closed #devise-content.tablet {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  border-radius: .25rem;\n  width: 768px;\n  height: 1024px;\n}\n#devise-container.admin-closed #devise-content.mobile-landscape {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  margin-top: 6rem;\n  margin-bottom: 6rem;\n  border-radius: .25rem;\n  width: 600px;\n  height: 320px;\n}\n#devise-container.admin-closed #devise-content.mobile-portrait {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  border-radius: .25rem;\n  width: 320px;\n  height: 600px;\n}\n#devise-container #devise-user > div {\n  width: 350px;\n  height: 99px;\n}\n#devise-container #devise-user > div :first-child {\n  width: 75%;\n}\n#devise-container #devise-user > div :nth-child(2) {\n  width: 25%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#devise-container.preview-frame .devise-content {\n  width: 100vw;\n}\n#devise-container.wide-admin #devise-admin {\n  width: 100%;\n}\n#devise-container.wide-admin #devise-admin-shim {\n  width: 100%;\n}\n#devise-container.wide-admin #devise-content {\n  display: none;\n}\n#devise-sidebar {\n  border-right-width: 1px;\n  border-color: #dae1e7;\n  background-color: #fff;\n  padding: 2rem;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  z-index: 20;\n  top: 100px;\n  min-width: 350px;\n  width: 350px;\n}\n#devise-sidebar.devise-iframe-sidebar {\n  top: 0;\n}\n#devise-admin-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  padding: 2rem;\n  overflow: scroll;\n  width: calc(100% - 350px);\n}\n#devise-preview-content {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: calc(100% - 350px);\n}\n#devise-preview-iframe {\n  height: calc(100vh - 100px);\n}\n.dz-image,\n.dz-error-mark,\n.dz-success-mark {\n  display: none;\n}\n.dvs-fieldset label {\n  display: block;\n  margin-bottom: .5rem;\n  font-size: .75rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: .1em;\n}\n.dvs-fieldset label.dvs-large-label {\n  font-size: 1rem;\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.dvs-fieldset label.dvs-small-label {\n  font-size: .875rem;\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.dvs-fieldset textarea,\n.dvs-fieldset select,\n.dvs-fieldset input[type=\"text\"],\n.dvs-fieldset input[type=\"password\"],\n.dvs-fieldset input[type=\"date\"],\n.dvs-fieldset input[type=\"datetime-local\"],\n.dvs-fieldset input[type=\"number\"],\n.dvs-fieldset input[type=\"email\"],\n.dvs-fieldset input[type=\"phone\"] {\n  padding: 1rem;\n  width: 100%;\n  background-color: #f1f5f8;\n  border-radius: .125rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.dvs-fieldset textarea.dvs-w-auto,\n.dvs-fieldset select.dvs-w-auto,\n.dvs-fieldset input[type=\"text\"].dvs-w-auto,\n.dvs-fieldset input[type=\"password\"].dvs-w-auto,\n.dvs-fieldset input[type=\"date\"].dvs-w-auto,\n.dvs-fieldset input[type=\"datetime-local\"].dvs-w-auto,\n.dvs-fieldset input[type=\"number\"].dvs-w-auto,\n.dvs-fieldset input[type=\"email\"].dvs-w-auto,\n.dvs-fieldset input[type=\"phone\"].dvs-w-auto {\n  width: auto;\n}\n.dvs-toggle {\n  display: inline-block;\n  position: relative;\n  height: 34px;\n  width: 60px;\n}\n.dvs-toggle input {\n  display: none;\n}\n.dvs-toggle input:checked + .dvs-toggle-slider {\n  background-color: #66bb6a;\n}\n.dvs-toggle input:checked + .dvs-toggle-slider:before {\n  -webkit-transform: translateX(26px);\n          transform: translateX(26px);\n}\n.dvs-toggle .dvs-toggle-slider {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n  border-radius: 34px;\n}\n.dvs-toggle .dvs-toggle-slider:before {\n  position: absolute;\n  content: \"\";\n  background-color: #fff;\n  bottom: 4px;\n  left: 4px;\n  height: 26px;\n  width: 26px;\n  border-radius: 50%;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n.help {\n  border-radius: .25rem;\n  padding: 2rem;\n  background-color: #f8fafc;\n  font-size: .875rem;\n  border-left-width: 4px;\n  border-color: #3490dc;\n}\n.help.danger {\n  background-color: #e3342f;\n  color: #fff;\n}\n.help p {\n  color: #3490dc;\n}\n.dvs-collapsable .dvs-switch-sm,\n.dvs-collapsable .dvs-switch {\n  border-radius: .125rem;\n  background-color: #dae1e7;\n  font-weight: 700;\n  padding: 1rem;\n  cursor: pointer;\n  opacity: .75;\n}\n.dvs-collapsable .dvs-switch-sm {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n}\n.dvs-collapsable > .dvs-collapsed {\n  display: none;\n  height: 0;\n}\n.dvs-collapsable.dvs-open > .dvs-switch-sm,\n.dvs-collapsable.dvs-open > .dvs-switch {\n  opacity: 1;\n  background-color: #2b6ed8;\n  color: #fff;\n}\n.dvs-collapsable.dvs-open > .dvs-collapsed {\n  display: block;\n  height: auto;\n}\n.dvs-template-editor-collapsable .dvs-template-switch-sm {\n  border-radius: .125rem;\n  background-color: #dae1e7;\n  font-weight: 700;\n  padding: 1rem;\n  cursor: pointer;\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n}\n.dvs-template-editor-collapsable .dvs-collapsed {\n  display: none;\n  height: 0;\n}\n.dvs-template-editor-collapsable.dvs-open .dvs-template-switch-sm {\n  opacity: 1;\n  background-color: #2b6ed8;\n  color: #fff;\n}\n.dvs-template-editor-collapsable.dvs-open .dvs-collapsed {\n  display: block;\n  height: auto;\n}\n.dvs-loadbar {\n  height: 8px;\n  background-color: #f1f5f8;\n  border-radius: .25rem;\n  width: 60%;\n  position: relative;\n}\n.dvs-loadbar .dvs-bar {\n  height: 6px;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  position: absolute;\n  background-color: #2b6ed8;\n  border-radius: .25rem;\n  -webkit-transition: .3s width ease;\n  transition: .3s width ease;\n}\n.alert-message {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  margin-left: 2rem;\n  z-index: 50;\n  border-radius: .25rem;\n  background-color: #2b6ed8;\n  color: #fff;\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  padding: 1rem;\n}\n.alert-message h5 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.alert-message h6 {\n  margin-bottom: .25rem;\n}\n.alert-message h5,\n.alert-message h6,\n.alert-message p,\n.alert-message li {\n  color: #fff;\n}\n.alert-message ul {\n  list-style: none;\n  padding: 0;\n}\n.alert-message ul li {\n  border-bottom-width: 1px;\n  border-color: #fff;\n  margin-bottom: 1rem;\n  padding-bottom: .5rem;\n}\n.alert-message ul li:last-child {\n  margin-bottom: 0;\n}\n.alert-message.error {\n  background-color: #cc1f1a;\n}\n.alert-message.error li {\n  border-color: #f66d9b;\n}\n.media-manager {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  background-color: #fff;\n  z-index: 50;\n  border-radius: .25rem;\n}\n.media-manager .media-manager-interface {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 70vh;\n  width: 70vw;\n}\n.media-manager .dropzone {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.media-manager .dropzone .dz-error,\n.media-manager .dropzone .dz-complete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n  padding: 1rem;\n  border-radius: .125rem;\n  margin-top: 4rem;\n  margin-right: 1rem;\n}\n.media-manager .dvs-grid-preview .dvs-preview {\n  background-size: cover;\n  width: 150px;\n  height: 150px;\n}\n.dvs-modal {\n  padding: 1rem;\n  border-radius: .5rem;\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n  background-color: #fff;\n}\n.dvs-absolute-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\n.dvs-absolute-center-x {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.dvs-absolute-center-y {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\ntable.dvs-table {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable.dvs-table th {\n  background-color: #f1f5f8;\n  padding-top: 1rem;\n  padding-bottom: .5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 700;\n  border-bottom-width: 1px;\n  border-color: #b8c2cc;\n  text-align: left;\n  position: relative;\n  font-size: .875rem;\n}\ntable.dvs-table td {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  border-bottom-width: 1px;\n  border-color: #b8c2cc;\n  text-align: left;\n  font-size: .875rem;\n}\ntable.dvs-table.tight td {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.dvs-column-control-modules > div {\n  border-bottom-width: 1px;\n  border-color: #b8c2cc;\n}\n.dvs-column-control-modules > div:last-child {\n  border-bottom-width: 0;\n}\n.dvs-tag {\n  padding: .5rem;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: .875rem;\n  border-radius: .125rem;\n}\n.dvs-empty-slot {\n  padding: 2rem;\n  text-align: center;\n  font-size: 1.25rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  border-radius: .125rem;\n  background-color: #f1f5f8;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.tippy-tooltip.devise-theme {\n  background-color: #2b6ed8;\n  color: #fff;\n  line-height: 1.5;\n  max-width: 400px;\n}\n.tippy-popper[x-placement^=top] .devise-theme .tippy-arrow {\n  border-top: 7px solid #2b6ed8;\n}\n.tippy-popper[x-placement^=bottom] .devise-theme .tippy-arrow {\n  border-bottom: 7px solid #2b6ed8;\n}\n.dvs-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.fade-enter-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n  -webkit-transition-delay: .25s;\n          transition-delay: .25s;\n}\n.fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.fade-enter-to {\n  opacity: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 300;\n}\nh1 {\n  font-size: 3rem;\n  font-weight: 200;\n  letter-spacing: -0.05em;\n}\nh2 {\n  font-size: 2.25rem;\n  font-weight: 200;\n  letter-spacing: -0.05em;\n}\nh3 {\n  font-size: 1.875rem;\n}\nh4 {\n  font-size: 1.5rem;\n}\nh5 {\n  font-size: 1.25rem;\n}\nh6 {\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  font-weight: 700;\n  font-size: .75rem;\n  letter-spacing: .1em;\n}\na {\n  text-decoration: none;\n  color: #3490dc;\n}\na:hover {\n  text-decoration: underline;\n}\np {\n  padding-bottom: 1rem;\n  line-height: 1.5;\n}\np:last-child {\n  padding-bottom: 0;\n}\nsmall {\n  font-size: .75rem;\n}\n.strikethrough {\n  -webkit-text-decoration: dvs-line-through;\n          text-decoration: dvs-line-through;\n}\ntrix-editor {\n  border: 1px solid #bbb;\n  border-radius: 3px;\n  margin: 0;\n  padding: .4em .6em;\n  min-height: 5em;\n  outline: none;\n}\ntrix-toolbar * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\ntrix-toolbar .trix-button-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\ntrix-toolbar .trix-button-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n  border: 1px solid #bbb;\n  border-top-color: #ccc;\n  border-bottom-color: #888;\n  border-radius: 3px;\n}\ntrix-toolbar .trix-button {\n  position: relative;\n  float: left;\n  color: rgba(0, 0, 0, .6);\n  font-size: .75em;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 0 .5em;\n  margin: 0;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #ddd;\n  border-radius: 0;\n  background: transparent;\n}\ntrix-toolbar .trix-button:not(:first-child) {\n  border-left: 1px solid #ccc;\n}\ntrix-toolbar .trix-button.trix-active {\n  background: #cbeefa;\n  color: black;\n}\ntrix-toolbar .trix-button:not(:disabled) {\n  cursor: pointer;\n}\ntrix-toolbar .trix-button:disabled {\n  color: rgba(0, 0, 0, .125);\n}\n@media (max-device-width: 768px) {\ntrix-toolbar .trix-button {\n    letter-spacing: -0.01em;\n    padding: 0 .3em;\n}\n}\ntrix-toolbar .trix-button--icon {\n  font-size: inherit;\n  width: 2.6em;\n  height: 1.6em;\n  max-width: calc(.8em + 4vw);\n  text-indent: -9999px;\n}\n@media (max-device-width: 768px) {\ntrix-toolbar .trix-button--icon {\n    height: 2em;\n    max-width: calc(.8em + 3.5vw);\n}\n}\ntrix-toolbar .trix-button--icon::before {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: .6;\n  content: \"\";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n@media (max-device-width: 768px) {\ntrix-toolbar .trix-button--icon::before {\n    right: 6%;\n    left: 6%;\n}\n}\ntrix-toolbar .trix-button--icon.trix-active::before {\n  opacity: 1;\n}\ntrix-toolbar .trix-button--icon:disabled::before {\n  opacity: .125;\n}\ntrix-toolbar .trix-button--icon-bold::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M15.6%2011.8c1-.7%201.6-1.8%201.6-2.8a4%204%200%200%200-4-4H7v14h7c2.1%200%203.7-1.7%203.7-3.8%200-1.5-.8-2.8-2.1-3.4zM10%207.5h3a1.5%201.5%200%201%201%200%203h-3v-3zm3.5%209H10v-3h3.5a1.5%201.5%200%201%201%200%203z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-italic::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M10%205v3h2.2l-3.4%208H6v3h8v-3h-2.2l3.4-8H18V5h-8z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-link::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M9.88%2013.7a4.3%204.3%200%200%201%200-6.07l3.37-3.37a4.26%204.26%200%200%201%206.07%200%204.3%204.3%200%200%201%200%206.06l-1.96%201.72a.91.91%200%201%201-1.3-1.3l1.97-1.71a2.46%202.46%200%200%200-3.48-3.48l-3.38%203.37a2.46%202.46%200%200%200%200%203.48.91.91%200%201%201-1.3%201.3z%22%2F%3E%3Cpath%20d%3D%22M4.25%2019.46a4.3%204.3%200%200%201%200-6.07l1.93-1.9a.91.91%200%201%201%201.3%201.3l-1.93%201.9a2.46%202.46%200%200%200%203.48%203.48l3.37-3.38c.96-.96.96-2.52%200-3.48a.91.91%200%201%201%201.3-1.3%204.3%204.3%200%200%201%200%206.07l-3.38%203.38a4.26%204.26%200%200%201-6.07%200z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-strike::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12.73%2014l.28.14c.26.15.45.3.57.44.12.14.18.3.18.5%200%20.3-.15.56-.44.75-.3.2-.76.3-1.39.3A13.52%2013.52%200%200%201%207%2014.95v3.37a10.64%2010.64%200%200%200%204.84.88c1.26%200%202.35-.19%203.28-.56.93-.37%201.64-.9%202.14-1.57s.74-1.45.74-2.32c0-.26-.02-.51-.06-.75h-5.21zm-5.5-4c-.08-.34-.12-.7-.12-1.1%200-1.29.52-2.3%201.58-3.02%201.05-.72%202.5-1.08%204.34-1.08%201.62%200%203.28.34%204.97%201l-1.3%202.93c-1.47-.6-2.73-.9-3.8-.9-.55%200-.96.08-1.2.26-.26.17-.38.38-.38.64%200%20.27.16.52.48.74.17.12.53.3%201.05.53H7.23zM3%2013h18v-2H3v2z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-quote::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M6%2017h3l2-4V7H5v6h3zm8%200h3l2-4V7h-6v6h3z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-heading-1::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12%209v3H9v7H6v-7H3V9h9zM8%204h14v3h-6v12h-3V7H8V4z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-code::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M18.2%2012L15%2015.2l1.4%201.4L21%2012l-4.6-4.6L15%208.8l3.2%203.2zM5.8%2012L9%208.8%207.6%207.4%203%2012l4.6%204.6L9%2015.2%205.8%2012z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-bullet-list::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%204a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0%206a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0%206a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm4%203h14v-2H8v2zm0-6h14v-2H8v2zm0-8v2h14V5H8z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-number-list::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M2%2017h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1%203h1.8L2%2013.1v.9h3v-1H3.2L5%2010.9V10H2v1zm5-6v2h14V5H7zm0%2014h14v-2H7v2zm0-6h14v-2H7v2z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-undo::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12.5%208c-2.6%200-5%201-6.9%202.6L2%207v9h9l-3.6-3.6A8%208%200%200%201%2020%2016l2.4-.8a10.5%2010.5%200%200%200-10-7.2z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-redo::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M18.4%2010.6a10.5%2010.5%200%200%200-16.9%204.6L4%2016a8%208%200%200%201%2012.7-3.6L13%2016h9V7l-3.6%203.6z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-decrease-nesting-level::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M3%2019h19v-2H3v2zm7-6h12v-2H10v2zm-8.3-.3l2.8%202.9L6%2014.2%204%2012l2-2-1.4-1.5L1%2012l.7.7zM3%205v2h19V5H3z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-button--icon-increase-nesting-level::before {\n  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M3%2019h19v-2H3v2zm7-6h12v-2H10v2zm-6.9-1L1%2014.2l1.4%201.4L6%2012l-.7-.7-2.8-2.8L1%209.9%203.1%2012zM3%205v2h19V5H3z%22%2F%3E%3C%2Fsvg%3E);\n}\ntrix-toolbar .trix-dialogs {\n  position: relative;\n}\ntrix-toolbar .trix-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: .75em;\n  padding: 15px 10px;\n  background: #fff;\n  -webkit-box-shadow: 0 .3em 1em #ccc;\n          box-shadow: 0 .3em 1em #ccc;\n  border-top: 2px solid #888;\n  border-radius: 5px;\n  z-index: 5;\n}\ntrix-toolbar .trix-input--dialog {\n  font-size: inherit;\n  font-weight: normal;\n  padding: .5em .8em;\n  margin: 0 10px 0 0;\n  border-radius: 3px;\n  border: 1px solid #bbb;\n  background-color: #fff;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n}\ntrix-toolbar .trix-input--dialog.validate:invalid {\n  -webkit-box-shadow: #f00 0 0 1.5px 1px;\n          box-shadow: #f00 0 0 1.5px 1px;\n}\ntrix-toolbar .trix-button--dialog {\n  font-size: inherit;\n  padding: .5em;\n  border-bottom: none;\n}\ntrix-toolbar .trix-dialog--link {\n  max-width: 600px;\n}\ntrix-toolbar .trix-dialog__link-fields {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\ntrix-toolbar .trix-dialog__link-fields .trix-input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\ntrix-toolbar .trix-dialog__link-fields .trix-button-group {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 content;\n          flex: 0 0 content;\n  margin: 0;\n}\ntrix-editor [data-trix-mutable=true] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\ntrix-editor [data-trix-mutable=true] img {\n  -webkit-box-shadow: 0 0 0 2px highlight;\n          box-shadow: 0 0 0 2px highlight;\n}\ntrix-editor [data-trix-mutable=true].attachment.attachment--file {\n  -webkit-box-shadow: 0 0 0 2px highlight;\n          box-shadow: 0 0 0 2px highlight;\n  border-color: transparent;\n}\ntrix-editor [data-trix-mutable=true]::-moz-selection,\ntrix-editor [data-trix-cursor-target]::-moz-selection {\n  background: none;\n}\ntrix-editor [data-trix-mutable=true]::selection,\ntrix-editor [data-trix-cursor-target]::selection {\n  background: none;\n}\ntrix-editor .attachment:hover {\n  cursor: default;\n}\ntrix-editor .attachment--preview .attachment__caption:hover {\n  cursor: text;\n}\ntrix-editor .attachment__progress {\n  position: absolute;\n  z-index: 1;\n  height: 20px;\n  top: calc(50% - 10px);\n  left: 5%;\n  width: 90%;\n  opacity: .9;\n  -webkit-transition: opacity 200ms ease-in;\n  transition: opacity 200ms ease-in;\n}\ntrix-editor .attachment__progress[value=\"100\"] {\n  opacity: 0;\n}\ntrix-editor .attachment__caption-editor {\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n  color: inherit;\n  text-align: center;\n  vertical-align: top;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n}\ntrix-editor .attachment__remove {\n  cursor: pointer;\n}\ntrix-editor .attachment__remove--icon {\n  text-indent: -9999px;\n  display: block;\n  position: absolute;\n  z-index: 1;\n  padding: 0;\n  margin: 0;\n  top: -1.1em;\n  left: calc(50% - .8em);\n  width: 1.8em;\n  height: 1.8em;\n  line-height: 1.8em;\n  border-radius: 50%;\n  text-indent: -9999px;\n  background-color: #fff;\n  border: 2px solid highlight;\n  -webkit-box-shadow: 1px 1px 6px rgba(0, 0, 0, .25);\n          box-shadow: 1px 1px 6px rgba(0, 0, 0, .25);\n}\ntrix-editor .attachment__remove--icon::before {\n  display: inline-block;\n  position: absolute;\n  top: .1em;\n  right: .1em;\n  bottom: .1em;\n  left: .1em;\n  opacity: .75;\n  content: \"\";\n  background-image: url(data:image/svg+xml,%3Csvg%20height%3D%2224%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19%206.4L17.6%205%2012%2010.6%206.4%205%205%206.4l5.6%205.6L5%2017.6%206.4%2019l5.6-5.6%205.6%205.6%201.4-1.4-5.6-5.6z%22%2F%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\ntrix-editor .attachment__remove--icon:hover {\n  border-color: #333;\n}\ntrix-editor .attachment__remove--icon:hover::before {\n  opacity: 1;\n}\n.trix-content {\n  line-height: 1.5;\n}\n.trix-content * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.trix-content h1 {\n  font-size: 1.2em;\n  line-height: 1.2;\n  margin: 0;\n}\n.trix-content blockquote {\n  margin: 0 0 0 .3em;\n  padding: 0 0 0 .6em;\n  border-left: .3em solid #ccc;\n}\n.trix-content pre {\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n  font-family: monospace;\n  font-size: .9em;\n  margin: 0;\n  padding: .5em;\n  white-space: pre;\n  background-color: #eee;\n  overflow-x: auto;\n}\n.trix-content ul,\n.trix-content ol,\n.trix-content li {\n  margin: 0;\n  padding: 0;\n}\n.trix-content ul li,\n.trix-content ol li,\n.trix-content li li {\n  margin-left: 1em;\n}\n.trix-content img {\n  max-width: 100%;\n  height: auto;\n}\n.trix-content a[data-trix-attachment] {\n  color: inherit;\n  text-decoration: none;\n}\n.trix-content a[data-trix-attachment]:hover,\n.trix-content a[data-trix-attachment]:visited:hover {\n  color: inherit;\n}\n.trix-content .attachment {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.trix-content .attachment__caption {\n  padding: 0;\n  text-align: center;\n}\n.trix-content .attachment__caption .attachment__name + .attachment__size::before {\n  content: ' \\B7   ';\n}\n.trix-content .attachment--preview {\n  width: 100%;\n  text-align: center;\n}\n.trix-content .attachment--preview .attachment__caption {\n  color: #666;\n  font-size: .9em;\n  line-height: 1.2;\n}\n.trix-content .attachment--file {\n  color: #333;\n  line-height: 1;\n  margin: 0 2px 2px 0;\n  padding: .4em 1em;\n  border: 1px solid #bbb;\n  border-radius: 5px;\n}\ntrix-toolbar {\n  background-color: #fff;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n  border-bottom-width: 0;\n  border-color: #8795a1;\n}\ntrix-toolbar .trix-button-group {\n  border-width: 0;\n  margin-bottom: 0;\n}\ntrix-toolbar .trix-button-group button {\n  border-width: 0;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\ntrix-toolbar .trix-button-group button:not(:first-child) {\n  border-width: 0;\n}\ntrix-toolbar .trix-button-group button::before {\n  border-width: 0;\n  background-image: none !important;\n  font-family: 'FontAwesome';\n  font-size: 12px;\n  line-height: 3rem;\n  text-indent: 0;\n}\ntrix-toolbar .trix-button--icon:disabled::before {\n  opacity: 1;\n}\ntrix-toolbar .trix-button--icon-bold:before {\n  content: '\\F032';\n}\ntrix-toolbar .trix-button--icon-italic::before {\n  content: '\\F033';\n}\ntrix-toolbar .trix-button--icon-link::before {\n  content: '\\F0C1';\n}\ntrix-toolbar .trix-button--icon-strike::before {\n  content: '\\F0CC';\n}\ntrix-toolbar .trix-button--icon-quote::before {\n  content: '\\F10E';\n}\ntrix-toolbar .trix-button--icon-code::before {\n  content: '\\F121';\n}\ntrix-toolbar .trix-button--icon-bullet-list::before {\n  content: '\\F03A';\n}\ntrix-toolbar .trix-button--icon-number-list::before {\n  content: '\\F0CB';\n}\ntrix-toolbar .trix-button--icon-decrease-nesting-level::before {\n  content: '\\F03B';\n}\ntrix-toolbar .trix-button--icon-increase-nesting-level::before {\n  content: '\\F03C';\n}\ntrix-toolbar .trix-button--icon-undo::before {\n  content: '\\F0E2';\n}\ntrix-toolbar .trix-button--icon-redo::before {\n  content: '\\F01E';\n}\ntrix-toolbar .trix-button--icon-heading-1::before {\n  content: '\\F1DC';\n}\ntrix-editor {\n  border-radius: 0;\n  border-bottom-right-radius: .25rem;\n  border-bottom-left-radius: .25rem;\n  border-color: #8795a1;\n  color: #8795a1;\n  padding: 1rem;\n}\n.dvs-container {\n  width: 100%;\n}\n@media (min-width: 768px) {\n.dvs-container {\n    max-width: 768px;\n}\n}\n@media (min-width: 992px) {\n.dvs-container {\n    max-width: 992px;\n}\n}\n.dvs-list-reset {\n  list-style: none;\n  padding: 0;\n}\n.dvs-appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.dvs-bg-transparent {\n  background-color: transparent;\n}\n.dvs-bg-black {\n  background-color: #22292f;\n}\n.dvs-bg-grey-darkest {\n  background-color: #3d4852;\n}\n.dvs-bg-grey-darker {\n  background-color: #606f7b;\n}\n.dvs-bg-grey-dark {\n  background-color: #8795a1;\n}\n.dvs-bg-grey {\n  background-color: #b8c2cc;\n}\n.dvs-bg-grey-light {\n  background-color: #dae1e7;\n}\n.dvs-bg-grey-lighter {\n  background-color: #f1f5f8;\n}\n.dvs-bg-grey-lightest {\n  background-color: #f8fafc;\n}\n.dvs-bg-white {\n  background-color: #fff;\n}\n.dvs-bg-red-dark {\n  background-color: #cc1f1a;\n}\n.dvs-bg-red {\n  background-color: #e3342f;\n}\n.dvs-bg-green-dark {\n  background-color: #1f9d55;\n}\n.dvs-bg-green {\n  background-color: #38c172;\n}\n.dvs-bg-blue-dark {\n  background-color: #2b6ed8;\n}\n.dvs-bg-blue {\n  background-color: #3490dc;\n}\n.dvs-bg-pink {\n  background-color: #f66d9b;\n}\n.hover\\:dvs-bg-transparent:hover {\n  background-color: transparent;\n}\n.hover\\:dvs-bg-black:hover {\n  background-color: #22292f;\n}\n.hover\\:dvs-bg-grey-darkest:hover {\n  background-color: #3d4852;\n}\n.hover\\:dvs-bg-grey-darker:hover {\n  background-color: #606f7b;\n}\n.hover\\:dvs-bg-grey-dark:hover {\n  background-color: #8795a1;\n}\n.hover\\:dvs-bg-grey:hover {\n  background-color: #b8c2cc;\n}\n.hover\\:dvs-bg-grey-light:hover {\n  background-color: #dae1e7;\n}\n.hover\\:dvs-bg-grey-lighter:hover {\n  background-color: #f1f5f8;\n}\n.hover\\:dvs-bg-grey-lightest:hover {\n  background-color: #f8fafc;\n}\n.hover\\:dvs-bg-white:hover {\n  background-color: #fff;\n}\n.hover\\:dvs-bg-red-dark:hover {\n  background-color: #cc1f1a;\n}\n.hover\\:dvs-bg-red:hover {\n  background-color: #e3342f;\n}\n.hover\\:dvs-bg-green-dark:hover {\n  background-color: #1f9d55;\n}\n.hover\\:dvs-bg-green:hover {\n  background-color: #38c172;\n}\n.hover\\:dvs-bg-blue-dark:hover {\n  background-color: #2b6ed8;\n}\n.hover\\:dvs-bg-blue:hover {\n  background-color: #3490dc;\n}\n.hover\\:dvs-bg-pink:hover {\n  background-color: #f66d9b;\n}\n.dvs-bg-cover {\n  background-size: cover;\n}\n.dvs-bg-contain {\n  background-size: contain;\n}\n.dvs-border-transparent {\n  border-color: transparent;\n}\n.dvs-border-black {\n  border-color: #22292f;\n}\n.dvs-border-grey-darkest {\n  border-color: #3d4852;\n}\n.dvs-border-grey-darker {\n  border-color: #606f7b;\n}\n.dvs-border-grey-dark {\n  border-color: #8795a1;\n}\n.dvs-border-grey {\n  border-color: #b8c2cc;\n}\n.dvs-border-grey-light {\n  border-color: #dae1e7;\n}\n.dvs-border-grey-lighter {\n  border-color: #f1f5f8;\n}\n.dvs-border-grey-lightest {\n  border-color: #f8fafc;\n}\n.dvs-border-white {\n  border-color: #fff;\n}\n.dvs-border-red-dark {\n  border-color: #cc1f1a;\n}\n.dvs-border-red {\n  border-color: #e3342f;\n}\n.dvs-border-green-dark {\n  border-color: #1f9d55;\n}\n.dvs-border-green {\n  border-color: #38c172;\n}\n.dvs-border-blue-dark {\n  border-color: #2b6ed8;\n}\n.dvs-border-blue {\n  border-color: #3490dc;\n}\n.dvs-border-pink {\n  border-color: #f66d9b;\n}\n.hover\\:dvs-border-transparent:hover {\n  border-color: transparent;\n}\n.hover\\:dvs-border-black:hover {\n  border-color: #22292f;\n}\n.hover\\:dvs-border-grey-darkest:hover {\n  border-color: #3d4852;\n}\n.hover\\:dvs-border-grey-darker:hover {\n  border-color: #606f7b;\n}\n.hover\\:dvs-border-grey-dark:hover {\n  border-color: #8795a1;\n}\n.hover\\:dvs-border-grey:hover {\n  border-color: #b8c2cc;\n}\n.hover\\:dvs-border-grey-light:hover {\n  border-color: #dae1e7;\n}\n.hover\\:dvs-border-grey-lighter:hover {\n  border-color: #f1f5f8;\n}\n.hover\\:dvs-border-grey-lightest:hover {\n  border-color: #f8fafc;\n}\n.hover\\:dvs-border-white:hover {\n  border-color: #fff;\n}\n.hover\\:dvs-border-red-dark:hover {\n  border-color: #cc1f1a;\n}\n.hover\\:dvs-border-red:hover {\n  border-color: #e3342f;\n}\n.hover\\:dvs-border-green-dark:hover {\n  border-color: #1f9d55;\n}\n.hover\\:dvs-border-green:hover {\n  border-color: #38c172;\n}\n.hover\\:dvs-border-blue-dark:hover {\n  border-color: #2b6ed8;\n}\n.hover\\:dvs-border-blue:hover {\n  border-color: #3490dc;\n}\n.hover\\:dvs-border-pink:hover {\n  border-color: #f66d9b;\n}\n.dvs-rounded-none {\n  border-radius: 0;\n}\n.dvs-rounded-sm {\n  border-radius: .125rem;\n}\n.dvs-rounded {\n  border-radius: .25rem;\n}\n.dvs-rounded-lg {\n  border-radius: .5rem;\n}\n.dvs-rounded-full {\n  border-radius: 9999px;\n}\n.dvs-rounded-t-none {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.dvs-rounded-r-none {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.dvs-rounded-b-none {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dvs-rounded-l-none {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dvs-rounded-t-sm {\n  border-top-left-radius: .125rem;\n  border-top-right-radius: .125rem;\n}\n.dvs-rounded-r-sm {\n  border-top-right-radius: .125rem;\n  border-bottom-right-radius: .125rem;\n}\n.dvs-rounded-b-sm {\n  border-bottom-right-radius: .125rem;\n  border-bottom-left-radius: .125rem;\n}\n.dvs-rounded-l-sm {\n  border-top-left-radius: .125rem;\n  border-bottom-left-radius: .125rem;\n}\n.dvs-rounded-t {\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n}\n.dvs-rounded-r {\n  border-top-right-radius: .25rem;\n  border-bottom-right-radius: .25rem;\n}\n.dvs-rounded-b {\n  border-bottom-right-radius: .25rem;\n  border-bottom-left-radius: .25rem;\n}\n.dvs-rounded-l {\n  border-top-left-radius: .25rem;\n  border-bottom-left-radius: .25rem;\n}\n.dvs-rounded-t-lg {\n  border-top-left-radius: .5rem;\n  border-top-right-radius: .5rem;\n}\n.dvs-rounded-r-lg {\n  border-top-right-radius: .5rem;\n  border-bottom-right-radius: .5rem;\n}\n.dvs-rounded-b-lg {\n  border-bottom-right-radius: .5rem;\n  border-bottom-left-radius: .5rem;\n}\n.dvs-rounded-l-lg {\n  border-top-left-radius: .5rem;\n  border-bottom-left-radius: .5rem;\n}\n.dvs-rounded-t-full {\n  border-top-left-radius: 9999px;\n  border-top-right-radius: 9999px;\n}\n.dvs-rounded-r-full {\n  border-top-right-radius: 9999px;\n  border-bottom-right-radius: 9999px;\n}\n.dvs-rounded-b-full {\n  border-bottom-right-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.dvs-rounded-l-full {\n  border-top-left-radius: 9999px;\n  border-bottom-left-radius: 9999px;\n}\n.dvs-rounded-tl-none {\n  border-top-left-radius: 0;\n}\n.dvs-rounded-tr-none {\n  border-top-right-radius: 0;\n}\n.dvs-rounded-br-none {\n  border-bottom-right-radius: 0;\n}\n.dvs-rounded-bl-none {\n  border-bottom-left-radius: 0;\n}\n.dvs-rounded-tl-sm {\n  border-top-left-radius: .125rem;\n}\n.dvs-rounded-tr-sm {\n  border-top-right-radius: .125rem;\n}\n.dvs-rounded-br-sm {\n  border-bottom-right-radius: .125rem;\n}\n.dvs-rounded-bl-sm {\n  border-bottom-left-radius: .125rem;\n}\n.dvs-rounded-tl {\n  border-top-left-radius: .25rem;\n}\n.dvs-rounded-tr {\n  border-top-right-radius: .25rem;\n}\n.dvs-rounded-br {\n  border-bottom-right-radius: .25rem;\n}\n.dvs-rounded-bl {\n  border-bottom-left-radius: .25rem;\n}\n.dvs-rounded-tl-lg {\n  border-top-left-radius: .5rem;\n}\n.dvs-rounded-tr-lg {\n  border-top-right-radius: .5rem;\n}\n.dvs-rounded-br-lg {\n  border-bottom-right-radius: .5rem;\n}\n.dvs-rounded-bl-lg {\n  border-bottom-left-radius: .5rem;\n}\n.dvs-rounded-tl-full {\n  border-top-left-radius: 9999px;\n}\n.dvs-rounded-tr-full {\n  border-top-right-radius: 9999px;\n}\n.dvs-rounded-br-full {\n  border-bottom-right-radius: 9999px;\n}\n.dvs-rounded-bl-full {\n  border-bottom-left-radius: 9999px;\n}\n.dvs-border-0 {\n  border-width: 0;\n}\n.dvs-border-2 {\n  border-width: 2px;\n}\n.dvs-border-4 {\n  border-width: 4px;\n}\n.dvs-border-8 {\n  border-width: 8px;\n}\n.dvs-border {\n  border-width: 1px;\n}\n.dvs-border-t-0 {\n  border-top-width: 0;\n}\n.dvs-border-r-0 {\n  border-right-width: 0;\n}\n.dvs-border-b-0 {\n  border-bottom-width: 0;\n}\n.dvs-border-l-0 {\n  border-left-width: 0;\n}\n.dvs-border-t-2 {\n  border-top-width: 2px;\n}\n.dvs-border-r-2 {\n  border-right-width: 2px;\n}\n.dvs-border-b-2 {\n  border-bottom-width: 2px;\n}\n.dvs-border-l-2 {\n  border-left-width: 2px;\n}\n.dvs-border-t-4 {\n  border-top-width: 4px;\n}\n.dvs-border-r-4 {\n  border-right-width: 4px;\n}\n.dvs-border-b-4 {\n  border-bottom-width: 4px;\n}\n.dvs-border-l-4 {\n  border-left-width: 4px;\n}\n.dvs-border-t-8 {\n  border-top-width: 8px;\n}\n.dvs-border-r-8 {\n  border-right-width: 8px;\n}\n.dvs-border-b-8 {\n  border-bottom-width: 8px;\n}\n.dvs-border-l-8 {\n  border-left-width: 8px;\n}\n.dvs-border-t {\n  border-top-width: 1px;\n}\n.dvs-border-r {\n  border-right-width: 1px;\n}\n.dvs-border-b {\n  border-bottom-width: 1px;\n}\n.dvs-border-l {\n  border-left-width: 1px;\n}\n.dvs-cursor-auto {\n  cursor: auto;\n}\n.dvs-cursor-default {\n  cursor: default;\n}\n.dvs-cursor-pointer {\n  cursor: pointer;\n}\n.dvs-cursor-not-allowed {\n  cursor: not-allowed;\n}\n.dvs-block {\n  display: block;\n}\n.dvs-inline-block {\n  display: inline-block;\n}\n.dvs-inline {\n  display: inline;\n}\n.dvs-table {\n  display: table;\n}\n.dvs-table-row {\n  display: table-row;\n}\n.dvs-table-cell {\n  display: table-cell;\n}\n.dvs-hidden {\n  display: none;\n}\n.dvs-flex {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.dvs-inline-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.dvs-flex-row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.dvs-flex-row-reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.dvs-flex-col {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.dvs-flex-col-reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n.dvs-flex-wrap {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.dvs-flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse;\n      flex-wrap: wrap-reverse;\n}\n.dvs-flex-no-wrap {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n.dvs-items-start {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.dvs-items-end {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.dvs-items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.dvs-items-baseline {\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n.dvs-items-stretch {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.dvs-self-auto {\n  -ms-flex-item-align: auto;\n      align-self: auto;\n}\n.dvs-self-start {\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n.dvs-self-end {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n.dvs-self-center {\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.dvs-self-stretch {\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n}\n.dvs-justify-start {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.dvs-justify-end {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.dvs-justify-center {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dvs-justify-between {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.dvs-justify-around {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.dvs-content-center {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.dvs-content-start {\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.dvs-content-end {\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n}\n.dvs-content-between {\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n.dvs-content-around {\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n}\n.dvs-flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.dvs-flex-auto {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n}\n.dvs-flex-initial {\n  -webkit-box-flex: initial;\n      -ms-flex: initial;\n          flex: initial;\n}\n.dvs-flex-none {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.dvs-flex-grow {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.dvs-flex-shrink {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n}\n.dvs-flex-no-grow {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n.dvs-flex-no-shrink {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.dvs-float-right {\n  float: right;\n}\n.dvs-float-left {\n  float: left;\n}\n.dvs-float-none {\n  float: none;\n}\n.dvs-clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.dvs-font-sans {\n  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n.dvs-font-serif {\n  font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;\n}\n.dvs-font-mono {\n  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;\n}\n.dvs-font-hairline {\n  font-weight: 100;\n}\n.dvs-font-thin {\n  font-weight: 200;\n}\n.dvs-font-light {\n  font-weight: 300;\n}\n.dvs-font-normal {\n  font-weight: 400;\n}\n.dvs-font-medium {\n  font-weight: 500;\n}\n.dvs-font-semibold {\n  font-weight: 600;\n}\n.dvs-font-bold {\n  font-weight: 700;\n}\n.dvs-font-extrabold {\n  font-weight: 800;\n}\n.dvs-font-black {\n  font-weight: 900;\n}\n.hover\\:dvs-font-hairline:hover {\n  font-weight: 100;\n}\n.hover\\:dvs-font-thin:hover {\n  font-weight: 200;\n}\n.hover\\:dvs-font-light:hover {\n  font-weight: 300;\n}\n.hover\\:dvs-font-normal:hover {\n  font-weight: 400;\n}\n.hover\\:dvs-font-medium:hover {\n  font-weight: 500;\n}\n.hover\\:dvs-font-semibold:hover {\n  font-weight: 600;\n}\n.hover\\:dvs-font-bold:hover {\n  font-weight: 700;\n}\n.hover\\:dvs-font-extrabold:hover {\n  font-weight: 800;\n}\n.hover\\:dvs-font-black:hover {\n  font-weight: 900;\n}\n.dvs-h-0 {\n  height: 0;\n}\n.dvs-h-1 {\n  height: .25rem;\n}\n.dvs-h-2 {\n  height: .5rem;\n}\n.dvs-h-3 {\n  height: .75rem;\n}\n.dvs-h-4 {\n  height: 1rem;\n}\n.dvs-h-6 {\n  height: 1.5rem;\n}\n.dvs-h-8 {\n  height: 2rem;\n}\n.dvs-h-10 {\n  height: 2.5rem;\n}\n.dvs-h-12 {\n  height: 3rem;\n}\n.dvs-h-16 {\n  height: 4rem;\n}\n.dvs-h-24 {\n  height: 6rem;\n}\n.dvs-h-32 {\n  height: 8rem;\n}\n.dvs-h-48 {\n  height: 12rem;\n}\n.dvs-h-64 {\n  height: 16rem;\n}\n.dvs-h-auto {\n  height: auto;\n}\n.dvs-h-px {\n  height: 1px;\n}\n.dvs-h-full {\n  height: 100%;\n}\n.dvs-h-screen {\n  height: 100vh;\n}\n.dvs-leading-none {\n  line-height: 1;\n}\n.dvs-leading-tight {\n  line-height: 1.25;\n}\n.dvs-leading-normal {\n  line-height: 1.5;\n}\n.dvs-leading-loose {\n  line-height: 2;\n}\n.dvs-m-0 {\n  margin: 0;\n}\n.dvs-m-1 {\n  margin: .25rem;\n}\n.dvs-m-2 {\n  margin: .5rem;\n}\n.dvs-m-3 {\n  margin: .75rem;\n}\n.dvs-m-4 {\n  margin: 1rem;\n}\n.dvs-m-6 {\n  margin: 1.5rem;\n}\n.dvs-m-8 {\n  margin: 2rem;\n}\n.dvs-m-9 {\n  margin: 2.5rem;\n}\n.dvs-m-10 {\n  margin: 3rem;\n}\n.dvs-m-11 {\n  margin: 4rem;\n}\n.dvs-m-12 {\n  margin: 6rem;\n}\n.dvs-m-auto {\n  margin: auto;\n}\n.dvs-m-px {\n  margin: 1px;\n}\n.dvs-my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.dvs-mx-0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.dvs-my-1 {\n  margin-top: .25rem;\n  margin-bottom: .25rem;\n}\n.dvs-mx-1 {\n  margin-left: .25rem;\n  margin-right: .25rem;\n}\n.dvs-my-2 {\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n}\n.dvs-mx-2 {\n  margin-left: .5rem;\n  margin-right: .5rem;\n}\n.dvs-my-3 {\n  margin-top: .75rem;\n  margin-bottom: .75rem;\n}\n.dvs-mx-3 {\n  margin-left: .75rem;\n  margin-right: .75rem;\n}\n.dvs-my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.dvs-mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.dvs-my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.dvs-mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n.dvs-my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.dvs-mx-8 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.dvs-my-9 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n.dvs-mx-9 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n.dvs-my-10 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n.dvs-mx-10 {\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n.dvs-my-11 {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n.dvs-mx-11 {\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n.dvs-my-12 {\n  margin-top: 6rem;\n  margin-bottom: 6rem;\n}\n.dvs-mx-12 {\n  margin-left: 6rem;\n  margin-right: 6rem;\n}\n.dvs-my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.dvs-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.dvs-my-px {\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n.dvs-mx-px {\n  margin-left: 1px;\n  margin-right: 1px;\n}\n.dvs-mt-0 {\n  margin-top: 0;\n}\n.dvs-mr-0 {\n  margin-right: 0;\n}\n.dvs-mb-0 {\n  margin-bottom: 0;\n}\n.dvs-ml-0 {\n  margin-left: 0;\n}\n.dvs-mt-1 {\n  margin-top: .25rem;\n}\n.dvs-mr-1 {\n  margin-right: .25rem;\n}\n.dvs-mb-1 {\n  margin-bottom: .25rem;\n}\n.dvs-ml-1 {\n  margin-left: .25rem;\n}\n.dvs-mt-2 {\n  margin-top: .5rem;\n}\n.dvs-mr-2 {\n  margin-right: .5rem;\n}\n.dvs-mb-2 {\n  margin-bottom: .5rem;\n}\n.dvs-ml-2 {\n  margin-left: .5rem;\n}\n.dvs-mt-3 {\n  margin-top: .75rem;\n}\n.dvs-mr-3 {\n  margin-right: .75rem;\n}\n.dvs-mb-3 {\n  margin-bottom: .75rem;\n}\n.dvs-ml-3 {\n  margin-left: .75rem;\n}\n.dvs-mt-4 {\n  margin-top: 1rem;\n}\n.dvs-mr-4 {\n  margin-right: 1rem;\n}\n.dvs-mb-4 {\n  margin-bottom: 1rem;\n}\n.dvs-ml-4 {\n  margin-left: 1rem;\n}\n.dvs-mt-6 {\n  margin-top: 1.5rem;\n}\n.dvs-mr-6 {\n  margin-right: 1.5rem;\n}\n.dvs-mb-6 {\n  margin-bottom: 1.5rem;\n}\n.dvs-ml-6 {\n  margin-left: 1.5rem;\n}\n.dvs-mt-8 {\n  margin-top: 2rem;\n}\n.dvs-mr-8 {\n  margin-right: 2rem;\n}\n.dvs-mb-8 {\n  margin-bottom: 2rem;\n}\n.dvs-ml-8 {\n  margin-left: 2rem;\n}\n.dvs-mt-9 {\n  margin-top: 2.5rem;\n}\n.dvs-mr-9 {\n  margin-right: 2.5rem;\n}\n.dvs-mb-9 {\n  margin-bottom: 2.5rem;\n}\n.dvs-ml-9 {\n  margin-left: 2.5rem;\n}\n.dvs-mt-10 {\n  margin-top: 3rem;\n}\n.dvs-mr-10 {\n  margin-right: 3rem;\n}\n.dvs-mb-10 {\n  margin-bottom: 3rem;\n}\n.dvs-ml-10 {\n  margin-left: 3rem;\n}\n.dvs-mt-11 {\n  margin-top: 4rem;\n}\n.dvs-mr-11 {\n  margin-right: 4rem;\n}\n.dvs-mb-11 {\n  margin-bottom: 4rem;\n}\n.dvs-ml-11 {\n  margin-left: 4rem;\n}\n.dvs-mt-12 {\n  margin-top: 6rem;\n}\n.dvs-mr-12 {\n  margin-right: 6rem;\n}\n.dvs-mb-12 {\n  margin-bottom: 6rem;\n}\n.dvs-ml-12 {\n  margin-left: 6rem;\n}\n.dvs-mt-auto {\n  margin-top: auto;\n}\n.dvs-mr-auto {\n  margin-right: auto;\n}\n.dvs-mb-auto {\n  margin-bottom: auto;\n}\n.dvs-ml-auto {\n  margin-left: auto;\n}\n.dvs-mt-px {\n  margin-top: 1px;\n}\n.dvs-mr-px {\n  margin-right: 1px;\n}\n.dvs-mb-px {\n  margin-bottom: 1px;\n}\n.dvs-ml-px {\n  margin-left: 1px;\n}\n.dvs-max-h-0 {\n  max-height: 0;\n}\n.dvs-max-h-full {\n  max-height: 100%;\n}\n.dvs-max-h-screen {\n  max-height: 100vh;\n}\n.dvs-max-w-3xs {\n  max-width: 5rem;\n}\n.dvs-max-w-2xs {\n  max-width: 10rem;\n}\n.dvs-max-w-xs {\n  max-width: 20rem;\n}\n.dvs-max-w-sm {\n  max-width: 30rem;\n}\n.dvs-max-w-md {\n  max-width: 40rem;\n}\n.dvs-max-w-lg {\n  max-width: 50rem;\n}\n.dvs-max-w-xl {\n  max-width: 60rem;\n}\n.dvs-max-w-2xl {\n  max-width: 70rem;\n}\n.dvs-max-w-3xl {\n  max-width: 80rem;\n}\n.dvs-max-w-4xl {\n  max-width: 90rem;\n}\n.dvs-max-w-5xl {\n  max-width: 100rem;\n}\n.dvs-max-w-1\\/2 {\n  max-width: 50%;\n}\n.dvs-max-w-1\\/3 {\n  max-width: 33.33333%;\n}\n.dvs-max-w-2\\/3 {\n  max-width: 66.66667%;\n}\n.dvs-max-w-1\\/4 {\n  max-width: 25%;\n}\n.dvs-max-w-3\\/4 {\n  max-width: 75%;\n}\n.dvs-max-w-1\\/5 {\n  max-width: 20%;\n}\n.dvs-max-w-2\\/5 {\n  max-width: 40%;\n}\n.dvs-max-w-3\\/5 {\n  max-width: 60%;\n}\n.dvs-max-w-4\\/5 {\n  max-width: 80%;\n}\n.dvs-max-w-1\\/6 {\n  max-width: 16.66667%;\n}\n.dvs-max-w-5\\/6 {\n  max-width: 83.33333%;\n}\n.dvs-max-w-full {\n  max-width: 100%;\n}\n.dvs-min-h-0 {\n  min-height: 0;\n}\n.dvs-min-h-full {\n  min-height: 100%;\n}\n.dvs-min-h-screen {\n  min-height: 100vh;\n}\n.dvs-min-w-0 {\n  min-width: 0;\n}\n.dvs-min-w-1 {\n  min-width: .25rem;\n}\n.dvs-min-w-2 {\n  min-width: .5rem;\n}\n.dvs-min-w-3 {\n  min-width: .75rem;\n}\n.dvs-min-w-4 {\n  min-width: 1rem;\n}\n.dvs-min-w-6 {\n  min-width: 1.5rem;\n}\n.dvs-min-w-8 {\n  min-width: 2rem;\n}\n.dvs-min-w-10 {\n  min-width: 2.5rem;\n}\n.dvs-min-w-12 {\n  min-width: 3rem;\n}\n.dvs-min-w-16 {\n  min-width: 4rem;\n}\n.dvs-min-w-24 {\n  min-width: 6rem;\n}\n.dvs-min-w-32 {\n  min-width: 8rem;\n}\n.dvs-min-w-48 {\n  min-width: 12rem;\n}\n.dvs-min-w-64 {\n  min-width: 16rem;\n}\n.dvs-min-w-96 {\n  min-width: 24rem;\n}\n.dvs-min-w-1\\/2 {\n  min-width: 50%;\n}\n.dvs-min-w-1\\/3 {\n  min-width: 33.33333%;\n}\n.dvs-min-w-2\\/3 {\n  min-width: 66.66667%;\n}\n.dvs-min-w-1\\/4 {\n  min-width: 25%;\n}\n.dvs-min-w-3\\/4 {\n  min-width: 75%;\n}\n.dvs-min-w-1\\/5 {\n  min-width: 20%;\n}\n.dvs-min-w-2\\/5 {\n  min-width: 40%;\n}\n.dvs-min-w-3\\/5 {\n  min-width: 60%;\n}\n.dvs-min-w-4\\/5 {\n  min-width: 80%;\n}\n.dvs-min-w-1\\/6 {\n  min-width: 16.66667%;\n}\n.dvs-min-w-5\\/6 {\n  min-width: 83.33333%;\n}\n.dvs-min-w-full {\n  min-width: 100%;\n}\n.dvs--m-0 {\n  margin: 0;\n}\n.dvs--m-1 {\n  margin: -0.25rem;\n}\n.dvs--m-2 {\n  margin: -0.5rem;\n}\n.dvs--m-3 {\n  margin: -0.75rem;\n}\n.dvs--m-4 {\n  margin: -1rem;\n}\n.dvs--m-6 {\n  margin: -1.5rem;\n}\n.dvs--m-8 {\n  margin: -2rem;\n}\n.dvs--m-px {\n  margin: -1px;\n}\n.dvs--my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.dvs--mx-0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.dvs--my-1 {\n  margin-top: -0.25rem;\n  margin-bottom: -0.25rem;\n}\n.dvs--mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n.dvs--my-2 {\n  margin-top: -0.5rem;\n  margin-bottom: -0.5rem;\n}\n.dvs--mx-2 {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.dvs--my-3 {\n  margin-top: -0.75rem;\n  margin-bottom: -0.75rem;\n}\n.dvs--mx-3 {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.dvs--my-4 {\n  margin-top: -1rem;\n  margin-bottom: -1rem;\n}\n.dvs--mx-4 {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.dvs--my-6 {\n  margin-top: -1.5rem;\n  margin-bottom: -1.5rem;\n}\n.dvs--mx-6 {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n.dvs--my-8 {\n  margin-top: -2rem;\n  margin-bottom: -2rem;\n}\n.dvs--mx-8 {\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n.dvs--my-px {\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n.dvs--mx-px {\n  margin-left: -1px;\n  margin-right: -1px;\n}\n.dvs--mt-0 {\n  margin-top: 0;\n}\n.dvs--mr-0 {\n  margin-right: 0;\n}\n.dvs--mb-0 {\n  margin-bottom: 0;\n}\n.dvs--ml-0 {\n  margin-left: 0;\n}\n.dvs--mt-1 {\n  margin-top: -0.25rem;\n}\n.dvs--mr-1 {\n  margin-right: -0.25rem;\n}\n.dvs--mb-1 {\n  margin-bottom: -0.25rem;\n}\n.dvs--ml-1 {\n  margin-left: -0.25rem;\n}\n.dvs--mt-2 {\n  margin-top: -0.5rem;\n}\n.dvs--mr-2 {\n  margin-right: -0.5rem;\n}\n.dvs--mb-2 {\n  margin-bottom: -0.5rem;\n}\n.dvs--ml-2 {\n  margin-left: -0.5rem;\n}\n.dvs--mt-3 {\n  margin-top: -0.75rem;\n}\n.dvs--mr-3 {\n  margin-right: -0.75rem;\n}\n.dvs--mb-3 {\n  margin-bottom: -0.75rem;\n}\n.dvs--ml-3 {\n  margin-left: -0.75rem;\n}\n.dvs--mt-4 {\n  margin-top: -1rem;\n}\n.dvs--mr-4 {\n  margin-right: -1rem;\n}\n.dvs--mb-4 {\n  margin-bottom: -1rem;\n}\n.dvs--ml-4 {\n  margin-left: -1rem;\n}\n.dvs--mt-6 {\n  margin-top: -1.5rem;\n}\n.dvs--mr-6 {\n  margin-right: -1.5rem;\n}\n.dvs--mb-6 {\n  margin-bottom: -1.5rem;\n}\n.dvs--ml-6 {\n  margin-left: -1.5rem;\n}\n.dvs--mt-8 {\n  margin-top: -2rem;\n}\n.dvs--mr-8 {\n  margin-right: -2rem;\n}\n.dvs--mb-8 {\n  margin-bottom: -2rem;\n}\n.dvs--ml-8 {\n  margin-left: -2rem;\n}\n.dvs--mt-px {\n  margin-top: -1px;\n}\n.dvs--mr-px {\n  margin-right: -1px;\n}\n.dvs--mb-px {\n  margin-bottom: -1px;\n}\n.dvs--ml-px {\n  margin-left: -1px;\n}\n.dvs-opacity-0 {\n  opacity: 0;\n}\n.dvs-opacity-25 {\n  opacity: .25;\n}\n.dvs-opacity-50 {\n  opacity: .5;\n}\n.dvs-opacity-75 {\n  opacity: .75;\n}\n.dvs-opacity-100 {\n  opacity: 1;\n}\n.dvs-overflow-auto {\n  overflow: auto;\n}\n.dvs-overflow-hidden {\n  overflow: hidden;\n}\n.dvs-overflow-visible {\n  overflow: visible;\n}\n.dvs-overflow-scroll {\n  overflow: scroll;\n}\n.dvs-overflow-x-scroll {\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.dvs-overflow-y-scroll {\n  overflow-y: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.dvs-scrolling-touch {\n  -webkit-overflow-scrolling: touch;\n}\n.dvs-scrolling-auto {\n  -webkit-overflow-scrolling: auto;\n}\n.dvs-p-0 {\n  padding: 0;\n}\n.dvs-p-1 {\n  padding: .25rem;\n}\n.dvs-p-2 {\n  padding: .5rem;\n}\n.dvs-p-3 {\n  padding: .75rem;\n}\n.dvs-p-4 {\n  padding: 1rem;\n}\n.dvs-p-6 {\n  padding: 1.5rem;\n}\n.dvs-p-8 {\n  padding: 2rem;\n}\n.dvs-p-16 {\n  padding: 4rem;\n}\n.dvs-p-px {\n  padding: 1px;\n}\n.dvs-py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.dvs-px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.dvs-py-1 {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n}\n.dvs-px-1 {\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n.dvs-py-2 {\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n.dvs-px-2 {\n  padding-left: .5rem;\n  padding-right: .5rem;\n}\n.dvs-py-3 {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n}\n.dvs-px-3 {\n  padding-left: .75rem;\n  padding-right: .75rem;\n}\n.dvs-py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.dvs-px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.dvs-py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.dvs-px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.dvs-py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.dvs-px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.dvs-py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.dvs-px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n.dvs-py-px {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.dvs-px-px {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.dvs-pt-0 {\n  padding-top: 0;\n}\n.dvs-pr-0 {\n  padding-right: 0;\n}\n.dvs-pb-0 {\n  padding-bottom: 0;\n}\n.dvs-pl-0 {\n  padding-left: 0;\n}\n.dvs-pt-1 {\n  padding-top: .25rem;\n}\n.dvs-pr-1 {\n  padding-right: .25rem;\n}\n.dvs-pb-1 {\n  padding-bottom: .25rem;\n}\n.dvs-pl-1 {\n  padding-left: .25rem;\n}\n.dvs-pt-2 {\n  padding-top: .5rem;\n}\n.dvs-pr-2 {\n  padding-right: .5rem;\n}\n.dvs-pb-2 {\n  padding-bottom: .5rem;\n}\n.dvs-pl-2 {\n  padding-left: .5rem;\n}\n.dvs-pt-3 {\n  padding-top: .75rem;\n}\n.dvs-pr-3 {\n  padding-right: .75rem;\n}\n.dvs-pb-3 {\n  padding-bottom: .75rem;\n}\n.dvs-pl-3 {\n  padding-left: .75rem;\n}\n.dvs-pt-4 {\n  padding-top: 1rem;\n}\n.dvs-pr-4 {\n  padding-right: 1rem;\n}\n.dvs-pb-4 {\n  padding-bottom: 1rem;\n}\n.dvs-pl-4 {\n  padding-left: 1rem;\n}\n.dvs-pt-6 {\n  padding-top: 1.5rem;\n}\n.dvs-pr-6 {\n  padding-right: 1.5rem;\n}\n.dvs-pb-6 {\n  padding-bottom: 1.5rem;\n}\n.dvs-pl-6 {\n  padding-left: 1.5rem;\n}\n.dvs-pt-8 {\n  padding-top: 2rem;\n}\n.dvs-pr-8 {\n  padding-right: 2rem;\n}\n.dvs-pb-8 {\n  padding-bottom: 2rem;\n}\n.dvs-pl-8 {\n  padding-left: 2rem;\n}\n.dvs-pt-16 {\n  padding-top: 4rem;\n}\n.dvs-pr-16 {\n  padding-right: 4rem;\n}\n.dvs-pb-16 {\n  padding-bottom: 4rem;\n}\n.dvs-pl-16 {\n  padding-left: 4rem;\n}\n.dvs-pt-px {\n  padding-top: 1px;\n}\n.dvs-pr-px {\n  padding-right: 1px;\n}\n.dvs-pb-px {\n  padding-bottom: 1px;\n}\n.dvs-pl-px {\n  padding-left: 1px;\n}\n.dvs-pointer-events-none {\n  pointer-events: none;\n}\n.dvs-pointer-events-auto {\n  pointer-events: auto;\n}\n.dvs-static {\n  position: static;\n}\n.dvs-fixed {\n  position: fixed;\n}\n.dvs-absolute {\n  position: absolute;\n}\n.dvs-relative {\n  position: relative;\n}\n.dvs-pin-none {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n}\n.dvs-pin {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.dvs-pin-y {\n  top: 0;\n  bottom: 0;\n}\n.dvs-pin-x {\n  right: 0;\n  left: 0;\n}\n.dvs-pin-t {\n  top: 0;\n}\n.dvs-pin-r {\n  right: 0;\n}\n.dvs-pin-b {\n  bottom: 0;\n}\n.dvs-pin-l {\n  left: 0;\n}\n.dvs-resize-none {\n  resize: none;\n}\n.dvs-resize-y {\n  resize: vertical;\n}\n.dvs-resize-x {\n  resize: horizontal;\n}\n.dvs-resize {\n  resize: both;\n}\n.dvs-shadow {\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n}\n.dvs-shadow-lg {\n  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n          box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n}\n.dvs-shadow-none {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.dvs-text-left {\n  text-align: left;\n}\n.dvs-text-center {\n  text-align: center;\n}\n.dvs-text-right {\n  text-align: right;\n}\n.dvs-text-justify {\n  text-align: justify;\n}\n.dvs-text-transparent {\n  color: transparent;\n}\n.dvs-text-black {\n  color: #22292f;\n}\n.dvs-text-grey-darkest {\n  color: #3d4852;\n}\n.dvs-text-grey-darker {\n  color: #606f7b;\n}\n.dvs-text-grey-dark {\n  color: #8795a1;\n}\n.dvs-text-grey {\n  color: #b8c2cc;\n}\n.dvs-text-grey-light {\n  color: #dae1e7;\n}\n.dvs-text-grey-lighter {\n  color: #f1f5f8;\n}\n.dvs-text-grey-lightest {\n  color: #f8fafc;\n}\n.dvs-text-white {\n  color: #fff;\n}\n.dvs-text-red-dark {\n  color: #cc1f1a;\n}\n.dvs-text-red {\n  color: #e3342f;\n}\n.dvs-text-green-dark {\n  color: #1f9d55;\n}\n.dvs-text-green {\n  color: #38c172;\n}\n.dvs-text-blue-dark {\n  color: #2b6ed8;\n}\n.dvs-text-blue {\n  color: #3490dc;\n}\n.dvs-text-pink {\n  color: #f66d9b;\n}\n.hover\\:dvs-text-transparent:hover {\n  color: transparent;\n}\n.hover\\:dvs-text-black:hover {\n  color: #22292f;\n}\n.hover\\:dvs-text-grey-darkest:hover {\n  color: #3d4852;\n}\n.hover\\:dvs-text-grey-darker:hover {\n  color: #606f7b;\n}\n.hover\\:dvs-text-grey-dark:hover {\n  color: #8795a1;\n}\n.hover\\:dvs-text-grey:hover {\n  color: #b8c2cc;\n}\n.hover\\:dvs-text-grey-light:hover {\n  color: #dae1e7;\n}\n.hover\\:dvs-text-grey-lighter:hover {\n  color: #f1f5f8;\n}\n.hover\\:dvs-text-grey-lightest:hover {\n  color: #f8fafc;\n}\n.hover\\:dvs-text-white:hover {\n  color: #fff;\n}\n.hover\\:dvs-text-red-dark:hover {\n  color: #cc1f1a;\n}\n.hover\\:dvs-text-red:hover {\n  color: #e3342f;\n}\n.hover\\:dvs-text-green-dark:hover {\n  color: #1f9d55;\n}\n.hover\\:dvs-text-green:hover {\n  color: #38c172;\n}\n.hover\\:dvs-text-blue-dark:hover {\n  color: #2b6ed8;\n}\n.hover\\:dvs-text-blue:hover {\n  color: #3490dc;\n}\n.hover\\:dvs-text-pink:hover {\n  color: #f66d9b;\n}\n.dvs-text-xs {\n  font-size: .75rem;\n}\n.dvs-text-sm {\n  font-size: .875rem;\n}\n.dvs-text-base {\n  font-size: 1rem;\n}\n.dvs-text-lg {\n  font-size: 1.125rem;\n}\n.dvs-text-xl {\n  font-size: 1.25rem;\n}\n.dvs-text-2xl {\n  font-size: 1.5rem;\n}\n.dvs-text-3xl {\n  font-size: 1.875rem;\n}\n.dvs-text-4xl {\n  font-size: 2.25rem;\n}\n.dvs-text-5xl {\n  font-size: 3rem;\n}\n.dvs-italic {\n  font-style: italic;\n}\n.dvs-roman {\n  font-style: normal;\n}\n.dvs-uppercase {\n  text-transform: uppercase;\n}\n.dvs-lowercase {\n  text-transform: lowercase;\n}\n.dvs-capitalize {\n  text-transform: capitalize;\n}\n.dvs-normal-case {\n  text-transform: none;\n}\n.dvs-underline {\n  text-decoration: underline;\n}\n.dvs-line-through {\n  text-decoration: line-through;\n}\n.dvs-no-underline {\n  text-decoration: none;\n}\n.dvs-antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.dvs-subpixel-antialiased {\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\n.hover\\:dvs-italic:hover {\n  font-style: italic;\n}\n.hover\\:dvs-roman:hover {\n  font-style: normal;\n}\n.hover\\:dvs-uppercase:hover {\n  text-transform: uppercase;\n}\n.hover\\:dvs-lowercase:hover {\n  text-transform: lowercase;\n}\n.hover\\:dvs-capitalize:hover {\n  text-transform: capitalize;\n}\n.hover\\:dvs-normal-case:hover {\n  text-transform: none;\n}\n.hover\\:dvs-underline:hover {\n  text-decoration: underline;\n}\n.hover\\:dvs-line-through:hover {\n  text-decoration: line-through;\n}\n.hover\\:dvs-no-underline:hover {\n  text-decoration: none;\n}\n.hover\\:dvs-antialiased:hover {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hover\\:dvs-subpixel-antialiased:hover {\n  -webkit-font-smoothing: auto;\n  -moz-osx-font-smoothing: auto;\n}\n.dvs-tracking-tight {\n  letter-spacing: -0.05em;\n}\n.dvs-tracking-normal {\n  letter-spacing: 0;\n}\n.dvs-tracking-wide {\n  letter-spacing: .05em;\n}\n.dvs-tracking-superwide {\n  letter-spacing: .1em;\n}\n.dvs-visible {\n  visibility: visible;\n}\n.dvs-invisible {\n  visibility: hidden;\n}\n.dvs-whitespace-normal {\n  white-space: normal;\n}\n.dvs-whitespace-no-wrap {\n  white-space: nowrap;\n}\n.dvs-whitespace-pre {\n  white-space: pre;\n}\n.dvs-whitespace-pre-line {\n  white-space: pre-line;\n}\n.dvs-whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.dvs-break-words {\n  word-wrap: break-word;\n}\n.dvs-break-normal {\n  word-wrap: normal;\n}\n.dvs-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dvs-w-0 {\n  width: 0;\n}\n.dvs-w-1 {\n  width: .25rem;\n}\n.dvs-w-2 {\n  width: .5rem;\n}\n.dvs-w-3 {\n  width: .75rem;\n}\n.dvs-w-4 {\n  width: 1rem;\n}\n.dvs-w-6 {\n  width: 1.5rem;\n}\n.dvs-w-8 {\n  width: 2rem;\n}\n.dvs-w-10 {\n  width: 2.5rem;\n}\n.dvs-w-12 {\n  width: 3rem;\n}\n.dvs-w-16 {\n  width: 4rem;\n}\n.dvs-w-24 {\n  width: 6rem;\n}\n.dvs-w-32 {\n  width: 8rem;\n}\n.dvs-w-48 {\n  width: 12rem;\n}\n.dvs-w-64 {\n  width: 16rem;\n}\n.dvs-w-auto {\n  width: auto;\n}\n.dvs-w-px {\n  width: 1px;\n}\n.dvs-w-1\\/2 {\n  width: 50%;\n}\n.dvs-w-1\\/3 {\n  width: 33.33333%;\n}\n.dvs-w-2\\/3 {\n  width: 66.66667%;\n}\n.dvs-w-1\\/4 {\n  width: 25%;\n}\n.dvs-w-3\\/4 {\n  width: 75%;\n}\n.dvs-w-1\\/5 {\n  width: 20%;\n}\n.dvs-w-2\\/5 {\n  width: 40%;\n}\n.dvs-w-3\\/5 {\n  width: 60%;\n}\n.dvs-w-4\\/5 {\n  width: 80%;\n}\n.dvs-w-1\\/6 {\n  width: 16.66667%;\n}\n.dvs-w-5\\/6 {\n  width: 83.33333%;\n}\n.dvs-w-full {\n  width: 100%;\n}\n.dvs-w-screen {\n  width: 100vw;\n}\n.dvs-z-0 {\n  z-index: 0;\n}\n.dvs-z-10 {\n  z-index: 10;\n}\n.dvs-z-20 {\n  z-index: 20;\n}\n.dvs-z-30 {\n  z-index: 30;\n}\n.dvs-z-40 {\n  z-index: 40;\n}\n.dvs-z-50 {\n  z-index: 50;\n}\n.dvs-z-auto {\n  z-index: auto;\n}\n@media (min-width: 768px) {\n.md\\:dvs-list-reset {\n    list-style: none;\n    padding: 0;\n}\n.md\\:dvs-appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.md\\:dvs-bg-transparent {\n    background-color: transparent;\n}\n.md\\:dvs-bg-black {\n    background-color: #22292f;\n}\n.md\\:dvs-bg-grey-darkest {\n    background-color: #3d4852;\n}\n.md\\:dvs-bg-grey-darker {\n    background-color: #606f7b;\n}\n.md\\:dvs-bg-grey-dark {\n    background-color: #8795a1;\n}\n.md\\:dvs-bg-grey {\n    background-color: #b8c2cc;\n}\n.md\\:dvs-bg-grey-light {\n    background-color: #dae1e7;\n}\n.md\\:dvs-bg-grey-lighter {\n    background-color: #f1f5f8;\n}\n.md\\:dvs-bg-grey-lightest {\n    background-color: #f8fafc;\n}\n.md\\:dvs-bg-white {\n    background-color: #fff;\n}\n.md\\:dvs-bg-red-dark {\n    background-color: #cc1f1a;\n}\n.md\\:dvs-bg-red {\n    background-color: #e3342f;\n}\n.md\\:dvs-bg-green-dark {\n    background-color: #1f9d55;\n}\n.md\\:dvs-bg-green {\n    background-color: #38c172;\n}\n.md\\:dvs-bg-blue-dark {\n    background-color: #2b6ed8;\n}\n.md\\:dvs-bg-blue {\n    background-color: #3490dc;\n}\n.md\\:dvs-bg-pink {\n    background-color: #f66d9b;\n}\n.md\\:hover\\:dvs-bg-transparent:hover {\n    background-color: transparent;\n}\n.md\\:hover\\:dvs-bg-black:hover {\n    background-color: #22292f;\n}\n.md\\:hover\\:dvs-bg-grey-darkest:hover {\n    background-color: #3d4852;\n}\n.md\\:hover\\:dvs-bg-grey-darker:hover {\n    background-color: #606f7b;\n}\n.md\\:hover\\:dvs-bg-grey-dark:hover {\n    background-color: #8795a1;\n}\n.md\\:hover\\:dvs-bg-grey:hover {\n    background-color: #b8c2cc;\n}\n.md\\:hover\\:dvs-bg-grey-light:hover {\n    background-color: #dae1e7;\n}\n.md\\:hover\\:dvs-bg-grey-lighter:hover {\n    background-color: #f1f5f8;\n}\n.md\\:hover\\:dvs-bg-grey-lightest:hover {\n    background-color: #f8fafc;\n}\n.md\\:hover\\:dvs-bg-white:hover {\n    background-color: #fff;\n}\n.md\\:hover\\:dvs-bg-red-dark:hover {\n    background-color: #cc1f1a;\n}\n.md\\:hover\\:dvs-bg-red:hover {\n    background-color: #e3342f;\n}\n.md\\:hover\\:dvs-bg-green-dark:hover {\n    background-color: #1f9d55;\n}\n.md\\:hover\\:dvs-bg-green:hover {\n    background-color: #38c172;\n}\n.md\\:hover\\:dvs-bg-blue-dark:hover {\n    background-color: #2b6ed8;\n}\n.md\\:hover\\:dvs-bg-blue:hover {\n    background-color: #3490dc;\n}\n.md\\:hover\\:dvs-bg-pink:hover {\n    background-color: #f66d9b;\n}\n.md\\:dvs-bg-cover {\n    background-size: cover;\n}\n.md\\:dvs-bg-contain {\n    background-size: contain;\n}\n.md\\:dvs-border-transparent {\n    border-color: transparent;\n}\n.md\\:dvs-border-black {\n    border-color: #22292f;\n}\n.md\\:dvs-border-grey-darkest {\n    border-color: #3d4852;\n}\n.md\\:dvs-border-grey-darker {\n    border-color: #606f7b;\n}\n.md\\:dvs-border-grey-dark {\n    border-color: #8795a1;\n}\n.md\\:dvs-border-grey {\n    border-color: #b8c2cc;\n}\n.md\\:dvs-border-grey-light {\n    border-color: #dae1e7;\n}\n.md\\:dvs-border-grey-lighter {\n    border-color: #f1f5f8;\n}\n.md\\:dvs-border-grey-lightest {\n    border-color: #f8fafc;\n}\n.md\\:dvs-border-white {\n    border-color: #fff;\n}\n.md\\:dvs-border-red-dark {\n    border-color: #cc1f1a;\n}\n.md\\:dvs-border-red {\n    border-color: #e3342f;\n}\n.md\\:dvs-border-green-dark {\n    border-color: #1f9d55;\n}\n.md\\:dvs-border-green {\n    border-color: #38c172;\n}\n.md\\:dvs-border-blue-dark {\n    border-color: #2b6ed8;\n}\n.md\\:dvs-border-blue {\n    border-color: #3490dc;\n}\n.md\\:dvs-border-pink {\n    border-color: #f66d9b;\n}\n.md\\:hover\\:dvs-border-transparent:hover {\n    border-color: transparent;\n}\n.md\\:hover\\:dvs-border-black:hover {\n    border-color: #22292f;\n}\n.md\\:hover\\:dvs-border-grey-darkest:hover {\n    border-color: #3d4852;\n}\n.md\\:hover\\:dvs-border-grey-darker:hover {\n    border-color: #606f7b;\n}\n.md\\:hover\\:dvs-border-grey-dark:hover {\n    border-color: #8795a1;\n}\n.md\\:hover\\:dvs-border-grey:hover {\n    border-color: #b8c2cc;\n}\n.md\\:hover\\:dvs-border-grey-light:hover {\n    border-color: #dae1e7;\n}\n.md\\:hover\\:dvs-border-grey-lighter:hover {\n    border-color: #f1f5f8;\n}\n.md\\:hover\\:dvs-border-grey-lightest:hover {\n    border-color: #f8fafc;\n}\n.md\\:hover\\:dvs-border-white:hover {\n    border-color: #fff;\n}\n.md\\:hover\\:dvs-border-red-dark:hover {\n    border-color: #cc1f1a;\n}\n.md\\:hover\\:dvs-border-red:hover {\n    border-color: #e3342f;\n}\n.md\\:hover\\:dvs-border-green-dark:hover {\n    border-color: #1f9d55;\n}\n.md\\:hover\\:dvs-border-green:hover {\n    border-color: #38c172;\n}\n.md\\:hover\\:dvs-border-blue-dark:hover {\n    border-color: #2b6ed8;\n}\n.md\\:hover\\:dvs-border-blue:hover {\n    border-color: #3490dc;\n}\n.md\\:hover\\:dvs-border-pink:hover {\n    border-color: #f66d9b;\n}\n.md\\:dvs-rounded-none {\n    border-radius: 0;\n}\n.md\\:dvs-rounded-sm {\n    border-radius: .125rem;\n}\n.md\\:dvs-rounded {\n    border-radius: .25rem;\n}\n.md\\:dvs-rounded-lg {\n    border-radius: .5rem;\n}\n.md\\:dvs-rounded-full {\n    border-radius: 9999px;\n}\n.md\\:dvs-rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.md\\:dvs-rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.md\\:dvs-rounded-b-none {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.md\\:dvs-rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.md\\:dvs-rounded-t-sm {\n    border-top-left-radius: .125rem;\n    border-top-right-radius: .125rem;\n}\n.md\\:dvs-rounded-r-sm {\n    border-top-right-radius: .125rem;\n    border-bottom-right-radius: .125rem;\n}\n.md\\:dvs-rounded-b-sm {\n    border-bottom-right-radius: .125rem;\n    border-bottom-left-radius: .125rem;\n}\n.md\\:dvs-rounded-l-sm {\n    border-top-left-radius: .125rem;\n    border-bottom-left-radius: .125rem;\n}\n.md\\:dvs-rounded-t {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n}\n.md\\:dvs-rounded-r {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n}\n.md\\:dvs-rounded-b {\n    border-bottom-right-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n}\n.md\\:dvs-rounded-l {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n}\n.md\\:dvs-rounded-t-lg {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n.md\\:dvs-rounded-r-lg {\n    border-top-right-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n.md\\:dvs-rounded-b-lg {\n    border-bottom-right-radius: .5rem;\n    border-bottom-left-radius: .5rem;\n}\n.md\\:dvs-rounded-l-lg {\n    border-top-left-radius: .5rem;\n    border-bottom-left-radius: .5rem;\n}\n.md\\:dvs-rounded-t-full {\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n}\n.md\\:dvs-rounded-r-full {\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n}\n.md\\:dvs-rounded-b-full {\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n}\n.md\\:dvs-rounded-l-full {\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n}\n.md\\:dvs-rounded-tl-none {\n    border-top-left-radius: 0;\n}\n.md\\:dvs-rounded-tr-none {\n    border-top-right-radius: 0;\n}\n.md\\:dvs-rounded-br-none {\n    border-bottom-right-radius: 0;\n}\n.md\\:dvs-rounded-bl-none {\n    border-bottom-left-radius: 0;\n}\n.md\\:dvs-rounded-tl-sm {\n    border-top-left-radius: .125rem;\n}\n.md\\:dvs-rounded-tr-sm {\n    border-top-right-radius: .125rem;\n}\n.md\\:dvs-rounded-br-sm {\n    border-bottom-right-radius: .125rem;\n}\n.md\\:dvs-rounded-bl-sm {\n    border-bottom-left-radius: .125rem;\n}\n.md\\:dvs-rounded-tl {\n    border-top-left-radius: .25rem;\n}\n.md\\:dvs-rounded-tr {\n    border-top-right-radius: .25rem;\n}\n.md\\:dvs-rounded-br {\n    border-bottom-right-radius: .25rem;\n}\n.md\\:dvs-rounded-bl {\n    border-bottom-left-radius: .25rem;\n}\n.md\\:dvs-rounded-tl-lg {\n    border-top-left-radius: .5rem;\n}\n.md\\:dvs-rounded-tr-lg {\n    border-top-right-radius: .5rem;\n}\n.md\\:dvs-rounded-br-lg {\n    border-bottom-right-radius: .5rem;\n}\n.md\\:dvs-rounded-bl-lg {\n    border-bottom-left-radius: .5rem;\n}\n.md\\:dvs-rounded-tl-full {\n    border-top-left-radius: 9999px;\n}\n.md\\:dvs-rounded-tr-full {\n    border-top-right-radius: 9999px;\n}\n.md\\:dvs-rounded-br-full {\n    border-bottom-right-radius: 9999px;\n}\n.md\\:dvs-rounded-bl-full {\n    border-bottom-left-radius: 9999px;\n}\n.md\\:dvs-border-0 {\n    border-width: 0;\n}\n.md\\:dvs-border-2 {\n    border-width: 2px;\n}\n.md\\:dvs-border-4 {\n    border-width: 4px;\n}\n.md\\:dvs-border-8 {\n    border-width: 8px;\n}\n.md\\:dvs-border {\n    border-width: 1px;\n}\n.md\\:dvs-border-t-0 {\n    border-top-width: 0;\n}\n.md\\:dvs-border-r-0 {\n    border-right-width: 0;\n}\n.md\\:dvs-border-b-0 {\n    border-bottom-width: 0;\n}\n.md\\:dvs-border-l-0 {\n    border-left-width: 0;\n}\n.md\\:dvs-border-t-2 {\n    border-top-width: 2px;\n}\n.md\\:dvs-border-r-2 {\n    border-right-width: 2px;\n}\n.md\\:dvs-border-b-2 {\n    border-bottom-width: 2px;\n}\n.md\\:dvs-border-l-2 {\n    border-left-width: 2px;\n}\n.md\\:dvs-border-t-4 {\n    border-top-width: 4px;\n}\n.md\\:dvs-border-r-4 {\n    border-right-width: 4px;\n}\n.md\\:dvs-border-b-4 {\n    border-bottom-width: 4px;\n}\n.md\\:dvs-border-l-4 {\n    border-left-width: 4px;\n}\n.md\\:dvs-border-t-8 {\n    border-top-width: 8px;\n}\n.md\\:dvs-border-r-8 {\n    border-right-width: 8px;\n}\n.md\\:dvs-border-b-8 {\n    border-bottom-width: 8px;\n}\n.md\\:dvs-border-l-8 {\n    border-left-width: 8px;\n}\n.md\\:dvs-border-t {\n    border-top-width: 1px;\n}\n.md\\:dvs-border-r {\n    border-right-width: 1px;\n}\n.md\\:dvs-border-b {\n    border-bottom-width: 1px;\n}\n.md\\:dvs-border-l {\n    border-left-width: 1px;\n}\n.md\\:dvs-cursor-auto {\n    cursor: auto;\n}\n.md\\:dvs-cursor-default {\n    cursor: default;\n}\n.md\\:dvs-cursor-pointer {\n    cursor: pointer;\n}\n.md\\:dvs-cursor-not-allowed {\n    cursor: not-allowed;\n}\n.md\\:dvs-block {\n    display: block;\n}\n.md\\:dvs-inline-block {\n    display: inline-block;\n}\n.md\\:dvs-inline {\n    display: inline;\n}\n.md\\:dvs-table {\n    display: table;\n}\n.md\\:dvs-table-row {\n    display: table-row;\n}\n.md\\:dvs-table-cell {\n    display: table-cell;\n}\n.md\\:dvs-hidden {\n    display: none;\n}\n.md\\:dvs-flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.md\\:dvs-inline-flex {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.md\\:dvs-flex-row {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.md\\:dvs-flex-row-reverse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n.md\\:dvs-flex-col {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.md\\:dvs-flex-col-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n.md\\:dvs-flex-wrap {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.md\\:dvs-flex-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n}\n.md\\:dvs-flex-no-wrap {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.md\\:dvs-items-start {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.md\\:dvs-items-end {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.md\\:dvs-items-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.md\\:dvs-items-baseline {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n}\n.md\\:dvs-items-stretch {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n.md\\:dvs-self-auto {\n    -ms-flex-item-align: auto;\n        align-self: auto;\n}\n.md\\:dvs-self-start {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n.md\\:dvs-self-end {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n}\n.md\\:dvs-self-center {\n    -ms-flex-item-align: center;\n        align-self: center;\n}\n.md\\:dvs-self-stretch {\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n}\n.md\\:dvs-justify-start {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.md\\:dvs-justify-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.md\\:dvs-justify-center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.md\\:dvs-justify-between {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.md\\:dvs-justify-around {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.md\\:dvs-content-center {\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n.md\\:dvs-content-start {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n}\n.md\\:dvs-content-end {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n}\n.md\\:dvs-content-between {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n}\n.md\\:dvs-content-around {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n}\n.md\\:dvs-flex-1 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.md\\:dvs-flex-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n}\n.md\\:dvs-flex-initial {\n    -webkit-box-flex: initial;\n        -ms-flex: initial;\n            flex: initial;\n}\n.md\\:dvs-flex-none {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n}\n.md\\:dvs-flex-grow {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.md\\:dvs-flex-shrink {\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n}\n.md\\:dvs-flex-no-grow {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n}\n.md\\:dvs-flex-no-shrink {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.md\\:dvs-float-right {\n    float: right;\n}\n.md\\:dvs-float-left {\n    float: left;\n}\n.md\\:dvs-float-none {\n    float: none;\n}\n.md\\:dvs-clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.md\\:dvs-font-sans {\n    font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n.md\\:dvs-font-serif {\n    font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;\n}\n.md\\:dvs-font-mono {\n    font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;\n}\n.md\\:dvs-font-hairline {\n    font-weight: 100;\n}\n.md\\:dvs-font-thin {\n    font-weight: 200;\n}\n.md\\:dvs-font-light {\n    font-weight: 300;\n}\n.md\\:dvs-font-normal {\n    font-weight: 400;\n}\n.md\\:dvs-font-medium {\n    font-weight: 500;\n}\n.md\\:dvs-font-semibold {\n    font-weight: 600;\n}\n.md\\:dvs-font-bold {\n    font-weight: 700;\n}\n.md\\:dvs-font-extrabold {\n    font-weight: 800;\n}\n.md\\:dvs-font-black {\n    font-weight: 900;\n}\n.md\\:hover\\:dvs-font-hairline:hover {\n    font-weight: 100;\n}\n.md\\:hover\\:dvs-font-thin:hover {\n    font-weight: 200;\n}\n.md\\:hover\\:dvs-font-light:hover {\n    font-weight: 300;\n}\n.md\\:hover\\:dvs-font-normal:hover {\n    font-weight: 400;\n}\n.md\\:hover\\:dvs-font-medium:hover {\n    font-weight: 500;\n}\n.md\\:hover\\:dvs-font-semibold:hover {\n    font-weight: 600;\n}\n.md\\:hover\\:dvs-font-bold:hover {\n    font-weight: 700;\n}\n.md\\:hover\\:dvs-font-extrabold:hover {\n    font-weight: 800;\n}\n.md\\:hover\\:dvs-font-black:hover {\n    font-weight: 900;\n}\n.md\\:dvs-h-0 {\n    height: 0;\n}\n.md\\:dvs-h-1 {\n    height: .25rem;\n}\n.md\\:dvs-h-2 {\n    height: .5rem;\n}\n.md\\:dvs-h-3 {\n    height: .75rem;\n}\n.md\\:dvs-h-4 {\n    height: 1rem;\n}\n.md\\:dvs-h-6 {\n    height: 1.5rem;\n}\n.md\\:dvs-h-8 {\n    height: 2rem;\n}\n.md\\:dvs-h-10 {\n    height: 2.5rem;\n}\n.md\\:dvs-h-12 {\n    height: 3rem;\n}\n.md\\:dvs-h-16 {\n    height: 4rem;\n}\n.md\\:dvs-h-24 {\n    height: 6rem;\n}\n.md\\:dvs-h-32 {\n    height: 8rem;\n}\n.md\\:dvs-h-48 {\n    height: 12rem;\n}\n.md\\:dvs-h-64 {\n    height: 16rem;\n}\n.md\\:dvs-h-auto {\n    height: auto;\n}\n.md\\:dvs-h-px {\n    height: 1px;\n}\n.md\\:dvs-h-full {\n    height: 100%;\n}\n.md\\:dvs-h-screen {\n    height: 100vh;\n}\n.md\\:dvs-leading-none {\n    line-height: 1;\n}\n.md\\:dvs-leading-tight {\n    line-height: 1.25;\n}\n.md\\:dvs-leading-normal {\n    line-height: 1.5;\n}\n.md\\:dvs-leading-loose {\n    line-height: 2;\n}\n.md\\:dvs-m-0 {\n    margin: 0;\n}\n.md\\:dvs-m-1 {\n    margin: .25rem;\n}\n.md\\:dvs-m-2 {\n    margin: .5rem;\n}\n.md\\:dvs-m-3 {\n    margin: .75rem;\n}\n.md\\:dvs-m-4 {\n    margin: 1rem;\n}\n.md\\:dvs-m-6 {\n    margin: 1.5rem;\n}\n.md\\:dvs-m-8 {\n    margin: 2rem;\n}\n.md\\:dvs-m-9 {\n    margin: 2.5rem;\n}\n.md\\:dvs-m-10 {\n    margin: 3rem;\n}\n.md\\:dvs-m-11 {\n    margin: 4rem;\n}\n.md\\:dvs-m-12 {\n    margin: 6rem;\n}\n.md\\:dvs-m-auto {\n    margin: auto;\n}\n.md\\:dvs-m-px {\n    margin: 1px;\n}\n.md\\:dvs-my-0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.md\\:dvs-mx-0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n.md\\:dvs-my-1 {\n    margin-top: .25rem;\n    margin-bottom: .25rem;\n}\n.md\\:dvs-mx-1 {\n    margin-left: .25rem;\n    margin-right: .25rem;\n}\n.md\\:dvs-my-2 {\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n}\n.md\\:dvs-mx-2 {\n    margin-left: .5rem;\n    margin-right: .5rem;\n}\n.md\\:dvs-my-3 {\n    margin-top: .75rem;\n    margin-bottom: .75rem;\n}\n.md\\:dvs-mx-3 {\n    margin-left: .75rem;\n    margin-right: .75rem;\n}\n.md\\:dvs-my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.md\\:dvs-mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n.md\\:dvs-my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n}\n.md\\:dvs-mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n}\n.md\\:dvs-my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n.md\\:dvs-mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n.md\\:dvs-my-9 {\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem;\n}\n.md\\:dvs-mx-9 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n}\n.md\\:dvs-my-10 {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n.md\\:dvs-mx-10 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n}\n.md\\:dvs-my-11 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n}\n.md\\:dvs-mx-11 {\n    margin-left: 4rem;\n    margin-right: 4rem;\n}\n.md\\:dvs-my-12 {\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n}\n.md\\:dvs-mx-12 {\n    margin-left: 6rem;\n    margin-right: 6rem;\n}\n.md\\:dvs-my-auto {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n.md\\:dvs-mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n.md\\:dvs-my-px {\n    margin-top: 1px;\n    margin-bottom: 1px;\n}\n.md\\:dvs-mx-px {\n    margin-left: 1px;\n    margin-right: 1px;\n}\n.md\\:dvs-mt-0 {\n    margin-top: 0;\n}\n.md\\:dvs-mr-0 {\n    margin-right: 0;\n}\n.md\\:dvs-mb-0 {\n    margin-bottom: 0;\n}\n.md\\:dvs-ml-0 {\n    margin-left: 0;\n}\n.md\\:dvs-mt-1 {\n    margin-top: .25rem;\n}\n.md\\:dvs-mr-1 {\n    margin-right: .25rem;\n}\n.md\\:dvs-mb-1 {\n    margin-bottom: .25rem;\n}\n.md\\:dvs-ml-1 {\n    margin-left: .25rem;\n}\n.md\\:dvs-mt-2 {\n    margin-top: .5rem;\n}\n.md\\:dvs-mr-2 {\n    margin-right: .5rem;\n}\n.md\\:dvs-mb-2 {\n    margin-bottom: .5rem;\n}\n.md\\:dvs-ml-2 {\n    margin-left: .5rem;\n}\n.md\\:dvs-mt-3 {\n    margin-top: .75rem;\n}\n.md\\:dvs-mr-3 {\n    margin-right: .75rem;\n}\n.md\\:dvs-mb-3 {\n    margin-bottom: .75rem;\n}\n.md\\:dvs-ml-3 {\n    margin-left: .75rem;\n}\n.md\\:dvs-mt-4 {\n    margin-top: 1rem;\n}\n.md\\:dvs-mr-4 {\n    margin-right: 1rem;\n}\n.md\\:dvs-mb-4 {\n    margin-bottom: 1rem;\n}\n.md\\:dvs-ml-4 {\n    margin-left: 1rem;\n}\n.md\\:dvs-mt-6 {\n    margin-top: 1.5rem;\n}\n.md\\:dvs-mr-6 {\n    margin-right: 1.5rem;\n}\n.md\\:dvs-mb-6 {\n    margin-bottom: 1.5rem;\n}\n.md\\:dvs-ml-6 {\n    margin-left: 1.5rem;\n}\n.md\\:dvs-mt-8 {\n    margin-top: 2rem;\n}\n.md\\:dvs-mr-8 {\n    margin-right: 2rem;\n}\n.md\\:dvs-mb-8 {\n    margin-bottom: 2rem;\n}\n.md\\:dvs-ml-8 {\n    margin-left: 2rem;\n}\n.md\\:dvs-mt-9 {\n    margin-top: 2.5rem;\n}\n.md\\:dvs-mr-9 {\n    margin-right: 2.5rem;\n}\n.md\\:dvs-mb-9 {\n    margin-bottom: 2.5rem;\n}\n.md\\:dvs-ml-9 {\n    margin-left: 2.5rem;\n}\n.md\\:dvs-mt-10 {\n    margin-top: 3rem;\n}\n.md\\:dvs-mr-10 {\n    margin-right: 3rem;\n}\n.md\\:dvs-mb-10 {\n    margin-bottom: 3rem;\n}\n.md\\:dvs-ml-10 {\n    margin-left: 3rem;\n}\n.md\\:dvs-mt-11 {\n    margin-top: 4rem;\n}\n.md\\:dvs-mr-11 {\n    margin-right: 4rem;\n}\n.md\\:dvs-mb-11 {\n    margin-bottom: 4rem;\n}\n.md\\:dvs-ml-11 {\n    margin-left: 4rem;\n}\n.md\\:dvs-mt-12 {\n    margin-top: 6rem;\n}\n.md\\:dvs-mr-12 {\n    margin-right: 6rem;\n}\n.md\\:dvs-mb-12 {\n    margin-bottom: 6rem;\n}\n.md\\:dvs-ml-12 {\n    margin-left: 6rem;\n}\n.md\\:dvs-mt-auto {\n    margin-top: auto;\n}\n.md\\:dvs-mr-auto {\n    margin-right: auto;\n}\n.md\\:dvs-mb-auto {\n    margin-bottom: auto;\n}\n.md\\:dvs-ml-auto {\n    margin-left: auto;\n}\n.md\\:dvs-mt-px {\n    margin-top: 1px;\n}\n.md\\:dvs-mr-px {\n    margin-right: 1px;\n}\n.md\\:dvs-mb-px {\n    margin-bottom: 1px;\n}\n.md\\:dvs-ml-px {\n    margin-left: 1px;\n}\n.md\\:dvs-max-h-0 {\n    max-height: 0;\n}\n.md\\:dvs-max-h-full {\n    max-height: 100%;\n}\n.md\\:dvs-max-h-screen {\n    max-height: 100vh;\n}\n.md\\:dvs-max-w-3xs {\n    max-width: 5rem;\n}\n.md\\:dvs-max-w-2xs {\n    max-width: 10rem;\n}\n.md\\:dvs-max-w-xs {\n    max-width: 20rem;\n}\n.md\\:dvs-max-w-sm {\n    max-width: 30rem;\n}\n.md\\:dvs-max-w-md {\n    max-width: 40rem;\n}\n.md\\:dvs-max-w-lg {\n    max-width: 50rem;\n}\n.md\\:dvs-max-w-xl {\n    max-width: 60rem;\n}\n.md\\:dvs-max-w-2xl {\n    max-width: 70rem;\n}\n.md\\:dvs-max-w-3xl {\n    max-width: 80rem;\n}\n.md\\:dvs-max-w-4xl {\n    max-width: 90rem;\n}\n.md\\:dvs-max-w-5xl {\n    max-width: 100rem;\n}\n.md\\:dvs-max-w-1\\/2 {\n    max-width: 50%;\n}\n.md\\:dvs-max-w-1\\/3 {\n    max-width: 33.33333%;\n}\n.md\\:dvs-max-w-2\\/3 {\n    max-width: 66.66667%;\n}\n.md\\:dvs-max-w-1\\/4 {\n    max-width: 25%;\n}\n.md\\:dvs-max-w-3\\/4 {\n    max-width: 75%;\n}\n.md\\:dvs-max-w-1\\/5 {\n    max-width: 20%;\n}\n.md\\:dvs-max-w-2\\/5 {\n    max-width: 40%;\n}\n.md\\:dvs-max-w-3\\/5 {\n    max-width: 60%;\n}\n.md\\:dvs-max-w-4\\/5 {\n    max-width: 80%;\n}\n.md\\:dvs-max-w-1\\/6 {\n    max-width: 16.66667%;\n}\n.md\\:dvs-max-w-5\\/6 {\n    max-width: 83.33333%;\n}\n.md\\:dvs-max-w-full {\n    max-width: 100%;\n}\n.md\\:dvs-min-h-0 {\n    min-height: 0;\n}\n.md\\:dvs-min-h-full {\n    min-height: 100%;\n}\n.md\\:dvs-min-h-screen {\n    min-height: 100vh;\n}\n.md\\:dvs-min-w-0 {\n    min-width: 0;\n}\n.md\\:dvs-min-w-1 {\n    min-width: .25rem;\n}\n.md\\:dvs-min-w-2 {\n    min-width: .5rem;\n}\n.md\\:dvs-min-w-3 {\n    min-width: .75rem;\n}\n.md\\:dvs-min-w-4 {\n    min-width: 1rem;\n}\n.md\\:dvs-min-w-6 {\n    min-width: 1.5rem;\n}\n.md\\:dvs-min-w-8 {\n    min-width: 2rem;\n}\n.md\\:dvs-min-w-10 {\n    min-width: 2.5rem;\n}\n.md\\:dvs-min-w-12 {\n    min-width: 3rem;\n}\n.md\\:dvs-min-w-16 {\n    min-width: 4rem;\n}\n.md\\:dvs-min-w-24 {\n    min-width: 6rem;\n}\n.md\\:dvs-min-w-32 {\n    min-width: 8rem;\n}\n.md\\:dvs-min-w-48 {\n    min-width: 12rem;\n}\n.md\\:dvs-min-w-64 {\n    min-width: 16rem;\n}\n.md\\:dvs-min-w-96 {\n    min-width: 24rem;\n}\n.md\\:dvs-min-w-1\\/2 {\n    min-width: 50%;\n}\n.md\\:dvs-min-w-1\\/3 {\n    min-width: 33.33333%;\n}\n.md\\:dvs-min-w-2\\/3 {\n    min-width: 66.66667%;\n}\n.md\\:dvs-min-w-1\\/4 {\n    min-width: 25%;\n}\n.md\\:dvs-min-w-3\\/4 {\n    min-width: 75%;\n}\n.md\\:dvs-min-w-1\\/5 {\n    min-width: 20%;\n}\n.md\\:dvs-min-w-2\\/5 {\n    min-width: 40%;\n}\n.md\\:dvs-min-w-3\\/5 {\n    min-width: 60%;\n}\n.md\\:dvs-min-w-4\\/5 {\n    min-width: 80%;\n}\n.md\\:dvs-min-w-1\\/6 {\n    min-width: 16.66667%;\n}\n.md\\:dvs-min-w-5\\/6 {\n    min-width: 83.33333%;\n}\n.md\\:dvs-min-w-full {\n    min-width: 100%;\n}\n.md\\:dvs--m-0 {\n    margin: 0;\n}\n.md\\:dvs--m-1 {\n    margin: -0.25rem;\n}\n.md\\:dvs--m-2 {\n    margin: -0.5rem;\n}\n.md\\:dvs--m-3 {\n    margin: -0.75rem;\n}\n.md\\:dvs--m-4 {\n    margin: -1rem;\n}\n.md\\:dvs--m-6 {\n    margin: -1.5rem;\n}\n.md\\:dvs--m-8 {\n    margin: -2rem;\n}\n.md\\:dvs--m-px {\n    margin: -1px;\n}\n.md\\:dvs--my-0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.md\\:dvs--mx-0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n.md\\:dvs--my-1 {\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem;\n}\n.md\\:dvs--mx-1 {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n}\n.md\\:dvs--my-2 {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n}\n.md\\:dvs--mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n}\n.md\\:dvs--my-3 {\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem;\n}\n.md\\:dvs--mx-3 {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n.md\\:dvs--my-4 {\n    margin-top: -1rem;\n    margin-bottom: -1rem;\n}\n.md\\:dvs--mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n}\n.md\\:dvs--my-6 {\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem;\n}\n.md\\:dvs--mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n}\n.md\\:dvs--my-8 {\n    margin-top: -2rem;\n    margin-bottom: -2rem;\n}\n.md\\:dvs--mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n}\n.md\\:dvs--my-px {\n    margin-top: -1px;\n    margin-bottom: -1px;\n}\n.md\\:dvs--mx-px {\n    margin-left: -1px;\n    margin-right: -1px;\n}\n.md\\:dvs--mt-0 {\n    margin-top: 0;\n}\n.md\\:dvs--mr-0 {\n    margin-right: 0;\n}\n.md\\:dvs--mb-0 {\n    margin-bottom: 0;\n}\n.md\\:dvs--ml-0 {\n    margin-left: 0;\n}\n.md\\:dvs--mt-1 {\n    margin-top: -0.25rem;\n}\n.md\\:dvs--mr-1 {\n    margin-right: -0.25rem;\n}\n.md\\:dvs--mb-1 {\n    margin-bottom: -0.25rem;\n}\n.md\\:dvs--ml-1 {\n    margin-left: -0.25rem;\n}\n.md\\:dvs--mt-2 {\n    margin-top: -0.5rem;\n}\n.md\\:dvs--mr-2 {\n    margin-right: -0.5rem;\n}\n.md\\:dvs--mb-2 {\n    margin-bottom: -0.5rem;\n}\n.md\\:dvs--ml-2 {\n    margin-left: -0.5rem;\n}\n.md\\:dvs--mt-3 {\n    margin-top: -0.75rem;\n}\n.md\\:dvs--mr-3 {\n    margin-right: -0.75rem;\n}\n.md\\:dvs--mb-3 {\n    margin-bottom: -0.75rem;\n}\n.md\\:dvs--ml-3 {\n    margin-left: -0.75rem;\n}\n.md\\:dvs--mt-4 {\n    margin-top: -1rem;\n}\n.md\\:dvs--mr-4 {\n    margin-right: -1rem;\n}\n.md\\:dvs--mb-4 {\n    margin-bottom: -1rem;\n}\n.md\\:dvs--ml-4 {\n    margin-left: -1rem;\n}\n.md\\:dvs--mt-6 {\n    margin-top: -1.5rem;\n}\n.md\\:dvs--mr-6 {\n    margin-right: -1.5rem;\n}\n.md\\:dvs--mb-6 {\n    margin-bottom: -1.5rem;\n}\n.md\\:dvs--ml-6 {\n    margin-left: -1.5rem;\n}\n.md\\:dvs--mt-8 {\n    margin-top: -2rem;\n}\n.md\\:dvs--mr-8 {\n    margin-right: -2rem;\n}\n.md\\:dvs--mb-8 {\n    margin-bottom: -2rem;\n}\n.md\\:dvs--ml-8 {\n    margin-left: -2rem;\n}\n.md\\:dvs--mt-px {\n    margin-top: -1px;\n}\n.md\\:dvs--mr-px {\n    margin-right: -1px;\n}\n.md\\:dvs--mb-px {\n    margin-bottom: -1px;\n}\n.md\\:dvs--ml-px {\n    margin-left: -1px;\n}\n.md\\:dvs-opacity-0 {\n    opacity: 0;\n}\n.md\\:dvs-opacity-25 {\n    opacity: .25;\n}\n.md\\:dvs-opacity-50 {\n    opacity: .5;\n}\n.md\\:dvs-opacity-75 {\n    opacity: .75;\n}\n.md\\:dvs-opacity-100 {\n    opacity: 1;\n}\n.md\\:dvs-overflow-auto {\n    overflow: auto;\n}\n.md\\:dvs-overflow-hidden {\n    overflow: hidden;\n}\n.md\\:dvs-overflow-visible {\n    overflow: visible;\n}\n.md\\:dvs-overflow-scroll {\n    overflow: scroll;\n}\n.md\\:dvs-overflow-x-scroll {\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.md\\:dvs-overflow-y-scroll {\n    overflow-y: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.md\\:dvs-scrolling-touch {\n    -webkit-overflow-scrolling: touch;\n}\n.md\\:dvs-scrolling-auto {\n    -webkit-overflow-scrolling: auto;\n}\n.md\\:dvs-p-0 {\n    padding: 0;\n}\n.md\\:dvs-p-1 {\n    padding: .25rem;\n}\n.md\\:dvs-p-2 {\n    padding: .5rem;\n}\n.md\\:dvs-p-3 {\n    padding: .75rem;\n}\n.md\\:dvs-p-4 {\n    padding: 1rem;\n}\n.md\\:dvs-p-6 {\n    padding: 1.5rem;\n}\n.md\\:dvs-p-8 {\n    padding: 2rem;\n}\n.md\\:dvs-p-16 {\n    padding: 4rem;\n}\n.md\\:dvs-p-px {\n    padding: 1px;\n}\n.md\\:dvs-py-0 {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n.md\\:dvs-px-0 {\n    padding-left: 0;\n    padding-right: 0;\n}\n.md\\:dvs-py-1 {\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n}\n.md\\:dvs-px-1 {\n    padding-left: .25rem;\n    padding-right: .25rem;\n}\n.md\\:dvs-py-2 {\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n}\n.md\\:dvs-px-2 {\n    padding-left: .5rem;\n    padding-right: .5rem;\n}\n.md\\:dvs-py-3 {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n}\n.md\\:dvs-px-3 {\n    padding-left: .75rem;\n    padding-right: .75rem;\n}\n.md\\:dvs-py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.md\\:dvs-px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.md\\:dvs-py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n}\n.md\\:dvs-px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.md\\:dvs-py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n.md\\:dvs-px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n.md\\:dvs-py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n.md\\:dvs-px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n}\n.md\\:dvs-py-px {\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n.md\\:dvs-px-px {\n    padding-left: 1px;\n    padding-right: 1px;\n}\n.md\\:dvs-pt-0 {\n    padding-top: 0;\n}\n.md\\:dvs-pr-0 {\n    padding-right: 0;\n}\n.md\\:dvs-pb-0 {\n    padding-bottom: 0;\n}\n.md\\:dvs-pl-0 {\n    padding-left: 0;\n}\n.md\\:dvs-pt-1 {\n    padding-top: .25rem;\n}\n.md\\:dvs-pr-1 {\n    padding-right: .25rem;\n}\n.md\\:dvs-pb-1 {\n    padding-bottom: .25rem;\n}\n.md\\:dvs-pl-1 {\n    padding-left: .25rem;\n}\n.md\\:dvs-pt-2 {\n    padding-top: .5rem;\n}\n.md\\:dvs-pr-2 {\n    padding-right: .5rem;\n}\n.md\\:dvs-pb-2 {\n    padding-bottom: .5rem;\n}\n.md\\:dvs-pl-2 {\n    padding-left: .5rem;\n}\n.md\\:dvs-pt-3 {\n    padding-top: .75rem;\n}\n.md\\:dvs-pr-3 {\n    padding-right: .75rem;\n}\n.md\\:dvs-pb-3 {\n    padding-bottom: .75rem;\n}\n.md\\:dvs-pl-3 {\n    padding-left: .75rem;\n}\n.md\\:dvs-pt-4 {\n    padding-top: 1rem;\n}\n.md\\:dvs-pr-4 {\n    padding-right: 1rem;\n}\n.md\\:dvs-pb-4 {\n    padding-bottom: 1rem;\n}\n.md\\:dvs-pl-4 {\n    padding-left: 1rem;\n}\n.md\\:dvs-pt-6 {\n    padding-top: 1.5rem;\n}\n.md\\:dvs-pr-6 {\n    padding-right: 1.5rem;\n}\n.md\\:dvs-pb-6 {\n    padding-bottom: 1.5rem;\n}\n.md\\:dvs-pl-6 {\n    padding-left: 1.5rem;\n}\n.md\\:dvs-pt-8 {\n    padding-top: 2rem;\n}\n.md\\:dvs-pr-8 {\n    padding-right: 2rem;\n}\n.md\\:dvs-pb-8 {\n    padding-bottom: 2rem;\n}\n.md\\:dvs-pl-8 {\n    padding-left: 2rem;\n}\n.md\\:dvs-pt-16 {\n    padding-top: 4rem;\n}\n.md\\:dvs-pr-16 {\n    padding-right: 4rem;\n}\n.md\\:dvs-pb-16 {\n    padding-bottom: 4rem;\n}\n.md\\:dvs-pl-16 {\n    padding-left: 4rem;\n}\n.md\\:dvs-pt-px {\n    padding-top: 1px;\n}\n.md\\:dvs-pr-px {\n    padding-right: 1px;\n}\n.md\\:dvs-pb-px {\n    padding-bottom: 1px;\n}\n.md\\:dvs-pl-px {\n    padding-left: 1px;\n}\n.md\\:dvs-pointer-events-none {\n    pointer-events: none;\n}\n.md\\:dvs-pointer-events-auto {\n    pointer-events: auto;\n}\n.md\\:dvs-static {\n    position: static;\n}\n.md\\:dvs-fixed {\n    position: fixed;\n}\n.md\\:dvs-absolute {\n    position: absolute;\n}\n.md\\:dvs-relative {\n    position: relative;\n}\n.md\\:dvs-pin-none {\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n}\n.md\\:dvs-pin {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n.md\\:dvs-pin-y {\n    top: 0;\n    bottom: 0;\n}\n.md\\:dvs-pin-x {\n    right: 0;\n    left: 0;\n}\n.md\\:dvs-pin-t {\n    top: 0;\n}\n.md\\:dvs-pin-r {\n    right: 0;\n}\n.md\\:dvs-pin-b {\n    bottom: 0;\n}\n.md\\:dvs-pin-l {\n    left: 0;\n}\n.md\\:dvs-resize-none {\n    resize: none;\n}\n.md\\:dvs-resize-y {\n    resize: vertical;\n}\n.md\\:dvs-resize-x {\n    resize: horizontal;\n}\n.md\\:dvs-resize {\n    resize: both;\n}\n.md\\:dvs-shadow {\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n}\n.md\\:dvs-shadow-lg {\n    -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n            box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n}\n.md\\:dvs-shadow-none {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.md\\:dvs-text-left {\n    text-align: left;\n}\n.md\\:dvs-text-center {\n    text-align: center;\n}\n.md\\:dvs-text-right {\n    text-align: right;\n}\n.md\\:dvs-text-justify {\n    text-align: justify;\n}\n.md\\:dvs-text-transparent {\n    color: transparent;\n}\n.md\\:dvs-text-black {\n    color: #22292f;\n}\n.md\\:dvs-text-grey-darkest {\n    color: #3d4852;\n}\n.md\\:dvs-text-grey-darker {\n    color: #606f7b;\n}\n.md\\:dvs-text-grey-dark {\n    color: #8795a1;\n}\n.md\\:dvs-text-grey {\n    color: #b8c2cc;\n}\n.md\\:dvs-text-grey-light {\n    color: #dae1e7;\n}\n.md\\:dvs-text-grey-lighter {\n    color: #f1f5f8;\n}\n.md\\:dvs-text-grey-lightest {\n    color: #f8fafc;\n}\n.md\\:dvs-text-white {\n    color: #fff;\n}\n.md\\:dvs-text-red-dark {\n    color: #cc1f1a;\n}\n.md\\:dvs-text-red {\n    color: #e3342f;\n}\n.md\\:dvs-text-green-dark {\n    color: #1f9d55;\n}\n.md\\:dvs-text-green {\n    color: #38c172;\n}\n.md\\:dvs-text-blue-dark {\n    color: #2b6ed8;\n}\n.md\\:dvs-text-blue {\n    color: #3490dc;\n}\n.md\\:dvs-text-pink {\n    color: #f66d9b;\n}\n.md\\:hover\\:dvs-text-transparent:hover {\n    color: transparent;\n}\n.md\\:hover\\:dvs-text-black:hover {\n    color: #22292f;\n}\n.md\\:hover\\:dvs-text-grey-darkest:hover {\n    color: #3d4852;\n}\n.md\\:hover\\:dvs-text-grey-darker:hover {\n    color: #606f7b;\n}\n.md\\:hover\\:dvs-text-grey-dark:hover {\n    color: #8795a1;\n}\n.md\\:hover\\:dvs-text-grey:hover {\n    color: #b8c2cc;\n}\n.md\\:hover\\:dvs-text-grey-light:hover {\n    color: #dae1e7;\n}\n.md\\:hover\\:dvs-text-grey-lighter:hover {\n    color: #f1f5f8;\n}\n.md\\:hover\\:dvs-text-grey-lightest:hover {\n    color: #f8fafc;\n}\n.md\\:hover\\:dvs-text-white:hover {\n    color: #fff;\n}\n.md\\:hover\\:dvs-text-red-dark:hover {\n    color: #cc1f1a;\n}\n.md\\:hover\\:dvs-text-red:hover {\n    color: #e3342f;\n}\n.md\\:hover\\:dvs-text-green-dark:hover {\n    color: #1f9d55;\n}\n.md\\:hover\\:dvs-text-green:hover {\n    color: #38c172;\n}\n.md\\:hover\\:dvs-text-blue-dark:hover {\n    color: #2b6ed8;\n}\n.md\\:hover\\:dvs-text-blue:hover {\n    color: #3490dc;\n}\n.md\\:hover\\:dvs-text-pink:hover {\n    color: #f66d9b;\n}\n.md\\:dvs-text-xs {\n    font-size: .75rem;\n}\n.md\\:dvs-text-sm {\n    font-size: .875rem;\n}\n.md\\:dvs-text-base {\n    font-size: 1rem;\n}\n.md\\:dvs-text-lg {\n    font-size: 1.125rem;\n}\n.md\\:dvs-text-xl {\n    font-size: 1.25rem;\n}\n.md\\:dvs-text-2xl {\n    font-size: 1.5rem;\n}\n.md\\:dvs-text-3xl {\n    font-size: 1.875rem;\n}\n.md\\:dvs-text-4xl {\n    font-size: 2.25rem;\n}\n.md\\:dvs-text-5xl {\n    font-size: 3rem;\n}\n.md\\:dvs-italic {\n    font-style: italic;\n}\n.md\\:dvs-roman {\n    font-style: normal;\n}\n.md\\:dvs-uppercase {\n    text-transform: uppercase;\n}\n.md\\:dvs-lowercase {\n    text-transform: lowercase;\n}\n.md\\:dvs-capitalize {\n    text-transform: capitalize;\n}\n.md\\:dvs-normal-case {\n    text-transform: none;\n}\n.md\\:dvs-underline {\n    text-decoration: underline;\n}\n.md\\:dvs-line-through {\n    text-decoration: line-through;\n}\n.md\\:dvs-no-underline {\n    text-decoration: none;\n}\n.md\\:dvs-antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.md\\:dvs-subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n}\n.md\\:hover\\:dvs-italic:hover {\n    font-style: italic;\n}\n.md\\:hover\\:dvs-roman:hover {\n    font-style: normal;\n}\n.md\\:hover\\:dvs-uppercase:hover {\n    text-transform: uppercase;\n}\n.md\\:hover\\:dvs-lowercase:hover {\n    text-transform: lowercase;\n}\n.md\\:hover\\:dvs-capitalize:hover {\n    text-transform: capitalize;\n}\n.md\\:hover\\:dvs-normal-case:hover {\n    text-transform: none;\n}\n.md\\:hover\\:dvs-underline:hover {\n    text-decoration: underline;\n}\n.md\\:hover\\:dvs-line-through:hover {\n    text-decoration: line-through;\n}\n.md\\:hover\\:dvs-no-underline:hover {\n    text-decoration: none;\n}\n.md\\:hover\\:dvs-antialiased:hover {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.md\\:hover\\:dvs-subpixel-antialiased:hover {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n}\n.md\\:dvs-tracking-tight {\n    letter-spacing: -0.05em;\n}\n.md\\:dvs-tracking-normal {\n    letter-spacing: 0;\n}\n.md\\:dvs-tracking-wide {\n    letter-spacing: .05em;\n}\n.md\\:dvs-tracking-superwide {\n    letter-spacing: .1em;\n}\n.md\\:dvs-visible {\n    visibility: visible;\n}\n.md\\:dvs-invisible {\n    visibility: hidden;\n}\n.md\\:dvs-whitespace-normal {\n    white-space: normal;\n}\n.md\\:dvs-whitespace-no-wrap {\n    white-space: nowrap;\n}\n.md\\:dvs-whitespace-pre {\n    white-space: pre;\n}\n.md\\:dvs-whitespace-pre-line {\n    white-space: pre-line;\n}\n.md\\:dvs-whitespace-pre-wrap {\n    white-space: pre-wrap;\n}\n.md\\:dvs-break-words {\n    word-wrap: break-word;\n}\n.md\\:dvs-break-normal {\n    word-wrap: normal;\n}\n.md\\:dvs-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.md\\:dvs-w-0 {\n    width: 0;\n}\n.md\\:dvs-w-1 {\n    width: .25rem;\n}\n.md\\:dvs-w-2 {\n    width: .5rem;\n}\n.md\\:dvs-w-3 {\n    width: .75rem;\n}\n.md\\:dvs-w-4 {\n    width: 1rem;\n}\n.md\\:dvs-w-6 {\n    width: 1.5rem;\n}\n.md\\:dvs-w-8 {\n    width: 2rem;\n}\n.md\\:dvs-w-10 {\n    width: 2.5rem;\n}\n.md\\:dvs-w-12 {\n    width: 3rem;\n}\n.md\\:dvs-w-16 {\n    width: 4rem;\n}\n.md\\:dvs-w-24 {\n    width: 6rem;\n}\n.md\\:dvs-w-32 {\n    width: 8rem;\n}\n.md\\:dvs-w-48 {\n    width: 12rem;\n}\n.md\\:dvs-w-64 {\n    width: 16rem;\n}\n.md\\:dvs-w-auto {\n    width: auto;\n}\n.md\\:dvs-w-px {\n    width: 1px;\n}\n.md\\:dvs-w-1\\/2 {\n    width: 50%;\n}\n.md\\:dvs-w-1\\/3 {\n    width: 33.33333%;\n}\n.md\\:dvs-w-2\\/3 {\n    width: 66.66667%;\n}\n.md\\:dvs-w-1\\/4 {\n    width: 25%;\n}\n.md\\:dvs-w-3\\/4 {\n    width: 75%;\n}\n.md\\:dvs-w-1\\/5 {\n    width: 20%;\n}\n.md\\:dvs-w-2\\/5 {\n    width: 40%;\n}\n.md\\:dvs-w-3\\/5 {\n    width: 60%;\n}\n.md\\:dvs-w-4\\/5 {\n    width: 80%;\n}\n.md\\:dvs-w-1\\/6 {\n    width: 16.66667%;\n}\n.md\\:dvs-w-5\\/6 {\n    width: 83.33333%;\n}\n.md\\:dvs-w-full {\n    width: 100%;\n}\n.md\\:dvs-w-screen {\n    width: 100vw;\n}\n.md\\:dvs-z-0 {\n    z-index: 0;\n}\n.md\\:dvs-z-10 {\n    z-index: 10;\n}\n.md\\:dvs-z-20 {\n    z-index: 20;\n}\n.md\\:dvs-z-30 {\n    z-index: 30;\n}\n.md\\:dvs-z-40 {\n    z-index: 40;\n}\n.md\\:dvs-z-50 {\n    z-index: 50;\n}\n.md\\:dvs-z-auto {\n    z-index: auto;\n}\n}\n@media (min-width: 992px) {\n.lg\\:dvs-list-reset {\n    list-style: none;\n    padding: 0;\n}\n.lg\\:dvs-appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n}\n.lg\\:dvs-bg-transparent {\n    background-color: transparent;\n}\n.lg\\:dvs-bg-black {\n    background-color: #22292f;\n}\n.lg\\:dvs-bg-grey-darkest {\n    background-color: #3d4852;\n}\n.lg\\:dvs-bg-grey-darker {\n    background-color: #606f7b;\n}\n.lg\\:dvs-bg-grey-dark {\n    background-color: #8795a1;\n}\n.lg\\:dvs-bg-grey {\n    background-color: #b8c2cc;\n}\n.lg\\:dvs-bg-grey-light {\n    background-color: #dae1e7;\n}\n.lg\\:dvs-bg-grey-lighter {\n    background-color: #f1f5f8;\n}\n.lg\\:dvs-bg-grey-lightest {\n    background-color: #f8fafc;\n}\n.lg\\:dvs-bg-white {\n    background-color: #fff;\n}\n.lg\\:dvs-bg-red-dark {\n    background-color: #cc1f1a;\n}\n.lg\\:dvs-bg-red {\n    background-color: #e3342f;\n}\n.lg\\:dvs-bg-green-dark {\n    background-color: #1f9d55;\n}\n.lg\\:dvs-bg-green {\n    background-color: #38c172;\n}\n.lg\\:dvs-bg-blue-dark {\n    background-color: #2b6ed8;\n}\n.lg\\:dvs-bg-blue {\n    background-color: #3490dc;\n}\n.lg\\:dvs-bg-pink {\n    background-color: #f66d9b;\n}\n.lg\\:hover\\:dvs-bg-transparent:hover {\n    background-color: transparent;\n}\n.lg\\:hover\\:dvs-bg-black:hover {\n    background-color: #22292f;\n}\n.lg\\:hover\\:dvs-bg-grey-darkest:hover {\n    background-color: #3d4852;\n}\n.lg\\:hover\\:dvs-bg-grey-darker:hover {\n    background-color: #606f7b;\n}\n.lg\\:hover\\:dvs-bg-grey-dark:hover {\n    background-color: #8795a1;\n}\n.lg\\:hover\\:dvs-bg-grey:hover {\n    background-color: #b8c2cc;\n}\n.lg\\:hover\\:dvs-bg-grey-light:hover {\n    background-color: #dae1e7;\n}\n.lg\\:hover\\:dvs-bg-grey-lighter:hover {\n    background-color: #f1f5f8;\n}\n.lg\\:hover\\:dvs-bg-grey-lightest:hover {\n    background-color: #f8fafc;\n}\n.lg\\:hover\\:dvs-bg-white:hover {\n    background-color: #fff;\n}\n.lg\\:hover\\:dvs-bg-red-dark:hover {\n    background-color: #cc1f1a;\n}\n.lg\\:hover\\:dvs-bg-red:hover {\n    background-color: #e3342f;\n}\n.lg\\:hover\\:dvs-bg-green-dark:hover {\n    background-color: #1f9d55;\n}\n.lg\\:hover\\:dvs-bg-green:hover {\n    background-color: #38c172;\n}\n.lg\\:hover\\:dvs-bg-blue-dark:hover {\n    background-color: #2b6ed8;\n}\n.lg\\:hover\\:dvs-bg-blue:hover {\n    background-color: #3490dc;\n}\n.lg\\:hover\\:dvs-bg-pink:hover {\n    background-color: #f66d9b;\n}\n.lg\\:dvs-bg-cover {\n    background-size: cover;\n}\n.lg\\:dvs-bg-contain {\n    background-size: contain;\n}\n.lg\\:dvs-border-transparent {\n    border-color: transparent;\n}\n.lg\\:dvs-border-black {\n    border-color: #22292f;\n}\n.lg\\:dvs-border-grey-darkest {\n    border-color: #3d4852;\n}\n.lg\\:dvs-border-grey-darker {\n    border-color: #606f7b;\n}\n.lg\\:dvs-border-grey-dark {\n    border-color: #8795a1;\n}\n.lg\\:dvs-border-grey {\n    border-color: #b8c2cc;\n}\n.lg\\:dvs-border-grey-light {\n    border-color: #dae1e7;\n}\n.lg\\:dvs-border-grey-lighter {\n    border-color: #f1f5f8;\n}\n.lg\\:dvs-border-grey-lightest {\n    border-color: #f8fafc;\n}\n.lg\\:dvs-border-white {\n    border-color: #fff;\n}\n.lg\\:dvs-border-red-dark {\n    border-color: #cc1f1a;\n}\n.lg\\:dvs-border-red {\n    border-color: #e3342f;\n}\n.lg\\:dvs-border-green-dark {\n    border-color: #1f9d55;\n}\n.lg\\:dvs-border-green {\n    border-color: #38c172;\n}\n.lg\\:dvs-border-blue-dark {\n    border-color: #2b6ed8;\n}\n.lg\\:dvs-border-blue {\n    border-color: #3490dc;\n}\n.lg\\:dvs-border-pink {\n    border-color: #f66d9b;\n}\n.lg\\:hover\\:dvs-border-transparent:hover {\n    border-color: transparent;\n}\n.lg\\:hover\\:dvs-border-black:hover {\n    border-color: #22292f;\n}\n.lg\\:hover\\:dvs-border-grey-darkest:hover {\n    border-color: #3d4852;\n}\n.lg\\:hover\\:dvs-border-grey-darker:hover {\n    border-color: #606f7b;\n}\n.lg\\:hover\\:dvs-border-grey-dark:hover {\n    border-color: #8795a1;\n}\n.lg\\:hover\\:dvs-border-grey:hover {\n    border-color: #b8c2cc;\n}\n.lg\\:hover\\:dvs-border-grey-light:hover {\n    border-color: #dae1e7;\n}\n.lg\\:hover\\:dvs-border-grey-lighter:hover {\n    border-color: #f1f5f8;\n}\n.lg\\:hover\\:dvs-border-grey-lightest:hover {\n    border-color: #f8fafc;\n}\n.lg\\:hover\\:dvs-border-white:hover {\n    border-color: #fff;\n}\n.lg\\:hover\\:dvs-border-red-dark:hover {\n    border-color: #cc1f1a;\n}\n.lg\\:hover\\:dvs-border-red:hover {\n    border-color: #e3342f;\n}\n.lg\\:hover\\:dvs-border-green-dark:hover {\n    border-color: #1f9d55;\n}\n.lg\\:hover\\:dvs-border-green:hover {\n    border-color: #38c172;\n}\n.lg\\:hover\\:dvs-border-blue-dark:hover {\n    border-color: #2b6ed8;\n}\n.lg\\:hover\\:dvs-border-blue:hover {\n    border-color: #3490dc;\n}\n.lg\\:hover\\:dvs-border-pink:hover {\n    border-color: #f66d9b;\n}\n.lg\\:dvs-rounded-none {\n    border-radius: 0;\n}\n.lg\\:dvs-rounded-sm {\n    border-radius: .125rem;\n}\n.lg\\:dvs-rounded {\n    border-radius: .25rem;\n}\n.lg\\:dvs-rounded-lg {\n    border-radius: .5rem;\n}\n.lg\\:dvs-rounded-full {\n    border-radius: 9999px;\n}\n.lg\\:dvs-rounded-t-none {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.lg\\:dvs-rounded-r-none {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.lg\\:dvs-rounded-b-none {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.lg\\:dvs-rounded-l-none {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.lg\\:dvs-rounded-t-sm {\n    border-top-left-radius: .125rem;\n    border-top-right-radius: .125rem;\n}\n.lg\\:dvs-rounded-r-sm {\n    border-top-right-radius: .125rem;\n    border-bottom-right-radius: .125rem;\n}\n.lg\\:dvs-rounded-b-sm {\n    border-bottom-right-radius: .125rem;\n    border-bottom-left-radius: .125rem;\n}\n.lg\\:dvs-rounded-l-sm {\n    border-top-left-radius: .125rem;\n    border-bottom-left-radius: .125rem;\n}\n.lg\\:dvs-rounded-t {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n}\n.lg\\:dvs-rounded-r {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n}\n.lg\\:dvs-rounded-b {\n    border-bottom-right-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n}\n.lg\\:dvs-rounded-l {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n}\n.lg\\:dvs-rounded-t-lg {\n    border-top-left-radius: .5rem;\n    border-top-right-radius: .5rem;\n}\n.lg\\:dvs-rounded-r-lg {\n    border-top-right-radius: .5rem;\n    border-bottom-right-radius: .5rem;\n}\n.lg\\:dvs-rounded-b-lg {\n    border-bottom-right-radius: .5rem;\n    border-bottom-left-radius: .5rem;\n}\n.lg\\:dvs-rounded-l-lg {\n    border-top-left-radius: .5rem;\n    border-bottom-left-radius: .5rem;\n}\n.lg\\:dvs-rounded-t-full {\n    border-top-left-radius: 9999px;\n    border-top-right-radius: 9999px;\n}\n.lg\\:dvs-rounded-r-full {\n    border-top-right-radius: 9999px;\n    border-bottom-right-radius: 9999px;\n}\n.lg\\:dvs-rounded-b-full {\n    border-bottom-right-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n}\n.lg\\:dvs-rounded-l-full {\n    border-top-left-radius: 9999px;\n    border-bottom-left-radius: 9999px;\n}\n.lg\\:dvs-rounded-tl-none {\n    border-top-left-radius: 0;\n}\n.lg\\:dvs-rounded-tr-none {\n    border-top-right-radius: 0;\n}\n.lg\\:dvs-rounded-br-none {\n    border-bottom-right-radius: 0;\n}\n.lg\\:dvs-rounded-bl-none {\n    border-bottom-left-radius: 0;\n}\n.lg\\:dvs-rounded-tl-sm {\n    border-top-left-radius: .125rem;\n}\n.lg\\:dvs-rounded-tr-sm {\n    border-top-right-radius: .125rem;\n}\n.lg\\:dvs-rounded-br-sm {\n    border-bottom-right-radius: .125rem;\n}\n.lg\\:dvs-rounded-bl-sm {\n    border-bottom-left-radius: .125rem;\n}\n.lg\\:dvs-rounded-tl {\n    border-top-left-radius: .25rem;\n}\n.lg\\:dvs-rounded-tr {\n    border-top-right-radius: .25rem;\n}\n.lg\\:dvs-rounded-br {\n    border-bottom-right-radius: .25rem;\n}\n.lg\\:dvs-rounded-bl {\n    border-bottom-left-radius: .25rem;\n}\n.lg\\:dvs-rounded-tl-lg {\n    border-top-left-radius: .5rem;\n}\n.lg\\:dvs-rounded-tr-lg {\n    border-top-right-radius: .5rem;\n}\n.lg\\:dvs-rounded-br-lg {\n    border-bottom-right-radius: .5rem;\n}\n.lg\\:dvs-rounded-bl-lg {\n    border-bottom-left-radius: .5rem;\n}\n.lg\\:dvs-rounded-tl-full {\n    border-top-left-radius: 9999px;\n}\n.lg\\:dvs-rounded-tr-full {\n    border-top-right-radius: 9999px;\n}\n.lg\\:dvs-rounded-br-full {\n    border-bottom-right-radius: 9999px;\n}\n.lg\\:dvs-rounded-bl-full {\n    border-bottom-left-radius: 9999px;\n}\n.lg\\:dvs-border-0 {\n    border-width: 0;\n}\n.lg\\:dvs-border-2 {\n    border-width: 2px;\n}\n.lg\\:dvs-border-4 {\n    border-width: 4px;\n}\n.lg\\:dvs-border-8 {\n    border-width: 8px;\n}\n.lg\\:dvs-border {\n    border-width: 1px;\n}\n.lg\\:dvs-border-t-0 {\n    border-top-width: 0;\n}\n.lg\\:dvs-border-r-0 {\n    border-right-width: 0;\n}\n.lg\\:dvs-border-b-0 {\n    border-bottom-width: 0;\n}\n.lg\\:dvs-border-l-0 {\n    border-left-width: 0;\n}\n.lg\\:dvs-border-t-2 {\n    border-top-width: 2px;\n}\n.lg\\:dvs-border-r-2 {\n    border-right-width: 2px;\n}\n.lg\\:dvs-border-b-2 {\n    border-bottom-width: 2px;\n}\n.lg\\:dvs-border-l-2 {\n    border-left-width: 2px;\n}\n.lg\\:dvs-border-t-4 {\n    border-top-width: 4px;\n}\n.lg\\:dvs-border-r-4 {\n    border-right-width: 4px;\n}\n.lg\\:dvs-border-b-4 {\n    border-bottom-width: 4px;\n}\n.lg\\:dvs-border-l-4 {\n    border-left-width: 4px;\n}\n.lg\\:dvs-border-t-8 {\n    border-top-width: 8px;\n}\n.lg\\:dvs-border-r-8 {\n    border-right-width: 8px;\n}\n.lg\\:dvs-border-b-8 {\n    border-bottom-width: 8px;\n}\n.lg\\:dvs-border-l-8 {\n    border-left-width: 8px;\n}\n.lg\\:dvs-border-t {\n    border-top-width: 1px;\n}\n.lg\\:dvs-border-r {\n    border-right-width: 1px;\n}\n.lg\\:dvs-border-b {\n    border-bottom-width: 1px;\n}\n.lg\\:dvs-border-l {\n    border-left-width: 1px;\n}\n.lg\\:dvs-cursor-auto {\n    cursor: auto;\n}\n.lg\\:dvs-cursor-default {\n    cursor: default;\n}\n.lg\\:dvs-cursor-pointer {\n    cursor: pointer;\n}\n.lg\\:dvs-cursor-not-allowed {\n    cursor: not-allowed;\n}\n.lg\\:dvs-block {\n    display: block;\n}\n.lg\\:dvs-inline-block {\n    display: inline-block;\n}\n.lg\\:dvs-inline {\n    display: inline;\n}\n.lg\\:dvs-table {\n    display: table;\n}\n.lg\\:dvs-table-row {\n    display: table-row;\n}\n.lg\\:dvs-table-cell {\n    display: table-cell;\n}\n.lg\\:dvs-hidden {\n    display: none;\n}\n.lg\\:dvs-flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.lg\\:dvs-inline-flex {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.lg\\:dvs-flex-row {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n.lg\\:dvs-flex-row-reverse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n.lg\\:dvs-flex-col {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.lg\\:dvs-flex-col-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n.lg\\:dvs-flex-wrap {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.lg\\:dvs-flex-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n}\n.lg\\:dvs-flex-no-wrap {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n}\n.lg\\:dvs-items-start {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.lg\\:dvs-items-end {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n}\n.lg\\:dvs-items-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.lg\\:dvs-items-baseline {\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n}\n.lg\\:dvs-items-stretch {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n.lg\\:dvs-self-auto {\n    -ms-flex-item-align: auto;\n        align-self: auto;\n}\n.lg\\:dvs-self-start {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n.lg\\:dvs-self-end {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n}\n.lg\\:dvs-self-center {\n    -ms-flex-item-align: center;\n        align-self: center;\n}\n.lg\\:dvs-self-stretch {\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n}\n.lg\\:dvs-justify-start {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n.lg\\:dvs-justify-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.lg\\:dvs-justify-center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.lg\\:dvs-justify-between {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.lg\\:dvs-justify-around {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.lg\\:dvs-content-center {\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n.lg\\:dvs-content-start {\n    -ms-flex-line-pack: start;\n        align-content: flex-start;\n}\n.lg\\:dvs-content-end {\n    -ms-flex-line-pack: end;\n        align-content: flex-end;\n}\n.lg\\:dvs-content-between {\n    -ms-flex-line-pack: justify;\n        align-content: space-between;\n}\n.lg\\:dvs-content-around {\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n}\n.lg\\:dvs-flex-1 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.lg\\:dvs-flex-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n}\n.lg\\:dvs-flex-initial {\n    -webkit-box-flex: initial;\n        -ms-flex: initial;\n            flex: initial;\n}\n.lg\\:dvs-flex-none {\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n}\n.lg\\:dvs-flex-grow {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.lg\\:dvs-flex-shrink {\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n}\n.lg\\:dvs-flex-no-grow {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n}\n.lg\\:dvs-flex-no-shrink {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n.lg\\:dvs-float-right {\n    float: right;\n}\n.lg\\:dvs-float-left {\n    float: left;\n}\n.lg\\:dvs-float-none {\n    float: none;\n}\n.lg\\:dvs-clearfix:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.lg\\:dvs-font-sans {\n    font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n.lg\\:dvs-font-serif {\n    font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;\n}\n.lg\\:dvs-font-mono {\n    font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;\n}\n.lg\\:dvs-font-hairline {\n    font-weight: 100;\n}\n.lg\\:dvs-font-thin {\n    font-weight: 200;\n}\n.lg\\:dvs-font-light {\n    font-weight: 300;\n}\n.lg\\:dvs-font-normal {\n    font-weight: 400;\n}\n.lg\\:dvs-font-medium {\n    font-weight: 500;\n}\n.lg\\:dvs-font-semibold {\n    font-weight: 600;\n}\n.lg\\:dvs-font-bold {\n    font-weight: 700;\n}\n.lg\\:dvs-font-extrabold {\n    font-weight: 800;\n}\n.lg\\:dvs-font-black {\n    font-weight: 900;\n}\n.lg\\:hover\\:dvs-font-hairline:hover {\n    font-weight: 100;\n}\n.lg\\:hover\\:dvs-font-thin:hover {\n    font-weight: 200;\n}\n.lg\\:hover\\:dvs-font-light:hover {\n    font-weight: 300;\n}\n.lg\\:hover\\:dvs-font-normal:hover {\n    font-weight: 400;\n}\n.lg\\:hover\\:dvs-font-medium:hover {\n    font-weight: 500;\n}\n.lg\\:hover\\:dvs-font-semibold:hover {\n    font-weight: 600;\n}\n.lg\\:hover\\:dvs-font-bold:hover {\n    font-weight: 700;\n}\n.lg\\:hover\\:dvs-font-extrabold:hover {\n    font-weight: 800;\n}\n.lg\\:hover\\:dvs-font-black:hover {\n    font-weight: 900;\n}\n.lg\\:dvs-h-0 {\n    height: 0;\n}\n.lg\\:dvs-h-1 {\n    height: .25rem;\n}\n.lg\\:dvs-h-2 {\n    height: .5rem;\n}\n.lg\\:dvs-h-3 {\n    height: .75rem;\n}\n.lg\\:dvs-h-4 {\n    height: 1rem;\n}\n.lg\\:dvs-h-6 {\n    height: 1.5rem;\n}\n.lg\\:dvs-h-8 {\n    height: 2rem;\n}\n.lg\\:dvs-h-10 {\n    height: 2.5rem;\n}\n.lg\\:dvs-h-12 {\n    height: 3rem;\n}\n.lg\\:dvs-h-16 {\n    height: 4rem;\n}\n.lg\\:dvs-h-24 {\n    height: 6rem;\n}\n.lg\\:dvs-h-32 {\n    height: 8rem;\n}\n.lg\\:dvs-h-48 {\n    height: 12rem;\n}\n.lg\\:dvs-h-64 {\n    height: 16rem;\n}\n.lg\\:dvs-h-auto {\n    height: auto;\n}\n.lg\\:dvs-h-px {\n    height: 1px;\n}\n.lg\\:dvs-h-full {\n    height: 100%;\n}\n.lg\\:dvs-h-screen {\n    height: 100vh;\n}\n.lg\\:dvs-leading-none {\n    line-height: 1;\n}\n.lg\\:dvs-leading-tight {\n    line-height: 1.25;\n}\n.lg\\:dvs-leading-normal {\n    line-height: 1.5;\n}\n.lg\\:dvs-leading-loose {\n    line-height: 2;\n}\n.lg\\:dvs-m-0 {\n    margin: 0;\n}\n.lg\\:dvs-m-1 {\n    margin: .25rem;\n}\n.lg\\:dvs-m-2 {\n    margin: .5rem;\n}\n.lg\\:dvs-m-3 {\n    margin: .75rem;\n}\n.lg\\:dvs-m-4 {\n    margin: 1rem;\n}\n.lg\\:dvs-m-6 {\n    margin: 1.5rem;\n}\n.lg\\:dvs-m-8 {\n    margin: 2rem;\n}\n.lg\\:dvs-m-9 {\n    margin: 2.5rem;\n}\n.lg\\:dvs-m-10 {\n    margin: 3rem;\n}\n.lg\\:dvs-m-11 {\n    margin: 4rem;\n}\n.lg\\:dvs-m-12 {\n    margin: 6rem;\n}\n.lg\\:dvs-m-auto {\n    margin: auto;\n}\n.lg\\:dvs-m-px {\n    margin: 1px;\n}\n.lg\\:dvs-my-0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.lg\\:dvs-mx-0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n.lg\\:dvs-my-1 {\n    margin-top: .25rem;\n    margin-bottom: .25rem;\n}\n.lg\\:dvs-mx-1 {\n    margin-left: .25rem;\n    margin-right: .25rem;\n}\n.lg\\:dvs-my-2 {\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n}\n.lg\\:dvs-mx-2 {\n    margin-left: .5rem;\n    margin-right: .5rem;\n}\n.lg\\:dvs-my-3 {\n    margin-top: .75rem;\n    margin-bottom: .75rem;\n}\n.lg\\:dvs-mx-3 {\n    margin-left: .75rem;\n    margin-right: .75rem;\n}\n.lg\\:dvs-my-4 {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.lg\\:dvs-mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n.lg\\:dvs-my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n}\n.lg\\:dvs-mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n}\n.lg\\:dvs-my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n.lg\\:dvs-mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n.lg\\:dvs-my-9 {\n    margin-top: 2.5rem;\n    margin-bottom: 2.5rem;\n}\n.lg\\:dvs-mx-9 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n}\n.lg\\:dvs-my-10 {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n.lg\\:dvs-mx-10 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n}\n.lg\\:dvs-my-11 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n}\n.lg\\:dvs-mx-11 {\n    margin-left: 4rem;\n    margin-right: 4rem;\n}\n.lg\\:dvs-my-12 {\n    margin-top: 6rem;\n    margin-bottom: 6rem;\n}\n.lg\\:dvs-mx-12 {\n    margin-left: 6rem;\n    margin-right: 6rem;\n}\n.lg\\:dvs-my-auto {\n    margin-top: auto;\n    margin-bottom: auto;\n}\n.lg\\:dvs-mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n.lg\\:dvs-my-px {\n    margin-top: 1px;\n    margin-bottom: 1px;\n}\n.lg\\:dvs-mx-px {\n    margin-left: 1px;\n    margin-right: 1px;\n}\n.lg\\:dvs-mt-0 {\n    margin-top: 0;\n}\n.lg\\:dvs-mr-0 {\n    margin-right: 0;\n}\n.lg\\:dvs-mb-0 {\n    margin-bottom: 0;\n}\n.lg\\:dvs-ml-0 {\n    margin-left: 0;\n}\n.lg\\:dvs-mt-1 {\n    margin-top: .25rem;\n}\n.lg\\:dvs-mr-1 {\n    margin-right: .25rem;\n}\n.lg\\:dvs-mb-1 {\n    margin-bottom: .25rem;\n}\n.lg\\:dvs-ml-1 {\n    margin-left: .25rem;\n}\n.lg\\:dvs-mt-2 {\n    margin-top: .5rem;\n}\n.lg\\:dvs-mr-2 {\n    margin-right: .5rem;\n}\n.lg\\:dvs-mb-2 {\n    margin-bottom: .5rem;\n}\n.lg\\:dvs-ml-2 {\n    margin-left: .5rem;\n}\n.lg\\:dvs-mt-3 {\n    margin-top: .75rem;\n}\n.lg\\:dvs-mr-3 {\n    margin-right: .75rem;\n}\n.lg\\:dvs-mb-3 {\n    margin-bottom: .75rem;\n}\n.lg\\:dvs-ml-3 {\n    margin-left: .75rem;\n}\n.lg\\:dvs-mt-4 {\n    margin-top: 1rem;\n}\n.lg\\:dvs-mr-4 {\n    margin-right: 1rem;\n}\n.lg\\:dvs-mb-4 {\n    margin-bottom: 1rem;\n}\n.lg\\:dvs-ml-4 {\n    margin-left: 1rem;\n}\n.lg\\:dvs-mt-6 {\n    margin-top: 1.5rem;\n}\n.lg\\:dvs-mr-6 {\n    margin-right: 1.5rem;\n}\n.lg\\:dvs-mb-6 {\n    margin-bottom: 1.5rem;\n}\n.lg\\:dvs-ml-6 {\n    margin-left: 1.5rem;\n}\n.lg\\:dvs-mt-8 {\n    margin-top: 2rem;\n}\n.lg\\:dvs-mr-8 {\n    margin-right: 2rem;\n}\n.lg\\:dvs-mb-8 {\n    margin-bottom: 2rem;\n}\n.lg\\:dvs-ml-8 {\n    margin-left: 2rem;\n}\n.lg\\:dvs-mt-9 {\n    margin-top: 2.5rem;\n}\n.lg\\:dvs-mr-9 {\n    margin-right: 2.5rem;\n}\n.lg\\:dvs-mb-9 {\n    margin-bottom: 2.5rem;\n}\n.lg\\:dvs-ml-9 {\n    margin-left: 2.5rem;\n}\n.lg\\:dvs-mt-10 {\n    margin-top: 3rem;\n}\n.lg\\:dvs-mr-10 {\n    margin-right: 3rem;\n}\n.lg\\:dvs-mb-10 {\n    margin-bottom: 3rem;\n}\n.lg\\:dvs-ml-10 {\n    margin-left: 3rem;\n}\n.lg\\:dvs-mt-11 {\n    margin-top: 4rem;\n}\n.lg\\:dvs-mr-11 {\n    margin-right: 4rem;\n}\n.lg\\:dvs-mb-11 {\n    margin-bottom: 4rem;\n}\n.lg\\:dvs-ml-11 {\n    margin-left: 4rem;\n}\n.lg\\:dvs-mt-12 {\n    margin-top: 6rem;\n}\n.lg\\:dvs-mr-12 {\n    margin-right: 6rem;\n}\n.lg\\:dvs-mb-12 {\n    margin-bottom: 6rem;\n}\n.lg\\:dvs-ml-12 {\n    margin-left: 6rem;\n}\n.lg\\:dvs-mt-auto {\n    margin-top: auto;\n}\n.lg\\:dvs-mr-auto {\n    margin-right: auto;\n}\n.lg\\:dvs-mb-auto {\n    margin-bottom: auto;\n}\n.lg\\:dvs-ml-auto {\n    margin-left: auto;\n}\n.lg\\:dvs-mt-px {\n    margin-top: 1px;\n}\n.lg\\:dvs-mr-px {\n    margin-right: 1px;\n}\n.lg\\:dvs-mb-px {\n    margin-bottom: 1px;\n}\n.lg\\:dvs-ml-px {\n    margin-left: 1px;\n}\n.lg\\:dvs-max-h-0 {\n    max-height: 0;\n}\n.lg\\:dvs-max-h-full {\n    max-height: 100%;\n}\n.lg\\:dvs-max-h-screen {\n    max-height: 100vh;\n}\n.lg\\:dvs-max-w-3xs {\n    max-width: 5rem;\n}\n.lg\\:dvs-max-w-2xs {\n    max-width: 10rem;\n}\n.lg\\:dvs-max-w-xs {\n    max-width: 20rem;\n}\n.lg\\:dvs-max-w-sm {\n    max-width: 30rem;\n}\n.lg\\:dvs-max-w-md {\n    max-width: 40rem;\n}\n.lg\\:dvs-max-w-lg {\n    max-width: 50rem;\n}\n.lg\\:dvs-max-w-xl {\n    max-width: 60rem;\n}\n.lg\\:dvs-max-w-2xl {\n    max-width: 70rem;\n}\n.lg\\:dvs-max-w-3xl {\n    max-width: 80rem;\n}\n.lg\\:dvs-max-w-4xl {\n    max-width: 90rem;\n}\n.lg\\:dvs-max-w-5xl {\n    max-width: 100rem;\n}\n.lg\\:dvs-max-w-1\\/2 {\n    max-width: 50%;\n}\n.lg\\:dvs-max-w-1\\/3 {\n    max-width: 33.33333%;\n}\n.lg\\:dvs-max-w-2\\/3 {\n    max-width: 66.66667%;\n}\n.lg\\:dvs-max-w-1\\/4 {\n    max-width: 25%;\n}\n.lg\\:dvs-max-w-3\\/4 {\n    max-width: 75%;\n}\n.lg\\:dvs-max-w-1\\/5 {\n    max-width: 20%;\n}\n.lg\\:dvs-max-w-2\\/5 {\n    max-width: 40%;\n}\n.lg\\:dvs-max-w-3\\/5 {\n    max-width: 60%;\n}\n.lg\\:dvs-max-w-4\\/5 {\n    max-width: 80%;\n}\n.lg\\:dvs-max-w-1\\/6 {\n    max-width: 16.66667%;\n}\n.lg\\:dvs-max-w-5\\/6 {\n    max-width: 83.33333%;\n}\n.lg\\:dvs-max-w-full {\n    max-width: 100%;\n}\n.lg\\:dvs-min-h-0 {\n    min-height: 0;\n}\n.lg\\:dvs-min-h-full {\n    min-height: 100%;\n}\n.lg\\:dvs-min-h-screen {\n    min-height: 100vh;\n}\n.lg\\:dvs-min-w-0 {\n    min-width: 0;\n}\n.lg\\:dvs-min-w-1 {\n    min-width: .25rem;\n}\n.lg\\:dvs-min-w-2 {\n    min-width: .5rem;\n}\n.lg\\:dvs-min-w-3 {\n    min-width: .75rem;\n}\n.lg\\:dvs-min-w-4 {\n    min-width: 1rem;\n}\n.lg\\:dvs-min-w-6 {\n    min-width: 1.5rem;\n}\n.lg\\:dvs-min-w-8 {\n    min-width: 2rem;\n}\n.lg\\:dvs-min-w-10 {\n    min-width: 2.5rem;\n}\n.lg\\:dvs-min-w-12 {\n    min-width: 3rem;\n}\n.lg\\:dvs-min-w-16 {\n    min-width: 4rem;\n}\n.lg\\:dvs-min-w-24 {\n    min-width: 6rem;\n}\n.lg\\:dvs-min-w-32 {\n    min-width: 8rem;\n}\n.lg\\:dvs-min-w-48 {\n    min-width: 12rem;\n}\n.lg\\:dvs-min-w-64 {\n    min-width: 16rem;\n}\n.lg\\:dvs-min-w-96 {\n    min-width: 24rem;\n}\n.lg\\:dvs-min-w-1\\/2 {\n    min-width: 50%;\n}\n.lg\\:dvs-min-w-1\\/3 {\n    min-width: 33.33333%;\n}\n.lg\\:dvs-min-w-2\\/3 {\n    min-width: 66.66667%;\n}\n.lg\\:dvs-min-w-1\\/4 {\n    min-width: 25%;\n}\n.lg\\:dvs-min-w-3\\/4 {\n    min-width: 75%;\n}\n.lg\\:dvs-min-w-1\\/5 {\n    min-width: 20%;\n}\n.lg\\:dvs-min-w-2\\/5 {\n    min-width: 40%;\n}\n.lg\\:dvs-min-w-3\\/5 {\n    min-width: 60%;\n}\n.lg\\:dvs-min-w-4\\/5 {\n    min-width: 80%;\n}\n.lg\\:dvs-min-w-1\\/6 {\n    min-width: 16.66667%;\n}\n.lg\\:dvs-min-w-5\\/6 {\n    min-width: 83.33333%;\n}\n.lg\\:dvs-min-w-full {\n    min-width: 100%;\n}\n.lg\\:dvs--m-0 {\n    margin: 0;\n}\n.lg\\:dvs--m-1 {\n    margin: -0.25rem;\n}\n.lg\\:dvs--m-2 {\n    margin: -0.5rem;\n}\n.lg\\:dvs--m-3 {\n    margin: -0.75rem;\n}\n.lg\\:dvs--m-4 {\n    margin: -1rem;\n}\n.lg\\:dvs--m-6 {\n    margin: -1.5rem;\n}\n.lg\\:dvs--m-8 {\n    margin: -2rem;\n}\n.lg\\:dvs--m-px {\n    margin: -1px;\n}\n.lg\\:dvs--my-0 {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.lg\\:dvs--mx-0 {\n    margin-left: 0;\n    margin-right: 0;\n}\n.lg\\:dvs--my-1 {\n    margin-top: -0.25rem;\n    margin-bottom: -0.25rem;\n}\n.lg\\:dvs--mx-1 {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n}\n.lg\\:dvs--my-2 {\n    margin-top: -0.5rem;\n    margin-bottom: -0.5rem;\n}\n.lg\\:dvs--mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n}\n.lg\\:dvs--my-3 {\n    margin-top: -0.75rem;\n    margin-bottom: -0.75rem;\n}\n.lg\\:dvs--mx-3 {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n}\n.lg\\:dvs--my-4 {\n    margin-top: -1rem;\n    margin-bottom: -1rem;\n}\n.lg\\:dvs--mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n}\n.lg\\:dvs--my-6 {\n    margin-top: -1.5rem;\n    margin-bottom: -1.5rem;\n}\n.lg\\:dvs--mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n}\n.lg\\:dvs--my-8 {\n    margin-top: -2rem;\n    margin-bottom: -2rem;\n}\n.lg\\:dvs--mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n}\n.lg\\:dvs--my-px {\n    margin-top: -1px;\n    margin-bottom: -1px;\n}\n.lg\\:dvs--mx-px {\n    margin-left: -1px;\n    margin-right: -1px;\n}\n.lg\\:dvs--mt-0 {\n    margin-top: 0;\n}\n.lg\\:dvs--mr-0 {\n    margin-right: 0;\n}\n.lg\\:dvs--mb-0 {\n    margin-bottom: 0;\n}\n.lg\\:dvs--ml-0 {\n    margin-left: 0;\n}\n.lg\\:dvs--mt-1 {\n    margin-top: -0.25rem;\n}\n.lg\\:dvs--mr-1 {\n    margin-right: -0.25rem;\n}\n.lg\\:dvs--mb-1 {\n    margin-bottom: -0.25rem;\n}\n.lg\\:dvs--ml-1 {\n    margin-left: -0.25rem;\n}\n.lg\\:dvs--mt-2 {\n    margin-top: -0.5rem;\n}\n.lg\\:dvs--mr-2 {\n    margin-right: -0.5rem;\n}\n.lg\\:dvs--mb-2 {\n    margin-bottom: -0.5rem;\n}\n.lg\\:dvs--ml-2 {\n    margin-left: -0.5rem;\n}\n.lg\\:dvs--mt-3 {\n    margin-top: -0.75rem;\n}\n.lg\\:dvs--mr-3 {\n    margin-right: -0.75rem;\n}\n.lg\\:dvs--mb-3 {\n    margin-bottom: -0.75rem;\n}\n.lg\\:dvs--ml-3 {\n    margin-left: -0.75rem;\n}\n.lg\\:dvs--mt-4 {\n    margin-top: -1rem;\n}\n.lg\\:dvs--mr-4 {\n    margin-right: -1rem;\n}\n.lg\\:dvs--mb-4 {\n    margin-bottom: -1rem;\n}\n.lg\\:dvs--ml-4 {\n    margin-left: -1rem;\n}\n.lg\\:dvs--mt-6 {\n    margin-top: -1.5rem;\n}\n.lg\\:dvs--mr-6 {\n    margin-right: -1.5rem;\n}\n.lg\\:dvs--mb-6 {\n    margin-bottom: -1.5rem;\n}\n.lg\\:dvs--ml-6 {\n    margin-left: -1.5rem;\n}\n.lg\\:dvs--mt-8 {\n    margin-top: -2rem;\n}\n.lg\\:dvs--mr-8 {\n    margin-right: -2rem;\n}\n.lg\\:dvs--mb-8 {\n    margin-bottom: -2rem;\n}\n.lg\\:dvs--ml-8 {\n    margin-left: -2rem;\n}\n.lg\\:dvs--mt-px {\n    margin-top: -1px;\n}\n.lg\\:dvs--mr-px {\n    margin-right: -1px;\n}\n.lg\\:dvs--mb-px {\n    margin-bottom: -1px;\n}\n.lg\\:dvs--ml-px {\n    margin-left: -1px;\n}\n.lg\\:dvs-opacity-0 {\n    opacity: 0;\n}\n.lg\\:dvs-opacity-25 {\n    opacity: .25;\n}\n.lg\\:dvs-opacity-50 {\n    opacity: .5;\n}\n.lg\\:dvs-opacity-75 {\n    opacity: .75;\n}\n.lg\\:dvs-opacity-100 {\n    opacity: 1;\n}\n.lg\\:dvs-overflow-auto {\n    overflow: auto;\n}\n.lg\\:dvs-overflow-hidden {\n    overflow: hidden;\n}\n.lg\\:dvs-overflow-visible {\n    overflow: visible;\n}\n.lg\\:dvs-overflow-scroll {\n    overflow: scroll;\n}\n.lg\\:dvs-overflow-x-scroll {\n    overflow-x: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.lg\\:dvs-overflow-y-scroll {\n    overflow-y: auto;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.lg\\:dvs-scrolling-touch {\n    -webkit-overflow-scrolling: touch;\n}\n.lg\\:dvs-scrolling-auto {\n    -webkit-overflow-scrolling: auto;\n}\n.lg\\:dvs-p-0 {\n    padding: 0;\n}\n.lg\\:dvs-p-1 {\n    padding: .25rem;\n}\n.lg\\:dvs-p-2 {\n    padding: .5rem;\n}\n.lg\\:dvs-p-3 {\n    padding: .75rem;\n}\n.lg\\:dvs-p-4 {\n    padding: 1rem;\n}\n.lg\\:dvs-p-6 {\n    padding: 1.5rem;\n}\n.lg\\:dvs-p-8 {\n    padding: 2rem;\n}\n.lg\\:dvs-p-16 {\n    padding: 4rem;\n}\n.lg\\:dvs-p-px {\n    padding: 1px;\n}\n.lg\\:dvs-py-0 {\n    padding-top: 0;\n    padding-bottom: 0;\n}\n.lg\\:dvs-px-0 {\n    padding-left: 0;\n    padding-right: 0;\n}\n.lg\\:dvs-py-1 {\n    padding-top: .25rem;\n    padding-bottom: .25rem;\n}\n.lg\\:dvs-px-1 {\n    padding-left: .25rem;\n    padding-right: .25rem;\n}\n.lg\\:dvs-py-2 {\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n}\n.lg\\:dvs-px-2 {\n    padding-left: .5rem;\n    padding-right: .5rem;\n}\n.lg\\:dvs-py-3 {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n}\n.lg\\:dvs-px-3 {\n    padding-left: .75rem;\n    padding-right: .75rem;\n}\n.lg\\:dvs-py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.lg\\:dvs-px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.lg\\:dvs-py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n}\n.lg\\:dvs-px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.lg\\:dvs-py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n.lg\\:dvs-px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n}\n.lg\\:dvs-py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n}\n.lg\\:dvs-px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n}\n.lg\\:dvs-py-px {\n    padding-top: 1px;\n    padding-bottom: 1px;\n}\n.lg\\:dvs-px-px {\n    padding-left: 1px;\n    padding-right: 1px;\n}\n.lg\\:dvs-pt-0 {\n    padding-top: 0;\n}\n.lg\\:dvs-pr-0 {\n    padding-right: 0;\n}\n.lg\\:dvs-pb-0 {\n    padding-bottom: 0;\n}\n.lg\\:dvs-pl-0 {\n    padding-left: 0;\n}\n.lg\\:dvs-pt-1 {\n    padding-top: .25rem;\n}\n.lg\\:dvs-pr-1 {\n    padding-right: .25rem;\n}\n.lg\\:dvs-pb-1 {\n    padding-bottom: .25rem;\n}\n.lg\\:dvs-pl-1 {\n    padding-left: .25rem;\n}\n.lg\\:dvs-pt-2 {\n    padding-top: .5rem;\n}\n.lg\\:dvs-pr-2 {\n    padding-right: .5rem;\n}\n.lg\\:dvs-pb-2 {\n    padding-bottom: .5rem;\n}\n.lg\\:dvs-pl-2 {\n    padding-left: .5rem;\n}\n.lg\\:dvs-pt-3 {\n    padding-top: .75rem;\n}\n.lg\\:dvs-pr-3 {\n    padding-right: .75rem;\n}\n.lg\\:dvs-pb-3 {\n    padding-bottom: .75rem;\n}\n.lg\\:dvs-pl-3 {\n    padding-left: .75rem;\n}\n.lg\\:dvs-pt-4 {\n    padding-top: 1rem;\n}\n.lg\\:dvs-pr-4 {\n    padding-right: 1rem;\n}\n.lg\\:dvs-pb-4 {\n    padding-bottom: 1rem;\n}\n.lg\\:dvs-pl-4 {\n    padding-left: 1rem;\n}\n.lg\\:dvs-pt-6 {\n    padding-top: 1.5rem;\n}\n.lg\\:dvs-pr-6 {\n    padding-right: 1.5rem;\n}\n.lg\\:dvs-pb-6 {\n    padding-bottom: 1.5rem;\n}\n.lg\\:dvs-pl-6 {\n    padding-left: 1.5rem;\n}\n.lg\\:dvs-pt-8 {\n    padding-top: 2rem;\n}\n.lg\\:dvs-pr-8 {\n    padding-right: 2rem;\n}\n.lg\\:dvs-pb-8 {\n    padding-bottom: 2rem;\n}\n.lg\\:dvs-pl-8 {\n    padding-left: 2rem;\n}\n.lg\\:dvs-pt-16 {\n    padding-top: 4rem;\n}\n.lg\\:dvs-pr-16 {\n    padding-right: 4rem;\n}\n.lg\\:dvs-pb-16 {\n    padding-bottom: 4rem;\n}\n.lg\\:dvs-pl-16 {\n    padding-left: 4rem;\n}\n.lg\\:dvs-pt-px {\n    padding-top: 1px;\n}\n.lg\\:dvs-pr-px {\n    padding-right: 1px;\n}\n.lg\\:dvs-pb-px {\n    padding-bottom: 1px;\n}\n.lg\\:dvs-pl-px {\n    padding-left: 1px;\n}\n.lg\\:dvs-pointer-events-none {\n    pointer-events: none;\n}\n.lg\\:dvs-pointer-events-auto {\n    pointer-events: auto;\n}\n.lg\\:dvs-static {\n    position: static;\n}\n.lg\\:dvs-fixed {\n    position: fixed;\n}\n.lg\\:dvs-absolute {\n    position: absolute;\n}\n.lg\\:dvs-relative {\n    position: relative;\n}\n.lg\\:dvs-pin-none {\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n}\n.lg\\:dvs-pin {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n}\n.lg\\:dvs-pin-y {\n    top: 0;\n    bottom: 0;\n}\n.lg\\:dvs-pin-x {\n    right: 0;\n    left: 0;\n}\n.lg\\:dvs-pin-t {\n    top: 0;\n}\n.lg\\:dvs-pin-r {\n    right: 0;\n}\n.lg\\:dvs-pin-b {\n    bottom: 0;\n}\n.lg\\:dvs-pin-l {\n    left: 0;\n}\n.lg\\:dvs-resize-none {\n    resize: none;\n}\n.lg\\:dvs-resize-y {\n    resize: vertical;\n}\n.lg\\:dvs-resize-x {\n    resize: horizontal;\n}\n.lg\\:dvs-resize {\n    resize: both;\n}\n.lg\\:dvs-shadow {\n    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);\n}\n.lg\\:dvs-shadow-lg {\n    -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n            box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);\n}\n.lg\\:dvs-shadow-none {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.lg\\:dvs-text-left {\n    text-align: left;\n}\n.lg\\:dvs-text-center {\n    text-align: center;\n}\n.lg\\:dvs-text-right {\n    text-align: right;\n}\n.lg\\:dvs-text-justify {\n    text-align: justify;\n}\n.lg\\:dvs-text-transparent {\n    color: transparent;\n}\n.lg\\:dvs-text-black {\n    color: #22292f;\n}\n.lg\\:dvs-text-grey-darkest {\n    color: #3d4852;\n}\n.lg\\:dvs-text-grey-darker {\n    color: #606f7b;\n}\n.lg\\:dvs-text-grey-dark {\n    color: #8795a1;\n}\n.lg\\:dvs-text-grey {\n    color: #b8c2cc;\n}\n.lg\\:dvs-text-grey-light {\n    color: #dae1e7;\n}\n.lg\\:dvs-text-grey-lighter {\n    color: #f1f5f8;\n}\n.lg\\:dvs-text-grey-lightest {\n    color: #f8fafc;\n}\n.lg\\:dvs-text-white {\n    color: #fff;\n}\n.lg\\:dvs-text-red-dark {\n    color: #cc1f1a;\n}\n.lg\\:dvs-text-red {\n    color: #e3342f;\n}\n.lg\\:dvs-text-green-dark {\n    color: #1f9d55;\n}\n.lg\\:dvs-text-green {\n    color: #38c172;\n}\n.lg\\:dvs-text-blue-dark {\n    color: #2b6ed8;\n}\n.lg\\:dvs-text-blue {\n    color: #3490dc;\n}\n.lg\\:dvs-text-pink {\n    color: #f66d9b;\n}\n.lg\\:hover\\:dvs-text-transparent:hover {\n    color: transparent;\n}\n.lg\\:hover\\:dvs-text-black:hover {\n    color: #22292f;\n}\n.lg\\:hover\\:dvs-text-grey-darkest:hover {\n    color: #3d4852;\n}\n.lg\\:hover\\:dvs-text-grey-darker:hover {\n    color: #606f7b;\n}\n.lg\\:hover\\:dvs-text-grey-dark:hover {\n    color: #8795a1;\n}\n.lg\\:hover\\:dvs-text-grey:hover {\n    color: #b8c2cc;\n}\n.lg\\:hover\\:dvs-text-grey-light:hover {\n    color: #dae1e7;\n}\n.lg\\:hover\\:dvs-text-grey-lighter:hover {\n    color: #f1f5f8;\n}\n.lg\\:hover\\:dvs-text-grey-lightest:hover {\n    color: #f8fafc;\n}\n.lg\\:hover\\:dvs-text-white:hover {\n    color: #fff;\n}\n.lg\\:hover\\:dvs-text-red-dark:hover {\n    color: #cc1f1a;\n}\n.lg\\:hover\\:dvs-text-red:hover {\n    color: #e3342f;\n}\n.lg\\:hover\\:dvs-text-green-dark:hover {\n    color: #1f9d55;\n}\n.lg\\:hover\\:dvs-text-green:hover {\n    color: #38c172;\n}\n.lg\\:hover\\:dvs-text-blue-dark:hover {\n    color: #2b6ed8;\n}\n.lg\\:hover\\:dvs-text-blue:hover {\n    color: #3490dc;\n}\n.lg\\:hover\\:dvs-text-pink:hover {\n    color: #f66d9b;\n}\n.lg\\:dvs-text-xs {\n    font-size: .75rem;\n}\n.lg\\:dvs-text-sm {\n    font-size: .875rem;\n}\n.lg\\:dvs-text-base {\n    font-size: 1rem;\n}\n.lg\\:dvs-text-lg {\n    font-size: 1.125rem;\n}\n.lg\\:dvs-text-xl {\n    font-size: 1.25rem;\n}\n.lg\\:dvs-text-2xl {\n    font-size: 1.5rem;\n}\n.lg\\:dvs-text-3xl {\n    font-size: 1.875rem;\n}\n.lg\\:dvs-text-4xl {\n    font-size: 2.25rem;\n}\n.lg\\:dvs-text-5xl {\n    font-size: 3rem;\n}\n.lg\\:dvs-italic {\n    font-style: italic;\n}\n.lg\\:dvs-roman {\n    font-style: normal;\n}\n.lg\\:dvs-uppercase {\n    text-transform: uppercase;\n}\n.lg\\:dvs-lowercase {\n    text-transform: lowercase;\n}\n.lg\\:dvs-capitalize {\n    text-transform: capitalize;\n}\n.lg\\:dvs-normal-case {\n    text-transform: none;\n}\n.lg\\:dvs-underline {\n    text-decoration: underline;\n}\n.lg\\:dvs-line-through {\n    text-decoration: line-through;\n}\n.lg\\:dvs-no-underline {\n    text-decoration: none;\n}\n.lg\\:dvs-antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.lg\\:dvs-subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n}\n.lg\\:hover\\:dvs-italic:hover {\n    font-style: italic;\n}\n.lg\\:hover\\:dvs-roman:hover {\n    font-style: normal;\n}\n.lg\\:hover\\:dvs-uppercase:hover {\n    text-transform: uppercase;\n}\n.lg\\:hover\\:dvs-lowercase:hover {\n    text-transform: lowercase;\n}\n.lg\\:hover\\:dvs-capitalize:hover {\n    text-transform: capitalize;\n}\n.lg\\:hover\\:dvs-normal-case:hover {\n    text-transform: none;\n}\n.lg\\:hover\\:dvs-underline:hover {\n    text-decoration: underline;\n}\n.lg\\:hover\\:dvs-line-through:hover {\n    text-decoration: line-through;\n}\n.lg\\:hover\\:dvs-no-underline:hover {\n    text-decoration: none;\n}\n.lg\\:hover\\:dvs-antialiased:hover {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.lg\\:hover\\:dvs-subpixel-antialiased:hover {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n}\n.lg\\:dvs-tracking-tight {\n    letter-spacing: -0.05em;\n}\n.lg\\:dvs-tracking-normal {\n    letter-spacing: 0;\n}\n.lg\\:dvs-tracking-wide {\n    letter-spacing: .05em;\n}\n.lg\\:dvs-tracking-superwide {\n    letter-spacing: .1em;\n}\n.lg\\:dvs-visible {\n    visibility: visible;\n}\n.lg\\:dvs-invisible {\n    visibility: hidden;\n}\n.lg\\:dvs-whitespace-normal {\n    white-space: normal;\n}\n.lg\\:dvs-whitespace-no-wrap {\n    white-space: nowrap;\n}\n.lg\\:dvs-whitespace-pre {\n    white-space: pre;\n}\n.lg\\:dvs-whitespace-pre-line {\n    white-space: pre-line;\n}\n.lg\\:dvs-whitespace-pre-wrap {\n    white-space: pre-wrap;\n}\n.lg\\:dvs-break-words {\n    word-wrap: break-word;\n}\n.lg\\:dvs-break-normal {\n    word-wrap: normal;\n}\n.lg\\:dvs-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.lg\\:dvs-w-0 {\n    width: 0;\n}\n.lg\\:dvs-w-1 {\n    width: .25rem;\n}\n.lg\\:dvs-w-2 {\n    width: .5rem;\n}\n.lg\\:dvs-w-3 {\n    width: .75rem;\n}\n.lg\\:dvs-w-4 {\n    width: 1rem;\n}\n.lg\\:dvs-w-6 {\n    width: 1.5rem;\n}\n.lg\\:dvs-w-8 {\n    width: 2rem;\n}\n.lg\\:dvs-w-10 {\n    width: 2.5rem;\n}\n.lg\\:dvs-w-12 {\n    width: 3rem;\n}\n.lg\\:dvs-w-16 {\n    width: 4rem;\n}\n.lg\\:dvs-w-24 {\n    width: 6rem;\n}\n.lg\\:dvs-w-32 {\n    width: 8rem;\n}\n.lg\\:dvs-w-48 {\n    width: 12rem;\n}\n.lg\\:dvs-w-64 {\n    width: 16rem;\n}\n.lg\\:dvs-w-auto {\n    width: auto;\n}\n.lg\\:dvs-w-px {\n    width: 1px;\n}\n.lg\\:dvs-w-1\\/2 {\n    width: 50%;\n}\n.lg\\:dvs-w-1\\/3 {\n    width: 33.33333%;\n}\n.lg\\:dvs-w-2\\/3 {\n    width: 66.66667%;\n}\n.lg\\:dvs-w-1\\/4 {\n    width: 25%;\n}\n.lg\\:dvs-w-3\\/4 {\n    width: 75%;\n}\n.lg\\:dvs-w-1\\/5 {\n    width: 20%;\n}\n.lg\\:dvs-w-2\\/5 {\n    width: 40%;\n}\n.lg\\:dvs-w-3\\/5 {\n    width: 60%;\n}\n.lg\\:dvs-w-4\\/5 {\n    width: 80%;\n}\n.lg\\:dvs-w-1\\/6 {\n    width: 16.66667%;\n}\n.lg\\:dvs-w-5\\/6 {\n    width: 83.33333%;\n}\n.lg\\:dvs-w-full {\n    width: 100%;\n}\n.lg\\:dvs-w-screen {\n    width: 100vw;\n}\n.lg\\:dvs-z-0 {\n    z-index: 0;\n}\n.lg\\:dvs-z-10 {\n    z-index: 10;\n}\n.lg\\:dvs-z-20 {\n    z-index: 20;\n}\n.lg\\:dvs-z-30 {\n    z-index: 30;\n}\n.lg\\:dvs-z-40 {\n    z-index: 40;\n}\n.lg\\:dvs-z-50 {\n    z-index: 50;\n}\n.lg\\:dvs-z-auto {\n    z-index: auto;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "../devise/vue/node_modules/vue-style-loader/index.js!../devise/vue/node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-431939e5\",\"scoped\":false,\"hasInlineConfig\":true}!../devise/vue/node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!../devise/vue/src/Devise.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../devise/vue/node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-431939e5\",\"scoped\":false,\"hasInlineConfig\":true}!../devise/vue/node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!../devise/vue/src/Devise.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("../devise/vue/node_modules/vue-style-loader/lib/addStylesClient.js")("2b358f0b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../../../devise2-demo/node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-431939e5\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../../../devise2-demo/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Devise.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../../../devise2-demo/node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-431939e5\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../../../devise2-demo/node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Devise.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../devise/vue/src/Devise.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("../devise/vue/node_modules/vue-style-loader/index.js!../devise/vue/node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-431939e5\",\"scoped\":false,\"hasInlineConfig\":true}!../devise/vue/node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!../devise/vue/src/Devise.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/Devise.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-431939e5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/Devise.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "devise/vue/src/Devise.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-431939e5", Component.options)
  } else {
    hotAPI.reload("data-v-431939e5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/Slice.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/Slice.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e70dff7a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/Slice.vue")
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
Component.options.__file = "devise/vue/src/Slice.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e70dff7a", Component.options)
  } else {
    hotAPI.reload("data-v-e70dff7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/Slices.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/Slices.vue")
/* template */
var __vue_template__ = null
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
Component.options.__file = "devise/vue/src/Slices.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0652a940", Component.options)
  } else {
    hotAPI.reload("data-v-0652a940", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/media-manager/Breadcrumbs.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/media-manager/Breadcrumbs.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-14515f2a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/media-manager/Breadcrumbs.vue")
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
Component.options.__file = "devise/vue/src/components/media-manager/Breadcrumbs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14515f2a", Component.options)
  } else {
    hotAPI.reload("data-v-14515f2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/media-manager/MediaManager.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/media-manager/MediaManager.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-649c309e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/media-manager/MediaManager.vue")
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
Component.options.__file = "devise/vue/src/components/media-manager/MediaManager.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-649c309e", Component.options)
  } else {
    hotAPI.reload("data-v-649c309e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/menu/User.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/menu/User.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46969bbe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/menu/User.vue")
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
Component.options.__file = "devise/vue/src/components/menu/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46969bbe", Component.options)
  } else {
    hotAPI.reload("data-v-46969bbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/Editor.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/Editor.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b68eba2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/Editor.vue")
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
Component.options.__file = "devise/vue/src/components/pages/Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b68eba2", Component.options)
  } else {
    hotAPI.reload("data-v-2b68eba2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/SliceEditor.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/SliceEditor.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-63b4d4ba\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/SliceEditor.vue")
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
Component.options.__file = "devise/vue/src/components/pages/SliceEditor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63b4d4ba", Component.options)
  } else {
    hotAPI.reload("data-v-63b4d4ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Checkbox.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Checkbox.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7c8a4500\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Checkbox.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Checkbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c8a4500", Component.options)
  } else {
    hotAPI.reload("data-v-7c8a4500", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Color.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Color.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-332ce276\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Color.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Color.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-332ce276", Component.options)
  } else {
    hotAPI.reload("data-v-332ce276", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Field.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Field.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0883b08d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Field.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Field.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0883b08d", Component.options)
  } else {
    hotAPI.reload("data-v-0883b08d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Image.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Image.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ee7abf24\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Image.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ee7abf24", Component.options)
  } else {
    hotAPI.reload("data-v-ee7abf24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Link.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Link.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c2ec037\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Link.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Link.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c2ec037", Component.options)
  } else {
    hotAPI.reload("data-v-2c2ec037", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Number.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Number.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e5ed274\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Number.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Number.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e5ed274", Component.options)
  } else {
    hotAPI.reload("data-v-5e5ed274", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Text.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Text.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ada2f82c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Text.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Text.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ada2f82c", Component.options)
  } else {
    hotAPI.reload("data-v-ada2f82c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Textarea.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67ea4cf7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Textarea.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Textarea.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67ea4cf7", Component.options)
  } else {
    hotAPI.reload("data-v-67ea4cf7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/pages/editor/Wysiwyg.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/pages/editor/Wysiwyg.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6e59c160\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Wysiwyg.vue")
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
Component.options.__file = "devise/vue/src/components/pages/editor/Wysiwyg.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e59c160", Component.options)
  } else {
    hotAPI.reload("data-v-6e59c160", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ffa67ac\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/Edit.vue")
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
Component.options.__file = "devise/vue/src/components/templates/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ffa67ac", Component.options)
  } else {
    hotAPI.reload("data-v-3ffa67ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-620e72e2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/Index.vue")
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
Component.options.__file = "devise/vue/src/components/templates/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-620e72e2", Component.options)
  } else {
    hotAPI.reload("data-v-620e72e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/Preview.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/Preview.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8bb0f650\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/Preview.vue")
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
Component.options.__file = "devise/vue/src/components/templates/Preview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8bb0f650", Component.options)
  } else {
    hotAPI.reload("data-v-8bb0f650", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/PreviewSettings.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/PreviewSettings.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07ce8b9b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/PreviewSettings.vue")
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
Component.options.__file = "devise/vue/src/components/templates/PreviewSettings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07ce8b9b", Component.options)
  } else {
    hotAPI.reload("data-v-07ce8b9b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Checkbox.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Checkbox.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5562cf68\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Checkbox.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Checkbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5562cf68", Component.options)
  } else {
    hotAPI.reload("data-v-5562cf68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Color.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Color.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d839aac\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Color.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Color.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d839aac", Component.options)
  } else {
    hotAPI.reload("data-v-0d839aac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Image.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Image.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ed3f0a2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Image.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ed3f0a2", Component.options)
  } else {
    hotAPI.reload("data-v-4ed3f0a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Link.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Link.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b589983\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Link.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Link.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b589983", Component.options)
  } else {
    hotAPI.reload("data-v-4b589983", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Number.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Number.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-662d65dc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Number.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Number.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-662d65dc", Component.options)
  } else {
    hotAPI.reload("data-v-662d65dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Text.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Text.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f4f4594\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Text.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Text.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f4f4594", Component.options)
  } else {
    hotAPI.reload("data-v-6f4f4594", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Textarea.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ea2bf7a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Textarea.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Textarea.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ea2bf7a", Component.options)
  } else {
    hotAPI.reload("data-v-7ea2bf7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/templates/controls/Wysiwyg.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/templates/controls/Wysiwyg.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-155056d8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Wysiwyg.vue")
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
Component.options.__file = "devise/vue/src/components/templates/controls/Wysiwyg.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-155056d8", Component.options)
  } else {
    hotAPI.reload("data-v-155056d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/Help.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c87cfda0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Help.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/Help.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c87cfda0", Component.options)
  } else {
    hotAPI.reload("data-v-c87cfda0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/Loadbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Loadbar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92106364\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Loadbar.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/Loadbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92106364", Component.options)
  } else {
    hotAPI.reload("data-v-92106364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/Messages.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Messages.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-021c1b8a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Messages.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/Messages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-021c1b8a", Component.options)
  } else {
    hotAPI.reload("data-v-021c1b8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Modal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-130f01ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Modal.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-130f01ce", Component.options)
  } else {
    hotAPI.reload("data-v-130f01ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/Toggle.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/Toggle.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74c29203\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Toggle.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/Toggle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74c29203", Component.options)
  } else {
    hotAPI.reload("data-v-74c29203", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/Cell.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Cell.vue")
/* template */
var __vue_template__ = null
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
Component.options.__file = "devise/vue/src/components/utilities/tables/Cell.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7c19826", Component.options)
  } else {
    hotAPI.reload("data-v-a7c19826", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/ColumnControls.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/ColumnControls.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ddaeac12\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/ColumnControls.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/ColumnControls.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ddaeac12", Component.options)
  } else {
    hotAPI.reload("data-v-ddaeac12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/Dates.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Dates.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b72940a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Dates.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/Dates.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b72940a", Component.options)
  } else {
    hotAPI.reload("data-v-6b72940a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/Pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Pagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-be2f7836\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Pagination.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be2f7836", Component.options)
  } else {
    hotAPI.reload("data-v-be2f7836", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/Related.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Related.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c27f8120\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Related.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/Related.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c27f8120", Component.options)
  } else {
    hotAPI.reload("data-v-c27f8120", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Search.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f405e71a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Search.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/Search.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f405e71a", Component.options)
  } else {
    hotAPI.reload("data-v-f405e71a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/Sort.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/Sort.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45de2229\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Sort.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/Sort.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45de2229", Component.options)
  } else {
    hotAPI.reload("data-v-45de2229", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/SuperTable.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/SuperTable.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-13120e44\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/SuperTable.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/SuperTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13120e44", Component.options)
  } else {
    hotAPI.reload("data-v-13120e44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/components/utilities/tables/ToggleColumns.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("../devise/vue/node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!../devise/vue/src/components/utilities/tables/ToggleColumns.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56b74c6e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/ToggleColumns.vue")
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
Component.options.__file = "devise/vue/src/components/utilities/tables/ToggleColumns.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56b74c6e", Component.options)
  } else {
    hotAPI.reload("data-v-56b74c6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "../devise/vue/src/directives/alert-confirm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("../devise/vue/node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


function insertBefore(el, referenceNode) {
  return referenceNode.parentNode.insertBefore(el, referenceNode);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, vnode) {
    el.addEventListener('click', function (e) {
      // create constructor
      var Confirm = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
        template: '\n        <div v-if="show" class="dvs-fixed dvs-pin dvs-z-50">\n          <div class="dvs-blocker"></div>\n          <div class="dvs-absolute dvs-absolute-center dvs-z-50 dvs-bg-white dvs-rounded dvs-shadow-lg dvs-p-8">\n            <h4 class="dvs-mb-8 dvs-font-bold">Please Confirm</h4>\n            <div class="dvs-mb-8">' + binding.value.message + '</div>\n\n            <button class="dvs-btn" @click="ok">Confirm</button>\n            <button class="dvs-btn dvs-btn-plain" @click="cancel">Cancel</button>\n            </div>\n          </div>\n        </div>\n        ',
        data: function data() {
          return {
            clicks: 0,
            show: true
          };
        },
        methods: {
          ok: function ok() {
            binding.value.callback(binding.value.arguments);
            this.close();
          },
          cancel: function cancel() {
            this.close();
          },
          close: function close() {
            this.show = false;
          }
        }
      });

      var newEl = document.createElement('devise-confirm');
      var insertedElement = insertBefore(newEl, document.querySelector('#devise-admin'));

      new Confirm().$mount(insertedElement);
    });
  }
});

/***/ }),

/***/ "../devise/vue/src/event-bus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviseBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("../devise/vue/node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var DeviseBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ }),

/***/ "../devise/vue/src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("../devise/vue/node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tippy__ = __webpack_require__("../devise/vue/node_modules/vue-tippy/dist/vue-tippy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tippy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_tippy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Devise__ = __webpack_require__("../devise/vue/src/Devise.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Devise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Devise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_utilities_Help__ = __webpack_require__("../devise/vue/src/components/utilities/Help.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_utilities_Help___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_utilities_Help__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slices__ = __webpack_require__("../devise/vue/src/Slices.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Slices___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Slices__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_templates_PreviewSettings__ = __webpack_require__("../devise/vue/src/components/templates/PreviewSettings.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_templates_PreviewSettings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_templates_PreviewSettings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vuex_store__ = __webpack_require__("../devise/vue/src/vuex/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_bus_js__ = __webpack_require__("../devise/vue/src/event-bus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_route_config_js__ = __webpack_require__("../devise/vue/src/router/route.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_alert_confirm__ = __webpack_require__("../devise/vue/src/directives/alert-confirm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pages_Editor__ = __webpack_require__("../devise/vue/src/components/pages/Editor.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pages_Editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_pages_Editor__);





 // Required for recursion







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

var DevisePlugin = {
  install: function install(Vue, _ref) {
    var store = _ref.store,
        router = _ref.router,
        bus = _ref.bus,
        options = _ref.options;

    if (typeof store === 'undefined') {
      throw new Error('Please provide a vuex store.');
    }

    if (typeof router === 'undefined') {
      throw new Error('Please provide a vue router.');
    }

    // Set the devise route to Edit Page for any application routes
    // that aren't setup to take over the admin. This allows us to see the
    // page editor even if you are navigating around the application routes.
    router.options.routes.map(function (route) {
      if (!route.hasOwnProperty('components')) {
        route.components = {};
      }
      if (!route.components.hasOwnProperty('devise')) {
        route.components.devise = __WEBPACK_IMPORTED_MODULE_10__components_pages_Editor___default.a;
      }
    });
    router.addRoutes(__WEBPACK_IMPORTED_MODULE_8__router_route_config_js__["a" /* default */]);

    // If the bus isn't set we'll use our own bus
    if (typeof bus === 'undefined') {
      window.bus = __WEBPACK_IMPORTED_MODULE_7__event_bus_js__["a" /* DeviseBus */];
    }

    // Tooltips
    Vue.use(__WEBPACK_IMPORTED_MODULE_1_vue_tippy___default.a);

    // VueRouter Register global components
    Vue.component('Devise', __WEBPACK_IMPORTED_MODULE_2__Devise___default.a);
    Vue.component('Help', __WEBPACK_IMPORTED_MODULE_3__components_utilities_Help___default.a);
    Vue.component('Slices', __WEBPACK_IMPORTED_MODULE_4__Slices___default.a);
    Vue.component('TemplatePreviewSettings', __WEBPACK_IMPORTED_MODULE_5__components_templates_PreviewSettings___default.a);

    // Register devise vuex module and sync it with the store
    store.registerModule('devise', __WEBPACK_IMPORTED_MODULE_6__vuex_store__["a" /* default */]);

    // Register alert / confirm directive
    Vue.directive('devise-alert-confirm', __WEBPACK_IMPORTED_MODULE_9__directives_alert_confirm__["a" /* default */]);

    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      data: function data() {
        return {
          deviseOptions: options,
          tippyConfiguration: {
            interactive: true,
            animation: 'shift-toward',
            arrow: true,
            inertia: true,
            interactiveBorder: 20,
            maxWidth: '300px',
            theme: 'devise',
            trigger: 'mouseenter focus'
          }
        };
      },

      methods: {
        // The collectionData looks at the slices passed to it and extracts
        // the data for easier access
        getCollectionData: function getCollectionData(slices, name) {
          var collection = this.getCollection(slices, name);
          return collection.map(function (record) {
            return record.data;
          });
        },

        // Returns only the slices that match the name passed
        // Primarily this is a helper function for getCollectionData
        getCollection: function getCollection(slices, name) {
          console.log(slices);
          var collection = slices.filter(function (slice) {
            return slice.metadata.name === name;
          });

          // If settings property is present we know we are in template builder
          // We clear out the existing placeholder data and store it in a temp
          // variable to repopulate based on the number of instances the User
          // has set.
          if (collection[0] && collection[0].settings) {
            var tempCollection = collection[0];
            collection.splice(0, collection.length);

            for (var i = 0; i < tempCollection.settings.numberOfInstances; i++) {
              collection.push(tempCollection);
            }
          }

          return collection;
        },


        // Convienience method to push things into the router from templates
        goToPage: function goToPage(pageName) {
          this.$router.push({ name: pageName });
        }
      },
      // This sets a prop to be accepted by all components in a custom Vue
      // app that resides within Devise. Makes it a little easier to pass
      // down any data to custom child components
      props: ['devise'],
      store: store
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (DevisePlugin);

/***/ }),

/***/ "../devise/vue/src/mixins/Strings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */
var clip = __webpack_require__("../devise/vue/node_modules/text-clipper/dist/index.js");

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    uppercase: function uppercase(string) {
      return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    },
    randomString: function randomString(length) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }return text;
    },
    isEmail: function isEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    },
    clipString: function clipString(string, length, html) {
      if (typeof html === 'undefined') {
        html = false;
      }

      return clip(string, length, { html: html });
    }
  }
});

/***/ }),

/***/ "../devise/vue/src/router/route.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DevelopersIndex = function DevelopersIndex() {
  return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "../devise/vue/src/components/developers/Index.vue"));
};
var LanguagesManage = function LanguagesManage() {
  return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "../devise/vue/src/components/languages/Manage.vue"));
};
var MetaManage = function MetaManage() {
  return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "../devise/vue/src/components/meta/Manage.vue"));
};
var PageEditor = function PageEditor() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../devise/vue/src/components/pages/Editor.vue"));
};
var PagesIndex = function PagesIndex() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "../devise/vue/src/components/pages/Index.vue"));
};
var PagesView = function PagesView() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "../devise/vue/src/components/pages/View.vue"));
};
var SettingsIndex = function SettingsIndex() {
  return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "../devise/vue/src/components/settings/Index.vue"));
};
var SitesIndex = function SitesIndex() {
  return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "../devise/vue/src/components/sites/Index.vue"));
};
var SlicesIndex = function SlicesIndex() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "../devise/vue/src/components/slices/Index.vue"));
};
var TemplatesIndex = function TemplatesIndex() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../devise/vue/src/components/templates/Index.vue"));
};
var TemplatesEdit = function TemplatesEdit() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "../devise/vue/src/components/templates/Edit.vue"));
};
var UsersIndex = function UsersIndex() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "../devise/vue/src/components/users/Index.vue"));
};
var UsersEdit = function UsersEdit() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "../devise/vue/src/components/users/Edit.vue"));
};

var routes = [{
  path: '/devise/developers',
  name: 'devise-developers-index',
  components: {
    'devise': DevelopersIndex
  }
}, {
  path: '/devise/pages',
  name: 'devise-pages-index',
  components: {
    'devise': PagesIndex
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/pages/:pageId',
  name: 'devise-pages-view',
  components: {
    'devise': PagesView
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/edit-page',
  name: 'devise-page-editor',
  components: {
    'devise': PageEditor
  }
}, {
  path: '/devise/settings/languages',
  name: 'devise-languages-manage',
  components: {
    'devise': LanguagesManage
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/settings/meta',
  name: 'devise-meta-manage',
  components: {
    'devise': MetaManage
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/settings',
  name: 'devise-settings-index',
  components: {
    'devise': SettingsIndex
  }
}, {
  path: '/devise/templates',
  name: 'devise-templates-index',
  components: {
    'devise': TemplatesIndex
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/sites',
  name: 'devise-sites-index',
  components: {
    'devise': SitesIndex
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/slices',
  name: 'devise-slices-index',
  components: {
    'devise': SlicesIndex
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/templates/:templateId/edit',
  name: 'devise-templates-edit',
  components: {
    'devise': TemplatesEdit
  },
  props: true,
  meta: {
    wide: true
  }
}, {
  path: '/devise/users',
  name: 'devise-users-index',
  components: {
    'devise': UsersIndex
  },
  meta: {
    wide: true
  }
}, {
  path: '/devise/users/:userId/edit',
  name: 'devise-users-edit',
  components: {
    'devise': UsersEdit
  },
  props: true,
  meta: {
    wide: true
  }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ "../devise/vue/src/vuex/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/promise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_common__ = __webpack_require__("../devise/vue/src/vuex/utils/common.js");



var actions = {

  /*
  * Languages
  */
  getLanguages: function getLanguages(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'languages/').then(function (response) {
        context.commit('setLanguages', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createLanguage: function createLanguage(context, language) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'languages/', language).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: 'Your new language has been added.' });
        context.commit('createLanguage', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateLanguage: function updateLanguage(context, language) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'languages/' + language.id, language).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: 'Your new language has been updated.' });
        context.commit('updateLanguage', { language: language, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  /*
  * Media Manager
  */

  setCurrentDirectory: function setCurrentDirectory(context, directory) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      context.commit('setCurrentDirectory', directory);
      resolve();
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  getCurrentFiles: function getCurrentFiles(context, directory) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'media/' + context.state.currentDirectory).then(function (response) {
        context.commit('setFiles', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  getCurrentDirectories: function getCurrentDirectories(context, directory) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'media-directories/' + context.state.currentDirectory).then(function (response) {
        context.commit('setDirectories', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  toggleFile: function toggleFile(context, theFile) {
    var match = context.state.files.find(function (file) {
      return file.name === theFile.name;
    });

    var onOff = typeof match.on === 'undefined' || match.on === false;
    context.commit('toggleFileOnOff', { file: match, on: onOff });
  },
  openFile: function openFile(context, theFile) {
    var match = context.state.files.find(function (file) {
      return file.name === theFile.name;
    });

    context.commit('toggleFileOnOff', { file: match, on: true });
  },
  closeFile: function closeFile(context, theFile) {
    var match = context.state.files.find(function (file) {
      return file.name === theFile.name;
    });

    context.commit('toggleFileOnOff', { file: match, on: false });
  },
  deleteFile: function deleteFile(context, file) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'media/' + file.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'File Deleted', message: 'The file was successfully deleted from the server.' });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createDirectory: function createDirectory(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'media-directories', { directory: payload.directory, name: payload.name }).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Directory Created', message: 'The directory was successfully created.' });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteDirectory: function deleteDirectory(context, directory) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'media-directories', { params: { directory: directory } }).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Directory Deleted', message: 'The directory was successfully deleted from the server.' });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  /*
  * Meta
  */
  getMeta: function getMeta(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'meta/').then(function (response) {
        context.commit('setMeta', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createMeta: function createMeta(context, meta) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'meta/', meta).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: 'Your new meta has been added.' });
        context.commit('createMeta', response.data.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateMeta: function updateMeta(context, meta) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'meta/' + meta.id, meta).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: 'Your new meta has been updated.' });
        context.commit('updateMeta', { meta: meta, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteMeta: function deleteMeta(context, meta) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'meta/' + meta.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: 'The meta has been deleted.' });
        context.commit('deleteMeta', meta);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  /*
  * Models
  */
  getModels: function getModels(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'models/').then(function (response) {
        context.commit('setModels', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  getModelSettings: function getModelSettings(context, modelQuery) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'models/settings?' + modelQuery).then(function (response) {
        context.commit('setModelSettings', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  getModelRecords: function getModelRecords(context, _ref) {
    var model = _ref.model,
        filters = _ref.filters;

    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'models/query?' + model + '&' + __WEBPACK_IMPORTED_MODULE_1__utils_common__["a" /* default */].buildFilterParams(filters)).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Pages
  getPages: function getPages(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'pages/').then(function (response) {
        context.commit('setPages', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  searchPages: function searchPages(context, search) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'pages-suggest/', { params: { term: search } }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  copyPage: function copyPage(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'pages/' + payload.page.id + '/copy', payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.title + ' has been copied from ' + payload.page.title + '.' });
        context.commit('createPage', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  translatePage: function translatePage(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'pages/' + payload.page.id + '/copy', payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.title + ' has been copied for translation from ' + payload.page.title + '.' });
        context.commit('createPage', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createPage: function createPage(context, page) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'pages/', page).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: page.title + ' has been created.' });
        context.commit('createPage', response.data.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updatePage: function updatePage(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'pages/' + payload.page.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.title + ' has been saved.' });
        context.commit('updatePage', { page: payload.page, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deletePage: function deletePage(context, page) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'pages/' + page.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: page.title + ' has been deleted.' });
        context.commit('deletePage', page);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Page versions
  copyPageVersion: function copyPageVersion(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'page-versions', { 'page_version_id': payload.version.id, name: payload.version.name + ' Copy' }).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.version.name + ' has been copied.' });
        context.commit('createPageVersion', { page: payload.page, data: response.data.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deletePageVersion: function deletePageVersion(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'page-versions/' + payload.version.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.version.name + ' has been deleted.' });
        context.commit('deletePageVersion', { page: payload.page, version: payload.version });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updatePageVersion: function updatePageVersion(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'page-versions/' + payload.version.id, payload.version).then(function (response) {
        context.commit('updatePageVersion', { page: payload.page, version: payload.version, data: response.data });
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.version.name + ' has been saved.' });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  getAnalytics: function getAnalytics(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get('http://104.236.153.6/api/v1/analytics').then(function (response) {
        context.commit('updatePageVersionAnalytics', { page: payload.page, version: payload.version, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Sites
  getSites: function getSites(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'sites/').then(function (response) {
        context.commit('setSites', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createSite: function createSite(context, site) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'sites/', site).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: site.name + ' has been created.' });
        context.commit('createSite', response.data.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateSite: function updateSite(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'sites/' + payload.site.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.site.name + ' has been saved.' });
        context.commit('updateSite', { site: payload.site, data: response.data.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteSite: function deleteSite(context, site) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'sites/' + site.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: site.name + ' has been deleted.' });
        context.commit('deleteSite', site);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Slices
  getSlices: function getSlices(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'slices/').then(function (response) {
        context.commit('setSlices', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createSlice: function createSlice(context, slice) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'slices/', slice).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: slice.name + ' has been created.' });
        context.commit('createSlice', response.data.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateSlice: function updateSlice(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'slices/' + payload.slice.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.name + ' has been saved.' });
        context.commit('updateSlice', { slice: payload.slice, data: response.data.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteSlice: function deleteSlice(context, slice) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'slices/' + slice.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: slice.name + ' has been deleted.' });
        context.commit('deleteSlice', slice);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Templates
  createTemplate: function createTemplate(context, template) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'templates/', template).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: template.name + ' has been created.' });
        context.commit('createTemplate', response.data.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateTemplate: function updateTemplate(context, template) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'templates/' + template.id, template).then(function (response) {
        context.commit('updateTemplate', { template: template, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteTemplate: function deleteTemplate(context, template) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'templates/' + template.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: template.name + ' has been deleted.' });
        context.commit('deleteTemplate', template);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateCurrentTemplate: function updateCurrentTemplate(context, templateId) {
    context.commit('updateCurrentTemplate', templateId);
  },
  getTemplates: function getTemplates(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'templates/').then(function (response) {
        context.commit('setTemplates', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Users
  getUsers: function getUsers(context) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.get(context.state.api.baseUrl + 'users/').then(function (response) {
        context.commit('setUsers', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createUser: function createUser(context, user) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.post(context.state.api.baseUrl + 'users/', user).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: user.name + ' has been created.' });
        context.commit('createUser', response.data.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateUser: function updateUser(context, payload) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.put(context.state.api.baseUrl + 'users/' + payload.user.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.name + ' has been saved.' });
        context.commit('updateUser', { user: payload, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteUser: function deleteUser(context, user) {
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      window.axios.delete(context.state.api.baseUrl + 'users/' + user.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: user.name + ' has been deleted.' });
        context.commit('deleteUser', user);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ "../devise/vue/src/vuex/getters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  sliceConfig: function sliceConfig(state) {
    return function (slice) {
      return window.deviseComponents[slice.metadata.name] ? window.deviseComponents[slice.metadata.name] : window.deviseComponents[slice.name];
    };
  },

  fieldConfig: function fieldConfig(state, getters) {
    return function (_ref) {
      var fieldKey = _ref.fieldKey,
          slice = _ref.slice;

      var sliceConfig = getters.sliceConfig(slice);
      if (typeof sliceConfig.config[fieldKey] === 'undefined') {
        throw new ReferenceError('Could not find the configuration for the ' + fieldKey + ' fieldkey from this slice: ' + sliceConfig.name);
      }
      return sliceConfig.config[fieldKey];
    };
  },

  // Languages
  languages: function languages(state) {
    return state.languages;
  },

  // Media manager

  files: function files(state) {
    return state.files;
  },

  directories: function directories(state) {
    return state.directories;
  },

  currentDirectory: function currentDirectory(state) {
    return state.currentDirectory;
  },

  // Meta
  meta: function meta(state) {
    return state.meta;
  },

  // Models
  models: function models(state) {
    return state.models;
  },

  modelSettings: function modelSettings(state) {
    return state.modelSettings;
  },

  // Pages
  pages: function pages(state) {
    return state.pages;
  },

  page: function page(state, getters, rootState) {
    var id = parseInt(rootState.route.params.pageId);
    return state.pages.data.find(function (page) {
      return page.id === id;
    });
  },

  // Sites
  sites: function sites(state) {
    return state.sites;
  },

  // Slices
  slices: function slices(state) {
    return state.slices;
  },

  // Templates
  templates: function templates(state) {
    return state.templates;
  },

  template: function template(state, getters, rootState) {
    var id = parseInt(rootState.route.params.templateId);
    return state.templates.data.find(function (template) {
      return template.id === id;
    });
  },

  // Users
  users: function users(state) {
    return state.users;
  },

  user: function user(state, getters, rootState) {
    var id = parseInt(rootState.route.params.userId);
    return state.users.data.find(function (user) {
      return user.id === id;
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ "../devise/vue/src/vuex/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

/* harmony default export */ __webpack_exports__["a"] = ({

  // Languages
  setLanguages: function setLanguages(state, payload) {
    state.languages = payload;
  },
  createLanguage: function createLanguage(state, payload) {
    state.languages.data.push(payload);
  },
  updateLanguage: function updateLanguage(state, _ref) {
    var language = _ref.language,
        data = _ref.data;

    language = data;
  },


  // Media manager
  setCurrentDirectory: function setCurrentDirectory(state, directory) {
    state.currentDirectory = directory;
  },
  setFiles: function setFiles(state, payload) {
    state.files = payload;
  },
  setDirectories: function setDirectories(state, payload) {
    state.directories = payload;
  },
  toggleFileOnOff: function toggleFileOnOff(state, payload) {
    payload.file.on = payload.on;
    state.files.splice(state.files.indexOf(payload.file), 1, payload.file);
  },


  // Meta
  setMeta: function setMeta(state, payload) {
    state.meta = payload;
  },
  createMeta: function createMeta(state, payload) {
    state.meta.data.push(payload);
  },
  updateMeta: function updateMeta(state, _ref2) {
    var meta = _ref2.meta,
        data = _ref2.data;

    meta = data;
  },
  deleteMeta: function deleteMeta(state, meta) {
    state.meta.data.splice(state.meta.data.indexOf(meta), 1);
  },


  // Models
  setModels: function setModels(state, payload) {
    state.models = payload;
  },
  setModelSettings: function setModelSettings(state, payload) {
    state.modelSettings = payload;
  },


  // Pages
  createPage: function createPage(state, page) {
    state.pages.data.push(page);
  },
  setPages: function setPages(state, payload) {
    state.pages = payload;
  },
  updatePage: function updatePage(state, _ref3) {
    var page = _ref3.page,
        data = _ref3.data;

    page = data;
  },
  deletePage: function deletePage(state, page) {
    state.pages.data.splice(state.pages.data.indexOf(page), 1);
  },


  // Page Versions
  createPageVersion: function createPageVersion(state, _ref4) {
    var page = _ref4.page,
        data = _ref4.data;

    page.versions.push(data);
  },
  deletePageVersion: function deletePageVersion(state, _ref5) {
    var page = _ref5.page,
        version = _ref5.version;

    var theVersion = page.versions.find(function (ver) {
      return ver.id === version.id;
    });
    page.versions.splice(page.versions.indexOf(theVersion), 1);
  },
  updatePageVersion: function updatePageVersion(state, _ref6) {
    var page = _ref6.page,
        version = _ref6.version,
        data = _ref6.data;

    var theVersion = page.versions.find(function (ver) {
      return ver.id === version.id;
    });
    theVersion = data;
    return theVersion;
  },
  updatePageVersionAnalytics: function updatePageVersionAnalytics(state, _ref7) {
    var page = _ref7.page,
        version = _ref7.version,
        data = _ref7.data;

    var theVersion = page.versions.find(function (ver) {
      return ver.id === version.id;
    });
    theVersion = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, theVersion, { analytics: data });
    return theVersion;
  },


  // Sites
  createSite: function createSite(state, site) {
    state.sites.data.push(site);
  },
  setSites: function setSites(state, payload) {
    state.sites = payload;
  },
  updateSite: function updateSite(state, _ref8) {
    var site = _ref8.site,
        data = _ref8.data;

    site.name = data.name;
    site.domain = data.domain;
    site.languages = data.languages;
  },
  deleteSite: function deleteSite(state, site) {
    state.sites.data.splice(state.sites.data.indexOf(site), 1);
  },


  // Slices
  setSlices: function setSlices(state, payload) {
    state.slices = payload;
  },
  createSlice: function createSlice(state, slice) {
    state.slices.data.push(slice);
  },
  updateSlice: function updateSlice(state, _ref9) {
    var slice = _ref9.slice,
        data = _ref9.data;

    slice.name = data.name;
  },
  deleteSlice: function deleteSlice(state, slice) {
    state.slices.data.splice(state.slices.data.indexOf(slice), 1);
  },


  // Templates
  createTemplate: function createTemplate(state, template) {
    state.templates.data.push(template);
  },
  updateTemplate: function updateTemplate(state, _ref10) {
    var template = _ref10.template,
        data = _ref10.data;

    template = data;
  },
  deleteTemplate: function deleteTemplate(state, template) {
    state.templates.data.splice(state.templates.data.indexOf(template), 1);
  },
  updateCurrentTemplate: function updateCurrentTemplate(state, templateId) {
    state.currentTemplate = templateId;
  },
  setTemplates: function setTemplates(state, payload) {
    state.templates = payload;
  },


  // User
  createUser: function createUser(state, user) {
    state.users.data.push(user);
  },
  setUsers: function setUsers(state, payload) {
    state.users = payload;
  },
  updateUser: function updateUser(state, _ref11) {
    var user = _ref11.user,
        data = _ref11.data;

    user = data;
  },
  deleteUser: function deleteUser(state, user) {
    state.users.data.splice(state.users.data.indexOf(user), 1);
  }
});

/***/ }),

/***/ "../devise/vue/src/vuex/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("../devise/vue/node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("../devise/vue/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("../devise/vue/src/vuex/mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../devise/vue/src/vuex/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__("../devise/vue/src/vuex/getters.js");






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// root state object.
// each Vuex instance is just a single state tree.
var state = {
  // Application State
  api: {
    baseUrl: '/api/devise/'
  },
  // Media Manager
  currentDirectory: '.',
  files: [],
  directories: [],
  languages: {
    data: []
  },
  meta: {
    data: []
  },
  models: {
    data: []
  },
  modelSettings: {},
  pages: {
    data: []
  },
  sites: {
    data: []
  },
  slices: {
    data: []
  },
  templates: {
    data: []
  },
  users: {
    data: []
  }

  // A Vuex instance is created by combining the state, the actions,
  // and the mutations. Because the actions and mutations are just
  // functions that do not depend on the instance itself, they can
  // be easily tested or even hot-reloaded (see counter-hot example).
  //
  // You can also provide middlewares, which is just an array of
  // objects containing some hooks to be called at initialization
  // and after each mutation.
};/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__["a" /* default */]
});

/***/ }),

/***/ "../devise/vue/src/vuex/utils/common.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__("../devise/vue/node_modules/babel-runtime/core-js/json/stringify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__("../devise/vue/node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);





var funcs = {
  // Build the parameters for the GET based on the filters.repertoire
  buildFilterParams: function buildFilterParams(filter) {
    var filters = JSON.parse(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(filter));
    var params = {};
    var sortParams = funcs.buildSortParams(filters.sort);
    var relatedParams = funcs.buildRelatedParams(filters.related);
    var searchParams = filters.search;
    var pageParams = filters.page;

    if (pageParams !== '') {
      params['page'] = pageParams;
    }

    if (sortParams !== '') {
      params['sort'] = sortParams;
    }

    if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(filters.dates).length > 0) {
      var datesParams = {};
      for (var param in filters.dates) {
        if (filters.dates[param].after || filters.dates[param].before) {
          datesParams[param] = filters.dates[param].after + ',' + filters.dates[param].before;
        }
      }

      if (!params.filters) {
        __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(params, 'filters', {});
      }

      __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(params['filters'], 'dates', datesParams);
    }

    if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(relatedParams).length > 0) {
      for (var _param in relatedParams) {
        if (relatedParams.hasOwnProperty(_param)) {
          if (relatedParams[_param] === '') {
            __WEBPACK_IMPORTED_MODULE_3_vue___default.a.delete(relatedParams, _param);
          }
        }
      }
      if (!params.filters) {
        __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(params, 'filters', {});
      }

      __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(params['filters'], 'related', relatedParams);
    }

    if (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(searchParams).length > 0) {
      for (var _param2 in searchParams) {
        if (searchParams.hasOwnProperty(_param2)) {
          if (searchParams[_param2] === '') {
            __WEBPACK_IMPORTED_MODULE_3_vue___default.a.delete(searchParams, _param2);
          }
        }
      }
      if (!params.filters) {
        __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(params, 'filters', {});
      }

      __WEBPACK_IMPORTED_MODULE_3_vue___default.a.set(params['filters'], 'search', searchParams);
    }

    params = funcs.serialize(params);

    return params;
  },


  // Build the sort parameters
  buildSortParams: function buildSortParams(sorts) {
    var sortString = '';

    for (var prop in sorts) {
      sortString += sorts[prop] === 'desc' ? '-' + prop : prop;
      sortString += ',';
    }

    sortString = sortString.substr(0, sortString.length - 1);

    return sortString;
  },


  // Build the related parameters
  buildRelatedParams: function buildRelatedParams(related) {
    var relatedParams = {};

    for (var prop in related) {
      relatedParams[prop] = related[prop].join();
    }

    return relatedParams;
  },


  // Build the related parameters
  buildSearchParams: function buildSearchParams(search) {
    var searchParams = {};

    for (var prop in search) {
      searchParams[prop] = search[prop].join();
    }

    return searchParams;
  },
  serialize: function serialize(obj, prefix) {
    var str = [];
    var p;

    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + '[' + p + ']' : p;
        var v = obj[p];

        str.push(v !== null && (typeof v === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(v)) === 'object' ? funcs.serialize(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }

    return str.join('&');
  },
  formatMoney: function formatMoney(n) {
    var j = 0;
    var c = 2;
    var d = '.';
    var t = ',';
    var s = n < 0 ? '-' : '';
    var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));

    j = (j = i.length) > 3 ? j % 3 : 0;

    return '$' + (s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ''));
  }
};

/* harmony default export */ __webpack_exports__["a"] = (funcs);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/App.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ExperiencesContainer',
  data: function data() {
    return {};
  },

  computed: {
    key: function key() {
      return this.$route.name + '-' + this.$route.params.featurename;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Experience.vue":
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
  name: 'Experience',
  methods: {
    goToIndex: function goToIndex() {
      this.$router.push({ name: 'index' });
    },
    goToPrevious: function goToPrevious() {
      this.$router.push({ name: 'experience', params: { experiencename: this.previous.name.text.toLowerCase() } });
    },
    goToNext: function goToNext() {
      this.$router.push({ name: 'experience', params: { experiencename: this.next.name.text.toLowerCase() } });
    }
  },
  computed: {
    experiences: function experiences() {
      return this.getCollectionData(this.dvs.slices, 'Experience');
    },
    experience: function experience() {
      var self = this;

      return this.experiences.find(function (experience) {
        return experience.name.text.toLowerCase() === self.$route.params.experiencename;
      });
    },
    previous: function previous() {
      var index = this.experiences.indexOf(this.experience);
      if (index > 0) {
        return this.experiences[index - 1];
      }

      return this.experiences[this.experiences.length - 1];
    },
    next: function next() {
      var index = this.experiences.indexOf(this.experience);
      if (index < this.experiences.length - 1) {
        return this.experiences[index + 1];
      }

      return this.experiences[0];
    }
  },
  props: ['dvs']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Experiences.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Experiences',
  methods: {
    goToExperience: function goToExperience(experience) {
      this.$router.push({ name: 'experience', params: { experiencename: experience.name.text.toLowerCase() } });
    }
  },
  computed: {
    experiences: function experiences() {
      return this.getCollection(this.dvs.slices, 'DeviseExperience');
    }
  },
  props: ['dvs']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Hero.vue":
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Hero'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/devise-admin/MainMenu.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
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
  name: 'MainMenu',
  data: function data() {
    return {};
  },

  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/devise-admin/events/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal__ = __webpack_require__("../devise/vue/src/components/utilities/Modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  name: 'EventsIndex',
  data: function data() {
    return {
      modulesToLoad: 1,
      showCreate: false,
      showEdit: false,
      editEvent: {
        id: null,
        name: null,
        description: null,
        date: null
      },
      newEvent: {
        name: null,
        description: null,
        date: null
      }
    };
  },
  mounted: function mounted() {
    this.retrieveAllEvents();
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapActions */])(['getEvents', 'createEvent', 'updateEvent', 'deleteEvent']), {
    requestCreateEvent: function requestCreateEvent() {
      var self = this;
      this.createEvent(this.newEvent).then(function () {
        self.newEvent.name = null;
        self.newEvent.description = null;
        self.showCreate = false;
      });
    },
    showEditEvent: function showEditEvent(event) {
      this.editEvent.id = event.id;
      this.editEvent.name = event.name;
      this.editEvent.description = event.description;
      this.editEvent.date = __WEBPACK_IMPORTED_MODULE_1_moment___default()(event.date).format('YYYY-MM-DDTHH:mm:ss');
      this.showEdit = true;
    },
    requestEditEvent: function requestEditEvent() {
      var self = this;
      this.updateEvent({ event: this.originalEvent(this.editEvent.id), data: this.editEvent }).then(function () {
        self.editEvent.id = null;
        self.editEvent.name = null;
        self.editEvent.description = null;
        self.editEvent.date = null;
        self.showEdit = false;
      });
    },
    requestDeleteEvent: function requestDeleteEvent(event) {
      var self = this;
      this.deleteEvent(event).then(function () {
        self.retrieveAllEvents();
      });
    },
    retrieveAllEvents: function retrieveAllEvents() {
      var loadbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.getEvents().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad);
        }
      });
    },
    originalEvent: function originalEvent(id) {
      return this.events.data.find(function (event) {
        return event.id === id;
      });
    }
  }),
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])(['events']), {
    createInvalid: function createInvalid() {
      return this.newEvent.name === null || this.newEvent.description === null || this.newEvent.date === null;
    },
    editInvalid: function editInvalid() {
      return this.editEvent.name === null || this.editEvent.description === null || this.editEvent.date === null;
    }
  }),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/devise-admin/menus/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal__ = __webpack_require__("../devise/vue/src/components/utilities/Modal.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  name: 'MenusIndex',
  data: function data() {
    return {
      modulesToLoad: 1,
      showCreate: false,
      showEdit: false,
      editMenu: {
        id: null,
        name: null,
        url: null
      },
      newMenu: {
        name: null,
        url: null
      }
    };
  },
  mounted: function mounted() {
    this.retrieveAllMenus();
  },

  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['getMenus', 'createMenu', 'updateMenu', 'deleteMenu']), {
    requestCreateMenu: function requestCreateMenu() {
      var self = this;
      this.createMenu(this.newMenu).then(function () {
        self.newMenu.name = null;
        self.newMenu.url = null;
        self.showCreate = false;
      });
    },
    showEditMenu: function showEditMenu(menu) {
      this.editMenu.id = menu.id;
      this.editMenu.name = menu.name;
      this.editMenu.url = menu.url;
      this.showEdit = true;
    },
    requestEditMenu: function requestEditMenu() {
      var self = this;
      this.updateMenu({ menu: this.originalMenu(this.editMenu.id), data: this.editMenu }).then(function () {
        self.editMenu.id = null;
        self.editMenu.name = null;
        self.editMenu.url = null;
        self.showEdit = false;
      });
    },
    requestDeleteMenu: function requestDeleteMenu(menu) {
      var self = this;
      this.deleteMenu(menu).then(function () {
        self.retrieveAllMenus();
      });
    },
    retrieveAllMenus: function retrieveAllMenus() {
      var loadbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.getMenus().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad);
        }
      });
    },
    originalMenu: function originalMenu(id) {
      return this.menus.data.find(function (menu) {
        return menu.id === id;
      });
    }
  }),
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['menus']), {
    createInvalid: function createInvalid() {
      return this.newMenu.name === null || this.newMenu.url === null;
    },
    editInvalid: function editInvalid() {
      return this.editMenu.name === null || this.editMenu.url === null;
    }
  }),
  components: {
    DeviseModal: __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_components_utilities_Modal___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-021c1b8a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Messages.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.errors.length > 0,
                expression: "errors.length > 0"
              }
            ],
            staticClass: "alert-message error"
          },
          [
            _c("h5", [
              _vm._v(_vm._s(_vm.mainTitle) + " "),
              _c("i", {
                staticClass: "cursor-pointer ion-icon ion-android-close",
                on: {
                  click: function($event) {
                    _vm.closeErrors()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "ul",
              [
                _c(
                  "transition-group",
                  { attrs: { name: "list", tag: "div" } },
                  _vm._l(_vm.errors, function(error) {
                    return _c("li", { key: _vm.randomString(5) }, [
                      _c("h6", [_vm._v(_vm._s(error.title))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(error.message))]),
                      _vm._v(" "),
                      error.code
                        ? _c("p", { staticClass: "text-xs" }, [
                            _vm._v(_vm._s(error.code))
                          ])
                        : _vm._e()
                    ])
                  })
                )
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.messages.length > 0,
                expression: "messages.length > 0"
              }
            ],
            staticClass: "alert-message"
          },
          [
            _c("h5", [
              _vm._v("Hey There! "),
              _c("i", {
                staticClass: "cursor-pointer ion-icon ion-android-close",
                on: {
                  click: function($event) {
                    _vm.closeMessages()
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "ul",
              [
                _c(
                  "transition-group",
                  { attrs: { name: "list", tag: "div" } },
                  _vm._l(_vm.messages, function(message) {
                    return _c("li", { key: _vm.randomString(5) }, [
                      _c("h6", [_vm._v(_vm._s(message.title))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(message.message))])
                    ])
                  })
                )
              ],
              1
            )
          ]
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-021c1b8a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07ce8b9b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/PreviewSettings.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.slices.data.length > 0 && _vm.localValue.name
    ? _c("div", [
        _c(
          "div",
          {
            staticClass:
              "dvs-flex dvs-justify-between dvs-block dvs-mb-2 dvs-template-switch-sm dvs-ml-4",
            on: {
              click: function($event) {
                _vm.toggleSlice()
              }
            }
          },
          [
            _c("strong", [_vm._v(_vm._s(_vm.theSlice().name))]),
            _vm._v(" "),
            _c("div", { staticClass: "dvs-relative" }, [
              _c("i", {
                staticClass: "ion-gear-a dvs-absolute dvs-pin-r dvs-pin-t",
                on: {
                  click: function($event) {
                    _vm.toggleShowControls()
                  }
                }
              }),
              _vm._v(" "),
              _vm.showControls
                ? _c("div", {
                    staticClass: "dvs-blocker dvs-blocker-light",
                    on: {
                      click: function($event) {
                        _vm.toggleShowControls()
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.showControls &&
              _vm.localValue.type !== "model" &&
              _vm.localValue.type !== "repeats"
                ? _c(
                    "div",
                    {
                      staticClass:
                        "dvs-absolute dvs-pin-t dvs-pin-r dvs-mt-10 dvs-p-4 dvs-bg-white dvs-rounded-sm dvs-min-w-48 dvs-text-center dvs-shadow-lg dvs-z-40"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "dvs-btn dvs-btn-xs dvs-btn-ghost dvs-mb-4",
                          on: {
                            click: function($event) {
                              _vm.addSlice("above")
                            }
                          }
                        },
                        [_vm._v("Insert Slice Above")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "dvs-btn dvs-btn-xs dvs-btn-ghost",
                          on: {
                            click: function($event) {
                              _vm.addSlice("below")
                            }
                          }
                        },
                        [_vm._v("Insert Slice Below")]
                      )
                    ]
                  )
                : _vm._e()
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dvs-collapsed dvs-pl-4" },
          [
            _vm.localValue.type === "repeats"
              ? _c("fieldset", { staticClass: "dvs-fieldset dvs-mb-4" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "dvs-font-bold dvs-mb-1 dvs-block dvs-large-label"
                    },
                    [
                      _c("strong", [
                        _vm._v(
                          'Amount of Demo "' +
                            _vm._s(_vm.theSlice().name) +
                            '" Instances'
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "dvs-flex" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.localValue.settings.numberOfInstances,
                          expression: "localValue.settings.numberOfInstances",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
                      attrs: { type: "number", min: "0", max: "50" },
                      domProps: {
                        value: _vm.localValue.settings.numberOfInstances
                      },
                      on: {
                        keyup: _vm.updateValue,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.localValue.settings,
                            "numberOfInstances",
                            _vm._n($event.target.value)
                          )
                        },
                        blur: function($event) {
                          _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.localValue.settings.numberOfInstances,
                          expression: "localValue.settings.numberOfInstances",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "dvs-w-3/4",
                      attrs: { type: "range", max: "50" },
                      domProps: {
                        value: _vm.localValue.settings.numberOfInstances
                      },
                      on: {
                        change: _vm.updateValue,
                        __r: function($event) {
                          _vm.$set(
                            _vm.localValue.settings,
                            "numberOfInstances",
                            _vm._n($event.target.value)
                          )
                        },
                        blur: function($event) {
                          _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.getComponent(_vm.theSlice().component).config, function(
              field,
              fieldKey
            ) {
              return _c(
                "fieldset",
                { key: fieldKey, staticClass: "dvs-mb-4" },
                [
                  field.type
                    ? [
                        _c(
                          "label",
                          {
                            staticClass:
                              "dvs-font-bold dvs-mb-1 dvs-block dvs-large-label"
                          },
                          [_vm._v(_vm._s(field.label))]
                        ),
                        _vm._v(" "),
                        _c(
                          field.type.charAt(0).toUpperCase() +
                            field.type.slice(1) +
                            "Controls",
                          {
                            tag: "component",
                            on: {
                              change: function($event) {
                                _vm.updateValue()
                              }
                            },
                            model: {
                              value: _vm.localValue.config[fieldKey],
                              callback: function($$v) {
                                _vm.$set(_vm.localValue.config, fieldKey, $$v)
                              },
                              expression: "localValue.config[fieldKey]"
                            }
                          }
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
            }),
            _vm._v(" "),
            typeof _vm.localValue.slices !== "undefined" &&
            _vm.localValue.slices.length > 0
              ? _c("div", [
                  _c(
                    "ul",
                    { staticClass: "dvs-list-reset" },
                    _vm._l(_vm.localValue.slices, function(subSlice, key) {
                      return _vm.theSlice(subSlice) && subSlice.metadata
                        ? _c(
                            "li",
                            {
                              staticClass:
                                "dvs-mb-2 dvs-template-editor-collapsable",
                              class: { "dvs-open": subSlice.metadata.open }
                            },
                            [
                              _c("template-preview-settings", {
                                on: {
                                  addSlice: _vm.addSubSlice,
                                  toggleSlice: function($event) {
                                    _vm.toggleSlice(subSlice)
                                  },
                                  toggleModelControls: _vm.toggleModelControls,
                                  toggleCreateChildrenSlices:
                                    _vm.toggleCreateChildrenSlices
                                },
                                model: {
                                  value: _vm.localValue.slices[key],
                                  callback: function($$v) {
                                    _vm.$set(_vm.localValue.slices, key, $$v)
                                  },
                                  expression: "localValue.slices[key]"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    })
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            (typeof _vm.localValue.slices === "undefined" ||
              _vm.localValue.slices.length < 1) &&
            _vm.localValue.type !== "model"
              ? _c("div", { staticClass: "dvs-flex dvs-justify-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn dvs-btn-xs dvs-btn-ghost",
                      on: {
                        click: function($event) {
                          _vm.toggleShowCreateChildrenSlices()
                        }
                      }
                    },
                    [_vm._v("Create Children Slices")]
                  )
                ])
              : _vm._e()
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07ce8b9b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0883b08d\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Field.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dvs-relative" }, [
    _c(
      "div",
      { staticClass: "dvs-flex dvs-justify-between dvs-items-center" },
      [
        _c(
          "div",
          {
            staticClass:
              "dvs-large-label dvs-flex dvs-items-center dvs-mr-2 dvs--ml-4"
          },
          [
            _c("div", {
              directives: [
                {
                  name: "tippy",
                  rawName: "v-tippy",
                  value: _vm.tippyConfiguration,
                  expression: "tippyConfiguration"
                }
              ],
              staticClass: "dvs-badge dvs-badge-empty dvs-mr-2",
              class: {
                "dvs-bg-green-dark": _vm.localValue.enabled,
                "dvs-bg-grey-light": !_vm.localValue.enabled
              },
              attrs: { title: _vm.enabledTip(_vm.localValue.enabled) }
            }),
            _vm._v("\n      " + _vm._s(_vm.options.label) + "\n    ")
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "dvs-btn dvs-btn-ghost dvs-btn-xs dvs-min-w-24",
            on: {
              click: function($event) {
                _vm.showEditor = !_vm.showEditor
              }
            }
          },
          [_vm._v("Edit Field")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "dvs-bg-grey-lighter dvs-p-4 dvs-mt-2 dvs-text-xs dvs-rounded-sm"
      },
      [_vm._t("preview")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showEditor,
            expression: "showEditor"
          }
        ],
        staticClass:
          "dvs-modal dvs-fixed dvs-pin-b dvs-pin-l dvs-mx-8 dvs-mb-8 dvs-z-10 dvs-min-w-3/5"
      },
      [
        _vm._t("editor"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dvs-flex dvs-items-center dvs-mt-4 dvs-justify-between"
          },
          [
            _c("div", [
              _c(
                "button",
                {
                  staticClass: "dvs-btn dvs-mr-2",
                  on: {
                    click: function($event) {
                      _vm.showEditor = false
                    }
                  }
                },
                [_vm._v("Done")]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "dvs-btn", on: { click: _vm.cancel } },
                [_vm._v("Cancel")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "dvs-flex dvs-items-center dvs-justify-between" },
              [
                _c("label", { staticClass: "dvs-mr-2" }, [
                  _vm._v("Field Enabled")
                ]),
                _vm._v(" "),
                _c("toggle", {
                  attrs: { id: _vm.randomString(8) },
                  model: {
                    value: _vm.localValue.enabled,
                    callback: function($$v) {
                      _vm.$set(_vm.localValue, "enabled", $$v)
                    },
                    expression: "localValue.enabled"
                  }
                })
              ],
              1
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0883b08d", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0c0afb62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Experiences.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", {
      staticClass: "text-blue-dark text-center font-light mb-8",
      domProps: { innerHTML: _vm._s(_vm.dvs.title.text) }
    }),
    _vm._v(" "),
    _c(
      "ul",
      {
        staticClass: "flex list-reset flex-wrap align-stretch justify-stretch"
      },
      _vm._l(_vm.experiences, function(experience) {
        return _c("li", { staticClass: "w-full md:w-1/3 p-8 text-center" }, [
          _c("h6", { staticClass: "uppercase text-blue-dark mb-1" }, [
            _vm._v(_vm._s(experience.name.text))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-sm my-4" }, [
            _vm._v(_vm._s(experience.description.text))
          ]),
          _vm._v(" "),
          _c("i", {
            staticClass:
              "ion-android-search text-blue-dark text-2xl cursor-pointer",
            on: {
              click: function($event) {
                _vm.goToExperience(experience)
              }
            }
          })
        ])
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c0afb62", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d839aac\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Color.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "dvs-fieldset" }, [
    _c(
      "label",
      { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
      [_vm._v("Hex Value")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.color,
            expression: "localValue.color"
          }
        ],
        staticClass: "dvs-mr-4 dvs-w-full",
        attrs: { type: "text" },
        domProps: { value: _vm.localValue.color },
        on: {
          keyup: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.localValue, "color", $event.target.value)
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d839aac", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-130f01ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dvs-fixed dvs-pin" }, [
    _c("div", {
      staticClass: "dvs-blocker dvs-fixed dvs-pin",
      on: { click: _vm.close }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "dvs-absolute dvs-absolute-center dvs-z-50 dvs-bg-white dvs-p-8 dvs-rounded dvs-shadow-lg"
      },
      [
        _c("i", {
          staticClass:
            "ion-close-round dvs-font-xl dvs-absolute dvs-pin-t dvs-pin-r dvs-m-8 dvs-cursor-pointer",
          on: { click: _vm.close }
        }),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-130f01ce", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-13120e44\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/SuperTable.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "table",
        { staticClass: "dvs-table" },
        [
          _c(
            "tr",
            _vm._l(_vm.columns, function(column, key) {
              return _vm.showColumn(column)
                ? _c(
                    "th",
                    {
                      key: column.key,
                      class: {
                        "dvs-hidden lg:dvs-table-cell": !column.showMobile
                      },
                      on: {
                        click: function($event) {
                          _vm.showControls(column.key)
                        }
                      }
                    },
                    [
                      !column.toggleColumns
                        ? _c(
                            "div",
                            { staticClass: "dvs-flex" },
                            [
                              _c("div", [
                                _vm._v(" " + _vm._s(column.label) + " ")
                              ]),
                              _vm._v(" "),
                              _c("column-controls", {
                                ref: column.key,
                                refInFor: true,
                                staticClass: "dvs-hidden lg:dvs-block",
                                attrs: { column: column },
                                model: {
                                  value: _vm.filters,
                                  callback: function($$v) {
                                    _vm.filters = $$v
                                  },
                                  expression: "filters"
                                }
                              })
                            ],
                            1
                          )
                        : _c(
                            "div",
                            { staticClass: "flex" },
                            [
                              _c("toggle-columns", {
                                staticClass: "dvs-hidden lg:dvs-block",
                                model: {
                                  value: _vm.columns,
                                  callback: function($$v) {
                                    _vm.columns = $$v
                                  },
                                  expression: "columns"
                                }
                              }),
                              _vm._v(
                                "\n          " +
                                  _vm._s(column.label) +
                                  "\n        "
                              )
                            ],
                            1
                          )
                    ]
                  )
                : _vm._e()
            })
          ),
          _vm._v(" "),
          _vm._l(_vm.records, function(record, rkey) {
            return _c(
              "tr",
              { key: record.id },
              [
                _vm._l(_vm.columns, function(column, index) {
                  return _vm.showColumn(column)
                    ? [
                        _c(
                          "td",
                          {
                            class: {
                              "dvs-hidden lg:dvs-table-cell": !column.showMobile
                            }
                          },
                          [
                            column.template
                              ? _c("cell", {
                                  attrs: {
                                    record: record,
                                    contents: _vm.getRecordColumn(
                                      record,
                                      column.key
                                    )
                                  }
                                })
                              : _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getRecordColumn(record, column.key)
                                    )
                                  )
                                ])
                          ],
                          1
                        )
                      ]
                    : _vm._e()
                })
              ],
              2
            )
          }),
          _vm._v(" "),
          !_vm.records.length
            ? _c("tr", [
                _c(
                  "td",
                  {
                    staticClass: "dvs-text-center",
                    attrs: { colspan: _vm.columns.length }
                  },
                  [_vm._v("No Results Found")]
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.meta ? _c("pagination", { attrs: { meta: _vm.meta } }) : _vm._e(),
      _vm._v(" "),
      _c("div", [
        _c(
          "button",
          { staticClass: "dvs-btn", on: { click: _vm.updateValue } },
          [_vm._v("Done")]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "dvs-btn", on: { click: _vm.cancel } }, [
          _vm._v("Cancel")
        ])
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-13120e44", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-14515f2a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/media-manager/Breadcrumbs.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full flex items-center" },
    [
      _vm.currentDirectory !== ""
        ? [
            _c(
              "span",
              {
                staticClass: "cursor-pointer pr-2",
                on: {
                  click: function($event) {
                    _vm.goToHome()
                  }
                }
              },
              [_vm._v("Home")]
            ),
            _vm._v(" "),
            _vm._l(_vm.directoriesObj, function(dir, key) {
              return [
                _vm._v("\n      > "),
                _c(
                  "span",
                  {
                    staticClass: "cursor-pointer px-2",
                    on: {
                      click: function($event) {
                        _vm.chooseDirectory(key)
                      }
                    }
                  },
                  [_vm._v(_vm._s(dir))]
                )
              ]
            })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14515f2a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-155056d8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Wysiwyg.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "dvs-fieldset" }, [
    _c(
      "label",
      { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
      [_vm._v("Number of example words to display")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.settings.numberOfWords,
            expression: "localValue.settings.numberOfWords"
          }
        ],
        staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
        attrs: { type: "number", min: "0", max: "200" },
        domProps: { value: _vm.localValue.settings.numberOfWords },
        on: {
          keyup: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.localValue.settings,
              "numberOfWords",
              $event.target.value
            )
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.settings.numberOfWords,
            expression: "localValue.settings.numberOfWords"
          }
        ],
        staticClass: "dvs-w-3/4",
        attrs: { type: "range", max: "200" },
        domProps: { value: _vm.localValue.settings.numberOfWords },
        on: {
          change: _vm.updateValue,
          __r: function($event) {
            _vm.$set(
              _vm.localValue.settings,
              "numberOfWords",
              $event.target.value
            )
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-155056d8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2b68eba2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/Editor.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dvs-p-8" }, [
    _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Edit Page")]),
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
      [_vm._v("Go to Administration")]
    ),
    _vm._v(" "),
    _c("button", { staticClass: "dvs-btn dvs-btn-ghost dvs-w-full dvs-mb-8" }, [
      _vm._v("Save This Page")
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "dvs-flex dvs-w-full dvs-justify-center dvs-items-center dvs-mb-8"
      },
      [
        _c("i", {
          staticClass:
            "ion-android-desktop dvs-text-2xl dvs-mr-6 dvs-cursor-pointer",
          class: { "dvs-text-green-dark": _vm.previewMode === "desktop" },
          on: {
            click: function($event) {
              _vm.setPreviewMode("desktop")
            }
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "ion-ipad dvs-text-3xl dvs-mr-6 dvs-cursor-pointer",
          class: { "dvs-text-green-dark": _vm.previewMode === "tablet" },
          on: {
            click: function($event) {
              _vm.setPreviewMode("tablet")
            }
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass:
            "ion-android-phone-portrait dvs-text-2xl dvs-mr-6 dvs-cursor-pointer",
          class: {
            "dvs-text-green-dark": _vm.previewMode === "mobile-portrait"
          },
          on: {
            click: function($event) {
              _vm.setPreviewMode("mobile-portrait")
            }
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass:
            "ion-android-phone-landscape dvs-text-2xl dvs-cursor-pointer",
          class: {
            "dvs-text-green-dark": _vm.previewMode === "mobile-landscape"
          },
          on: {
            click: function($event) {
              _vm.setPreviewMode("mobile-landscape")
            }
          }
        })
      ]
    ),
    _vm._v(" "),
    _c("ul", { staticClass: "dvs-list-reset" }, [
      _c(
        "li",
        {
          staticClass: "dvs-collapsable dvs-mb-2",
          class: { "dvs-open": _vm.pageSettingsOpen }
        },
        [
          _c(
            "div",
            {
              staticClass: "dvs-switch",
              on: { click: _vm.togglePageSettings }
            },
            [_vm._v("\n        Page Settings\n      ")]
          ),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-collapsable dvs-mb-2",
          class: { "dvs-open": _vm.pageContentOpen }
        },
        [
          _c(
            "div",
            { staticClass: "dvs-switch", on: { click: _vm.togglePageContent } },
            [_vm._v("\n        Page Content\n      ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dvs-collapsed dvs-mt-4" }, [
            _c(
              "ul",
              { staticClass: "dvs-list-reset" },
              _vm._l(_vm.slices, function(slice, key) {
                return _c(
                  "li",
                  {
                    staticClass: "dvs-mb-4 dvs-collapsable",
                    class: { "dvs-open": slice.metadata.open }
                  },
                  [
                    _c(
                      "strong",
                      {
                        staticClass:
                          "dvs-block dvs-mb-2 dvs-switch-sm dvs-ml-4",
                        on: {
                          click: function($event) {
                            _vm.toggleSlice(slice)
                          }
                        }
                      },
                      [_vm._v(_vm._s(slice.metadata.label))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "dvs-collapsed" },
                      [_c("slice-editor", { attrs: { slice: slice } })],
                      1
                    )
                  ]
                )
              })
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dvs-collapsed dvs-mt-4" }, [
      _c("fieldset", { staticClass: "dvs-fieldset" }, [
        _c("label", [_vm._v("Page Title")]),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "text", placeholder: "Title of the Page" }
        })
      ]),
      _vm._v(" "),
      _c("fieldset", { staticClass: "dvs-fieldset" }, [
        _c("label", [_vm._v("Description")]),
        _vm._v(" "),
        _c("textarea", {
          staticClass: "dvs-h-24",
          attrs: {
            placeholder:
              "Description of the Page - Try to aim for around 150 - 300 characters."
          }
        })
      ]),
      _vm._v(" "),
      _c("fieldset", { staticClass: "dvs-fieldset" }, [
        _c("label", [_vm._v("Canonical")]),
        _vm._v(" "),
        _c("input", { attrs: { type: "text", placeholder: "Canonical" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b68eba2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c2ec037\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Link.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.text === null || _vm.localValue.text === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _c(
            "a",
            {
              attrs: {
                href: _vm.localValue.href,
                target: _vm.localValue.target
              }
            },
            [_vm._v("localValue.text")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "template",
        { slot: "editor" },
        [
          _c("label", [_vm._v("Label")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localValue.text,
                expression: "localValue.text"
              }
            ],
            staticClass: "dvs-mb-4",
            attrs: { type: "text" },
            domProps: { value: _vm.localValue.text },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.localValue, "text", $event.target.value)
                },
                function($event) {
                  _vm.updateValue()
                }
              ]
            }
          }),
          _vm._v(" "),
          _c("label", [_vm._v("Link Mode")]),
          _vm._v(" "),
          _c("div", { staticClass: "dvs-flex" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.localValue.mode,
                  expression: "localValue.mode"
                }
              ],
              staticClass: "dvs-w-auto dvs-mr-2",
              attrs: { type: "radio", value: "url" },
              domProps: { checked: _vm._q(_vm.localValue.mode, "url") },
              on: {
                input: function($event) {
                  _vm.updateValue()
                },
                change: function($event) {
                  _vm.$set(_vm.localValue, "mode", "url")
                }
              }
            }),
            _vm._v(" "),
            _c("label", [_vm._v("URL")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dvs-flex dvs-mb-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.localValue.mode,
                  expression: "localValue.mode"
                }
              ],
              staticClass: "dvs-w-auto dvs-mr-2",
              attrs: { type: "radio", value: "page" },
              domProps: { checked: _vm._q(_vm.localValue.mode, "page") },
              on: {
                input: function($event) {
                  _vm.updateValue()
                },
                change: function($event) {
                  _vm.$set(_vm.localValue, "mode", "page")
                }
              }
            }),
            _vm._v(" "),
            _c("label", [_vm._v("Page")])
          ]),
          _vm._v(" "),
          _vm.localValue.mode === "url"
            ? [
                _c("label", [_vm._v("URL")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localValue.href,
                      expression: "localValue.href"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.localValue.href },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.localValue, "href", $event.target.value)
                      },
                      function($event) {
                        _vm.updateValue()
                      }
                    ]
                  }
                })
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.localValue.mode === "page"
            ? [
                _c("label", [_vm._v("Page")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localValue.pageId,
                      expression: "localValue.pageId"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.localValue.pageId },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.localValue, "pageId", $event.target.value)
                      },
                      function($event) {
                        _vm.updateValue()
                      }
                    ]
                  }
                })
              ]
            : _vm._e()
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c2ec037", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-332ce276\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Color.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      ref: "field",
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.color === null || _vm.color === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _c("div", { staticClass: "dvs-flex dvs-items-center" }, [
              _c("div", {
                staticClass: "dvs-w-4 dvs-h-4 dvs-rounded-full dvs-mr-4",
                style: { "background-color": _vm.color }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "dvs-font-bold" }, [
                _vm._v(_vm._s(_vm.color))
              ])
            ])
      ]),
      _vm._v(" "),
      _c(
        "template",
        { slot: "editor" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localValue.text,
                expression: "localValue.text"
              }
            ],
            attrs: { type: "hidden", maxlength: _vm.getMaxLength },
            domProps: { value: _vm.localValue.text },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.localValue, "text", $event.target.value)
                },
                function($event) {
                  _vm.updateValue()
                }
              ]
            }
          }),
          _vm._v(" "),
          _c("photoshop-picker", {
            on: {
              input: function($event) {
                _vm.updateColor(_vm.color)
              },
              ok: function($event) {
                _vm.selectColor(_vm.color)
              },
              cancel: _vm.cancel
            },
            model: {
              value: _vm.color,
              callback: function($$v) {
                _vm.color = $$v
              },
              expression: "color"
            }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-332ce276", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3ffa67ac\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.template && _vm.slices.data.length > 0
        ? [
            _c("iframe", {
              staticClass: "dvs-w-full",
              attrs: {
                src: "/templates/" + _vm.template.id,
                id: "devise-preview-iframe"
              }
            })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ffa67ac", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41863c3e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Experience.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.experience
    ? _c(
        "div",
        { staticClass: "flex flex-col md:flex-row items-center relative" },
        [
          _c(
            "div",
            {
              staticClass:
                "absolute pin-t pin-l cursor-pointer uppercase text-blue-dark text-xs flex items-center",
              on: {
                click: function($event) {
                  _vm.goToIndex()
                }
              }
            },
            [
              _c("i", { staticClass: "ion-ios-arrow-back text-base mr-1" }),
              _vm._v("\n    Back\n  ")
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "w-full md:w-1/2 pt-8 md:pr-8 mb-8 md:mb-0" },
            [
              _c("h3", { staticClass: "text-blue-dark mb-4" }, [
                _vm._v(_vm._s(_vm.experience.title.text))
              ]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.experience.longDescription.text))]),
              _vm._v(" "),
              _c("div", { staticClass: "flex justify-between mt-8" }, [
                _c("div", [
                  _c(
                    "h6",
                    { staticClass: "text-grey-dark uppercase text-xs" },
                    [_vm._v("Previous")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h6",
                    {
                      staticClass:
                        "text-blue-dark uppercase cursor-pointer text-sm",
                      on: { click: _vm.goToPrevious }
                    },
                    [_vm._v(_vm._s(_vm.previous.name.text))]
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "h6",
                    { staticClass: "text-grey-dark uppercase text-xs" },
                    [_vm._v("Next")]
                  ),
                  _vm._v(" "),
                  _c(
                    "h6",
                    {
                      staticClass:
                        "text-blue-dark uppercase cursor-pointer text-sm",
                      on: { click: _vm.goToNext }
                    },
                    [_vm._v(_vm._s(_vm.next.name.text))]
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "w-full md:w-1/2 md:pl-8",
            domProps: { innerHTML: _vm._s(_vm.experience.html.text) }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-41863c3e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-431939e5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/Devise.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.editorMode
        ? [
            _c("loadbar"),
            _vm._v(" "),
            _c("messages"),
            _vm._v(" "),
            _c("media-manager"),
            _vm._v(" "),
            _c(
              "div",
              {
                class: {
                  "admin-closed": _vm.adminClosed,
                  "wide-admin": _vm.wideAdmin,
                  "preview-frame": _vm.isPreviewFrame
                },
                attrs: { id: "devise-container" }
              },
              [
                !_vm.isPreviewFrame
                  ? _c(
                      "div",
                      {
                        staticClass: "dvs-text-grey-darker dvs-bg-white",
                        class: [_vm.deviseOptions.adminClass],
                        attrs: { id: "devise-admin" }
                      },
                      [
                        _c("user"),
                        _vm._v(" "),
                        _c(
                          "transition",
                          { attrs: { name: "fade", mode: "out-in" } },
                          [
                            _c("router-view", {
                              attrs: { name: "devise", page: _vm.page }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dvs-flex-grow dvs-flex dvs-justify-center" },
                  [
                    _vm.page.previewMode === "desktop" || _vm.isPreviewFrame
                      ? _c(
                          "div",
                          { staticClass: "devise-content" },
                          [
                            _vm._t("on-top"),
                            _vm._v(" "),
                            _vm._l(_vm.page.slices, function(slice, key) {
                              return _c("slice", {
                                key: key,
                                attrs: { slice: slice }
                              })
                            }),
                            _vm._v(" "),
                            _vm._t("on-bottom")
                          ],
                          2
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.page.previewMode !== "desktop" && !_vm.isPreviewFrame
                      ? _c("iframe", {
                          staticClass: "devise-content",
                          class: [_vm.page.previewMode],
                          attrs: {
                            src: _vm.currentUrl,
                            id: "devise-responsive-preview"
                          }
                        })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                !_vm.isPreviewFrame
                  ? _c("div", { attrs: { id: "devise-admin-shim" } })
                  : _vm._e(),
                _vm._v(" "),
                !_vm.isPreviewFrame
                  ? _c("i", {
                      staticClass: "ion-gear-a",
                      attrs: { id: "devise-admin-open" },
                      on: { click: _vm.closeAdmin }
                    })
                  : _vm._e()
              ]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.templateMode
        ? [
            _c(
              "template-preview",
              [
                _vm._t("on-top", null, { slot: "on-top" }),
                _vm._v(" "),
                _vm._t("on-bottom", null, { slot: "on-bottom" })
              ],
              2
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-431939e5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45de2229\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Sort.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex px-4 py-8" }, [
    _c("fieldset", { staticClass: "mr-4 flex" }, [
      _c("div", { staticClass: "flex items-center" }, [
        _c("label", { staticClass: "pr-2" }, [_vm._v("Ascending")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.direction,
              expression: "direction"
            }
          ],
          staticClass: "fancy",
          attrs: { type: "radio", value: "asc" },
          domProps: { checked: _vm._q(_vm.direction, "asc") },
          on: {
            change: [
              function($event) {
                _vm.direction = "asc"
              },
              _vm.update
            ],
            click: function($event) {
              _vm.checkRemove($event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "ml-4" }, [
      _c("div", { staticClass: "flex items-center" }, [
        _c("label", { staticClass: "pr-2" }, [_vm._v("Descending")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.direction,
              expression: "direction"
            }
          ],
          staticClass: "fancy",
          attrs: { type: "radio", value: "desc" },
          domProps: { checked: _vm._q(_vm.direction, "desc") },
          on: {
            change: [
              function($event) {
                _vm.direction = "desc"
              },
              _vm.update
            ],
            click: function($event) {
              _vm.checkRemove($event.target.value)
            }
          }
        })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45de2229", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46969bbe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/menu/User.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "dvs-bg-grey-lighter dvs-flex dvs-border-b dvs-border-lighter",
        attrs: { id: "devise-user" }
      },
      [
        _c("div", { staticClass: "dvs-border-r dvs-border-grey dvs-flex" }, [
          _c(
            "div",
            {
              staticClass:
                "dvs-min-w-1/4 dvs-border-r dvs-border-grey dvs-flex dvs-justify-between"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "dvs-flex dvs-justify-start dvs-items-center pr-4 dvs-w-3/5 dvs-flex-wrap dvs-p-4 dvs-pl-8"
                },
                [
                  _c("div", { staticClass: "dvs-py-2 dvs-pr-4" }, [
                    _vm._v("\n          Gary Williams"),
                    _c("br"),
                    _vm._v(" "),
                    _c("span", { staticClass: "dvs-text-grey" }, [
                      _vm._v("gary@lbm.co")
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "dvs-w-1/5 dvs-flex dvs-justify-center dvs-items-center"
                },
                [_c("i", { staticClass: "ion-gear-a text-3xl" })]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "dvs-flex dvs-flex-grow dvs-items-center dvs-border-l dvs-border-white dvs-w-1/5 dvs-text-center"
            },
            [_c("i", { staticClass: "ion-power text-2xl p-4" })]
          )
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-46969bbe", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-487abcf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/devise-admin/MainMenu.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dvs-p-8" }, [
    _c("h2", { staticClass: "dvs-font-bold dvs-mb-8" }, [
      _vm._v("Administration")
    ]),
    _vm._v(" "),
    _c("ul", { staticClass: "dvs-list-reset" }, [
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-page-editor")
            }
          }
        },
        [_vm._v("\n      Edit this page\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-pages-index")
            }
          }
        },
        [_vm._v("\n      Pages\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-events-index")
            }
          }
        },
        [_vm._v("\n      Events\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-menus-index")
            }
          }
        },
        [_vm._v("\n      Menus\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-users-index")
            }
          }
        },
        [_vm._v("\n      Users\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("Analytics")
            }
          }
        },
        [_vm._v("\n      Analytics\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-developers-index")
            }
          }
        },
        [_vm._v("\n      Developers\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-templates-index")
            }
          }
        },
        [_vm._v("\n      Templates\n    ")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          staticClass: "dvs-cursor-pointer dvs-mb-6 dvs-text-lg",
          on: {
            click: function($event) {
              _vm.goToPage("devise-settings-index")
            }
          }
        },
        [_vm._v("\n      Settings\n    ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-487abcf8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b589983\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Link.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
      _c(
        "label",
        { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
        [_vm._v("Text")]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.text,
            expression: "localValue.text"
          }
        ],
        staticClass: "dvs-mr-4 dvs-w-full",
        attrs: { type: "text" },
        domProps: { value: _vm.localValue.text },
        on: {
          keyup: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.localValue, "text", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
      _c(
        "label",
        { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
        [_vm._v("URL")]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.URL,
            expression: "localValue.URL"
          }
        ],
        staticClass: "dvs-mr-4 dvs-w-full",
        attrs: { type: "text" },
        domProps: { value: _vm.localValue.URL },
        on: {
          keyup: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.localValue, "URL", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "dvs-fieldset" }, [
      _c(
        "label",
        { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
        [_vm._v("Target")]
      ),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.target,
              expression: "localValue.target"
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
                _vm.localValue,
                "target",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        [
          _c("option", { attrs: { value: "_self" } }, [_vm._v("Same Window")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "_blank" } }, [
            _vm._v("New Window / Tab")
          ])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-4b589983", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ed3f0a2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Image.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("fieldset", { staticClass: "dvs-fieldset dvs-mb-4" }, [
      _c(
        "label",
        { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
        [_vm._v("Width of Image")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dvs-flex" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.settings.width,
              expression: "localValue.settings.width"
            }
          ],
          staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
          attrs: { type: "number", min: "0", max: "2000" },
          domProps: { value: _vm.localValue.settings.width },
          on: {
            keyup: _vm.updateValue,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.localValue.settings, "width", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.settings.width,
              expression: "localValue.settings.width"
            }
          ],
          staticClass: "dvs-w-3/4",
          attrs: { type: "range", max: "2000" },
          domProps: { value: _vm.localValue.settings.width },
          on: {
            change: _vm.updateValue,
            __r: function($event) {
              _vm.$set(_vm.localValue.settings, "width", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "dvs-fieldset dvs-mb-4" }, [
      _c(
        "label",
        { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
        [_vm._v("Height of Image")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "dvs-flex" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.settings.height,
              expression: "localValue.settings.height"
            }
          ],
          staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
          attrs: { type: "number", min: "0", max: "2000" },
          domProps: { value: _vm.localValue.settings.height },
          on: {
            keyup: _vm.updateValue,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.localValue.settings, "height", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.settings.height,
              expression: "localValue.settings.height"
            }
          ],
          staticClass: "dvs-w-3/4",
          attrs: { type: "range", max: "2000" },
          domProps: { value: _vm.localValue.settings.height },
          on: {
            change: _vm.updateValue,
            __r: function($event) {
              _vm.$set(_vm.localValue.settings, "height", $event.target.value)
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("fieldset", { staticClass: "dvs-fieldset" }, [
      _c(
        "label",
        { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
        [_vm._v("Category of Placeholder")]
      ),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.settings.category,
              expression: "localValue.settings.category"
            }
          ],
          on: {
            change: [
              function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.localValue.settings,
                  "category",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              },
              _vm.updateValue
            ]
          }
        },
        [
          _c("option", { attrs: { value: "image" } }, [_vm._v("image")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "avatar" } }, [_vm._v("avatar")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "abstract" } }, [_vm._v("abstract")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "animals" } }, [_vm._v("animals")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "business" } }, [_vm._v("business")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "cats" } }, [_vm._v("cats")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "city" } }, [_vm._v("city")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "food" } }, [_vm._v("food")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "nightlife" } }, [
            _vm._v("nightlife")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "fashion" } }, [_vm._v("fashion")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "people" } }, [_vm._v("people")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "nature" } }, [_vm._v("nature")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "sports" } }, [_vm._v("sports")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "technics" } }, [_vm._v("technics")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "transport" } }, [_vm._v("transport")])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-4ed3f0a2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5562cf68\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Checkbox.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n  No settings for checkbox\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5562cf68", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56b74c6e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/ToggleColumns.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mr-4 relative" }, [
    _c("i", {
      staticClass: "ion-ios-toggle-outline cursor-pointer",
      on: {
        click: function($event) {
          _vm.show = true
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass:
          "absolute pin-t pin-r mt-1 bg-background-lighter min-w-250 z-40 shadow-lg border-t-2 border-background-lighter"
      },
      [
        _c("div", { staticClass: "bg-background-darker pt-4 pb-2 px-4 " }, [
          _vm._v("\n      Toggle Columns "),
          _c("i", {
            staticClass: "ion-close-round cursor-pointer float-right",
            on: {
              click: function($event) {
                _vm.show = false
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-4" }, [
          _c(
            "div",
            {
              staticClass:
                "flex px-4 py-8 flex flex-col max-h-200 overflow-y-scroll"
            },
            [
              _c(
                "div",
                _vm._l(_vm.columns, function(column, index) {
                  return !column.toggleColumns
                    ? _c(
                        "fieldset",
                        { key: column.key, staticClass: "mr-4 flex mb-2" },
                        [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: column.show,
                                  expression: "column.show"
                                }
                              ],
                              staticClass: "fancy",
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(column.show)
                                  ? _vm._i(column.show, null) > -1
                                  : column.show
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = column.show,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            column,
                                            "show",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            column,
                                            "show",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(column, "show", $$c)
                                    }
                                  },
                                  _vm.update
                                ]
                              }
                            }),
                            _vm._v(" "),
                            _c("label", { staticClass: "pl-2" }, [
                              _vm._v(_vm._s(column.label))
                            ])
                          ])
                        ]
                      )
                    : _vm._e()
                })
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56b74c6e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e5ed274\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Number.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.text === null || _vm.localValue.text === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [_vm._v("localValue.text")])
      ]),
      _vm._v(" "),
      _c("template", { slot: "editor" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.text,
              expression: "localValue.text"
            }
          ],
          attrs: { type: "number", maxlength: _vm.getMaxLength },
          domProps: { value: _vm.localValue.text },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localValue, "text", $event.target.value)
              },
              function($event) {
                _vm.updateValue()
              }
            ]
          }
        })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e5ed274", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-620e72e2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/Index.vue":
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
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [
          _vm._v("Templates")
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
                _vm.goToPage("devise-index")
              }
            }
          },
          [_vm._v("Back to Administration")]
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
            [_vm._v("\n        Create New Template\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "devise-admin-content" } },
        [
          _c("h2", { staticClass: "dvs-mb-10" }, [_vm._v("Current Templates")]),
          _vm._v(" "),
          _vm._l(_vm.templates.data, function(template) {
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
                    _vm._v("\n        " + _vm._s(template.name)),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "dvs-font-mono dvs-font-normal" },
                      [_vm._v(_vm._s(template.domain))]
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
                  [_vm._v("\n        " + _vm._s(template.layout) + "\n      ")]
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
                            _vm.goToTemplate(template)
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
                              callback: _vm.requestDeleteTemplate,
                              arguments: template,
                              message:
                                "Are you sure you want to delete this template?"
                            },
                            expression:
                              "{callback: requestDeleteTemplate, arguments: template, message: 'Are you sure you want to delete this template?'}"
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
                    _vm._v("Create New Template")
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
                          value: _vm.newTemplate.name,
                          expression: "newTemplate.name"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "Name of the Template"
                      },
                      domProps: { value: _vm.newTemplate.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newTemplate, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("help", { staticClass: "dvs-mb-8" }, [
                    _vm._v(
                      'The view file that you are referencing will be located in the resources/views directory of your project and needs to be referenced through dot notation. For example, if you\'re referencing "/resources/views/layouts/layout.blade.php" you will need to put "layouts.layout" in this field.'
                    )
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Layout")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newTemplate.layout,
                          expression: "newTemplate.layout"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "Layout of the Template"
                      },
                      domProps: { value: _vm.newTemplate.layout },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newTemplate,
                            "layout",
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
                      on: { click: _vm.requestCreateTemplate }
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
    require("vue-hot-reload-api")      .rerender("data-v-620e72e2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-63b4d4ba\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/SliceEditor.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "dvs-pt-4" },
      _vm._l(_vm.fields, function(field, key) {
        return _c(
          "fieldset",
          { key: key, staticClass: "dvs-fieldset dvs-mb-8 dvs-pl-4" },
          [
            _c(
              "div",
              [
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "color"
                  ? _c("color-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "checkbox"
                  ? _c("checkbox-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "image"
                  ? _c("image-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "link"
                  ? _c("link-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "number"
                  ? _c("number-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "textarea"
                  ? _c("textarea-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "text"
                  ? _c("text-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.fieldConfig({ fieldKey: key, slice: _vm.slice }).type ===
                "wysiwyg"
                  ? _c("wysiwyg-editor", {
                      attrs: {
                        options: _vm.fieldConfig({
                          fieldKey: key,
                          slice: _vm.slice
                        }),
                        namekey: key
                      },
                      model: {
                        value: _vm.fields[key],
                        callback: function($$v) {
                          _vm.$set(_vm.fields, key, $$v)
                        },
                        expression: "fields[key]"
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ]
        )
      })
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-collapsed dvs-pl-4" }, [
      _c(
        "ul",
        { staticClass: "dvs-list-reset" },
        _vm._l(_vm.slice.slices, function(s, key) {
          return _c(
            "li",
            {
              staticClass: "dvs-mb-4 dvs-collapsable",
              class: { "dvs-open": s.metadata.open }
            },
            [
              _c(
                "strong",
                {
                  staticClass: "dvs-block dvs-mb-2 dvs-switch-sm dvs-ml-4",
                  on: {
                    click: function($event) {
                      _vm.toggleSlice(s)
                    }
                  }
                },
                [_vm._v(_vm._s(s.metadata.label))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "dvs-collapsed" },
                [_c("slice-editor", { key: key, attrs: { slice: s } })],
                1
              )
            ]
          )
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-63b4d4ba", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-649c309e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/media-manager/MediaManager.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          staticClass:
            "dvs-min-h-screen dvs-fixed dvs-pin dvs-z-40 dvs-text-grey-darker",
          class: { "dvs-pointer-events-none": !_vm.loaded }
        },
        [
          _c("div", {
            staticClass: "dvs-blocker dvs-z-30",
            on: {
              click: function($event) {
                _vm.show = false
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "media-manager" }, [
            !_vm.loaded
              ? _c("div", { staticClass: "media-manager-interface" }, [
                  _c(
                    "div",
                    { staticClass: "absolute absolute-center w-1/2" },
                    [_c("loadbar", { attrs: { percentage: 0.5 } })],
                    1
                  )
                ])
              : _c("div", { staticClass: "media-manager-interface" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "dvs-py-4 dvs-px-8 dvs-rounded-tl dvs-rounded-tr dvs-flex dvs-justify-between dvs-items-center dvs-bg-grey-lighter dvs-border-b dvs-border-lighter dvs-relative"
                    },
                    [
                      _vm._v("\n        Media Manager\n        "),
                      _c(
                        "div",
                        { staticClass: "dvs-flex" },
                        [
                          _c("fieldset", { staticClass: "dvs-mr-4" }, [
                            _c("label", { staticClass: "dvs-mr-2" }, [
                              _vm._v("List Mode")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.listMode,
                                  expression: "listMode"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.listMode)
                                  ? _vm._i(_vm.listMode, null) > -1
                                  : _vm.listMode
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.listMode,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.listMode = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.listMode = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.listMode = $$c
                                  }
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("vue-dropzone", {
                            ref: "myVueDropzone",
                            staticClass: "pl-4",
                            attrs: {
                              id: "dropzone",
                              "includeStyling:": "",
                              false: "",
                              options: _vm.dropzoneOptions
                            },
                            on: {
                              "vdropzone-success": function($event) {
                                _vm.uploadSuccess()
                              },
                              "vdropzone-error": _vm.uploadError
                            }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "dvs-flex dvs-items-stretch dvs-h-full" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "dvs-p-8 dvs-bg-grey-lightest dvs-flex dvs-flex-col dvs-justify-between dvs-border-r dvs-border-lighter dvs-min-w-1/3"
                        },
                        [
                          _c(
                            "ul",
                            {
                              staticClass:
                                "list-reset dvs-mb-10 dvs-font-mono dvs-text-sm dvs-tracking-tight"
                            },
                            [
                              _vm._l(_vm.directories, function(directory) {
                                return _c(
                                  "li",
                                  {
                                    staticClass:
                                      "dvs-cursor-pointer dvs-mt-2 dvs-text-bold",
                                    on: {
                                      click: function($event) {
                                        _vm.changeDirectories(directory.path)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "ion-folder dvs-mr-2"
                                    }),
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(directory.name) +
                                        "\n            "
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _vm.directories.length < 1
                                ? _c("li", [
                                    _vm._v(
                                      "\n              No directories within this directory\n            "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "dvs-flex dvs-flex-col" }, [
                            _c(
                              "fieldset",
                              { staticClass: "dvs-fieldset dvs-mb-4" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.directoryToCreate,
                                      expression: "directoryToCreate"
                                    }
                                  ],
                                  staticClass: "mr-2",
                                  attrs: {
                                    type: "text",
                                    placeholder: "New Directory"
                                  },
                                  domProps: { value: _vm.directoryToCreate },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.directoryToCreate =
                                        $event.target.value
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "dvs-btn dvs-btn-sm",
                                on: {
                                  click: function($event) {
                                    _vm.requestCreateDirectory()
                                  }
                                }
                              },
                              [_vm._v("Create")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "dvs-flex-grow dvs-relative dvs-overflow-scroll",
                          class: { "w-full": _vm.directories.length < 1 }
                        },
                        [
                          _vm.currentDirectory !== ""
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "dvs-flex dvs-justify-between dvs-my-4 dvs-items-center dvs-font-mono dvs-text-sm dvs-tracking-tight dvs-px-8 dvs-py-4"
                                },
                                [
                                  _c("breadcrumbs", {
                                    attrs: {
                                      currentDirectory: _vm.currentDirectory
                                    },
                                    on: {
                                      chooseDirectory: _vm.changeDirectories
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.files.length < 1 && _vm.directories.length < 1
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "dvs-flex dvs-justify-center dvs-items-center dvs-absolute dvs-absolute-center"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "dvs-bg-white dvs-rounded dvs-p-8 dvs--mt-15 dvs-text-center dvs-shadow dvs-cursor-pointer hover:dvs-bg-blue-dark hover:dvs-text-white",
                                      on: {
                                        click: function($event) {
                                          _vm.requestDeleteDirectory()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "ion-trash-a dvs-text-5xl"
                                      }),
                                      _vm._v(" "),
                                      _vm._m(0)
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.files.length < 1 && _vm.directories.length > 1
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "dvs-flex dvs-justify-center dvs-items-center dvs-absolute dvs-absolute-center"
                                },
                                [_vm._m(1)]
                              )
                            : _c(
                                "ul",
                                {
                                  staticClass: "dvs-list-reset",
                                  class: {
                                    "dvs-flex dvs-flex-wrap": !_vm.listMode
                                  }
                                },
                                _vm._l(_vm.files, function(file) {
                                  return _c(
                                    "li",
                                    {
                                      staticClass:
                                        "dvs-relative dvs-bg-white dvs-card dvs-p-4 dvs-mt-2 dvs-px`-8",
                                      class: {
                                        "cursor-pointer": !file.on,
                                        "dvs-border-b dvs-border-lighter":
                                          _vm.listMode
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openFile(file)
                                        }
                                      }
                                    },
                                    [
                                      file.on
                                        ? _c("i", {
                                            staticClass:
                                              "ion-android-close dvs-absolute dvs-pin-t dvs-pin-r dvs-mt-4 dvs-mr-4 dvs-cursor-pointer",
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                $event.preventDefault()
                                                _vm.closeFile(file)
                                              }
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !file.on
                                        ? _c("div", [
                                            _vm.listMode
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "dvs-flex dvs-justify-between dvs-items-center"
                                                  },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src: file.thumb,
                                                        height: "50"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("h5", [
                                                      _vm._v(_vm._s(file.name))
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("div", {
                                                      staticClass:
                                                        "dvs-rounded-full",
                                                      class: {
                                                        "dvs-bg-green-dark": _vm.isActive(
                                                          file
                                                        ),
                                                        "dvs-bg-grey": !_vm.isActive(
                                                          file
                                                        )
                                                      },
                                                      staticStyle: {
                                                        height: "10px",
                                                        width: "10px"
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "dvs-shadow dvs-p-4 dvs-grid-preview"
                                                  },
                                                  [
                                                    _c("div", {
                                                      staticClass:
                                                        "dvs-preview",
                                                      style:
                                                        "background-image:url(" +
                                                        file.url +
                                                        ")"
                                                    }),
                                                    _vm._v(" "),
                                                    _c("h6", [
                                                      _vm._v(_vm._s(file.name))
                                                    ])
                                                  ]
                                                )
                                          ])
                                        : _c(
                                            "div",
                                            { staticClass: "flex" },
                                            [
                                              _vm.listMode
                                                ? [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "dvs-w-1/2 dvs-mr-8 dvs-flex dvs-flex-col dvs-justify-between"
                                                      },
                                                      [
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: file.url,
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _c("img", {
                                                              attrs: {
                                                                src: file.url
                                                              }
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("i", {
                                                          directives: [
                                                            {
                                                              name:
                                                                "devise-alert-confirm",
                                                              rawName:
                                                                "v-devise-alert-confirm",
                                                              value: {
                                                                callback:
                                                                  _vm.requestDeleteFile,
                                                                arguments: file,
                                                                message:
                                                                  "Are you sure you want to delete this media?"
                                                              },
                                                              expression:
                                                                "{callback: requestDeleteFile, arguments: file, message: 'Are you sure you want to delete this media?'}"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "ion-trash-a dvs-mt-4 dvs-mr-4 dvs-cursor-pointer dvs-text-xl"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "dvs-w-1/2"
                                                      },
                                                      [
                                                        _c("h6", [
                                                          _vm._v("Filename")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(file.name)
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "h6",
                                                          {
                                                            staticClass:
                                                              "dvs-mt-4"
                                                          },
                                                          [_vm._v("Size")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(file.size)
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "dvs-btn",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.selectFile(
                                                                    file
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Select")]
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _vm.isActive(file)
                                                          ? [
                                                              _c(
                                                                "h6",
                                                                {
                                                                  staticClass:
                                                                    "dvs-my-2"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Appears On"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ul",
                                                                {
                                                                  staticClass:
                                                                    "dvs-list-reset"
                                                                },
                                                                _vm._l(
                                                                  file.fields,
                                                                  function(
                                                                    field
                                                                  ) {
                                                                    return _c(
                                                                      "li",
                                                                      {
                                                                        staticClass:
                                                                          "dvs-py-2"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "a",
                                                                          {
                                                                            staticClass:
                                                                              "dvs-btn dvs-btn-sm",
                                                                            attrs: {
                                                                              href:
                                                                                field.page_slug,
                                                                              target:
                                                                                "_blank"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                field.page_title
                                                                              ) +
                                                                                " - " +
                                                                                _vm._s(
                                                                                  field.field_name
                                                                                )
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  }
                                                                )
                                                              )
                                                            ]
                                                          : _vm._e()
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                : [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "dvs-w-1/2 dvs-mr-8 dvs-flex dvs-flex-col dvs-justify-between"
                                                      },
                                                      [
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: file.url,
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _c("img", {
                                                              attrs: {
                                                                src: file.url
                                                              }
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("i", {
                                                          directives: [
                                                            {
                                                              name:
                                                                "devise-alert-confirm",
                                                              rawName:
                                                                "v-devise-alert-confirm",
                                                              value: {
                                                                callback:
                                                                  _vm.requestDeleteFile,
                                                                arguments: file,
                                                                message:
                                                                  "Are you sure you want to delete this media?"
                                                              },
                                                              expression:
                                                                "{callback: requestDeleteFile, arguments: file, message: 'Are you sure you want to delete this media?'}"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "ion-trash-a dvs-mt-4 dvs-mr-4 dvs-cursor-pointer dvs-text-xl"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass: "dvs-w-1/2"
                                                      },
                                                      [
                                                        _c("h6", [
                                                          _vm._v("Filename")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(file.name)
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "fieldset",
                                                          {
                                                            staticClass:
                                                              "dvs-fieldset"
                                                          },
                                                          [
                                                            _c("label", [
                                                              _vm._v("URL")
                                                            ]),
                                                            _vm._v(" "),
                                                            _c("input", {
                                                              attrs: {
                                                                type: "text"
                                                              },
                                                              domProps: {
                                                                value: file.url
                                                              }
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "h6",
                                                          {
                                                            staticClass:
                                                              "dvs-mt-4"
                                                          },
                                                          [_vm._v("Size")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _vm._v(
                                                            _vm._s(file.size)
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("p", [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "dvs-btn",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.selectFile(
                                                                    file
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [_vm._v("Select")]
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _vm.isActive(file)
                                                          ? [
                                                              _c(
                                                                "h6",
                                                                {
                                                                  staticClass:
                                                                    "dvs-my-2"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Appears On"
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "ul",
                                                                {
                                                                  staticClass:
                                                                    "dvs-list-reset"
                                                                },
                                                                _vm._l(
                                                                  file.fields,
                                                                  function(
                                                                    field
                                                                  ) {
                                                                    return _c(
                                                                      "li",
                                                                      {
                                                                        staticClass:
                                                                          "dvs-py-2"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "a",
                                                                          {
                                                                            staticClass:
                                                                              "dvs-btn dvs-btn-sm",
                                                                            attrs: {
                                                                              href:
                                                                                field.page_slug,
                                                                              target:
                                                                                "_blank"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                field.page_title
                                                                              ) +
                                                                                " - " +
                                                                                _vm._s(
                                                                                  field.field_name
                                                                                )
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  }
                                                                )
                                                              )
                                                            ]
                                                          : _vm._e()
                                                      ],
                                                      2
                                                    )
                                                  ]
                                            ],
                                            2
                                          )
                                    ]
                                  )
                                })
                              )
                        ]
                      )
                    ]
                  )
                ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h6", { staticClass: "dvs-mt-2" }, [
      _c("span", [_vm._v("Delete this directory")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "dvs-bg-white dvs-rounded dvs-p-8 dvs--mt-15 dvs-text-center dvs-shadow"
      },
      [
        _c("i", { staticClass: "ion-folder dvs-text-5xl" }),
        _vm._v(" "),
        _c("h6", { staticClass: "dvs-mt-2" }, [
          _c("span", [_vm._v("No files in this directory")])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-649c309e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-662d65dc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Number.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "dvs-fieldset" }, [
    _c(
      "label",
      { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
      [_vm._v("Number of example words to display")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.text,
            expression: "localValue.text"
          }
        ],
        staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
        attrs: { type: "number" },
        domProps: { value: _vm.localValue.text },
        on: {
          keyup: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.localValue, "text", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.text,
            expression: "localValue.text"
          }
        ],
        staticClass: "dvs-w-3/4",
        attrs: { type: "range" },
        domProps: { value: _vm.localValue.text },
        on: {
          change: _vm.updateValue,
          __r: function($event) {
            _vm.$set(_vm.localValue, "text", $event.target.value)
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-662d65dc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67ea4cf7\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.text === null || _vm.localValue.text === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _vm._v(_vm._s(_vm.clipString(_vm.localValue.text, 200, true)))
        ])
      ]),
      _vm._v(" "),
      _c("template", { slot: "editor" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.text,
              expression: "localValue.text"
            }
          ],
          attrs: { type: "text", maxlength: _vm.getMaxLength },
          domProps: { value: _vm.localValue.text },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localValue, "text", $event.target.value)
              },
              function($event) {
                _vm.updateValue()
              }
            ]
          }
        })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67ea4cf7", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b72940a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Dates.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex px-4 py-8" }, [
    _c(
      "fieldset",
      { staticClass: "w-full" },
      [
        _c("label", { staticClass: "pb-2" }, [_vm._v("Date Range")]),
        _vm._v(" "),
        _c("flat-pickr", {
          staticClass: "fancy w-full mb-4",
          attrs: { config: _vm.afterConfig, placeholder: "After" },
          on: { "on-change": _vm.onAfterChange },
          model: {
            value: _vm.after,
            callback: function($$v) {
              _vm.after = $$v
            },
            expression: "after"
          }
        }),
        _vm._v(" "),
        _c("flat-pickr", {
          staticClass: "fancy w-full",
          attrs: { config: _vm.beforeConfig, placeholder: "Before" },
          on: { "on-change": _vm.onBeforeChange },
          model: {
            value: _vm.before,
            callback: function($$v) {
              _vm.before = $$v
            },
            expression: "before"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b72940a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6e59c160\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Wysiwyg.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.text === null || _vm.localValue.text === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.clipString(_vm.localValue.text, 200, true))
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "template",
        { slot: "editor" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localValue.text,
                expression: "localValue.text"
              }
            ],
            attrs: { type: "hidden", id: _vm.theId, name: _vm.namekey },
            domProps: { value: _vm.localValue.text },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localValue, "text", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("trix-editor", {
            ref: "trixeditor",
            attrs: { input: _vm.theId },
            on: { "trix-change": _vm.update }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e59c160", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f4f4594\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Text.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "dvs-fieldset" }, [
    _c(
      "label",
      { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
      [_vm._v("Number of example words to display")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.localValue.settings.numberOfWords,
            expression: "localValue.settings.numberOfWords",
            modifiers: { number: true }
          }
        ],
        staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
        attrs: { type: "number", min: "0", max: "50" },
        domProps: { value: _vm.localValue.settings.numberOfWords },
        on: {
          keyup: _vm.updateValue,
          change: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.localValue.settings,
              "numberOfWords",
              _vm._n($event.target.value)
            )
          },
          blur: function($event) {
            _vm.$forceUpdate()
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model.number",
            value: _vm.localValue.settings.numberOfWords,
            expression: "localValue.settings.numberOfWords",
            modifiers: { number: true }
          }
        ],
        staticClass: "dvs-w-3/4",
        attrs: { type: "range", max: "50" },
        domProps: { value: _vm.localValue.settings.numberOfWords },
        on: {
          change: _vm.updateValue,
          __r: function($event) {
            _vm.$set(
              _vm.localValue.settings,
              "numberOfWords",
              _vm._n($event.target.value)
            )
          },
          blur: function($event) {
            _vm.$forceUpdate()
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f4f4594", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74c29203\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Toggle.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("label", { staticClass: "dvs-toggle", attrs: { for: _vm.id } }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.localValue,
          expression: "localValue"
        }
      ],
      attrs: { type: "checkbox", id: _vm.id },
      domProps: {
        checked: Array.isArray(_vm.localValue)
          ? _vm._i(_vm.localValue, null) > -1
          : _vm.localValue
      },
      on: {
        change: [
          function($event) {
            var $$a = _vm.localValue,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.localValue = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.localValue = $$a
                    .slice(0, $$i)
                    .concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.localValue = $$c
            }
          },
          _vm.updateValue
        ]
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-toggle-slider" })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74c29203", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-76da389e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Hero.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full relative z-10 bg-blue-dark", attrs: { id: "hero" } },
    [
      _c(
        "div",
        {
          staticClass: "min-h-screen lg:min-h-1024 text-blue-lighter w-full",
          style: {
            backgroundColor: _vm.devise.backgroundColor.color,
            color: _vm.devise.color.color
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "absolute pin bg-cover flex justify-center items-center flex-col"
            },
            [
              _c("div", { staticClass: "max-w-container p-8" }, [
                _c("div", { staticClass: "relative z-10 text-center" }, [
                  _c("i", {
                    staticClass:
                      "ion-help-buoy text-sm md:text-base text-6xl md:text-8xl lg:text-10xl"
                  }),
                  _vm._v(" "),
                  _c("h1", {
                    staticClass:
                      "text-white uppercase font-thin text-shadow mb-4 text-4xl md:text-6xl lg:text-6xl xl:text-8xl",
                    domProps: { innerHTML: _vm._s(_vm.devise.title.text) }
                  }),
                  _vm._v(" "),
                  _vm.devise.subTitle.enabled
                    ? _c("div", [
                        _c("h4", {
                          staticClass: "font-light uppercase text-white",
                          domProps: {
                            innerHTML: _vm._s(_vm.devise.subTitle.text)
                          }
                        })
                      ])
                    : _vm._e()
                ])
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76da389e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7c8a4500\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Checkbox.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.checked === null || _vm.localValue.checked === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [_vm._v(_vm._s(_vm.localValue.checked ? "On" : "Off"))])
      ]),
      _vm._v(" "),
      _c("template", { slot: "editor" }, [
        _c(
          "div",
          { staticClass: "dvs-flex dvs-items-center" },
          [
            _c("label", { staticClass: "dvs-mr-4" }, [
              _vm._v(_vm._s(_vm.options.label))
            ]),
            _vm._v(" "),
            _c("toggle", {
              attrs: { id: _vm.randomString(8) },
              model: {
                value: _vm.localValue.checked,
                callback: function($$v) {
                  _vm.$set(_vm.localValue, "checked", $$v)
                },
                expression: "localValue.checked"
              }
            })
          ],
          1
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7c8a4500", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d852867\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/devise-admin/menus/Index.vue":
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
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Menus")]),
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
          [_vm._v("Back to Administration")]
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
            [_vm._v("\n        Create New Menu\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "devise-admin-content" } },
        [
          _c("h2", { staticClass: "dvs-mb-10" }, [_vm._v("Current Menus")]),
          _vm._v(" "),
          _vm._l(_vm.menus.data, function(menu) {
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
                  [_vm._v("\n        " + _vm._s(menu.name)), _c("br")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dvs-min-w-1/5 dvs-text-sm dvs-font-mono dvs-pr-8"
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "dvs-font-mono dvs-font-normal" },
                      [_vm._v(_vm._s(menu.url))]
                    )
                  ]
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
                            _vm.showEditMenu(menu)
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
                              callback: _vm.requestDeleteMenu,
                              arguments: menu,
                              message:
                                "Are you sure you want to delete this menu?"
                            },
                            expression:
                              "{callback: requestDeleteMenu, arguments: menu, message: 'Are you sure you want to delete this menu?'}"
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
                    _vm._v("Create new menu")
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
                          value: _vm.newMenu.name,
                          expression: "newMenu.name"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "Name of the Menu item"
                      },
                      domProps: { value: _vm.newMenu.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newMenu, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Url")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newMenu.url,
                          expression: "newMenu.url"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "URL of the Menu Item"
                      },
                      domProps: { value: _vm.newMenu.url },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newMenu, "url", $event.target.value)
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
                      on: { click: _vm.requestCreateMenu }
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
                  _c("h4", { staticClass: "dvs-mb-4" }, [_vm._v("Edit menu")]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editMenu.name,
                          expression: "editMenu.name"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "Name of the Menu Item"
                      },
                      domProps: { value: _vm.editMenu.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editMenu, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Url")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editMenu.url,
                          expression: "editMenu.url"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "URL of the Menu Item"
                      },
                      domProps: { value: _vm.editMenu.url },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editMenu, "url", $event.target.value)
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
                      on: { click: _vm.requestEditMenu }
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
    require("vue-hot-reload-api")      .rerender("data-v-7d852867", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ea2bf7a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/controls/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "dvs-fieldset" }, [
    _c(
      "label",
      { staticClass: "dvs-small-label dvs-text-grey-darker dvs-italic" },
      [_vm._v("Number of example words to display")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "dvs-flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.settings.numberOfWords,
            expression: "localValue.settings.numberOfWords"
          }
        ],
        staticClass: "dvs-mr-4 dvs-min-w-1/4 dvs-max-w-1/4",
        attrs: { type: "number", min: "0", max: "200" },
        domProps: { value: _vm.localValue.settings.numberOfWords },
        on: {
          keyup: _vm.updateValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(
              _vm.localValue.settings,
              "numberOfWords",
              $event.target.value
            )
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.localValue.settings.numberOfWords,
            expression: "localValue.settings.numberOfWords"
          }
        ],
        staticClass: "dvs-w-3/4",
        attrs: { type: "range", max: "200" },
        domProps: { value: _vm.localValue.settings.numberOfWords },
        on: {
          change: _vm.updateValue,
          __r: function($event) {
            _vm.$set(
              _vm.localValue.settings,
              "numberOfWords",
              $event.target.value
            )
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ea2bf7a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8142f38c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full" },
    [
      _c(
        "transition",
        { attrs: { name: "slide", mode: "out-in" } },
        [
          _c("router-view", {
            key: _vm.key,
            attrs: { dvs: _vm.devise, name: "experiences" }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-8142f38c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-87763f48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/devise-admin/events/Index.vue":
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
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [_vm._v("Events")]),
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
          [_vm._v("Back to Administration")]
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
            [_vm._v("\n        Create New Event\n      ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "devise-admin-content" } },
        [
          _c("h2", { staticClass: "dvs-mb-10" }, [_vm._v("Current Events")]),
          _vm._v(" "),
          _vm._l(_vm.events.data, function(event) {
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
                  [_vm._v("\n        " + _vm._s(event.name)), _c("br")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dvs-min-w-1/5 dvs-text-sm dvs-font-mono dvs-pr-8"
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "dvs-font-mono dvs-font-normal" },
                      [_vm._v(_vm._s(event.description))]
                    )
                  ]
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
                            _vm.showEditEvent(event)
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
                              callback: _vm.requestDeleteEvent,
                              arguments: event,
                              message:
                                "Are you sure you want to delete this event?"
                            },
                            expression:
                              "{callback: requestDeleteEvent, arguments: event, message: 'Are you sure you want to delete this event?'}"
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
                    _vm._v("Create new event")
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
                          value: _vm.newEvent.name,
                          expression: "newEvent.name"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Name of the Event" },
                      domProps: { value: _vm.newEvent.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newEvent, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newEvent.description,
                          expression: "newEvent.description"
                        }
                      ],
                      attrs: { placeholder: "Description of the Event" },
                      domProps: { value: _vm.newEvent.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.newEvent,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newEvent.date,
                          expression: "newEvent.date"
                        }
                      ],
                      attrs: { type: "date", placeholder: "Date of the Event" },
                      domProps: { value: _vm.newEvent.date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.newEvent, "date", $event.target.value)
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
                      on: { click: _vm.requestCreateEvent }
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
                  _c("h4", { staticClass: "dvs-mb-4" }, [_vm._v("Edit event")]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editEvent.name,
                          expression: "editEvent.name"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Name of the Event" },
                      domProps: { value: _vm.editEvent.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editEvent, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editEvent.description,
                          expression: "editEvent.description"
                        }
                      ],
                      attrs: { placeholder: "Description of the Event" },
                      domProps: { value: _vm.editEvent.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editEvent,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Date")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editEvent.date,
                          expression: "editEvent.date"
                        }
                      ],
                      attrs: {
                        type: "datetime-local",
                        placeholder: "Date of the Event"
                      },
                      domProps: { value: _vm.editEvent.date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editEvent, "date", $event.target.value)
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
                      on: { click: _vm.requestEditEvent }
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
    require("vue-hot-reload-api")      .rerender("data-v-87763f48", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8bb0f650\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/templates/Preview.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.modelEditor && _vm.modelSettings.columns
      ? _c("div", {
          staticClass: "dvs-blocker dvs-blocker-light",
          on: {
            click: function($event) {
              _vm.modelEditor = null
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.modelEditor && _vm.modelSettings.columns
      ? _c(
          "div",
          {
            staticClass:
              "dvs-fixed dvs-pin-b dvs-pin-l dvs-mb-10 dvs-mx-10 dvs-p-4 dvs-bg-white dvs-rounded-sm dvs-min-w-48 dvs-shadow-lg dvs-z-50 dvs-text-grey-darker dvs-font-normal"
          },
          [
            _c("help", [
              _vm._v(
                "\n      This is a model slice and allows you to set the query that will be performed every time it is loaded. Provide the filters and sorting that gives you the data you need, save, and that query will be loaded every time. Need to lean on variables such as URL parameters? No problem. Click here to see variables available to you.\n\n      "
              )
            ]),
            _vm._v(" "),
            _c("super-table", {
              attrs: { columns: _vm.modelSettings.columns, showLinks: false },
              on: {
                cancel: function($event) {
                  _vm.modelEditor = null
                },
                done: _vm.modelEditorDone
              },
              model: {
                value: _vm.modelEditor.model_query,
                callback: function($$v) {
                  _vm.$set(_vm.modelEditor, "model_query", $$v)
                },
                expression: "modelEditor.model_query"
              }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.createChildren
      ? _c("div", {
          staticClass: "dvs-blocker dvs-blocker-light",
          on: {
            click: function($event) {
              _vm.createChildren = null
            }
          }
        })
      : _vm._e(),
    _vm._v(" "),
    _vm.createChildren
      ? _c(
          "div",
          {
            staticClass:
              "dvs-fixed dvs-pin-b dvs-pin-l dvs-mb-10 dvs-mx-10 dvs-p-4 dvs-bg-white dvs-rounded-sm dvs-min-w-48 dvs-shadow-lg dvs-z-50 dvs-text-grey-darker dvs-font-normal dvs-min-w-1/2"
          },
          [
            !_vm.createChildren.childToCreate
              ? _c(
                  "div",
                  [
                    _c("help", { staticClass: "dvs-mb-8" }, [
                      _vm._v(
                        "\n        These controls allow you to add sub-slices to the slice you selected. You can add as many single slices as you wish or you can add a one model or one repeatable slice. Models and repeatables allow you to generate many of the same slice with dynamic data from your database (models) or via the Devise editor (repeatables).\n      "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "dvs-flex dvs-justify-center dvs-mb-4" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "dvs-card dvs-text-center dvs-cursor-pointer dvs-mx-4 dvs-w-48 dvs-bg-grey-lighter hover:dvs-bg-blue-dark hover:dvs-text-white",
                            on: {
                              click: function($event) {
                                _vm.addSubSliceToCreate("single")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "ion-android-remove dvs-text-4xl"
                            }),
                            _vm._v(" "),
                            _c("h6", [_vm._v("Single")])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "dvs-card dvs-text-center dvs-cursor-pointer dvs-mx-4 dvs-w-48 dvs-bg-grey-lighter hover:dvs-bg-blue-dark hover:dvs-text-white",
                            on: {
                              click: function($event) {
                                _vm.addSubSliceToCreate("model")
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "ion-cube dvs-text-4xl" }),
                            _vm._v(" "),
                            _c("h6", [_vm._v("Model")])
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.createChildren.childToCreate &&
            !_vm.createChildren.childToCreate.slice
              ? _c("div", { staticClass: "dvs-mb-4" }, [
                  _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                    _c("label", [_vm._v("Select a Slice")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.sliceToAdd,
                            expression: "sliceToAdd"
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
                            _vm.sliceToAdd = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { domProps: { value: null } }, [
                          _vm._v("Select a Slice")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.slices.data, function(slice) {
                          return _c("option", { domProps: { value: slice } }, [
                            _vm._v(_vm._s(slice.name))
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "dvs-btn",
                      attrs: { disabled: !_vm.sliceToAdd },
                      on: {
                        click: function($event) {
                          _vm.selectSliceForNewChild()
                        }
                      }
                    },
                    [_vm._v("Select")]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.createChildren.childToCreate &&
            _vm.createChildren.childToCreate.type === "model" &&
            _vm.createChildren.childToCreate.slice
              ? _c(
                  "div",
                  { staticClass: "dvs-mb-4" },
                  [
                    _c("help", { staticClass: "dvs-mb-8" }, [
                      _vm._v(
                        "\n        The models below are loaded by Devise by scanning your Laravel application directory for anything that extends the Model class. Ensure it does this for it to appear below.\n      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("fieldset", { staticClass: "dvs-fieldset mb-4" }, [
                      _c("label", [_vm._v("Select a Model")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.childModelToAdd,
                              expression: "childModelToAdd"
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
                              _vm.childModelToAdd = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { domProps: { value: null } }, [
                            _vm._v("Select a Model")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.models, function(model) {
                            return _c(
                              "option",
                              { domProps: { value: model } },
                              [_vm._v(_vm._s(model.name))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "dvs-btn",
                        attrs: { disabled: !_vm.childModelToAdd },
                        on: {
                          click: function($event) {
                            _vm.pushNewChildSlice()
                          }
                        }
                      },
                      [_vm._v("Select")]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "devise-iframe-sidebar", attrs: { id: "devise-sidebar" } },
      [
        _c("h2", { staticClass: "dvs-font-bold dvs-mb-2" }, [
          _vm._v("Edit Template")
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
                return _vm.goToTemplates($event)
              }
            }
          },
          [_vm._v("Back to Templates")]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dvs-list-reset" }, [
          _c(
            "li",
            {
              staticClass: "dvs-collapsable dvs-mb-2",
              class: { "dvs-open": _vm.templateSettingsOpen }
            },
            [
              _c(
                "div",
                {
                  staticClass: "dvs-switch",
                  on: { click: _vm.togglePageSettings }
                },
                [_vm._v("\n          Template Settings\n        ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dvs-collapsed dvs-mt-4" }, [
                _c("fieldset", { staticClass: "dvs-fieldset" }, [
                  _c("label", [_vm._v("Template Name")]),
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
                      placeholder: "Name of the Template"
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
                _c("fieldset", { staticClass: "dvs-fieldset" }, [
                  _c("label", [_vm._v("Template Layout")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.localValue.layout,
                        expression: "localValue.layout"
                      }
                    ],
                    attrs: {
                      type: "text",
                      disabled: "",
                      placeholder: "Blade File Name"
                    },
                    domProps: { value: _vm.localValue.layout },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.localValue, "layout", $event.target.value)
                      }
                    }
                  })
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "dvs-collapsable dvs-mb-2",
              class: { "dvs-open": _vm.templateLayoutOpen }
            },
            [
              _c(
                "div",
                {
                  staticClass: "dvs-switch",
                  on: { click: _vm.togglePageContent }
                },
                [_vm._v("\n          Template Layout\n        ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dvs-collapsed dvs-mt-4" }, [
                _vm.localValue.slices
                  ? _c("div", [
                      _c(
                        "ul",
                        { staticClass: "dvs-list-reset" },
                        _vm._l(_vm.localValue.slices, function(slice, key) {
                          return _vm.theSlice(slice) && slice.metadata
                            ? _c(
                                "li",
                                {
                                  staticClass:
                                    "dvs-mb-2 dvs-template-editor-collapsable",
                                  class: { "dvs-open": slice.metadata.open }
                                },
                                [
                                  _c("template-preview-settings", {
                                    on: {
                                      addSlice: _vm.requestAddSlice,
                                      toggleSlice: function($event) {
                                        _vm.toggleSlice(slice)
                                      },
                                      toggleModelControls:
                                        _vm.toggleModelControls,
                                      toggleCreateChildrenSlices:
                                        _vm.toggleCreateChildrenSlices
                                    },
                                    model: {
                                      value: _vm.localValue.slices[key],
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.localValue.slices,
                                          key,
                                          $$v
                                        )
                                      },
                                      expression: "localValue.slices[key]"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        })
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.localValue.slices && _vm.localValue.slices.length < 1
                  ? _c("div", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "dvs-btn dvs-btn-lg dvs-font-bold dvs-w-full",
                          on: {
                            click: function($event) {
                              _vm.requestAddSlice({
                                direction: "below",
                                slice: null
                              })
                            }
                          }
                        },
                        [_vm._v("Add first slice")]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _vm.slices.data.length && _vm.dataLoaded
      ? _c(
          "div",
          { attrs: { id: "devise-preview-content" } },
          [
            _vm._t("on-top"),
            _vm._v(" "),
            _vm.localValue.slices
              ? _vm._l(_vm.localValue.slices, function(slice, key) {
                  return _c(
                    "div",
                    { staticClass: "dvs-slot" },
                    [
                      slice.metadata.type === "single"
                        ? [
                            _c(
                              _vm.getComponent(_vm.theSlice(slice).component),
                              {
                                key: key,
                                tag: "component",
                                attrs: {
                                  devise: _vm.localValue.slices[key].config
                                }
                              }
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(
                        slice.metadata.settings.numberOfInstances,
                        function(s) {
                          return slice.metadata.type === "multiple"
                            ? [
                                _c(
                                  _vm.getComponent(_vm.theSlice(s).component),
                                  {
                                    key: key,
                                    tag: "component",
                                    attrs: {
                                      devise: _vm.localValue.slices[key].config
                                    }
                                  }
                                )
                              ]
                            : _vm._e()
                        }
                      )
                    ],
                    2
                  )
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._t("on-bottom")
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "dvs-fixed dvs-pin-b dvs-pin-r dvs-mr-8 dvs-rounded-sm dvs-shadow-lg dvs-bg-white dvs-p-4 dvs-z-40"
      },
      [
        _c("h6", { staticClass: "mb-4" }, [_vm._v("Template Controls")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "dvs-btn dvs-mr-2",
            on: { click: _vm.requestSaveTemplate }
          },
          [_vm._v("Save Template")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "dvs-btn dvs-btn-plain",
            on: { click: _vm.goToTemplates }
          },
          [_vm._v("Cancel")]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.addSlice.show,
            expression: "addSlice.show"
          }
        ],
        staticClass: "dvs-fixed dvs-pin dvs-z-50"
      },
      [
        _c("div", { staticClass: "dvs-blocker" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "dvs-fixed dvs-z-50 dvs-min-w-1/2 dvs-absolute-center dvs-mb-12 dvs-rounded-sm dvs-shadow-lg dvs-bg-white dvs-p-4"
          },
          [
            _c("h4", { staticClass: "mb-4" }, [
              _vm._v(
                "Select a Slice to Insert " + _vm._s(_vm.addSlice.direction)
              )
            ]),
            _vm._v(" "),
            _c("fieldset", { staticClass: "dvs-fieldset dvs-mb-4" }, [
              _c("label", [_vm._v("Slice")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addSlice.slice,
                      expression: "addSlice.slice"
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
                        _vm.addSlice,
                        "slice",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { domProps: { value: null } }, [
                    _vm._v("Select a Slice")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.slices.data, function(slice) {
                    return _c("option", { domProps: { value: slice } }, [
                      _vm._v(_vm._s(slice.name))
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("fieldset", { staticClass: "dvs-fieldset dvs-mb-4" }, [
              _c("label", [_vm._v("Type")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addSlice.type,
                      expression: "addSlice.type"
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
                        _vm.addSlice,
                        "type",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "single" } }, [
                    _vm._v("Single")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "repeatable" } }, [
                    _vm._v("Repeatable")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "model" } }, [_vm._v("Model")])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "dvs-btn dvs-mr-2",
                attrs: { disabled: _vm.addSlice.slice === null },
                on: { click: _vm.confirmAddSlice }
              },
              [_vm._v("Add Slice")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "dvs-btn dvs-btn-plain",
                on: {
                  click: function($event) {
                    _vm.addSlice.show = false
                  }
                }
              },
              [_vm._v("Cancel")]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "dvs-card dvs-text-center dvs-cursor-pointer dvs-mx-4 dvs-w-48 dvs-bg-grey-lighter hover:dvs-bg-blue-dark hover:dvs-text-white"
      },
      [
        _c("i", { staticClass: "ion-android-menu dvs-text-4xl" }),
        _vm._v(" "),
        _c("h6", [_vm._v("Repeatable")])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8bb0f650", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92106364\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Loadbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.loadbarPercentage > 0 && _vm.loadbarPercentage < 1,
                expression: "loadbarPercentage > 0 && loadbarPercentage < 1"
              }
            ],
            staticClass: "dvs-fixed dvs-pin dvs-z-50"
          },
          [
            _c("div", { staticClass: "dvs-blocker" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dvs-text-center dvs-w-1/4 dvs-px-4 dvs-py-8 dvs-bg-white dvs-rounded dvs-flex dvs-flex-col dvs-items-center dvs-absolute dvs-absolute-center dvs-z-50"
              },
              [
                _c("h6", { staticClass: "dvs-mb-2 dvs-text-action" }, [
                  _vm._v("Just a moment")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dvs-loadbar" }, [
                  _c("div", {
                    staticClass: "dvs-bar dvs-background",
                    style: { width: _vm.loadbarPercentage * 100 + "%" }
                  })
                ])
              ]
            )
          ]
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-92106364", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ada2f82c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Text.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.text === null || _vm.localValue.text === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _vm._v(_vm._s(_vm.clipString(_vm.localValue.text, 200, true)))
        ])
      ]),
      _vm._v(" "),
      _c("template", { slot: "editor" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.text,
              expression: "localValue.text"
            }
          ],
          attrs: { type: "text", maxlength: _vm.getMaxLength },
          domProps: { value: _vm.localValue.text },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localValue, "text", $event.target.value)
              },
              function($event) {
                _vm.updateValue()
              }
            ]
          }
        })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ada2f82c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-be2f7836\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Pagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.meta.pagination && _vm.meta.pagination.total_pages > 1
    ? _c(
        "ul",
        { staticClass: "pagination" },
        _vm._l(_vm.meta.pagination.total_pages, function(n) {
          return _c(
            "li",
            {
              staticClass: "ghost",
              class: { "bg-action": _vm.isCurrentPage(n) },
              on: {
                click: function($event) {
                  _vm.update(n)
                }
              }
            },
            [_vm._v("\n    " + _vm._s(n) + "\n  ")]
          )
        })
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-be2f7836", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c27f8120\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Related.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex px-4 py-8 flex flex-col max-h-200  overflow-y-scroll"
    },
    [
      _c("div", [
        _c("fieldset", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.relatedFilter,
                expression: "relatedFilter"
              }
            ],
            staticClass: "fancy w-full mb-4",
            attrs: { type: "text", placeholder: "Filter" },
            domProps: { value: _vm.relatedFilter },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.relatedFilter = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.filteredOptions, function(option, key) {
        return _c("div", [
          _c("fieldset", { staticClass: "mr-4 flex mb-2" }, [
            _c("div", { staticClass: "flex items-center" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selected,
                    expression: "selected"
                  }
                ],
                staticClass: "fancy",
                attrs: { type: "checkbox" },
                domProps: {
                  value: option[_vm.options.key],
                  checked: Array.isArray(_vm.selected)
                    ? _vm._i(_vm.selected, option[_vm.options.key]) > -1
                    : _vm.selected
                },
                on: {
                  change: [
                    function($event) {
                      var $$a = _vm.selected,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = option[_vm.options.key],
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.selected = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.selected = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.selected = $$c
                      }
                    },
                    _vm.update
                  ]
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "pl-2" }, [
                _vm._v(_vm._s(option[_vm.options.label]))
              ])
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c27f8120", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c87cfda0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/Help.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "help" }, [_c("p", [_vm._t("default")], 2)])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c87cfda0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ddaeac12\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/ColumnControls.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.shouldDisplayControls
    ? _c("div", { staticClass: "dvs-ml-4" }, [
        _c("i", {
          staticClass: "ion-ios-settings-strong dvs-cursor-pointer",
          on: {
            click: function($event) {
              _vm.show = true
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show,
                expression: "show"
              }
            ]
          },
          [
            _c("div", {
              staticClass: "dvs-blocker dvs-z-20",
              on: { click: _vm.hide }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.show,
                    expression: "show"
                  }
                ],
                staticClass:
                  "dvs-absolute dvs-pin-b dvs-pin-l dvs-mb-1 dvs-bg-white dvs-min-w-250 dvs-z-40 dvs-shadow-lg dvs-border-t-2 dvs-border-grey-lighter"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-background-darker pt-4 pb-2 px-4 flex justify-between"
                  },
                  [
                    _vm._v(
                      "\n        " + _vm._s(this.column.label) + "\n        "
                    ),
                    _c("div", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "dvs-pr-4 dvs-uppercase dvs-text-xs dvs-outline-none",
                          on: {
                            click: function($event) {
                              _vm.clearAll()
                            }
                          }
                        },
                        [_vm._v("Clear")]
                      ),
                      _vm._v("|\n          "),
                      _c("i", {
                        staticClass:
                          "ion-close-round dvs-pl-4 dvs-cursor-pointer dvs-float-right",
                        on: { click: _vm.hide }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dvs-px-4 dvs-column-control-modules" },
                  [
                    typeof _vm.column.search !== "undefined"
                      ? _c("search", {
                          ref: "search",
                          attrs: {
                            column: _vm.column.search,
                            options: _vm.column.options
                          },
                          on: { change: _vm.updateValue },
                          model: {
                            value: _vm.localFilters,
                            callback: function($$v) {
                              _vm.localFilters = $$v
                            },
                            expression: "localFilters"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]
            )
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ddaeac12", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e70dff7a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/Slice.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.slice.config
    ? _c(_vm.currentView, { tag: "component", attrs: { devise: _vm.slice } })
    : _c(_vm.currentView, {
        tag: "component",
        attrs: { devise: _vm.slice.config }
      })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e70dff7a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ee7abf24\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/pages/editor/Image.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "field-editor",
    {
      attrs: { options: _vm.options },
      model: {
        value: _vm.localValue,
        callback: function($$v) {
          _vm.localValue = $$v
        },
        expression: "localValue"
      }
    },
    [
      _c("template", { slot: "preview" }, [
        _vm.localValue.url === null || _vm.localValue.url === ""
          ? _c("span", { staticClass: "dvs-italic" }, [
              _vm._v("\n      Currently No Value\n    ")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [_vm._v(_vm._s(_vm.localValue.url))])
      ]),
      _vm._v(" "),
      _c("template", { slot: "editor" }, [
        _c("label", { staticClass: "dvs-mt-4 dvs-large-label" }, [
          _vm._v("Image")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.url,
              expression: "localValue.url"
            }
          ],
          attrs: { type: "text", maxlength: _vm.getMaxLength },
          domProps: { value: _vm.localValue.url },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localValue, "url", $event.target.value)
              },
              function($event) {
                _vm.updateValue()
              }
            ],
            focus: function($event) {
              _vm.launchMediaManager($event)
            }
          }
        }),
        _vm._v(" "),
        _c("label", { staticClass: "dvs-mt-4 dvs-large-label" }, [
          _vm._v("Alt Tag")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.localValue.alt,
              expression: "localValue.alt"
            }
          ],
          attrs: { type: "text" },
          domProps: { value: _vm.localValue.alt },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.localValue, "alt", $event.target.value)
              },
              function($event) {
                _vm.updateValue()
              }
            ]
          }
        })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ee7abf24", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f405e71a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!../devise/vue/src/components/utilities/tables/Search.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.localFilters && _vm.localFilters.search
    ? _c("div", { staticClass: "dvs-flex dvs-px-4 dvs-py-8" }, [
        _c("fieldset", { staticClass: "dvs-w-full dvs-fieldset" }, [
          _c("label", { staticClass: "dvs-pb-2" }, [_vm._v("Search")]),
          _vm._v(" "),
          _vm.uiType === "field"
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.localFilters.search[_vm.column],
                    expression: "localFilters.search[column]"
                  }
                ],
                staticClass: "dvs-w-full",
                attrs: { type: "text" },
                domProps: { value: _vm.localFilters.search[_vm.column] },
                on: {
                  keyup: _vm.updateValue,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.localFilters.search,
                      _vm.column,
                      $event.target.value
                    )
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.uiType === "array-select"
            ? _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localFilters.search[_vm.column],
                      expression: "localFilters.search[column]"
                    }
                  ],
                  staticClass: "fancy w-full",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.localFilters.search,
                          _vm.column,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      _vm.updateValue
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("Any")]),
                  _vm._v(" "),
                  _vm._l(_vm.options, function(option) {
                    return _c("option", [_vm._v(_vm._s(option))])
                  })
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.uiType === "object-select"
            ? _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localFilters.search[_vm.column],
                      expression: "localFilters.search[column]"
                    }
                  ],
                  staticClass: "fancy w-full",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.localFilters.search,
                          _vm.column,
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      _vm.updateValue
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "" } }, [_vm._v("Any")]),
                  _vm._v(" "),
                  _vm._l(_vm.options, function(option, value) {
                    return _c("option", { domProps: { value: value } }, [
                      _vm._v(_vm._s(option))
                    ])
                  })
                ],
                2
              )
            : _vm._e()
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f405e71a", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__devise_dev_src_main_js__ = __webpack_require__("../devise/vue/src/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_bus_js__ = __webpack_require__("./resources/assets/js/event-bus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_route_config_js__ = __webpack_require__("./resources/assets/js/router/route.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuex_store__ = __webpack_require__("./resources/assets/js/vuex/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__("./node_modules/vuex-router-sync/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_headroom_js__ = __webpack_require__("./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_headroom_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_headroom_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_carousel__ = __webpack_require__("./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_App__ = __webpack_require__("./resources/assets/js/components/App.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Hero__ = __webpack_require__("./resources/assets/js/components/Hero.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Hero___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Hero__);
// Laravel's bootstrap boilerplate
__webpack_require__("./resources/assets/js/bootstrap.js");

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");
// Devise


// Devise requires a bus, vue-router and vuex. We initialize these in your application
// so that both apps can share the same store and router. All devise vuex
// is namespaced under the "devise" namespace.

window.bus = __WEBPACK_IMPORTED_MODULE_1__event_bus_js__["a" /* EventBus */];



Object(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__router_route_config_js__["a" /* default */]);

// We initialize the Devise plugin and pass our router, store, and bus to share
// these resources so that your application can tap into them.
Vue.use(__WEBPACK_IMPORTED_MODULE_0__devise_dev_src_main_js__["a" /* default */], {
  store: __WEBPACK_IMPORTED_MODULE_3__vuex_store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_2__router_route_config_js__["a" /* default */],
  bus: window.bus,
  options: {
    adminClass: ''
  }
});

// 3rd party libraries to showcase how you might utilize libs in and around Devise
// Headroom - Navigation helper for when a user scrolls down

// Carousel for the events section

Vue.use(__WEBPACK_IMPORTED_MODULE_6_vue_carousel___default.a);

// Demo Components


Vue.component('Hero', __WEBPACK_IMPORTED_MODULE_8__components_Hero___default.a);
Vue.component('ExperiencesApp', {
  template: '<App :devise="devise"/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_7__components_App___default.a }
});

// When we want to initialize something after Devise is done loading
window.bus.$on('devise-loaded', function () {
  var navigation = document.querySelector("#headroom");
  var headroom = new __WEBPACK_IMPORTED_MODULE_5_headroom_js___default.a(navigation);
  headroom.init();
});

// Initialize the application's Vue app
var app = new Vue({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_route_config_js__["a" /* default */]
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__("./node_modules/lodash/lodash.js");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });

/***/ }),

/***/ "./resources/assets/js/components/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/App.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8142f38c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/App.vue")
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
Component.options.__file = "resources/assets/js/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8142f38c", Component.options)
  } else {
    hotAPI.reload("data-v-8142f38c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Experience.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Experience.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41863c3e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Experience.vue")
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
Component.options.__file = "resources/assets/js/components/Experience.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41863c3e", Component.options)
  } else {
    hotAPI.reload("data-v-41863c3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Experiences.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Experiences.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0c0afb62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Experiences.vue")
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
Component.options.__file = "resources/assets/js/components/Experiences.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c0afb62", Component.options)
  } else {
    hotAPI.reload("data-v-0c0afb62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Hero.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Hero.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-76da389e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Hero.vue")
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
Component.options.__file = "resources/assets/js/components/Hero.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76da389e", Component.options)
  } else {
    hotAPI.reload("data-v-76da389e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/devise-admin/MainMenu.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/devise-admin/MainMenu.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-487abcf8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/devise-admin/MainMenu.vue")
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
Component.options.__file = "resources/assets/js/components/devise-admin/MainMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-487abcf8", Component.options)
  } else {
    hotAPI.reload("data-v-487abcf8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/devise-admin/events/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/devise-admin/events/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-87763f48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/devise-admin/events/Index.vue")
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
Component.options.__file = "resources/assets/js/components/devise-admin/events/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87763f48", Component.options)
  } else {
    hotAPI.reload("data-v-87763f48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/devise-admin/menus/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/devise-admin/menus/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7d852867\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/devise-admin/menus/Index.vue")
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
Component.options.__file = "resources/assets/js/components/devise-admin/menus/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d852867", Component.options)
  } else {
    hotAPI.reload("data-v-7d852867", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/event-bus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var EventBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ }),

/***/ "./resources/assets/js/router/route.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_devise_admin_MainMenu__ = __webpack_require__("./resources/assets/js/components/devise-admin/MainMenu.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_devise_admin_MainMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_devise_admin_MainMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Experience__ = __webpack_require__("./resources/assets/js/components/Experience.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Experience___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Experience__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Experiences__ = __webpack_require__("./resources/assets/js/components/Experiences.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Experiences___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Experiences__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_devise_admin_menus_Index__ = __webpack_require__("./resources/assets/js/components/devise-admin/menus/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_devise_admin_menus_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_devise_admin_menus_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_devise_admin_events_Index__ = __webpack_require__("./resources/assets/js/components/devise-admin/events/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_devise_admin_events_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_devise_admin_events_Index__);










var routes = [
// You don't want to remove this. This is the Main administration menu for
// Devise. This allows you to add new menu items to the primary navigation.
{
  path: '/devise',
  name: 'devise-index',
  components: {
    'devise': __WEBPACK_IMPORTED_MODULE_2__components_devise_admin_MainMenu___default.a
  }
}, {
  path: '/',
  alias: ['/devise/edit-page'],
  name: 'index',
  props: true,
  meta: {
    inApp: 'in App alias'
  },
  components: {
    'experiences': __WEBPACK_IMPORTED_MODULE_4__components_Experiences___default.a
  }
}, {
  path: '/experience/:experiencename',
  name: 'experience',
  props: true,
  meta: {
    title: 'Devise Sea-Cruises FTW',
    inApp: 'in App'
  },
  components: {
    'experiences': __WEBPACK_IMPORTED_MODULE_3__components_Experience___default.a
  }
},
// Example of writing custom admin pages
{
  path: '/devise/menus',
  name: 'devise-menus-index',
  components: {
    'devise': __WEBPACK_IMPORTED_MODULE_5__components_devise_admin_menus_Index___default.a
  },
  meta: {
    title: 'Testing',
    wide: true
  }
}, {
  path: '/devise/events',
  name: 'devise-events-index',
  components: {
    'devise': __WEBPACK_IMPORTED_MODULE_6__components_devise_admin_events_Index___default.a
  },
  meta: {
    title: 'Testing',
    wide: true
  }
}];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'hash',
  history: true,
  transitionOnLoad: true,
  routes: routes
});

router.beforeEach(function (to, from, next) {
  // Set the page title
  if (typeof to.meta.title !== 'undefined') {
    document.title = to.meta.title;
  } else {
    document.title = 'Welcome to Devise Sea Cruises';
  }
  next();
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "./resources/assets/js/vuex/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actions = {

  // Events
  getEvents: function getEvents(context) {
    return new Promise(function (resolve, reject) {
      window.axios.get(context.state.devise.api.baseUrl + 'events/').then(function (response) {
        context.commit('setEvents', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createEvent: function createEvent(context, event) {
    return new Promise(function (resolve, reject) {
      window.axios.post(context.state.devise.api.baseUrl + 'events/', event).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: event.name + ' has been created.' });
        context.commit('createEvent', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateEvent: function updateEvent(context, payload) {
    return new Promise(function (resolve, reject) {
      window.axios.put(context.state.devise.api.baseUrl + 'events/' + payload.event.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.name + ' has been saved.' });
        context.commit('updateEvent', { menu: payload.event, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteEvent: function deleteEvent(context, menu) {
    return new Promise(function (resolve, reject) {
      window.axios.delete(context.state.devise.api.baseUrl + 'events/' + menu.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: menu.name + ' has been deleted.' });
        context.commit('deleteEvent', menu);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },


  // Menus
  getMenus: function getMenus(context) {
    return new Promise(function (resolve, reject) {
      window.axios.get(context.state.devise.api.baseUrl + 'menu-items/').then(function (response) {
        context.commit('setMenus', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  createMenu: function createMenu(context, menu) {
    return new Promise(function (resolve, reject) {
      window.axios.post(context.state.devise.api.baseUrl + 'menu-items/', menu).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: menu.name + ' has been created.' });
        context.commit('createMenu', response.data);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  updateMenu: function updateMenu(context, payload) {
    return new Promise(function (resolve, reject) {
      window.axios.put(context.state.devise.api.baseUrl + 'menu-items/' + payload.menu.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: payload.data.name + ' has been saved.' });
        context.commit('updateMenu', { menu: payload.menu, data: response.data });
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  },
  deleteMenu: function deleteMenu(context, menu) {
    return new Promise(function (resolve, reject) {
      window.axios.delete(context.state.devise.api.baseUrl + 'menu-items/' + menu.id).then(function (response) {
        window.bus.$emit('showMessage', { title: 'Success!', message: menu.name + ' has been deleted.' });
        context.commit('deleteMenu', menu);
        resolve(response);
      }).catch(function (error) {
        window.bus.$emit('showError', error);
      });
    }).catch(function (error) {
      window.bus.$emit('showError', error);
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ "./resources/assets/js/vuex/getters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  // Events
  events: function events(state) {
    return state.events;
  },

  // Menus
  menus: function menus(state) {
    return state.menus;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),

/***/ "./resources/assets/js/vuex/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  // Events
  createEvent: function createEvent(state, event) {
    state.events.data.push(event);
  },
  setEvents: function setEvents(state, payload) {
    state.events = payload;
  },
  updateEvent: function updateEvent(state, _ref) {
    var event = _ref.event,
        data = _ref.data;

    state.events.data.splice(state.events.data.indexOf(event), 1, data);
  },
  deleteEvent: function deleteEvent(state, event) {
    state.events.data.splice(state.events.data.indexOf(event), 1);
  },


  // Menus
  createMenu: function createMenu(state, menu) {
    state.menus.data.push(menu);
  },
  setMenus: function setMenus(state, payload) {
    state.menus = payload;
  },
  updateMenu: function updateMenu(state, _ref2) {
    var menu = _ref2.menu,
        data = _ref2.data;

    state.menus.data.splice(state.menus.data.indexOf(menu), 1, data);
  },
  deleteMenu: function deleteMenu(state, menu) {
    state.menus.data.splice(state.menus.data.indexOf(menu), 1);
  }
});

/***/ }),

/***/ "./resources/assets/js/vuex/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/vuex/mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./resources/assets/js/vuex/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getters__ = __webpack_require__("./resources/assets/js/vuex/getters.js");






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// root state object.
// each Vuex instance is just a single state tree.
var state = {
  events: {
    data: []
  },
  menus: {
    data: []
  }

  // A Vuex instance is created by combining the state, the actions,
  // and the mutations. Because the actions and mutations are just
  // functions that do not depend on the instance itself, they can
  // be easily tested or even hot-reloaded (see counter-hot example).
  //
  // You can also provide middlewares, which is just an array of
  // objects containing some hooks to be called at initialization
  // and after each mutation.
};/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: state,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_4__getters__["a" /* default */]
}));

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/app.js");


/***/ })

},[0]);