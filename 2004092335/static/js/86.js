webpackJsonp([86],{HMft:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.dataForm.id?t.disabled?"查看":"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(a){t.visible=a}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"名称",prop:"name"}},[e("el-input",{attrs:{disabled:t.disabled,placeholder:"名称"},model:{value:t.dataForm.name,callback:function(a){t.$set(t.dataForm,"name",a)},expression:"dataForm.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"跳转链接",prop:"url"}},[e("el-input",{attrs:{disabled:t.disabled,placeholder:"跳转链接"},model:{value:t.dataForm.url,callback:function(a){t.$set(t.dataForm,"url",a)},expression:"dataForm.url"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"ICON链接",prop:"iconUrl"}},[e("el-input",{attrs:{disabled:t.disabled,placeholder:"icon链接"},model:{value:t.dataForm.iconUrl,callback:function(a){t.$set(t.dataForm,"iconUrl",a)},expression:"dataForm.iconUrl"}},[t.dataForm.iconUrl?e("el-button",{attrs:{slot:"append",icon:"el-icon-view"},on:{click:function(a){return t.openImg(t.dataForm.iconUrl)}},slot:"append"}):t._e()],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"状态",prop:"status"}},[e("el-radio-group",{attrs:{disabled:t.disabled},model:{value:t.dataForm.status,callback:function(a){t.$set(t.dataForm,"status",a)},expression:"dataForm.status"}},[e("el-radio",{attrs:{label:0}},[t._v("隐藏")]),t._v(" "),e("el-radio",{attrs:{label:1}},[t._v("显示")])],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"排序",prop:"sort"}},[e("el-input",{attrs:{disabled:t.disabled,placeholder:"排序"},model:{value:t.dataForm.sort,callback:function(a){t.$set(t.dataForm,"sort",a)},expression:"dataForm.sort"}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.visible=!1}}},[t._v("取消")]),t._v(" "),t.disabled?t._e():e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},r=e("VU/8")({data:function(){return{disabled:!1,visible:!1,dataForm:{id:"",name:"",categoryId:"",iconUrl:"",sort:"",status:1},dataRule:{categoryId:[{required:!0,message:"商品分类不能为空",trigger:"blur"}]}}},methods:{init:function(t,a){var e=this;this.disabled=a,this.dataForm.id=t||"",this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:"/mall/channel/info/"+e.dataForm.id,method:"get"}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm=a.channel)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(a){a&&t.$http({url:"/mall/channel/"+(t.dataForm.id?"update":"save"),method:"post",data:t.dataForm}).then(function(a){var e=a.data;e&&0===e.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.visible=!1,t.$emit("refreshDataList"))})})}}},l,!1,null,null,null);a.default=r.exports}});