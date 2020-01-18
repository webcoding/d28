webpackJsonp([59],{bJaK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{searchForm:{name:""},dictDataList:[],dictPageIndex:1,dictPageSize:10,dictTotalPage:0,dictDataListSelections:[],dictVisible:!1,groupId:"",code:""}},components:{DictAddOrUpdate:a("YPGx").default},methods:{getDictDataList:function(t,e){var a=this;t&&(this.groupId=t),e&&(this.code=e),this.$http({url:"/sys/dict/list",method:"get",params:{page:this.dictPageIndex,limit:this.dictPageSize,name:this.searchForm.name,code:this.code}}).then(function(t){var e=t.data;e&&0===e.code?(a.dictDataList=e.page.records,a.dictTotalPage=e.page.total):(a.dictDataList=[],a.dictTotalPage=0)})},sizeChangeDictHandle:function(t){this.dictPageSize=t,this.dictPageIndex=1,this.getDictDataList()},currentChangeDictHandle:function(t){this.dictPageIndex=t,this.getDictDataList()},selectionChangeDictHandle:function(t){this.dictDataListSelections=t},addOrUpdateDictHandle:function(t){var e=this;this.dictVisible=!0,this.$nextTick(function(){e.$refs.dictAddOrUpdate.init(t,e.groupId)})},deleteDictHandle:function(t){var e=this,a=t?[t]:this.dictDataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:"/sys/dict/delete",method:"post",data:a}).then(function(t){var a=t.data;a&&0===a.code&&(e.$message({message:"操作成功",type:"success",duration:1500}),e.getDictDataList())})}).catch(function(){})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-dict"},[a("el-form",{attrs:{inline:!0,model:t.searchForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDictDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"字典名称",clearable:""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){return t.getDictDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("sys:dict:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addOrUpdateDictHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("sys:dict:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dictDataListSelections.length<=0},on:{click:function(e){return t.deleteDictHandle()}}},[t._v("批量删除\n      ")]):t._e()],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dictDataList,border:""},on:{"selection-change":t.selectionChangeDictHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code","header-align":"center",align:"center",label:"分组编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"字典名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"value","header-align":"center",align:"center",label:"字典值"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v("禁用")]):1===e.row.status?a("el-tag",{attrs:{size:"small",type:"success"}},[t._v("正常")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.isAuth("sys:dict:update")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.addOrUpdateDictHandle(e.row.id)}}},[t._v("修改\n        ")]):t._e(),t._v(" "),t.isAuth("sys:dict:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteDictHandle(e.row.id)}}},[t._v("\n          删除\n        ")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.dictPageIndex,"page-sizes":[10,20,50,100],"page-size":t.dictPageSize,total:t.dictTotalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeDictHandle,"current-change":t.currentChangeDictHandle}}),t._v(" "),t.dictVisible?a("dict-add-or-update",{ref:"dictAddOrUpdate",on:{refreshDataList:t.getDictDataList}}):t._e()],1)},staticRenderFns:[]},c=a("VU/8")(i,n,!1,null,null,null);e.default=c.exports}});