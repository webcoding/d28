webpackJsonp([69],{rCF4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?t.disabled?"查看":"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{inline:"",model:t.dataForm,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[a("el-input",{attrs:{disabled:t.disabled,placeholder:"分类名称"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"店铺ID",prop:"shopsId"}},[a("el-select",{staticClass:"width185",attrs:{disabled:t.disabled,clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.dataForm.shopsId,callback:function(e){t.$set(t.dataForm,"shopsId",e)},expression:"dataForm.shopsId"}},t._l(t.shops,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{attrs:{disabled:t.disabled},model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-radio",{attrs:{label:0}},[t._v("隐藏")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("显示")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{disabled:t.disabled,placeholder:"排序"},model:{value:t.dataForm.sort,callback:function(e){t.$set(t.dataForm,"sort",e)},expression:"dataForm.sort"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),t.disabled?t._e():a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},o=a("VU/8")({data:function(){return{disabled:!1,visible:!1,dataForm:{id:"",name:"",shopsId:"",status:"",sort:""},dataRule:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},shops:[]}},methods:{init:function(t,e){var a=this;this.disabled=e,this.dataForm.id=t||"",this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:"/mall/shopscategory/info/"+a.dataForm.id,method:"get"}).then(function(t){var e=t.data;e&&0===e.code&&(a.dataForm=e.shopscategory)}),a.$http({url:"/mall/shops/queryMyShop",method:"get"}).then(function(t){var e=t.data;e&&0===e.code&&(a.shops=e.list)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:"/mall/shopscategory/"+(t.dataForm.id?"update":"save"),method:"post",data:t.dataForm}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.visible=!1,t.$emit("refreshDataList"))})})}}},s,!1,null,null,null);e.default=o.exports}});