(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{490:function(t,n,e){"use strict";e.r(n);e(137),e(135),e(60),e(138);var o=e(72),s=e(80),c={props:{componentNames:{type:[String,Array,Object],required:!0,default:function(){return[]}}},data:function(){return{components:[],active:0}},created:function(){this.load()},methods:{load:function(){Array.isArray(this.componentNames)?this.setComponents(this.componentNames):"object"===Object(o.a)(this.componentNames)?this.addComponentViewObject(this.componentNames):"string"==typeof this.componentNames&&this.addComponentViewString(this.componentNames)},addComponentViewObject:function(t){var n=this,e=this.getComponentData(t.name,t.excludeProps);t.merge&&t.merge.forEach((function(o){var s=n.getComponentData(o,t.excludeProps);e.props=Object.assign(e.props||{},s.props),e.events=Object.assign(e.events||{},s.events),e.methods=Object.assign(e.methods||{},s.methods)})),this.components.push(e)},addComponentViewString:function(t){this.components.push(this.getComponentData(t))},setComponents:function(t){var n=this;t.forEach((function(t){"string"==typeof t?n.addComponentViewString(t):n.addComponentViewObject(t)}))},getComponentData:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=Object(s.upperFirst)(Object(s.camelCase)(t)),o=this.$root.$options.components[e];if(!o)return{name:t,props:{},events:{}};var c=o.options,a=c.props,i=c.docs,p={name:t,props:null!=a?a:null,methods:i?i.methods:null,excludeProps:n,events:i?i.events:null};return p}}},a=e(1),i=Object(a.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.components.length?e("w-card",[e("div",{staticClass:"flex"},t._l(t.components,(function(n,o){return e("w-btn",{key:o,staticStyle:{"min-width":"160px"},attrs:{color:"teal-500",text:o!==t.active},on:{click:function(n){t.active=o}}},[t._v("\n            "+t._s(n.name)+"\n        ")])})),1),t._v(" "),t.components[t.active]?e("component-showcase-tabs",{attrs:{"component-options":t.components[t.active]}}):t._e()],1):e("w-card",[t._v("\n    Error component\n")])}),[],!1,null,null,null);n.default=i.exports}}]);