webpackJsonp([49,97],{gxTB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"模型名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"模型名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模型标识",prop:"key"}},[a("el-input",{attrs:{placeholder:"模型标识"},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模型描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"模型描述"},model:{value:e.dataForm.description,callback:function(t){e.$set(e.dataForm,"description",t)},expression:"dataForm.description"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=a("VU/8")({data:function(){return{visible:!1,dataForm:{name:"",key:"",description:""},dataRule:{name:[{required:!0,message:"模型名称不能为空",trigger:"blur"}],key:[{required:!0,message:"模型标识不能为空",trigger:"blur"}],description:[{required:!0,message:"模型描述不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||"",this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields()})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:"/act/remodel/"+(e.dataForm.id?"update":"save"),method:"post",data:e.dataForm}).then(function(t){var a=t.data;a&&0===a.code&&(e.$message({message:"操作成功",type:"success",duration:1500}),e.visible=!1,e.$emit("refreshDataList"))})})}}},n,!1,null,null,null);t.default=i.exports},qzgr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{searchForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("gxTB").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.$http({url:"/act/remodel/list",method:"get",params:{page:this.pageIndex,limit:this.pageSize,key:this.searchForm.key}}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.records,e.totalPage=a.page.total):(e.dataList=[],e.totalPage=0)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:"/act/remodel/delete",method:"post",data:a}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.getDataList())})}).catch(function(){})},deployHandle:function(e){var t=this;this.$http({url:"/act/remodel/deploy?id="+e,method:"post"}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:a.msg,type:"success",duration:2e3}),t.getDataList())})},exportHandle:function(e){var t=this.$http.BASE_URL+"/act/remodel/export?id="+e+"&token="+this.$cookie.get("token");window.open(t)},editorHandle:function(e){var t=this.$http.BASE_URL+"/modeler.html?modelId="+e+"&token="+this.$cookie.get("token");window.open(t)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-remodel"},[a("el-form",{attrs:{inline:!0,model:e.searchForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"关键字",clearable:""},model:{value:e.searchForm.key,callback:function(t){e.$set(e.searchForm,"key",t)},expression:"searchForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("act:remodel:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("act:remodel:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.deleteHandle()}}},[e._v("批量删除\n      ")]):e._e()],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"模型名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"key","header-align":"center",align:"center",label:"关键字"}}),e._v(" "),a("el-table-column",{attrs:{width:"250px",prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{width:"250px",prop:"lastUpdateTime","header-align":"center",align:"center",label:"最后修改时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version","header-align":"center",align:"center",label:"版本"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("act:remodel:update")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.editorHandle(t.row.id)}}},[e._v("编辑\n        ")]):e._e(),e._v(" "),e.isAuth("act:remodel:deploy")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deployHandle(t.row.id)}}},[e._v("\n          部署\n        ")]):e._e(),e._v(" "),e.isAuth("act:remodel:export")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.exportHandle(t.row.id)}}},[e._v("导出\n        ")]):e._e(),e._v(" "),e.isAuth("act:remodel:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteHandle(t.row.id)}}},[e._v("\n          删除\n        ")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},r=a("VU/8")(n,i,!1,null,null,null);t.default=r.exports}});