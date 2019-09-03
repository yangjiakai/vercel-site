(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a6105ac"],{"1e60":function(t,e,a){},"23a7":function(t,e,a){"use strict";a("5803");var s=a("2677"),i=a("cc20"),l=a("80d2");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$vuetify.icons.file"},readonly:{type:Boolean,default:!0},showSize:{type:[Boolean,Number],default:!1,validator:t=>{return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:()=>[],validator:t=>{return"object"===typeof t||Array.isArray(t)}}},data:()=>({internalFileInput:null}),computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-file-input":!0}},counterValue(){const t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,e)=>t+e.size,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["u"])(e,1024===this.base))},internalArrayValue(){return Array.isArray(this.internalValue)?this.internalValue:Object(l["D"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},isMultiple(){return this.$attrs.hasOwnProperty("multiple")},text(){return this.isDirty?this.internalArrayValue.map(t=>{const e=this.truncateText(t.name);return this.showSize?`${e} (${Object(l["u"])(t.size,1024===this.base)})`:e}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},methods:{clearableCallback(){this.internalValue=this.isMultiple?[]:null,this.internalFileInput=null},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(i["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.data.domProps.value=this.internalFileInput,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.counterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:()=>this.$refs.input.click()}},t)},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){return t.length<Number(this.truncateLength)?t:`${t.slice(0,10)}…${t.slice(-10)}`}}})},2677:function(t,e,a){"use strict";var s=a("8654");e["a"]=s["a"]},"4bd4":function(t,e,a){"use strict";var s=a("3206");e["a"]=Object(s["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5803:function(t,e,a){},acc3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"banner-warp"},[s("div",{staticClass:"mask"},[s("v-container",[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"transparent"}},[s("v-row",{staticClass:"fill-height flex-column pa-5",attrs:{align:"center",justify:"center"}},[s("img",{staticStyle:{width:"200px"},attrs:{src:a("9d64"),alt:""}}),s("div",{staticClass:"top-decoration"}),s("div",{staticClass:"display-3 my-5 font-weight-black"},[s("span",{staticClass:"main-title"},[t._v("工作机会")])]),s("div",{staticClass:"display-1 mb-5"},[t._v("Your Career")]),s("div",{staticClass:"bottom-decoration"})])],1)],1)],1)],1)],1)]),s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"px-0"},[s("v-col",[s("v-card",{staticClass:"mx-auto  mt-n12 pa-5",attrs:{elavation:"10"}},[s("v-card",{staticClass:"mx-auto ",attrs:{outlined:"",flat:"","max-width":"1000"}},[s("v-toolbar",{attrs:{dark:"",color:"#232332"}},[s("v-toolbar-title",[t._v("职位列表")])],1),s("v-list",{attrs:{"two-line":"",shaped:""}},[s("v-list-item-group",[t._l(t.allJobs,function(e,a){return[s("v-list-item",{key:a,on:{click:function(a){return t.openItem(e)}}},[s("v-list-item-avatar",[s("v-icon",[t._v("far fa-bookmark")])],1),s("v-list-item-content",[s("v-list-item-title",[s("p",[s("span",[t._v(t._s(e.title))]),s("span",{staticClass:"float-right"},[t._v(t._s(e.date))])])]),s("v-list-item-subtitle",[s("i",{staticClass:"fas fa-map-marker-alt p"},[t._v(t._s(e.location))]),s("i",{staticClass:"fas fa-map-marker-alt p ml-5"},[t._v(t._s(e.category))])])],1),s("v-list-item-action",[s("v-dialog",{attrs:{persistent:"","max-width":""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[s("v-btn",t._g({attrs:{color:"#232332",icon:""},on:{click:function(a){return t.openItem(e)}}},i),[s("v-icon",[t._v("fas fa-share-alt-square")])],1)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-container",{staticClass:"white py-0"},[s("v-row",{staticStyle:{"background-color":"#232332"}},[s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-card",{staticClass:"pa-5",attrs:{flat:"",dark:"",color:"transparent"}},[s("h1",{staticClass:"pa-3"},[t._v(t._s(t.job.title))]),s("p",[s("i",{staticClass:"fas fa-project-diagram mx-3"}),s("span",{staticClass:"grey--text"},[t._v(t._s(t.job.category))]),s("i",{staticClass:"fas fa-map-marker-alt mx-3"}),s("span",{staticClass:"grey--text"},[t._v(t._s(t.job.location))]),s("i",{staticClass:"fas fa-clock mx-3"}),s("span",{staticClass:"grey--text"},[t._v(t._s(t.job.date)+" ")])])])],1),s("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"4"}},[s("v-spacer"),s("v-btn",{attrs:{color:"white darken-1",icon:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("fas fa-times")])],1)],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-card",{staticClass:"pa-5",attrs:{outlined:""}},[s("v-card-text",[s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-stream mx-3"}),t._v("工作描述\n                                                                        ")]),t.job.description?s("p",{staticClass:"pl-4"},[t._v("\n                                                                            "+t._s(t.job.description)+"\n                                                                        ")]):t._e()]),s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-bolt mx-3"}),t._v("岗位职责\n                                                                        ")]),t.job.duty1?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.duty1))])]):t._e(),t.job.duty2?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.duty2))])]):t._e(),t.job.duty3?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.duty3))])]):t._e(),t.job.duty4?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.duty4))])]):t._e(),t.job.duty5?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.duty5))])]):t._e()]),s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-book mx-3"}),t._v("任职要求\n                                                                        ")]),t.job.request1?s("p",{staticClass:"d-flex align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.request1))])]):t._e(),t.job.request2?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.request2))])]):t._e(),t.job.request3?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.request3))])]):t._e(),t.job.request4?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.request4))])]):t._e(),t.job.request5?s("p",{staticClass:"d-flex  align-center"},[s("i",{staticClass:"fas fa-check-circle mx-3"}),s("span",[t._v(t._s(t.job.request5))])]):t._e()]),s("div",[s("h2",{staticClass:"my-8 black--text"},[s("i",{staticClass:"fas fa-map mx-3"}),t._v("公司介绍\n                                                                        ")]),s("p",[s("b",{staticClass:"ml-3"},[t._v("公司名称：")]),t._v(t._s(t.job.company_name)+"\n                                                                        ")]),s("p",[s("b",{staticClass:"ml-3"},[t._v("公司地址：")]),t._v(t._s(t.job.company_address)+"\n                                                                        ")]),s("p",{staticClass:"d-flex align-start"},[s("b",{staticClass:"ml-3",staticStyle:{"white-space":"nowrap"}},[t._v("公司描述：")]),s("span",{staticClass:"d-table-cell"},[t._v(t._s(t.job.company_description))])])])])],1)],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-card",{staticClass:"pa-5 fill-height",attrs:{outlined:""}},[s("v-row",[s("v-col",[s("v-card",{staticClass:"mx-auto pa-5",attrs:{"max-width":"500","my-5":""}},[s("v-card-title",[s("h3",{staticClass:"my-5",staticStyle:{color:"#353550"}},[t._v("申请职位")])]),s("v-form",{ref:"form",refInFor:!0,attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{label:"姓名（必需）",hint:"中文名",required:"",color:"#353550 ",placeholder:" ",rules:[function(t){return!!t||"姓名是必填项"}],"prepend-icon":"fas fa-user-circle"}}),s("v-text-field",{attrs:{label:"电话号码",color:"#353550 ",placeholder:" ","prepend-icon":"fas fa-phone-volume"}}),s("v-text-field",{attrs:{label:"邮箱（必需）",required:"",rules:[function(t){return!!t||"邮箱格式不正确"}],color:"#353550 ",placeholder:" ","prepend-icon":"fas fa-envelope"}}),s("v-file-input",{staticClass:"my-2",attrs:{label:"上传简历",required:"",hint:"小于5M,PDF或者Doc格式",placeholder:" ",outlined:"",color:"#353550 "}}),s("v-btn",{attrs:{block:"",dark:"",color:"#353550 "}},[s("v-icon",{staticClass:"mr-3"},[t._v("far\n                                                                                        fa-envelope")]),t._v("确认并发送\n                                                                                ")],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),s("v-divider",{key:a})]})],2)],1)],1)],1)],1)],1)],1)],1)},i=[],l=a("2f62"),r={data(){return{dialog:!1,valid:!0,job:{title:"高级UI设计师",location:"深圳",category:"金融",type:"UI设计",company:"腾讯",salary:"30k",date:"2019-09-09",email:"403474473@qq.com",description:"暂无描述",duty1:"负责平台产品的PC端和移动端产品的UI与交互设计，产品整体风格设计，页面制作和流程优化。",duty2:"实现界面的视觉和美术设计方面的设计，重视细节方面的设计，如图标，主体，背景，配色等，制定产品用户界面风格。",duty3:"参与产品规划构思和创意过程，深刻理解产品目标和用户需求，重视用户体验。",duty4:"与产研沟通设计思路及落地实施方案，推进界面按照设计稿实现落地。",duty5:"暂无",request1:"3年以上PC端及移动端产品UI设计经验，完整的界面视觉风格设定经验",request2:"对用户习惯有一定的研究，具备一定的设计前瞻性，了解当下最流行的设计风格",request3:"具备良好的美术功底、色彩感觉和创意能力",request4:"善于与人沟通，具备良好的团队合作精神和执行力，具备高度责任感，有创新精神",request5:"5",company_name:"深圳技术有限公司",company_address:"深圳南山区腾讯大厦",company_description:"深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。 是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。",active:"true"}}},methods:{...Object(l["b"])(["fetchJobs"]),openItem(t){this.job=Object.assign({},t),this.dialog=!0}},computed:{...Object(l["c"])(["allJobs"])},created(){this.fetchJobs()}},n=r,c=(a("dc04"),a("2877")),o=a("6544"),u=a.n(o),d=a("8336"),h=a("b0af"),p=a("99d9"),f=a("62ad"),v=a("a523"),m=a("169a"),b=a("ce7e"),_=a("23a7"),y=a("4bd4"),g=a("132d"),C=a("8860"),x=a("da13"),V=a("1800"),k=a("8270"),w=a("5d23"),j=a("1baa"),S=a("0fd9"),I=a("2fa4"),$=a("8654"),q=a("71d9"),z=a("2a7f"),B=Object(c["a"])(n,s,i,!1,null,"05215fe0",null);e["default"]=B.exports;u()(B,{VBtn:d["a"],VCard:h["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:f["a"],VContainer:v["a"],VDialog:m["a"],VDivider:b["a"],VFileInput:_["a"],VForm:y["a"],VIcon:g["a"],VList:C["a"],VListItem:x["a"],VListItemAction:V["a"],VListItemAvatar:k["a"],VListItemContent:w["a"],VListItemGroup:j["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:S["a"],VSpacer:I["a"],VTextField:$["a"],VToolbar:q["a"],VToolbarTitle:z["b"]})},dc04:function(t,e,a){"use strict";var s=a("1e60"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-2a6105ac.a5283482.js.map