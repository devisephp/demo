webpackJsonp([5],{VsYd:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("+x/a"),d=s("NYxO"),o={name:"SitesIndex",data:function(){return{modulesToLoad:2,showCreate:!1,showEdit:!1,editAddLanguage:null,editSite:{id:null,name:null,domain:null,languages:[]},newSite:{name:null,domain:null}}},mounted:function(){this.retrieveAllSites(),this.retrieveAllLanguages()},methods:n()({},Object(d.b)("devise",["getSites","getLanguages","createSite","updateSite","deleteSite"]),{requestCreateSite:function(){var e=this;this.createSite(this.newSite).then(function(){e.newSite.name=null,e.newSite.domain=null,e.showCreate=!1})},showEditSite:function(e){this.editSite.id=e.id,this.editSite.name=e.name,this.editSite.domain=e.domain,this.editSite.languages=e.languages,this.showEdit=!0},requestEditSite:function(){var e=this;this.updateSite({site:this.originalSite(this.editSite.id),data:this.editSite}).then(function(){e.editSite.id=null,e.editSite.name=null,e.editSite.domain=null,e.showEdit=!1})},requestDeleteSite:function(e){var t=this;this.deleteSite(e).then(function(){t.retrieveAllSites()})},retrieveAllSites:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.getSites().then(function(){e&&window.bus.$emit("incrementLoadbar",self.modulesToLoad)})},retrieveAllLanguages:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.getLanguages().then(function(){e&&window.bus.$emit("incrementLoadbar",self.modulesToLoad)})},addEditLanguage:function(){this.editAddLanguage.default=0,this.editSite.languages.push(this.editAddLanguage),this.editAddLanguage=null},setDefaultLanguage:function(e){this.editSite.languages.map(function(t){return t.default=0,t.id===e.id?(t.default=1,1):0})},originalSite:function(e){return this.sites.data.find(function(t){return t.id===e})}}),computed:n()({},Object(d.c)("devise",["sites","languages"]),{createInvalid:function(){return null===this.newSite.name||null===this.newSite.domain},editInvalid:function(){return null===this.editSite.name||null===this.editSite.domain},languagesNotInEditSite:function(){var e=this;return this.languages.data.filter(function(t){return 0===e.editSite.languages.filter(function(e){return e.id===t.id}).length})}}),components:{DeviseModal:a.a}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-flex dvs-justify-end dvs-items-stretch dvs-min-h-screen dvs-relative"},[s("div",{attrs:{id:"devise-sidebar"}},[s("h2",{staticClass:"dvs-font-bold dvs-mb-2"},[e._v("Sites")]),e._v(" "),s("a",{staticClass:"dvs-mb-8 dvs-block dvs-uppercase dvs-font-bold dvs-text-xs",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.goToPage("devise-developers-index")}}},[e._v("Back to Developers")]),e._v(" "),s("ul",{staticClass:"dvs-list-reset"},[s("li",{staticClass:"dvs-cursor-pointer dvs-mb-6 dvs-text-lg dvs-cursor-pointer",on:{click:function(t){t.preventDefault(),e.showCreate=!0}}},[e._v("\n        Create New Site\n      ")])])]),e._v(" "),s("div",{attrs:{id:"devise-admin-content"}},[s("h2",{staticClass:"dvs-mb-10"},[e._v("Current Sites")]),e._v(" "),e._l(e.sites.data,function(t){return s("div",{staticClass:"dvs-mb-6 dvs-rounded-sm dvs-bg-white dvs-shadow-sm dvs-flex dvs-justify-between dvs-items-center"},[s("div",{staticClass:"dvs-min-w-2/5 dvs-text-base dvs-font-bold dvs-pr-8"},[e._v("\n        "+e._s(t.name)),s("br"),e._v(" "),s("span",{staticClass:"dvs-font-mono dvs-font-normal"},[e._v(e._s(t.domain))])]),e._v(" "),s("div",{staticClass:"dvs-min-w-1/5 dvs-text-sm dvs-font-mono dvs-pr-8"},[e._v("\n        SITE_"+e._s(t.id)+"_DOMAIN\n      ")]),e._v(" "),s("div",{staticClass:"dvs-min-w-1/5 dvs-flex dvs-flex-wrap dvs-pr-8"},e._l(t.languages,function(t){return s("span",{staticClass:"dvs-mb-2 dvs-mr-2 dvs-tag dvs-bg-grey-lighter",class:{"dvs-bg-green-dark dvs-text-white":t.default}},[e._v(e._s(t.code))])})),e._v(" "),s("div",{staticClass:"dvs-w-1/5 dvs-px-8 dvs-flex dvs-justify-end"},[s("button",{staticClass:"dvs-btn dvs-btn-xs dvs-mr-2",on:{click:function(s){e.showEditSite(t)}}},[e._v("Edit")]),e._v(" "),s("button",{directives:[{name:"devise-alert-confirm",rawName:"v-devise-alert-confirm",value:{callback:e.requestDeleteSite,arguments:t,message:"Are you sure you want to delete this site?"},expression:"{callback: requestDeleteSite, arguments: site, message: 'Are you sure you want to delete this site?'}"}],staticClass:"dvs-btn dvs-btn-xs"},[e._v("Delete")])])])})],2),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.showCreate?s("devise-modal",{staticClass:"dvs-z-50",on:{close:function(t){e.showCreate=!1}}},[s("h4",{staticClass:"dvs-mb-4"},[e._v("Create new site")]),e._v(" "),s("fieldset",{staticClass:"dvs-fieldset mb-4"},[s("label",[e._v("Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newSite.name,expression:"newSite.name"}],attrs:{type:"text",placeholder:"Name of the Site"},domProps:{value:e.newSite.name},on:{input:function(t){t.target.composing||e.$set(e.newSite,"name",t.target.value)}}})]),e._v(" "),s("help",{staticClass:"dvs-mb-8"},[e._v('The domain should not include the http or https:// protocol identifier. So your site entry could be "my-super-awesome-site.com" or "sub-domain.my-super-awesome-site.com". To Support development environments you can override these values in your .env file in the root of your project with something like "SITE_1_DOMAIN=my-super-awesome-site.test" for your local development or staging.')]),e._v(" "),s("fieldset",{staticClass:"dvs-fieldset mb-4"},[s("label",[e._v("Domain")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newSite.domain,expression:"newSite.domain"}],attrs:{type:"text",placeholder:"Domain of the Site"},domProps:{value:e.newSite.domain},on:{input:function(t){t.target.composing||e.$set(e.newSite,"domain",t.target.value)}}})]),e._v(" "),s("button",{staticClass:"dvs-btn",attrs:{disabled:e.createInvalid},on:{click:e.requestCreateSite}},[e._v("Create")]),e._v(" "),s("button",{staticClass:"dvs-btn dvs-btn-plain",on:{click:function(t){e.showCreate=!1}}},[e._v("Cancel")])],1):e._e()],1),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.showEdit?s("devise-modal",{staticClass:"dvs-z-50",on:{close:function(t){e.showEdit=!1}}},[s("h4",{staticClass:"dvs-mb-4"},[e._v("Edit site")]),e._v(" "),s("fieldset",{staticClass:"dvs-fieldset mb-4"},[s("label",[e._v("Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.editSite.name,expression:"editSite.name"}],attrs:{type:"text",placeholder:"Name of the Site"},domProps:{value:e.editSite.name},on:{input:function(t){t.target.composing||e.$set(e.editSite,"name",t.target.value)}}})]),e._v(" "),s("help",{staticClass:"dvs-mb-8"},[e._v('The domain should not include the http or https:// protocol identifier. So your site entry could be "my-super-awesome-site.com" or "sub-domain.my-super-awesome-site.com". To Support development environments you can override these values in your .env file in the root of your project with something like "SITE_1_DOMAIN=my-super-awesome-site.test" for your local development or staging.')]),e._v(" "),s("fieldset",{staticClass:"dvs-fieldset mb-4"},[s("label",[e._v("Domain")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.editSite.domain,expression:"editSite.domain"}],attrs:{type:"text",placeholder:"Domain of the Site"},domProps:{value:e.editSite.domain},on:{input:function(t){t.target.composing||e.$set(e.editSite,"domain",t.target.value)}}})]),e._v(" "),s("fieldset",{staticClass:"dvs-fieldset mb-4"},[s("label",[e._v("Languages")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.editAddLanguage,expression:"editAddLanguage"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.editAddLanguage=t.target.multiple?s:s[0]},function(t){e.addEditLanguage()}]}},[s("option",{domProps:{value:null}},[e._v("Add a Language")]),e._v(" "),e._l(e.languagesNotInEditSite,function(t){return s("option",{domProps:{value:t}},[e._v(e._s(t.code))])})],2)]),e._v(" "),s("fieldset",{staticClass:"dvs-fieldset mb-8"},[s("help",{staticClass:"dvs-mb-8"},[e._v("Green indicates the default language. Click on the language tags below to change.")]),e._v(" "),s("label",[e._v("Current Languages")]),e._v(" "),e._l(e.editSite.languages,function(t){return s("span",{staticClass:"dvs-mr-2 dvs-tag dvs-bg-grey-lighter dvs-cursor-pointer",class:{"dvs-bg-green-dark dvs-text-white":t.default},on:{click:function(s){e.setDefaultLanguage(t)}}},[e._v(e._s(t.code))])}),e._v(" "),e.editSite.languages.length<1?s("span",[e._v("No Languages")]):e._e()],2),e._v(" "),s("button",{staticClass:"dvs-btn",attrs:{disabled:e.editInvalid},on:{click:e.requestEditSite}},[e._v("Edit")]),e._v(" "),s("button",{staticClass:"dvs-btn dvs-btn-plain",on:{click:function(t){e.showEdit=!1}}},[e._v("Cancel")])],1):e._e()],1)],1)},staticRenderFns:[]},r=s("VU/8")(o,l,!1,null,null,null);t.default=r.exports}});