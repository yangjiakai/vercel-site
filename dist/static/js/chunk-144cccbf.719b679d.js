(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-144cccbf"],{"06db":function(e,t,a){},"59eb":function(e,t,a){"use strict";var i=a("06db"),s=a.n(i);s.a},"6bc2":function(e,t,a){e.exports=a.p+"static/img/Milla.3fe81f42.jpg"},bc67:function(e,t,a){e.exports=a.p+"static/img/Elena.d185ef01.jpg"},e532:function(e,t,a){e.exports=a.p+"static/img/Dora.3d7eefd2.jpg"},ef77:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fill-height warp"},[i("div",{staticClass:"banner-warp"},[i("div",{staticClass:"mask"},[i("v-container",[i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1200",flat:"",dark:"",color:"transparent"}},[i("v-row",{staticClass:"fill-height flex-column pa-5",attrs:{align:"center",justify:"center"}},[i("img",{staticStyle:{width:"200px"},attrs:{src:a("9d64"),alt:""}}),i("div",{staticClass:"top-decoration"}),i("div",{staticClass:"display-3 my-5 font-weight-black"},[i("span",{staticClass:"main-title"},[e._v("Meet Consultants")])]),i("div",{staticClass:"display-1 mb-5"},[e._v("寻找顾问")]),i("div",{staticClass:"bottom-decoration"})])],1)],1)],1)],1)],1)]),i("div",{staticClass:"mask"},[i("v-container",[i("v-card",{staticClass:"mx-auto pa-5",attrs:{"max-width":"1200",color:"",light:""}},[i("v-data-iterator",{attrs:{items:e.allConsultants,search:e.search,"sort-by":e.sortBy.toLowerCase(),"sort-desc":e.sortDesc,"hide-default-footer":""},scopedSlots:e._u([{key:"header",fn:function(){return[i("v-toolbar",{staticClass:"mb-1",attrs:{dark:"",color:"transparent"}},[i("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"",label:"检索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"default",fn:function(t){return[i("v-row",e._l(e.localConsultants,function(t){return i("v-col",{key:t.id,staticClass:"py-12",attrs:{cols:"12",md:"6",lg:"3"}},[i("v-item-group",[i("v-item",{scopedSlots:e._u([{key:"default",fn:function(a){a.active,a.toggle;return[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var s=a.hover;return[i("v-card",{staticClass:"text-center mx-auto pb-5",attrs:{width:"300",elevation:s?12:2},on:{click:function(a){return e.openItem(t)}}},[i("v-avatar",{staticClass:"mt-n6",attrs:{size:"120"}},[i("v-img",{attrs:{src:t.imgUrl,alt:"avatar",height:"120",position:"top center"}})],1),i("h2",{staticClass:"my-3"},[e._v(e._s(t.name))]),i("h4",{staticClass:"mb-2"},[e._v(e._s(t.position))]),i("div",{staticClass:"caption grey--text"},[e._v(e._s(t.keyword1))]),i("div",{staticClass:"caption grey--text"},[e._v(e._s(t.keyword2))]),i("div",{staticClass:"caption grey--text"},[e._v(e._s(t.keyword3))]),i("div",{staticClass:"caption grey--text"},[e._v(e._s(t.keyword4))]),i("div",{staticClass:"text-left"})],1)]}}],null,!0)})]}}],null,!0)})],1)],1)}),1)]}}])})],1)],1),i("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",[i("v-card",{staticClass:"mx-auto",attrs:{width:"1200"}},[i("v-row",[i("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[i("v-card",{attrs:{color:"#232332",height:"100%",dark:""}},[i("div",[i("img",{attrs:{src:e.consultant.imgUrl,alt:"",width:"100%"}}),i("v-btn",{staticClass:"d-flex d-md-none",staticStyle:{position:"absolute",right:"0",top:"0"},attrs:{color:"white darken-1",icon:""},on:{click:function(t){e.dialog=!1}}},[i("v-icon",[e._v("fas fa-times\n                                                ")])],1)],1),i("div",{staticClass:"pa-5"},[i("h1",{staticClass:"display-1 pa-2"},[e._v("\n                                                "+e._s(e.consultant.name)+"\n                                            ")]),i("h2",{staticClass:"title pa-2"},[e._v("\n                                                "+e._s(e.consultant.position)+"\n                                            ")]),i("div",{staticClass:"subtitle-2 pa-2"},[i("i",{staticClass:"fas fa-map-marker-alt mr-2"}),e._v(e._s(e.consultant.location)+"\n                                            ")]),i("div",{staticClass:"subtitle-2 pa-2"},[i("i",{staticClass:"far fa-envelope  mr-2"}),e._v(e._s(e.consultant.email)+"\n                                            ")])])])],1),i("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"8"}},[i("v-card",{attrs:{height:"100%"}},[i("v-card-text",[i("div",[i("div",{staticClass:"pa-2",staticStyle:{overflow:"hidden"},attrs:{width:"100%"}},[i("v-btn",{staticClass:"float-right d-none d-md-flex",attrs:{color:"grey darken-1",icon:""},on:{click:function(t){e.dialog=!1}}},[i("v-icon",[e._v("fas\n                                                            fa-times\n                                                        ")])],1)],1),i("h2",{staticClass:"my-8 black--text"},[i("i",{staticClass:"fas fa-stream mx-3"}),e._v("个人简述\n                                                ")]),e.consultant.description?i("p",{staticClass:"pl-4"},[e._v("\n                                                    "+e._s(e.consultant.description)+"\n                                                ")]):e._e()]),i("div",[i("h2",{staticClass:"my-8 black--text"},[i("i",{staticClass:"fas fa-bolt mx-3"}),e._v("擅长领域\n                                                ")]),e.consultant.field1?i("p",{staticClass:"d-flex align-center"},[i("i",{staticClass:"fas fa-check-circle mx-3"}),i("span",[e._v(e._s(e.consultant.field1))])]):e._e(),e.consultant.field2?i("p",{staticClass:"d-flex align-center"},[i("i",{staticClass:"fas fa-check-circle mx-3"}),i("span",[e._v(e._s(e.consultant.field2))])]):e._e(),e.consultant.field3?i("p",{staticClass:"d-flex align-center"},[i("i",{staticClass:"fas fa-check-circle mx-3"}),i("span",[e._v(e._s(e.consultant.field3))])]):e._e()]),e.consultant.experience1?i("div",[i("h2",{staticClass:"my-8 black--text"},[i("i",{staticClass:"fas fa-book mx-3"}),e._v("个人资历\n                                                ")]),e.consultant.experience1?i("p",{staticClass:"d-flex align-center"},[i("i",{staticClass:"fas fa-check-circle mx-3"}),i("span",[e._v(e._s(e.consultant.experience1))])]):e._e(),e.consultant.experience2?i("p",{staticClass:"d-flex align-center"},[i("i",{staticClass:"fas fa-check-circle mx-3"}),i("span",[e._v(e._s(e.consultant.experience2))])]):e._e(),e.consultant.experience3?i("p",{staticClass:"d-flex align-center"},[i("i",{staticClass:"fas fa-check-circle mx-3"}),i("span",[e._v(e._s(e.consultant.experience3))])]):e._e()]):e._e()])],1)],1)],1)],1)],1)],1)],1)],1)],1)])},s=[],n=a("2f62"),c={data(){return{dialog:!1,search:"",filter:{},sortBy:"姓名",keys:["发布时间","姓名","职位"],consultant:{},localConsultants:[{name:"孙磊",name_en:"TOM SUN",email:"",position:"外包业务负责人",location:"上海",date:"2019-9-16",description:"曾就职于中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司，并担任重要管理职位。同时，在Microsoft，Criteo等国际知名IT企业任职过。拥有丰富的IT，外包全行业的经验。",experience1:"中软，东南融通，文思海辉，佰钧成等国内一流IT外包公司",experience2:"Microsoft，Criteo等国际知名IT企业",experience3:"",field1:"IT",field2:"全行业",field3:"",keyword1:"外包业务负责人",keyword2:"外包全行业",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:7,imgUrl:a("75c9")},{name:"樊申哲",name_en:"LESLIE",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"拥有十余年德资企业管理层经验，曾任海德堡销售总监，交通大学本科及交通大学工商管理学硕士，CIPC注册国际心理咨询师，五维教练领导力认证讲师，领导力方面颇有建树",experience1:"十余年德资企业管理层经验",experience2:"海德堡销售总监",experience3:"CIPC注册国际心理咨询师",field1:"制造业",field2:"德资",field3:"",keyword1:"销售总监",keyword2:"领导力",keyword3:"",keyword4:"",education1:"交通大学本科",education2:"交通大学工商管理学硕士",status:"有效",id:5,imgUrl:a("d5ff")},{name:"汤晓烨",name_en:"VERA",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"于14年以管培生身份加入择仕，连续3年百万顾问及公司TOP 1，4年连续晋升。南开大学应用心理学硕士。连续多次季度最佳业绩。斩获公司十多项嘉奖。带领团队成员单产年均75万",experience1:"多次季度最佳业绩",experience2:"连续3年百万顾问及公司TOP 1",experience3:"团队成员单产年均75万",field1:"互联网行业",field2:"",field3:"",keyword1:"资深顾问",keyword2:"百万顾问",keyword3:"",keyword4:"",education1:"南开大学应用心理学硕士",education2:"",status:"有效",id:6,imgUrl:a("bbf9")},{name:"火颖杰",name_en:"JASON",email:"",position:"猎头业务合伙人",location:"上海",date:"2019-9-16",description:"曾就职于瀚德、Michaelpage等大型外资猎头公司，同济大学本科，在瀚德就职期间年最高单产230万，2018年获择仕最高单笔业绩个人佣金60万。团队业绩五百万TeamLeader",experience1:"瀚德、Michaelpage等大型外资猎头公司",experience2:"最高单产230万",experience3:"团队业绩五百万TeamLeader",field1:"消费品行业",field2:"",field3:"",keyword1:"百万级Leader",keyword2:"资深猎头",keyword3:"",keyword4:"",education1:"同济大学本科",education2:"",status:"有效",id:8,imgUrl:a("696c")},{name:"张楠",name_en:"ELLA",email:"",position:"区域合伙人",location:"上海",date:"2019-9-16",description:" 拥有十年人力资源行业从业经验，曾任西北地区独角兽Yeahmobi集团核心高管带领择仕中国西安团队拿下多家北京、西北地区互联网头部客户，巩固择仕中国位于西北板块业务发展。",experience1:"十年人力资源行业从业经验",experience2:"曾任西北地区独角兽Yeahmobi集团核心高管",experience3:"",field1:"互联网行业",field2:"",field3:"",keyword1:"核心高管",keyword2:"十年经验",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:9,imgUrl:a("51a8")},{name:"Elena YIN",name_en:"Elena YIN",email:"",position:"Team Leader",location:"上海",date:"2019-9-16",description:"世界500强高科技公司、消费品公司、汽车零部件公司中高端人才搜寻经验Sourcing模块丰富培训经验",experience1:"6年工作经验",experience2:"",experience3:"",field1:"互联网行业",field2:"",field3:"",keyword1:"6年工作经验",keyword2:"高端人才搜寻",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:1,imgUrl:a("bc67")},{name:"Crystal YAN",name_en:"Crystal YAN",email:"",position:"MC",location:"上海",date:"2019-9-16",description:"深耕500强车企商务和研发高端职位擅长精准定位职位需求并实现快速交付，择仕中国最快速达成百万顾问称号顾问之一",experience1:"工作经验5年",experience2:"4年高端猎头搜寻经验",experience3:"",field1:"车企商务",field2:"高端研发",field3:"",keyword1:"百万顾问",keyword2:"500强车企商务",keyword3:"",keyword4:"",education1:"同济大学翻译硕士",education2:"",status:"有效",id:2,imgUrl:a("f42f")},{name:"Milla Sui",name_en:"Milla Sui",email:"",position:"MC",location:"上海",date:"2019-9-16",description:"知名上市公司5年高端人才搜寻经验,擅长制造业，汽车行业，消费品等领域人才搜寻多次荣获择仕中国Top Leader及百万顾问称号",experience1:"10年工作经验",experience2:"知名上市公司及5年高端人才搜寻经验",experience3:"",field1:"制造业",field2:"汽车行业",field3:"消费品",keyword1:"百万顾问",keyword2:"Top Leader",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:3,imgUrl:a("6bc2")},{name:"Dora Lu",name_en:"Dora Lu",email:"",position:"HRBPM",location:"上海",date:"2019-9-16",description:"知名上市公司5年高端人才搜寻经验,擅长制造业，汽车行业，消费品等领域人才搜寻多次荣获择仕中国Top Leader及百万顾问称号",experience1:"10年猎头行业从业经验",experience2:"五年顾问及Team Leader经验",experience3:"",field1:"5年猎头公司内部招聘负责人经验",field2:"",field3:"",keyword1:"资深顾问",keyword2:"团队领导",keyword3:"",keyword4:"",education1:"",education2:"",status:"有效",id:4,imgUrl:a("e532")}]}},methods:{...Object(n["b"])(["fetchConsultants"]),openItem(e){this.consultant=Object.assign({},e),this.dialog=!0}},computed:{...Object(n["c"])(["allConsultants"])},created(){this.fetchConsultants()}},o=c,l=(a("59eb"),a("2877")),r=a("6544"),d=a.n(r),p=a("8212"),f=a("8336"),u=a("b0af"),m=a("99d9"),v=a("62ad"),x=a("a523"),C=a("c377"),k=a("169a"),y=a("ce87"),w=a("132d"),_=a("adda"),g=a("d903"),h=a("604c"),b=a("0fd9"),T=a("8654"),I=a("71d9"),V=Object(l["a"])(o,i,s,!1,null,"096d35a8",null);t["default"]=V.exports;d()(V,{VAvatar:p["a"],VBtn:f["a"],VCard:u["a"],VCardText:m["b"],VCol:v["a"],VContainer:x["a"],VDataIterator:C["a"],VDialog:k["a"],VHover:y["a"],VIcon:w["a"],VImg:_["a"],VItem:g["a"],VItemGroup:h["b"],VRow:b["a"],VTextField:T["a"],VToolbar:I["a"]})},f42f:function(e,t,a){e.exports=a.p+"static/img/Crystal.6d02b33f.jpg"}}]);
//# sourceMappingURL=chunk-144cccbf.719b679d.js.map