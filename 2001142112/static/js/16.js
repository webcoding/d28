webpackJsonp([16],{HD49:function(e,t,a){var r=a("ISE3");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("4f193520",r,!0,{})},INS3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{orgNoOptions:this.treeDataTranslate(JSON.parse(sessionStorage.getItem("orgList")||"[]"),"orgNo","parentNo"),orgListTreeProps:{label:"orgName",children:"children"},visible:!1,roleList:[],dataForm:{orgName:"",id:"",userName:"",sex:"",realName:"",salt:"",email:"",mobile:"",orgNo:"",roleIdList:[],status:1},dataRule:{userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],sex:[{required:!0,message:"性别不能为空",trigger:"blur"}],realName:[{required:!0,message:"真实姓名不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.$http({url:"/sys/role/select",method:"get"}).then(function(e){var a=e.data;t.roleList=a&&0===a.code?a.list:[]}).then(function(){t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields()})}).then(function(){t.dataForm.id?t.$http({url:"/sys/user/info/"+t.dataForm.id,method:"get"}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.userName=a.user.userName,t.dataForm.sex=a.user.sex.toString(),t.dataForm.realName=a.user.realName,t.dataForm.salt=a.user.salt,t.dataForm.email=a.user.email,t.dataForm.mobile=a.user.mobile,t.dataForm.orgNo=a.user.orgNo,t.dataForm.orgName=t.transOrg(a.user.orgNo),t.dataForm.roleIdList=a.user.roleIdList,t.dataForm.status=a.user.status)}):t.dataForm.orgName=""})},orgListTreeSetCurrentNode:function(e){"mod"===e&&(this.$refs.orgListTree.setCurrentKey(this.dataForm.parentNo),this.dataForm.parentName=(this.$refs.orgListTree.getCurrentNode()||{}).orgName)},orgListTreeCurrentChangeHandle:function(e){this.dataForm.orgNo=e.orgNo,this.dataForm.orgName=e.orgName},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:"/sys/user/"+(e.dataForm.id?"update":"save"),method:"post",data:{userId:e.dataForm.id||void 0,userName:e.dataForm.userName,sex:e.dataForm.sex,realName:e.dataForm.realName,salt:e.dataForm.salt,email:e.dataForm.email,mobile:e.dataForm.mobile,orgNo:e.dataForm.orgNo,status:e.dataForm.status,roleIdList:e.dataForm.roleIdList}}).then(function(t){var a=t.data;a&&0===a.code&&(e.visible=!1,e.$message({message:"操作成功",type:"success",duration:1500}),e.$emit("refreshDataList"))})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[a("el-input",{attrs:{placeholder:"登录帐号"},model:{value:e.dataForm.userName,callback:function(t){e.$set(e.dataForm,"userName",t)},expression:"dataForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-dict",{attrs:{code:"SEX"},model:{value:e.dataForm.sex,callback:function(t){e.$set(e.dataForm,"sex",t)},expression:"dataForm.sex"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"真实姓名",prop:"realName"}},[a("el-input",{attrs:{placeholder:"真实姓名"},model:{value:e.dataForm.realName,callback:function(t){e.$set(e.dataForm,"realName",t)},expression:"dataForm.realName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.dataForm.email,callback:function(t){e.$set(e.dataForm,"email",t)},expression:"dataForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{attrs:{placeholder:"手机号"},model:{value:e.dataForm.mobile,callback:function(t){e.$set(e.dataForm,"mobile",t)},expression:"dataForm.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属机构",prop:"orgNo"}},[a("el-popover",{ref:"orgListPopover",attrs:{placement:"top-start",trigger:"click"}},[a("el-tree",{ref:"orgListTree",attrs:{data:e.orgNoOptions,props:e.orgListTreeProps,"node-key":"orgNo","default-expand-all":!0,"highlight-current":!0,"expand-on-click-node":!1},on:{"current-change":e.orgListTreeCurrentChangeHandle}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:orgListPopover",arg:"orgListPopover"}],staticClass:"org-list__input",attrs:{readonly:!0,placeholder:"点击选择上级机构"},model:{value:e.dataForm.orgName,callback:function(t){e.$set(e.dataForm,"orgName",t)},expression:"dataForm.orgName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"角色",prop:"roleIdList"}},[a("el-select",{staticClass:"width185",attrs:{multiple:"",clearable:"",filterable:"",placeholder:"请选择"},model:{value:e.dataForm.roleIdList,callback:function(t){e.$set(e.dataForm,"roleIdList",t)},expression:"dataForm.roleIdList"}},e._l(e.roleList,function(e){return a("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",size:"mini",prop:"status"}},[a("el-radio-group",{model:{value:e.dataForm.status,callback:function(t){e.$set(e.dataForm,"status",t)},expression:"dataForm.status"}},[a("el-radio",{attrs:{label:0}},[e._v("禁用")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("正常")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var s=a("VU/8")(r,o,!1,function(e){a("HD49")},"data-v-d0830d5c",null);t.default=s.exports},ISE3:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.mod-org[data-v-d0830d5c] {\n.org-list__input,\n  .icon-list__input {\n> .el-input__inner {\n      cursor: pointer;\n}\n}\n&\n  __icon-popover {\n    max-width: 350px;\n}\n&\n  __icon-list {\n    max-height: 380px;\n    padding: 0;\n    margin: -8px 0 0 -8px;\n> .el-button {\n      padding: 8px;\n      margin: 8px 0 0 8px;\n> span {\n        display: inline-block;\n        vertical-align: middle;\n        width: 18px;\n        height: 18px;\n        font-size: 18px;\n}\n}\n}\n.icon-list__tips {\n    font-size: 18px;\n    text-align: center;\n    color: #e6a23c;\n    cursor: pointer;\n}\n}\n",""])}});