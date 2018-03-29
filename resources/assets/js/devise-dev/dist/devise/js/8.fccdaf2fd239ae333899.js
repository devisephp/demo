webpackJsonp([8],{M5gm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("woOf"),n=a.n(s),d=a("Dd8w"),i=a.n(d),l=a("NYxO"),o={name:"LanguagesManage",data:function(){return{localValue:{data:[]},modulesToLoad:1,newLanguage:{code:null}}},mounted:function(){this.retrieveAllLanguages()},methods:i()({},Object(l.b)("devise",["getLanguages","createLanguage","updateLanguage"]),{requestCreateLanguage:function(){this.createLanguage(this.newLanguage)},requestUpdateLanguage:function(e){this.updateLanguage(e).then(function(){e.editCode=!1})},retrieveAllLanguages:function(){var e=this;this.getLanguages().then(function(){e.localValue=n()({},e.localValue,e.languages),e.localValue.data.map(function(t){e.$set(t,"editCode",!1)}),window.bus.$emit("incrementLoadbar",e.modulesToLoad)})}}),computed:i()({},Object(l.c)("devise",["languages"]))},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.languages.data.length?a("div",{staticClass:"dvs-flex dvs-items-stretch dvs-min-h-screen dvs-relative"},[a("div",{attrs:{id:"devise-sidebar"}},[a("h2",{staticClass:"dvs-font-bold dvs-mb-2"},[e._v("Manage Languages")]),e._v(" "),a("a",{staticClass:"dvs-mb-8 dvs-block dvs-uppercase dvs-font-bold dvs-text-xs",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.goToPage("devise-settings-index")}}},[e._v("Back to Settings")])]),e._v(" "),a("div",{attrs:{id:"devise-admin-content"}},[a("h3",{staticClass:"dvs-mb-8"},[e._v("Add Language")]),e._v(" "),a("help",{staticClass:"dvs-mb-8"},[e._v("When you add a language to this site it is immediately enabled. Afterwards you can create translated versions of pages that will be linked to one another allowing you to provide ways to switch languages on your front-end. We "),a("a",{staticClass:"dvs-font-bold",attrs:{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank"}},[e._v("highly suggest using the ISO 639-1 2 letter codes")]),e._v(" but you can technically use whatever you want.")]),e._v(" "),a("fieldset",{staticClass:"dvs-fieldset dvs-mb-4"},[a("label",[e._v("New Language Code")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newLanguage.code,expression:"newLanguage.code"}],attrs:{type:"text",maxlength:"2"},domProps:{value:e.newLanguage.code},on:{input:function(t){t.target.composing||e.$set(e.newLanguage,"code",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"dvs-btn dvs-mb-8",attrs:{disabled:null===e.newLanguage.code},on:{click:e.requestCreateLanguage}},[e._v("Save New Language")]),e._v(" "),a("h3",{staticClass:"dvs-mb-8"},[e._v("Existing Languages")]),e._v(" "),a("div",{staticClass:"dvs-mb-12 dvs-flex dvs-flex-col"},e._l(e.localValue.data,function(t,s){return a("div",{staticClass:"dvs-flex dvs-justify-between dvs-items-center dvs-mb-2"},[a("div",{staticClass:"dvs-text-xl dvs-font-bold dvs-mb-4"},[t.editCode?e._e():[e._v("\n            "+e._s(t.code)+"\n          ")],e._v(" "),a("fieldset",{staticClass:"dvs-fieldset"},[a("input",{directives:[{name:"show",rawName:"v-show",value:t.editCode,expression:"language.editCode"},{name:"model",rawName:"v-model",value:e.localValue.data[s].code,expression:"localValue.data[key].code"}],attrs:{type:"text"},domProps:{value:e.localValue.data[s].code},on:{input:function(t){t.target.composing||e.$set(e.localValue.data[s],"code",t.target.value)}}})])],2),e._v(" "),a("div",{staticClass:"dvs-flex dvs-justify-between dvs-items-center"},[t.editCode?e._e():a("button",{staticClass:"dvs-btn dvs-btn-plain dvs-btn-xs dvs-ml-4",on:{click:function(e){t.editCode=!t.editCode}}},[a("i",{staticClass:"ion-edit"})]),e._v(" "),t.editCode?a("button",{staticClass:"dvs-btn dvs-mr-2",on:{click:function(t){e.requestUpdateLanguage(e.localValue.data[s])}}},[e._v("Save Language Code")]):e._e(),e._v(" "),t.editCode?a("button",{staticClass:"dvs-btn dvs-btn-plain",on:{click:function(e){t.editCode=!1}}},[e._v("Cancel")]):e._e()])])}))],1)]):e._e()},staticRenderFns:[]},v=a("VU/8")(o,u,!1,null,null,null);t.default=v.exports}});