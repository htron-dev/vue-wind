(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{489:function(t,e,s){"use strict";s.r(e);s(136);var o=s(80),a={props:{componentOptions:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{active:null,capitalize:o.capitalize,tabs:{}}},watch:{componentOptions:{immediate:!0,handler:"load"}},methods:{load:function(){var t=this.componentOptions,e=t.props,s=t.events,o=t.methods;this.haveData(e)&&(this.tabs.props=this.componentOptions.props),this.haveData(s)&&(this.tabs.events=this.componentOptions.events),this.haveData(o)&&(this.tabs.methods=this.componentOptions.methods),this.active=Object.keys(this.tabs)[0]},haveData:function(t){return!!t&&!!Object.keys(t).length}}},n=s(1),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("w-card",{staticClass:"flex min-h-full",attrs:{shadow:"0",height:"400px"}},[s("div",{staticClass:"flex flex-col border-r w-2/12 text-left"},[t._l(t.tabs,(function(e,o){return[t.componentOptions[o]?s("w-btn",{key:o,staticClass:"text-left",attrs:{text:o!==t.active,color:o===t.active?"teal-500":"",text:""},domProps:{textContent:t._s(t.capitalize(o))},on:{click:function(e){t.active=o}}}):t._e()]}))],2),t._v(" "),s("div",{staticClass:"w-full overflow-x-auto  border-t"},["props"===t.active?s("div",[s("component-showcase-props",{attrs:{"props-options":t.tabs.props,"exclude-props":t.componentOptions.excludeProps}})],1):t._e(),t._v(" "),"events"===t.active?s("div",[s("component-showcase-events",{attrs:{"events-data":t.tabs.events}})],1):t._e(),t._v(" "),"methods"===t.active?s("div",[s("component-showcase-methods",{attrs:{"methods-data":t.tabs.methods}})],1):t._e()])])}),[],!1,null,null,null);e.default=i.exports}}]);