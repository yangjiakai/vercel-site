(function(t){function a(a){for(var s,n,c=a[0],l=a[1],r=a[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(a);while(d.length)d.shift()();return o.push.apply(o,r||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(o.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},n={app:0},i={app:0},o=[];function c(t){return l.p+"static/js/"+({about:"about"}[t]||t)+"."+{"chunk-1eacbb0e":"cdccbb7d","chunk-32dbdea6":"71f0045a","chunk-046a5cd0":"21a83264","chunk-056f6906":"8137832f","chunk-2e3488de":"97716347","chunk-dd4f6f5a":"ace0762f","chunk-24f09948":"7fda20b5","chunk-432657c6":"716737cd","chunk-329b6d0a":"a4c3ae16","chunk-404375fc":"0d43fad1","chunk-502f8ce1":"3a7acec2","chunk-30459b7e":"538ff384","chunk-c7515544":"a1ed5583","chunk-73008ee1":"d15a64fa","chunk-9b9f13de":"511e5526",about:"56a1d261","chunk-60cbf36b":"a7d3277e","chunk-a017f5b8":"403fe749"}[t]+".js"}function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e={"chunk-1eacbb0e":1,"chunk-32dbdea6":1,"chunk-046a5cd0":1,"chunk-056f6906":1,"chunk-2e3488de":1,"chunk-dd4f6f5a":1,"chunk-24f09948":1,"chunk-432657c6":1,"chunk-329b6d0a":1,"chunk-404375fc":1,"chunk-502f8ce1":1,"chunk-30459b7e":1,"chunk-c7515544":1,"chunk-73008ee1":1,"chunk-9b9f13de":1,about:1,"chunk-60cbf36b":1,"chunk-a017f5b8":1};n[t]?a.push(n[t]):0!==n[t]&&e[t]&&a.push(n[t]=new Promise(function(a,e){for(var s="static/css/"+({about:"about"}[t]||t)+"."+{"chunk-1eacbb0e":"5c2f7719","chunk-32dbdea6":"314763cf","chunk-046a5cd0":"a0a796fa","chunk-056f6906":"021d2247","chunk-2e3488de":"63f91646","chunk-dd4f6f5a":"68e65c65","chunk-24f09948":"cdb85248","chunk-432657c6":"83a5c173","chunk-329b6d0a":"431057ab","chunk-404375fc":"b4f37aa5","chunk-502f8ce1":"7558442f","chunk-30459b7e":"739ca5ba","chunk-c7515544":"8c1b3354","chunk-73008ee1":"2a3da91c","chunk-9b9f13de":"97f4725f",about:"799f79a7","chunk-60cbf36b":"e5f43121","chunk-a017f5b8":"aa0546f0"}[t]+".css",i=l.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var r=o[c],u=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(u===s||u===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){r=d[c],u=r.getAttribute("data-href");if(u===s||u===i)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var s=a&&a.target&&a.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],p.parentNode.removeChild(p),e(o)},p.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(p)}).then(function(){n[t]=0}));var s=i[t];if(0!==s)if(s)a.push(s[2]);else{var o=new Promise(function(a,e){s=i[t]=[a,e]});a.push(s[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var d=new Error;r=function(a){u.onerror=u.onload=null,clearTimeout(p);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,e[1](d)}i[t]=void 0}};var p=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(a)},l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="",l.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=a,r=r.slice();for(var d=0;d<r.length;d++)a(r[d]);var p=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("1356"),n=e.n(s);n.a},1356:function(t,a,e){},"1ca7":function(t,a,e){t.exports=e.p+"static/img/weixin.328dd2d3.png"},"30fc":function(t,a,e){t.exports=e.p+"static/img/logo_全染.15542d87.png"},"54d9":function(t,a,e){"use strict";var s=e("6c0f"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),n=e("bc3a"),i=e.n(n);let o={};const c=i.a.create(o);c.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get(){return c}},$axios:{get(){return c}}})},s["a"].use(Plugin);Plugin;var l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("v-app-bar",{attrs:{dark:"",fixed:"",color:"rgba(0,0,0,.3)"}},[s("v-toolbar-title",{staticClass:"d-flex align-center"},[s("img",{attrs:{src:e("30fc"),alt:"",width:"130px"}})]),s("v-spacer"),"中文"==t.language?s("v-toolbar-items",{staticClass:"d-none d-md-flex"},t._l(t.navigator,function(a,e){return s("v-btn",{key:e,attrs:{text:"",to:a.route},on:{click:function(e){a.link&&t.jump(a.link)}}},[t._v(t._s(a.name))])}),1):"english"==t.language?s("v-toolbar-items",{staticClass:"d-none d-md-flex"},t._l(t.navigator_en,function(a,e){return s("v-btn",{key:e,attrs:{text:"",to:a.route},on:{click:function(e){a.link&&t.jump(a.link)}}},[t._v(t._s(a.name))])}),1):t._e(),s("v-btn-toggle",{staticClass:"ml-2",attrs:{tile:"",color:"brown lighten-5",group:"",mandatory:""},model:{value:t.language,callback:function(a){t.language=a},expression:"language"}},[s("v-btn",{attrs:{value:"中文"}},[t._v("\n        简体中文\n      ")]),s("v-btn",{attrs:{value:"english"}},[t._v("\n        English\n      ")])],1),s("v-app-bar-nav-icon",{staticClass:"d-md-none",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}})],1),s("v-navigation-drawer",{attrs:{fixed:"",dark:"",color:"#232332"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},["中文"==t.language?s("v-list",[s("v-subheader",[t._v("导航")]),s("v-list-item-group",[t._l(t.navigator,function(a,e){return[s("v-list-item",{key:e,attrs:{to:a.route},on:{click:function(e){a.link&&t.jump(a.link)}}},[s("v-list-item-icon",[s("v-icon",[t._v("fab fa-ethereum")])],1),s("v-list-item-content",[s("v-list-item-subtitle",{domProps:{textContent:t._s(a.name)}})],1)],1),s("v-divider",{key:e+"divider1"})]})],2)],1):"english"==t.language?s("v-list",[s("v-subheader",[t._v("Navigator")]),s("v-list-item-group",[t._l(t.navigator_en,function(a,e){return[s("v-list-item",{key:e,attrs:{to:a.route},on:{click:function(e){a.link&&t.jump(a.link)}}},[s("v-list-item-icon",[s("v-icon",[t._v("fab fa-ethereum")])],1),s("v-list-item-content",[s("v-list-item-subtitle",{domProps:{textContent:t._s(a.name)}})],1)],1),s("v-divider",{key:e+"divider2"})]})],2)],1):t._e()],1),s("v-content",[s("router-view")],1),s("v-footer",{staticStyle:{"background-color":"#232332"}},[s("v-container",{staticStyle:{width:"1200px"}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"4"}},["中文"==t.language?s("ul",{staticClass:"mx-auto",staticStyle:{width:"150px"}},[s("li",[t._v("企业情报")]),t._l(t.footer_nav.col1,function(a,e){return s("li",{key:e},[s("router-link",{attrs:{to:a.route}},[t._v(t._s(a.name))])],1)})],2):"english"==t.language?s("ul",{staticClass:"mx-auto",staticStyle:{width:"150px"}},[s("li",[t._v("About")]),t._l(t.footer_nav_en.col1,function(a,e){return s("li",{key:e},[s("router-link",{attrs:{to:a.route}},[t._v(t._s(a.name))])],1)})],2):t._e()]),s("v-col",{attrs:{cols:"4"}},["中文"==t.language?s("ul",{staticClass:"mx-auto",staticStyle:{width:"150px"}},[s("li",[t._v("工作机会")]),s("li",[s("a",{attrs:{href:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",target:"_blank"}},[t._v("工作机会")])])]):"english"==t.language?s("ul",{staticClass:"mx-auto",staticStyle:{width:"150px"}},[s("li",[t._v("Career")]),s("li",[s("a",{attrs:{href:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",target:"_blank"}},[t._v("Career")])])]):t._e()]),s("v-col",{attrs:{cols:"4"}},["中文"==t.language?s("ul",{staticClass:"mx-auto",staticStyle:{width:"150px"}},[s("li",[t._v("择仕新闻")]),t._l(t.footer_nav.col4,function(a,e){return s("li",{key:e},[s("router-link",{attrs:{to:a.route}},[t._v(t._s(a.name))])],1)})],2):"english"==t.language?s("ul",{staticClass:"mx-auto",staticStyle:{width:"150px"}},[s("div",[s("li",[t._v("Versal News")]),t._l(t.footer_nav_en.col4,function(a,e){return s("li",{key:e},[s("router-link",{attrs:{to:a.route}},[t._v(t._s(a.name))])],1)})],2)]):t._e()])],1)],1),s("v-card",{staticClass:"text-center white--text",attrs:{color:"grey darken-4 ",width:"100%"}},[t._v("\n      Copyright©2012 - 2021"),s("strong",[t._v(" Shanghai Versal Consulting Co.Ltd ")]),t._v(" All Rights Reserved\n    ")])],1)],1)},r=[],u={name:"App",components:{},methods:{jump(t){window.open(t,"_blank")}},data:()=>({careerlink:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",drawer:!1,dialog:!1,enter:!1,username:"",password:"",language:"中文",navigator:[{name:"首页",route:"/"},{name:"择仕简介",route:"/about"},{name:"选择择仕",route:"/whyus"},{name:"工作机会",link:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date"},{name:"择仕新闻",route:"/news"}],navigator_en:[{name:"Home",route:"/home_en"},{name:"About",route:"/about_en"},{name:"Whyus",route:"/whyus_en"},{name:"Career",link:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date"},{name:"News",route:"/news_en"}],footer_nav:{col1:[{name:"历史沿革",route:"/about"}],col3:[{name:"工作机会",route:"/career"}],col4:[{name:"择仕新闻",route:"/news"}]},footer_nav_en:{col1:[{name:"HISTORY",route:"/about"}],col3:[{name:"CAREER",route:"/career"}],col4:[{name:"NEWS",route:"/news"}]}})},d=u,p=(e("034f"),e("2877")),v=e("6544"),h=e.n(v),m=e("7496"),f=e("40dc"),b=e("5bc1"),g=e("8336"),C=e("a609"),y=e("b0af"),_=e("62ad"),k=e("a523"),w=e("a75b"),x=e("ce7e"),j=e("553a"),S=e("132d"),V=e("8860"),P=e("da13"),E=e("5d23"),I=e("1baa"),A=e("34c3"),O=e("f774"),z=e("0fd9"),J=e("2fa4"),T=e("e0c7"),L=e("2a7f"),N=Object(p["a"])(d,l,r,!1,null,null,null),$=N.exports;h()(N,{VApp:m["a"],VAppBar:f["a"],VAppBarNavIcon:b["a"],VBtn:g["a"],VBtnToggle:C["a"],VCard:y["a"],VCol:_["a"],VContainer:k["a"],VContent:w["a"],VDivider:x["a"],VFooter:j["a"],VIcon:S["a"],VList:V["a"],VListItem:P["a"],VListItemContent:E["a"],VListItemGroup:I["a"],VListItemIcon:A["a"],VListItemSubtitle:E["b"],VNavigationDrawer:O["a"],VRow:z["a"],VSpacer:J["a"],VSubheader:T["a"],VToolbarItems:L["a"],VToolbarTitle:L["b"]});var B=e("8c4f"),R=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-carousel",{attrs:{cycle:"",height:"900","hide-delimiters":"","show-arrows":t.showArrows}},t._l(t.slides,function(a,n){return s("v-carousel-item",{key:n},[s("v-sheet",{class:t.bgs[n],attrs:{color:t.colors[n],height:"100%"}},[s("v-row",{staticClass:"fill-height mask flex-column",attrs:{align:"center",justify:"center"}},[s("img",{staticStyle:{width:"200px"},attrs:{src:e("9d64"),alt:""}}),s("div",{staticClass:"top-decoration"}),s("div",{staticClass:"my-5 font-weight-black",staticStyle:{"font-size":"5em"}},[s("span",{staticClass:"main-title"},[t._v("择仕中国")])]),s("div",{staticClass:"display-1 mb-5"},[t._v("VERSAL CHINA")]),s("div",{staticClass:"bottom-decoration"}),s("vue-typed-js",{attrs:{strings:[a]}},[s("h1",{staticClass:"typing  my-5"})])],1)],1)],1)}),1),s("div",{staticClass:"map-warp"},[s("div",{staticClass:"mask"},[s("v-container",{staticClass:" py-0 my-0"},[s("v-row",[s("v-col",{staticClass:"pa-0"},[s("v-card",{staticClass:"pa-5 mx-auto",attrs:{"max-width":"1980",flat:"",dark:"",color:"rgba(0,0,0,.5)"}},[s("v-row",[s("v-col",[s("v-card",{staticClass:"text-center",attrs:{flat:"",color:"rgba(0,0,0,.3)"}},[s("h1",{staticClass:"my-5"},[t._v("择仕中国创立于2007年，十余年磨砺，领跑行业")]),s("p",{staticClass:"grey--text mb-8"},[t._v("\n                                            创立以来一直致力于中高端人才寻访、招聘流程外包、灵活用工等业务；我们始终相信每位客户值得拥有更好的服务，每位候选人值得拥有更好的职业生涯，每位服务顾问值得拥有更好的自我价值实现。\n                                        ")])])],1)],1),s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{cols:"12",lg:"8",xl:"6"}},[s("v-card",{staticClass:"text-center",staticStyle:{overflow:"hidden"},attrs:{flat:"",color:"rgba(0,0,0,.3)"}},[s("Map")],1)],1),s("v-col",{attrs:{cols:"12",lg:"4",xl:"6"}},[s("v-card",{staticClass:"text-left mx-auto",staticStyle:{color:"rgba(255, 255, 255, .8)"},attrs:{"max-width":"500",align:"center",flat:"",color:"rgba(0,0,0,.3)"}},[s("p",[t._v("我们的团队均来自跨国公司相关行业的高级管理人员和技术专业人才, 拥有丰富的行业背景和技术专长")]),s("p",[t._v(" 同时，我们也因为组织的高速发展而不断吸引行业里优质的人才，并不断地培养和发展精英队伍。")]),s("p",[t._v("\n                                            总部位于"),s("span",{staticClass:"font-weight-bold"},[t._v("上海")]),t._v(",于北京、西安、青岛、大连、贵阳、苏州已建立分公司，\n                                            未来将在众多省市建立分支机构; 为更多的地区和市场提供多元化的专业人力资源服务。\n                                        ")]),s("div",[s("v-btn",{staticClass:"float-right",attrs:{color:"rgba(35,35,50.8)",to:"/about"}},[t._v("了解更多\n                                            ")])],1)])],1)],1)],1)],1)],1)],1)],1)]),s("div",{staticClass:"talent-warp"},[s("div",{staticClass:"mask"},[s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"pa-5 mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"rgba(0,0,0,.3)"}},[s("v-row",[s("v-col",[s("v-card",{staticClass:"text-center",attrs:{flat:"",color:"rgba(0,0,0,.3)"}},[s("h1",{staticClass:"my-5"},[t._v("高端行业人才储备")]),s("p",{staticClass:"grey--text mb-8"},[t._v("\n                                            因为信任， 丰富的高端行业人才与我们保持长期的联系，致力于培养高品质猎头，为企业提供高端人才招聘服务。")]),s("div",[s("v-btn",{staticClass:"float-right",attrs:{color:"rgba(35,35,50.8)"},on:{click:function(a){return t.jump(t.careerlink)}}},[t._v("寻找职位")])],1)])],1)],1)],1)],1)],1),s("v-row",[s("v-col",[s("v-card",{staticClass:"pa-5 mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"rgba(0,0,0,.3)"}},[s("v-row",[s("v-col",[s("v-card",{staticClass:"text-center",attrs:{flat:"",color:"rgba(0,0,0,.3)"}},[s("h1",{staticClass:"my-5"},[t._v("荣誉证书")]),s("v-row",{attrs:{justify:"center",align:"end"}},[s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-img",{staticClass:"mx-auto",attrs:{src:e("5e3c"),width:"90%"}})],1),s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-img",{staticClass:"mx-auto",attrs:{src:e("b238"),width:"90%"}})],1),s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-img",{staticClass:"mx-auto",attrs:{src:e("bbbe"),width:"90%"}})],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-img",{staticClass:"mx-auto",attrs:{src:e("91c4"),width:"90%"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)]),s("div",{staticClass:"talent-warp"},[s("div",{staticClass:"mask"},[s("h1",{staticClass:"py-10 text-center white--text"},[t._v("全力赋能五大升级领域")]),s("v-item-group",{staticClass:"pb-5"},[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",md:"2","offset-md":"1"}},[s("v-item",[s("v-card",{staticClass:"text-center",attrs:{height:"300",elevation:"6"}},[s("h2",{staticClass:"pt-8 py-4"},[t._v("智慧出行")]),s("v-icon",{staticClass:"fas fa-car",staticStyle:{"font-size":"50px"},attrs:{color:"#232332"}}),s("h4",{staticClass:"pt-4"},[t._v("新能源汽车")]),s("h4",[t._v("无人驾驶")]),s("h4",[t._v("车联网")]),s("h4",[t._v("汽车后市场")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("v-item",[s("v-card",{staticClass:"text-center",attrs:{height:"300",elevation:"6"}},[s("h2",{staticClass:"pt-8 py-4"},[t._v("互联网高科技")]),s("v-icon",{staticClass:"fas fa-wifi",staticStyle:{"font-size":"50px"},attrs:{color:"#232332"}}),s("h4",{staticClass:"pt-4"},[t._v("人工智能")]),s("h4",[t._v("物流仓储")]),s("h4",[t._v("新零售")]),s("h4",[t._v("大数据科技")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("v-item",[s("v-card",{staticClass:"text-center",attrs:{height:"300",elevation:"6"}},[s("h2",{staticClass:"pt-8 py-4"},[t._v("智能创造")]),s("v-icon",{staticClass:"fab fa-android",staticStyle:{"font-size":"50px"},attrs:{color:"#232332"}}),s("h4",{staticClass:"pt-4"},[t._v("云服务")]),s("h4",[t._v("只能控制")]),s("h4",[t._v("机器人")]),s("h4",[t._v("工业互联网")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("v-item",[s("v-card",{staticClass:"text-center",attrs:{height:"300",elevation:"6"}},[s("h2",{staticClass:"pt-8 py-4"},[t._v("金融科技")]),s("v-icon",{staticClass:"fas  fa-hand-holding-usd",staticStyle:{"font-size":"50px"},attrs:{color:"#232332"}}),s("h4",{staticClass:"pt-4"},[t._v("金融风控")]),s("h4",[t._v("数据模型")]),s("h4",[t._v("支付")]),s("h4",[t._v("场景应用")])],1)],1)],1),s("v-col",{attrs:{cols:"12",md:"2"}},[s("v-item",[s("v-card",{staticClass:"text-center",attrs:{height:"300",elevation:"6"}},[s("h2",{staticClass:"pt-8 py-4"},[t._v("智慧健康")]),s("v-icon",{staticClass:"fas fa-hand-holding-medical",staticStyle:{"font-size":"50px"},attrs:{color:"#232332"}}),s("h4",{staticClass:"pt-4"},[t._v("生物药品研发")]),s("h4",[t._v("医疗器械研发")]),s("h4",[t._v("创新药")]),s("h4",[t._v("医药医疗分销")])],1)],1)],1)],1)],1)],1)],1)]),s("div",{staticClass:"touch-warp"},[s("div",{staticClass:"mask"},[s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"rgba(100,100,100,.1)"}},[s("v-row",{staticClass:"fill-height mask flex-column pa-5",attrs:{align:"center",justify:"center"}},[s("img",{staticStyle:{width:"200px"},attrs:{src:e("9d64"),alt:""}}),s("div",{staticClass:"top-decoration"}),s("div",{staticClass:"display-3 my-5 font-weight-black"},[s("span",{staticClass:"main-title"},[t._v("联系我们")])]),s("div",{staticClass:"display-1 mb-5"}),s("div",{staticClass:"mb-5"},[t._v("地址：上海市徐汇区宜山路425号光启城2311室")]),s("div",{staticClass:"mb-5"},[t._v("Tel：021-31351010")]),s("img",{attrs:{src:e("1ca7"),alt:""}}),s("div",{staticClass:"bottom-decoration"})])],1)],1)],1)],1)],1)])],1)},M=[],D=e("ccb6"),H={data(){return{imgUrl:"../../assets/images/home/pt1.png",careerlink:"http://versal.gllue.me/portal#socialposition/list?ordering=-publish_date",showArrows:!1,colors:["indigo","warning"],bgs:["slide1","slide2"],slides:["人才赋能产业升级","高效、专业、创新"]}},methods:{jump(t){window.location.href=t}},components:{Map:D["a"]},created(){}},q=H,F=(e("c274"),e("5e66")),G=e("3e35"),U=e("adda"),W=e("d903"),K=e("604c"),Y=e("8dd9"),Q=Object(p["a"])(q,R,M,!1,null,"5f3f7570",null),X=Q.exports;h()(Q,{VBtn:g["a"],VCard:y["a"],VCarousel:F["a"],VCarouselItem:G["a"],VCol:_["a"],VContainer:k["a"],VIcon:S["a"],VImg:U["a"],VItem:W["a"],VItemGroup:K["b"],VRow:z["a"],VSheet:Y["a"]}),s["a"].use(B["a"]);var Z=new B["a"]({mode:"history",routes:[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:()=>Promise.all([e.e("chunk-9b9f13de"),e.e("about")]).then(e.bind(null,"0737"))},{path:"/career",name:"career",component:()=>Promise.all([e.e("chunk-502f8ce1"),e.e("chunk-c7515544")]).then(e.bind(null,"acc3"))},{path:"/whyus",name:"whyus",component:()=>e.e("chunk-73008ee1").then(e.bind(null,"9219"))},{path:"/news",name:"news",component:()=>Promise.all([e.e("chunk-32dbdea6"),e.e("chunk-404375fc")]).then(e.bind(null,"971a"))},{path:"/consultant",name:"consultant",component:()=>Promise.all([e.e("chunk-32dbdea6"),e.e("chunk-046a5cd0"),e.e("chunk-056f6906")]).then(e.bind(null,"55c5"))},{path:"/home_en",name:"home_en",component:()=>e.e("chunk-a017f5b8").then(e.bind(null,"458a"))},{path:"/about_en",name:"about_en",component:()=>Promise.all([e.e("chunk-9b9f13de"),e.e("chunk-60cbf36b")]).then(e.bind(null,"4acf"))},{path:"/career_en",name:"career_en",component:()=>Promise.all([e.e("chunk-502f8ce1"),e.e("chunk-30459b7e")]).then(e.bind(null,"7e3e"))},{path:"/whyus_en",name:"whyus_en",component:()=>e.e("chunk-1eacbb0e").then(e.bind(null,"5e63"))},{path:"/news_en",name:"news_en",component:()=>Promise.all([e.e("chunk-32dbdea6"),e.e("chunk-329b6d0a")]).then(e.bind(null,"558b"))},{path:"/consultant_en",name:"consultant_en",component:()=>Promise.all([e.e("chunk-32dbdea6"),e.e("chunk-046a5cd0"),e.e("chunk-2e3488de")]).then(e.bind(null,"ef77"))},{path:"/job_edit",name:"job_edit",component:()=>Promise.all([e.e("chunk-32dbdea6"),e.e("chunk-046a5cd0"),e.e("chunk-dd4f6f5a"),e.e("chunk-432657c6")]).then(e.bind(null,"611b"))},{path:"/consultant_edit",name:"consultant_edit",component:()=>Promise.all([e.e("chunk-32dbdea6"),e.e("chunk-046a5cd0"),e.e("chunk-dd4f6f5a"),e.e("chunk-24f09948")]).then(e.bind(null,"47a2"))}]}),tt=e("2f62");const at={jobs:[]},et={allJobs:t=>t.jobs},st={setJobs:(t,a)=>t.jobs=a,newJobs:(t,a)=>t.jobs.unshift(a),removeJob:(t,a)=>t.jobs=t.jobs.filter(t=>t.id!==a),updateJob:(t,a)=>{const e=t.jobs.findIndex(t=>t.id===a.id);-1!==e&&t.jobs.splice(e,1,a)}},nt={async fetchJobs({commit:t}){const a=await i.a.get("https://my-json-server.typicode.com/yangjiakai/zeshi/jobs");t("setJobs",a.data)},async addJob({commit:t},a){const e=await i.a.post("https://my-json-server.typicode.com/yangjiakai/zeshi/jobs",a);t("newJobs",e.data)},async deleteJob({commit:t},a){await i.a.delete(`https://my-json-server.typicode.com/yangjiakai/zeshi/jobs/${a}`),t("removeJob",a)},async updateJob({commit:t},a){const e=await i.a.put(`https://my-json-server.typicode.com/yangjiakai/zeshi/jobs/${a.id}`,a);t("updateJob",e.data)}};var it={state:at,getters:et,mutations:st,actions:nt};const ot={consultants:[]},ct={allConsultants:t=>t.consultants},lt={setConsultants:(t,a)=>t.consultants=a,newConsultants:(t,a)=>t.consultants.unshift(a),removeConsultant:(t,a)=>t.consultants=t.consultants.filter(t=>t.id!==a),updateConsultant:(t,a)=>{const e=t.consultants.findIndex(t=>t.id===a.id);-1!==e&&t.consultants.splice(e,1,a)}},rt={async fetchConsultants({commit:t}){const a=await i.a.get("https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants");t("setConsultants",a.data)},async addConsultant({commit:t},a){const e=await i.a.post("https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants",a);t("newConsultants",e.data)},async deleteConsultant({commit:t},a){await i.a.delete(`https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants/${a}`),t("removeConsultant",a)},async updateConsultant({commit:t},a){const e=await i.a.put(`https://my-json-server.typicode.com/yangjiakai/zeshi3/consultants/${a.id}`,a);t("updateConsultant",e.data)}};var ut={state:ot,getters:ct,mutations:lt,actions:rt};s["a"].use(tt["a"]);var dt=new tt["a"].Store({modules:{jobs:it,consultants:ut}}),pt=e("f309");s["a"].use(pt["a"]);var vt=new pt["a"]({icons:{iconfont:"mdi"}}),ht=e("8cb8"),mt=e("323e"),ft=e.n(mt);e("a5d8");s["a"].use(ht["default"]),s["a"].config.productionTip=!1,ft.a.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.3}),Z.beforeEach((t,a,e)=>{ft.a.start(),e()}),Z.afterEach(()=>{ft.a.done()}),new s["a"]({router:Z,store:dt,vuetify:vt,render:t=>t($)}).$mount("#app")},"5e3c":function(t,a,e){t.exports=e.p+"static/img/荣誉证书.b3083f60.png"},"6c0f":function(t,a,e){},"76a4":function(t,a,e){},"91c4":function(t,a,e){t.exports=e.p+"static/img/人力资源.a1bd5b2e.png"},"9d64":function(t,a,e){t.exports=e.p+"static/img/logo.7d7ed39e.png"},b238:function(t,a,e){t.exports=e.p+"static/img/质量.6129b923.jpg"},bbbe:function(t,a,e){t.exports=e.p+"static/img/会员证书.9c3eb56c.png"},c274:function(t,a,e){"use strict";var s=e("76a4"),n=e.n(s);n.a},ccb6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"china-map"},[e("div",{staticClass:"region-list active postition-6 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("重庆")])])]),e("div",{staticClass:"region-list  active  postition-11 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("青岛")])])]),e("div",{staticClass:"region-list  active  postition-12 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("西安")])])]),e("div",{staticClass:"region-list  active  postition-13 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("h1",{staticClass:"show-regin font-weight-bold"},[e("span",{staticStyle:{"font-size":"20px"}},[t._v("上海")])])]),e("div",{staticClass:"region-list active postition-8 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("北京")])])]),e("div",{staticClass:"region-list active postition-10 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("深圳")])])]),e("div",{staticClass:"region-list active postition-15 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("大连")])])]),e("div",{staticClass:"region-list active postition-16 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin"},[e("span",[t._v("贵州")])])]),e("div",{staticClass:"region-list active postition-17 online-node"},[e("div",{staticClass:"area-box"},[e("span",{staticClass:"dot"}),e("span",{staticClass:"pulse delay-06"}),e("span",{staticClass:"pulse delay-05"}),e("span",{staticClass:"pulse delay-04"})]),e("div",{staticClass:"show-regin",staticStyle:{"margin-top":"-20px"}},[e("span",[t._v("苏州")])])])])])}],i={},o=i,c=(e("54d9"),e("2877")),l=Object(c["a"])(o,s,n,!1,null,null,null);a["a"]=l.exports}});
//# sourceMappingURL=app.704f5cd1.js.map