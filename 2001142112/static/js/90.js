webpackJsonp([90],{"6GXX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?t.disabled?"查看":"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"属性名称",prop:"name"}},[a("el-input",{attrs:{disabled:t.disabled,placeholder:"属性名称"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{disabled:t.disabled,placeholder:"排序"},model:{value:t.dataForm.sort,callback:function(e){t.$set(t.dataForm,"sort",e)},expression:"dataForm.sort"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),t.disabled?t._e():a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},r=a("VU/8")({data:function(){return{disabled:!1,visible:!1,dataForm:{id:"",name:"",sort:""},dataRule:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]}}},methods:{init:function(t,e){var a=this;this.disabled=e,this.dataForm.id=t||"",this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:"/mall/attribute/info/"+a.dataForm.id,method:"get"}).then(function(t){var e=t.data;e&&0===e.code&&(a.dataForm=e.attribute)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:"/mall/attribute/"+(t.dataForm.id?"update":"save"),method:"post",data:t.dataForm}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.visible=!1,t.$emit("refreshDataList"))})})}}},i,!1,null,null,null);e.default=r.exports}});