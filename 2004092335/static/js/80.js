webpackJsonp([80],{IuQW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?e.disabled?"查看":"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"问题",prop:"question"}},[a("el-input",{attrs:{type:"textarea",disabled:e.disabled,placeholder:"问题"},model:{value:e.dataForm.question,callback:function(t){e.$set(e.dataForm,"question",t)},expression:"dataForm.question"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"回答",prop:"answer"}},[a("el-input",{attrs:{type:"textarea",disabled:e.disabled,placeholder:"回答"},model:{value:e.dataForm.answer,callback:function(t){e.$set(e.dataForm,"answer",t)},expression:"dataForm.answer"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),e.disabled?e._e():a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=a("VU/8")({data:function(){return{disabled:!1,visible:!1,dataForm:{id:"",question:"",answer:""},dataRule:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]}}},methods:{init:function(e,t){var a=this;this.disabled=t,this.dataForm.id=e||"",this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:"/mall/issue/info/"+a.dataForm.id,method:"get"}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm=t.issue)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:"/mall/issue/"+(e.dataForm.id?"update":"save"),method:"post",data:e.dataForm}).then(function(t){var a=t.data;a&&0===a.code&&(e.$message({message:"操作成功",type:"success",duration:1500}),e.visible=!1,e.$emit("refreshDataList"))})})}}},i,!1,null,null,null);t.default=r.exports}});