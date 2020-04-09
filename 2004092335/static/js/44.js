webpackJsonp([44,90],{NgnP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?e.disabled?"查看":"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"品牌名称",prop:"name"}},[a("el-input",{attrs:{disabled:e.disabled,placeholder:"品牌名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌大图",prop:"listPicUrl"}},[a("el-input",{attrs:{disabled:e.disabled,placeholder:"品牌大图"},model:{value:e.dataForm.listPicUrl,callback:function(t){e.$set(e.dataForm,"listPicUrl",t)},expression:"dataForm.listPicUrl"}},[e.dataForm.listPicUrl?a("el-button",{attrs:{slot:"append",icon:"el-icon-view"},on:{click:function(t){return e.openImg(e.dataForm.listPicUrl)}},slot:"append"}):e._e()],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌小图",prop:"appListPicUrl"}},[a("el-input",{attrs:{disabled:e.disabled,placeholder:"品牌小图"},model:{value:e.dataForm.appListPicUrl,callback:function(t){e.$set(e.dataForm,"appListPicUrl",t)},expression:"dataForm.appListPicUrl"}},[e.dataForm.appListPicUrl?a("el-button",{attrs:{slot:"append",icon:"el-icon-view"},on:{click:function(t){return e.openImg(e.dataForm.appListPicUrl)}},slot:"append"}):e._e()],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌描述",prop:"simpleDesc"}},[a("el-input",{attrs:{type:"textarea",rows:4,disabled:e.disabled,placeholder:"品牌描述"},model:{value:e.dataForm.simpleDesc,callback:function(t){e.$set(e.dataForm,"simpleDesc",t)},expression:"dataForm.simpleDesc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"底价",prop:"floorPrice"}},[a("el-input",{attrs:{disabled:e.disabled,placeholder:"底价"},model:{value:e.dataForm.floorPrice,callback:function(t){e.$set(e.dataForm,"floorPrice",t)},expression:"dataForm.floorPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"显示",prop:"isShow"}},[a("el-dict",{attrs:{code:"IS_NOT",disabled:e.disabled},model:{value:e.dataForm.isShow,callback:function(t){e.$set(e.dataForm,"isShow",t)},expression:"dataForm.isShow"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{disabled:e.disabled,placeholder:"排序"},model:{value:e.dataForm.sort,callback:function(t){e.$set(e.dataForm,"sort",t)},expression:"dataForm.sort"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),e.disabled?e._e():a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=a("VU/8")({data:function(){return{disabled:!1,visible:!1,dataForm:{id:"",name:"",listPicUrl:"",appListPicUrl:"",simpleDesc:"",sort:"",isShow:"",floorPrice:""},dataRule:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]}}},methods:{init:function(e,t){var a=this;this.disabled=t,this.dataForm.id=e||"",this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:"/mall/brand/info/"+a.dataForm.id,method:"get"}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm=t.brand)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:"/mall/brand/"+(e.dataForm.id?"update":"save"),method:"post",data:e.dataForm}).then(function(t){var a=t.data;a&&0===a.code&&(e.$message({message:"操作成功",type:"success",duration:1500}),e.visible=!1,e.$emit("refreshDataList"))})})}}},l,!1,null,null,null);t.default=i.exports},XK4f:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{searchForm:{name:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("NgnP").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.$http({url:"/mall/brand/list",method:"get",params:{page:this.pageIndex,limit:this.pageSize,name:this.searchForm.name}}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.records,e.totalPage=a.page.total):(e.dataList=[],e.totalPage=0)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},showDetails:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e,!0)})},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:"/mall/brand/delete",method:"post",data:a}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.getDataList())})}).catch(function(){})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-brand"},[a("el-form",{attrs:{inline:!0,model:e.searchForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("mall:brand:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("mall:brand:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"品牌名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"listPicUrl","header-align":"center",align:"center",label:"品牌大图"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"50%",width:"50%"},attrs:{src:t.row.listPicUrl},on:{click:function(a){return e.openImg(t.row.listPicUrl)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"appListPicUrl","header-align":"center",align:"center",label:"品牌小图"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"50%",width:"50%"},attrs:{src:t.row.appListPicUrl},on:{click:function(a){return e.openImg(t.row.appListPicUrl)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"show-tooltip-when-overflow":"",prop:"simpleDesc","header-align":"center",align:"center",label:"品牌描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"floorPrice","header-align":"center",align:"center",label:"底价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isShow","header-align":"center",align:"center",label:"显示"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isShow?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("否")]):1===t.row.isShow?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("是")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"sort","header-align":"center",align:"center",label:"排序"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("mall:brand:info")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showDetails(t.row.id)}}},[e._v("查看")]):e._e(),e._v(" "),e.isAuth("mall:brand:update")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]):e._e(),e._v(" "),e.isAuth("mall:brand:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteHandle(t.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},r=a("VU/8")(l,i,!1,null,null,null);t.default=r.exports}});