(function(t){function e(e){for(var s,r,o=e[0],l=e[1],d=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-card",{attrs:{color:"grey lighten-4",flat:"",height:"100%",tile:""}},[a("toolbar"),a("router-view")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{height:"40",dense:"",color:"#026aa7"}},[a("v-app-bar-nav-icon",{staticClass:"white--text toolbar-nav-icon icon",on:{click:function(e){return t.$router.push({name:"Home"})}}},[a("v-icon",{attrs:{dark:"",size:"20px"}},[t._v(" mdi-apps ")])],1),a("v-app-bar-nav-icon",{staticClass:"white--text ma-1 toolbar-nav-icon icon",on:{click:function(e){return t.$router.push({name:"Home"})}}},[a("v-icon",{attrs:{size:"20px",dark:""}},[t._v(" mdi-home ")])],1),a("v-btn",{staticClass:"white--text toolbar-nav-icon",staticStyle:{"margin-right":"4px"},attrs:{color:"#4e97c2"}},[a("v-icon",{attrs:{left:"",dark:"",size:"20px"}},[t._v(" mdi-subtitles ")]),t._v(" Panolar ")],1),a("v-text-field",{staticStyle:{"max-width":"12%","padding-top":"1.5%"},attrs:{flat:"","solo-inverted":"","append-icon":"mdi-magnify",height:"32px",color:"white",dark:"",dense:""}}),a("v-spacer"),a("v-spacer"),a("span",{staticClass:"white--text Header-text"},[t._v(" Vue-Trello ")]),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-app-bar-nav-icon",{staticClass:"white--text ma-1 toolbar-nav-icon icon"},[a("v-icon",{attrs:{size:"20px",dark:""}},[t._v(" mdi-plus ")])],1),a("v-app-bar-nav-icon",{staticClass:"white--text toolbar-nav-icon icon"},[a("v-icon",{attrs:{size:"20px",dark:""}},[t._v(" mdi-home ")])],1),a("v-btn",{staticClass:"ma-1",attrs:{depressed:"",height:"38",fab:"",small:"",color:"#ff9a1f"}},[t._v(" U ")])],1)},o=[],l={},d=l,c=a("2877"),u=Object(c["a"])(d,r,o,!1,null,null,null),p=u.exports,m={components:{Toolbar:p},data:function(){return{}}},f=m,v=(a("034f"),Object(c["a"])(f,i,n,!1,null,null,null)),h=v.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all-boards"},[a("div",{staticClass:"boards-menu"},[a("ul",[a("li",[a("a",{staticClass:"std-links std-links-active"},[a("v-icon",{staticStyle:{"padding-right":"5px"}},[t._v(" mdi-subtitles ")]),t._v(" Boards ")],1)]),a("li",[a("a",{staticClass:"std-links"},[a("v-icon",{staticStyle:{"padding-right":"5px"}},[t._v(" mdi-table ")]),t._v(" Templates ")],1)]),a("li",[a("a",{staticClass:"std-links"},[a("v-icon",{staticStyle:{"padding-right":"5px"}},[t._v(" mdi-home ")]),t._v(" Home ")],1)])])]),a("div",{staticClass:"boards"},[a("div",{staticClass:"section-header"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-star")]),a("div",{staticClass:"section-header-title"},[t._v(" Personal Boards ")])],1),a("ul",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.boards,(function(e,s){return a("li",{key:"board-"+s,staticClass:"board-li"},[a("v-card",{on:{click:function(a){return t.goToBoard(e)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"150px",src:e.cardImg}},[a("v-card-title",{staticStyle:{"font-size":"14px","font-weight":"800"}},[t._v(t._s(e.name))])],1)],1)],1)})),0)])])},y=[],x={data:function(){return{boards:[{id:1,name:"Ideas",cardImg:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"},{id:2,name:"School",cardImg:"https://cdn.vuetifyjs.com/images/cards/house.jpg"},{id:3,name:"Life",cardImg:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}]}},methods:{goToBoard:function(t){this.$router.push({name:"Board",params:{id:t.id}})}}},k=x,_=(a("89f1"),Object(c["a"])(k,g,y,!1,null,null,null)),w=_.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("kanban-board",{attrs:{stages:t.stages.map((function(t){return"status-"+t.id})),blocks:t.modifiedBlocks},on:{"update-block":t.updateBlock}},[t._l(t.stages,(function(e){return a("div",{key:e.id,attrs:{slot:"status-"+e.id},slot:"status-"+e.id},[a("h2",[t._v(t._s(e.name))])])})),t._l(t.modifiedBlocks,(function(e){return a("div",{key:e.id,attrs:{slot:e.id},slot:e.id},[a("div",[a("strong",[t._v(" "+t._s(e.id)+" ")])]),a("div",[t._v(" "+t._s(e.title)+" ")])])}))],2)],1)},I=[],j=(a("7db0"),a("d81d"),a("a9e3"),a("8242"),{data:function(){return{stages:[],blocks:[]}},created:function(){var t=this;t.getBoard()},methods:{getBoard:function(){var t=this;t.$route.params.id&&(1===t.$route.params.id?(t.stages.push({id:1,name:"on-hold"},{id:2,name:"in-progress"},{id:3,name:"needs-review"},{id:4,name:"approved"}),t.blocks.push({id:1,status:2,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,"},{id:2,status:1,title:"Test"},{id:3,status:3,title:"It was popularised in the 1960s with the release of Letraset sheets"},{id:4,status:3,title:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"})):2===t.$route.params.id?(t.stages.push({id:1,name:"on-hold"},{id:2,name:"in-progress"},{id:3,name:"needs-review"},{id:4,name:"approved"}),t.blocks.push({id:1,status:2,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,"},{id:2,status:1,title:"Test"},{id:3,status:3,title:"It was popularised in the 1960s with the release of Letraset sheets"})):3===t.$route.params.id&&(t.stages.push({id:1,name:"on-hold"},{id:2,name:"in-progress"},{id:3,name:"needs-review"},{id:4,name:"approved"},{id:5,name:"backlog"}),t.blocks.push({id:1,status:2,title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,"},{id:2,status:1,title:"Test"},{id:3,status:3,title:"It was popularised in the 1960s with the release of Letraset sheets"},{id:4,status:3,title:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"},{id:5,status:1,title:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"},{id:6,status:1,title:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"}))),console.log("vm.blocks: ",t.blocks)},updateBlock:function(t,e){this.modifiedBlocks.find((function(e){return e.id===Number(t)})).status=e}},computed:{modifiedBlocks:function(){return this.blocks.map((function(t){return{id:t.id,status:"status-"+t.status,title:t.title}}))}}}),B=j,L=Object(c["a"])(B,C,I,!1,null,null,null),O=L.exports;s["default"].use(b["a"]);var S=[{path:"/",name:"Home",component:w},{path:"/board/:id",name:"Board",component:O}],$=new b["a"]({routes:S}),T=$,P=a("2f62");s["default"].use(P["a"]);var z=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=a("ce5b"),E=a.n(H);a("bf40");s["default"].use(E.a);var M={},J=new E.a(M),N=a("26a2");s["default"].use(N["a"]),s["default"].config.productionTip=!1,new s["default"]({vuetify:J,router:T,store:z,render:function(t){return t(h)}}).$mount("#app")},8242:function(t,e,a){},"85ec":function(t,e,a){},"89f1":function(t,e,a){"use strict";var s=a("fca2"),i=a.n(s);i.a},fca2:function(t,e,a){}});
//# sourceMappingURL=app.0c4665db.js.map