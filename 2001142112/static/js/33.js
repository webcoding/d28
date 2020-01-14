webpackJsonp([33,73],{Pjjo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("v0YT"),r=a("/95u"),n={data:function(){return{searchForm:{nickname:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListSelections:[],addOrUpdateVisible:!1,userDetailVisible:!1}},components:{AddOrUpdate:i.default,UserDetail:r.default},activated:function(){this.getDataList()},methods:{showUserDetails:function(e){var t=this;this.userDetailVisible=!0,this.$nextTick(function(){t.$refs.userDetail.init(e,!0)})},getDataList:function(){var e=this;this.$http({url:"/mall/searchhistory/list",method:"get",params:{page:this.pageIndex,limit:this.pageSize,nickname:this.searchForm.nickname}}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.records,e.totalPage=a.page.total):(e.dataList=[],e.totalPage=0)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},showDetails:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e,!0)})},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:"/mall/searchhistory/delete",method:"post",data:a}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.getDataList())})}).catch(function(){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-searchhistory"},[a("el-form",{attrs:{inline:!0,model:e.searchForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("mall:searchhistory:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{width:"200",prop:"nickname","header-align":"center",align:"center",label:"会员昵称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showUserDetails(t.row.userId)}}},[e._v(e._s(t.row.nickname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"keyword","header-align":"center",align:"center",label:"关键词"}}),e._v(" "),a("el-table-column",{attrs:{prop:"searchFrom","header-align":"center",align:"center",label:"搜索来源"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.searchFrom?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("小程序")]):1===t.row.searchFrom?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("公众号")]):2===t.row.searchFrom?a("el-tag",{attrs:{size:"small"}},[e._v("APP")]):3===t.row.searchFrom?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("PC")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"addTime","header-align":"center",align:"center",label:"搜索时间"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("mall:searchhistory:info")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showDetails(t.row.id)}}},[e._v("查看")]):e._e(),e._v(" "),e.isAuth("mall:searchhistory:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteHandle(t.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.userDetailVisible?a("user-detail",{ref:"userDetail"}):e._e()],1)},staticRenderFns:[]},l=a("VU/8")(n,s,!1,null,null,null);t.default=l.exports},v0YT:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?e.disabled?"查看":"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{inline:"",model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"关键词",prop:"keyword"}},[a("el-input",{attrs:{disabled:e.disabled,placeholder:"关键词"},model:{value:e.dataForm.keyword,callback:function(t){e.$set(e.dataForm,"keyword",t)},expression:"dataForm.keyword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"搜索来源",prop:"searchFrom"}},[a("el-radio-group",{attrs:{disabled:e.disabled},model:{value:e.dataForm.searchFrom,callback:function(t){e.$set(e.dataForm,"searchFrom",t)},expression:"dataForm.searchFrom"}},[a("el-radio",{attrs:{label:0}},[e._v("小程序")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("公众号")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("APP")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("PC")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"搜索时间",prop:"addTime"}},[a("el-date-picker",{attrs:{type:"datetime",disabled:e.disabled,placeholder:"搜索时间"},model:{value:e.dataForm.addTime,callback:function(t){e.$set(e.dataForm,"addTime",t)},expression:"dataForm.addTime"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),e.disabled?e._e():a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=a("VU/8")({data:function(){return{disabled:!1,visible:!1,dataForm:{id:"",userId:"",keyword:"",searchFrom:"",addTime:""},dataRule:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]}}},methods:{init:function(e,t){var a=this;this.disabled=t,this.dataForm.id=e||"",this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:"/mall/searchhistory/info/"+a.dataForm.id,method:"get"}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm=t.searchhistory)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:"/mall/searchhistory/"+(e.dataForm.id?"update":"save"),method:"post",data:e.dataForm}).then(function(t){var a=t.data;a&&0===a.code&&(e.$message({message:"操作成功",type:"success",duration:1500}),e.visible=!1,e.$emit("refreshDataList"))})})}}},i,!1,null,null,null);t.default=r.exports}});