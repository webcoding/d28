webpackJsonp([85],{PUk0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("/95u"),i=a("lRtq"),l={data:function(){return{searchForm:{nickname:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListSelections:[],userDetailVisible:!1,goodsDetailVisible:!1}},components:{UserDetail:n.default,GoodsDetail:i.default},activated:function(){this.getDataList()},methods:{showUserDetails:function(e){var t=this;this.userDetailVisible=!0,this.$nextTick(function(){t.$refs.userDetail.init(e,!0)})},showGoodsDetails:function(e){var t=this;this.goodsDetailVisible=!0,this.$nextTick(function(){t.$refs.goodsDetail.init(e,!0)})},getDataList:function(){var e=this;this.$http({url:"/mall/collect/list",method:"get",params:{page:this.pageIndex,limit:this.pageSize,nickname:this.searchForm.nickname}}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.records,e.totalPage=a.page.total):(e.dataList=[],e.totalPage=0)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:"/mall/collect/delete",method:"post",data:a}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.getDataList())})}).catch(function(){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-collect"},[a("el-form",{attrs:{inline:!0,model:e.searchForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"会员昵称",clearable:""},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("mall:collect:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.deleteHandle()}}},[e._v("批量删除\n      ")]):e._e()],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{width:"200",prop:"nickname","header-align":"center",align:"center",label:"会员昵称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showUserDetails(t.row.userId)}}},[e._v(e._s(t.row.nickname)+"\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsId","header-align":"center",align:"center",label:"商品"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showGoodsDetails(t.row.goodsId)}}},[e._v(e._s(t.row.goodsName)+"\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"addTime","header-align":"center",align:"center",label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.addTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("mall:collect:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteHandle(t.row.id)}}},[e._v("\n          删除\n        ")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.userDetailVisible?a("user-detail",{ref:"userDetail"}):e._e(),e._v(" "),e.goodsDetailVisible?a("goods-detail",{ref:"goodsDetail"}):e._e()],1)},staticRenderFns:[]},o=a("VU/8")(l,s,!1,null,null,null);t.default=o.exports}});