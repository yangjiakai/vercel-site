(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-809d9cc8"],{1527:function(t,a,e){},"2f4a":function(t,a,e){t.exports=e.p+"img/互联网.aaea6fac.jpg"},"558b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"banner-warp"},[i("div",{staticClass:"mask"},[i("v-container",[i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"transparent"}},[i("v-row",{staticClass:"fill-height flex-column pa-5",attrs:{align:"center",justify:"center"}},[i("img",{staticStyle:{width:"200px"},attrs:{src:e("9d64"),alt:""}}),i("div",{staticClass:"top-decoration"}),i("div",{staticClass:"display-3 my-5 font-weight-black"},[i("span",{staticClass:"main-title"},[t._v("Versal News")])]),i("div",{staticClass:"display-1 mb-5"},[t._v("择仕新闻")]),i("div",{staticClass:"bottom-decoration"})])],1)],1)],1)],1)],1)]),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"px-0"},[i("v-col",[i("v-card",{staticClass:"mx-auto mt-n12 pa-5",attrs:{elavation:"10"}},[i("v-card",{staticClass:"mx-auto",attrs:{width:"1200",flat:""}},t._l(10,function(a){return i("v-card",{staticClass:"mx-auto my-5",attrs:{"max-width":"1200",elevation:"3"}},[i("v-list-item",[i("v-list-item-avatar",{attrs:{color:"blue"}},[i("img",{attrs:{src:e("e732"),alt:""}})]),i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline"},[t._v("x新闻标题")]),i("v-list-item-subtitle",[t._v("新闻副标题")])],1)],1),i("v-img",{attrs:{src:e("2f4a"),height:"300"}}),i("v-card-text",[t._v("\n                                择仕新闻新闻新闻新闻新闻新闻新闻新闻新闻内容\n                            ")]),i("v-card-actions",[i("div",{staticClass:"flex-grow-1"}),i("v-chip",[t._v("2019-10-11")]),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-heart")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)}),1)],1)],1)],1)],1)],1)},s=[],l=e("2f62"),c={data(){return{dialog:!1,valid:!0}},methods:{...Object(l["b"])(["fetchJobs"]),openItem(t){this.job=Object.assign({},t),this.dialog=!0}},computed:{...Object(l["c"])(["allJobs"])},created(){this.fetchJobs()}},o=c,n=(e("c98c"),e("2877")),r=e("6544"),h=e.n(r),d=e("8336"),p=e("b0af"),v=e("99d9"),u=e("cc20"),b=e("62ad"),m=e("a523"),f=e("132d"),g=e("adda"),C=e("da13"),x=e("8270"),w=e("5d23"),k=e("0fd9"),_=Object(n["a"])(o,i,s,!1,null,"cf92ff44",null);a["default"]=_.exports;h()(_,{VBtn:d["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VChip:u["a"],VCol:b["a"],VContainer:m["a"],VIcon:f["a"],VImg:g["a"],VListItem:C["a"],VListItemAvatar:x["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VRow:k["a"]})},"8adc":function(t,a,e){},c98c:function(t,a,e){"use strict";var i=e("1527"),s=e.n(i);s.a},cc20:function(t,a,e){"use strict";e("8adc");var i=e("58df"),s=e("0789"),l=e("9d26"),c=e("a9ad"),o=e("4e82"),n=e("7560"),r=e("f2e7"),h=e("1c87"),d=e("af2b"),p=e("d9bd");a["a"]=Object(i["a"])(c["a"],d["a"],h["a"],n["a"],Object(o["a"])("chipGroup"),Object(r["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$vuetify.icons.delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$vuetify.icons.complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,a])=>{this.$attrs.hasOwnProperty(t)&&Object(p["a"])(t,a,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(l["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose(){return this.$createElement(l["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:t=>{t.stopPropagation(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const a=[this.genContent()];let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const s=this.textColor||this.outlined&&this.color;return t(e,this.setTextColor(s,i),a)}})},e732:function(t,a,e){t.exports=e.p+"img/logo_icon.2f1dc08e.png"}}]);
//# sourceMappingURL=chunk-809d9cc8.1929db05.js.map