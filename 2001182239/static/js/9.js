webpackJsonp([9,18],{"/QY2":function(e,t,a){var n=a("asre");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("573c1cf9",n,!0,{})},CzvJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"SKU配置","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("table",{staticClass:"table table-hover"},[a("tbody",e._l(e.productEntityList,function(t,n){return a("tr",[e._l(e.allSpc,function(n,l){return a("th",e._l(t.keyValue,function(t,l){return a("div",[t.key==n?[e._v("\n            "+e._s(n)+"\n            "),a("el-input",{attrs:{placeholder:n},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"kv.value"}})]:e._e(),e._v(" "),""==t.key&&0==l?[e._v("\n            "+e._s(n)+"\n            "),a("el-input",{attrs:{placeholder:n},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"kv.value"}})]:e._e()],2)}),0)}),e._v(" "),a("th",[e._v("\n        序列号：\n        "),a("el-input",{attrs:{placeholder:"商品序列号"},model:{value:t.goodsSn,callback:function(a){e.$set(t,"goodsSn",a)},expression:"productEntity.goodsSn"}})],1),e._v(" "),a("th",[e._v("\n        库存：\n        "),a("el-input",{attrs:{placeholder:"商品库存"},model:{value:t.goodsNumber,callback:function(a){e.$set(t,"goodsNumber",a)},expression:"productEntity.goodsNumber"}})],1),e._v(" "),a("th",[e._v("\n        零售价格：\n        "),a("el-input",{attrs:{placeholder:"零售价格"},model:{value:t.retailPrice,callback:function(a){e.$set(t,"retailPrice",a)},expression:"productEntity.retailPrice"}})],1),e._v(" "),a("th",[e._v("\n        市场价格：\n        "),a("el-input",{attrs:{placeholder:"市场价格"},model:{value:t.marketPrice,callback:function(a){e.$set(t,"marketPrice",a)},expression:"productEntity.marketPrice"}})],1),e._v(" "),a("th",[0==n?a("el-button",{attrs:{type:"warning",icon:"el-icon-plus",circle:""},on:{click:e.addAttrRow}}):e._e()],1),e._v(" "),a("th",[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.delAttrRow(n)}}})],1)],2)}),0)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)])},staticRenderFns:[]};var l=a("VU/8")({data:function(){return{goodsId:"",visible:!1,allSpc:[],productEntityList:[]}},methods:{init:function(e){var t=this;this.goodsId=e,this.productEntityList=[{keyValue:[{key:"",value:""}],goodsSn:"",goodsId:e,goodsNumber:"",retailPrice:"",marketPrice:""}],this.allSpc=[],this.visible=!0,this.$nextTick(function(){t.$http({url:"/mall/specification/queryAll",method:"get",params:{goodsId:t.goodsId}}).then(function(e){var a=e.data;if(a&&0===a.code)for(var n=0;n<a.list.length;n++){var l=a.list[n].name;t.allSpc.push(l)}}),t.$http({url:"/mall/goodssku/queryByGoodsId/"+t.goodsId,method:"get"}).then(function(e){var a=e.data;if(a&&0===a.code){for(var n=[],l=0;l<t.allSpc.length;l++)n.push({key:t.allSpc[l],value:""});t.productEntityList=a.list,0===t.productEntityList.length&&(t.productEntityList=[{keyValue:n,goodsSn:"",goodsId:t.goodsId,goodsNumber:"",retailPrice:"",marketPrice:""}]);for(var r=0;r<t.productEntityList.length;r++)0===t.productEntityList[r].keyValue.length?t.productEntityList[r].keyValue=n:t.productEntityList[r].keyValue.length!==n.length&&(t.productEntityList[r].keyValue=n)}})})},delAttrRow:function(e){1!==this.productEntityList.length&&this.productEntityList.splice(e,1)},addAttrRow:function(){for(var e=[],t=0;t<this.allSpc.length;t++)e.push({key:this.allSpc[t],value:""});this.productEntityList.push({keyValue:e,goodsSn:"",goodsId:this.goodsId,goodsNumber:"",retailPrice:"",marketPrice:""})},dataFormSubmit:function(){var e=this;this.$http({url:"/mall/goodssku/saveGoodsProduct",method:"post",data:this.productEntityList}).then(function(t){var a=t.data;a&&0===a.code&&(e.$message({message:"操作成功",type:"success",duration:1500}),e.visible=!1,e.$emit("refreshDataList"))})}}},n,!1,function(e){a("/QY2")},null,null);t.default=l.exports},Mm7k:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("lRtq"),l=a("CzvJ"),r={data:function(){return{searchForm:{name:"",goodsSn:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListSelections:[],addOrUpdateVisible:!1,goodsskuAddOrUpdateVisible:!1}},components:{AddOrUpdate:n.default,GoodsskuAddOrUpdate:l.default},activated:function(){this.getDataList()},methods:{changeSale:function(e,t){var a=this;this.$confirm("确定"+(1===t?"下架":"上架")+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http({url:"/mall/goods/changeSale",method:"post",data:[e]}).then(function(e){var t=e.data;t&&0===t.code&&(a.$message({message:"操作成功",type:"success",duration:1500}),a.getDataList())})}).catch(function(){})},getDataList:function(){var e=this;this.$http({url:"/mall/goods/list",method:"get",params:{page:this.pageIndex,limit:this.pageSize,name:this.searchForm.name,goodsSn:this.searchForm.goodsSn}}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.records,e.totalPage=a.page.total):(e.dataList=[],e.totalPage=0)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},showDetails:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e,!0)})},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},skuHandle:function(e){var t=this;this.goodsskuAddOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.goodsskuAddOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行[删除]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:"/mall/goods/delete",method:"post",data:a}).then(function(e){var a=e.data;a&&0===a.code&&(t.$message({message:"操作成功",type:"success",duration:1500}),t.getDataList())})}).catch(function(){})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-goods"},[a("el-form",{attrs:{inline:!0,model:e.searchForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"商品名称",clearable:""},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"商品编码",clearable:""},model:{value:e.searchForm.goodsSn,callback:function(t){e.$set(e.searchForm,"goodsSn",t)},expression:"searchForm.goodsSn"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("mall:goods:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("mall:goods:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){return e.deleteHandle()}}},[e._v("批量删除\n      ")]):e._e()],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",prop:"name","header-align":"center",align:"center",label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.skuHandle(t.row.id)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsSn","header-align":"center",align:"center",label:"商品编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"categoryName","header-align":"center",align:"center",label:"商品类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brandName","header-align":"center",align:"center",label:"品牌"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isOnSale","header-align":"center",align:"center",label:"是否上架"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isOnSale?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.changeSale(t.row.id,t.row.isOnSale)}}},[e._v("否\n        ")]):1===t.row.isOnSale?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){return e.changeSale(t.row.id,t.row.isOnSale)}}},[e._v("是\n        ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsNumber","header-align":"center",align:"center",label:"商品库存"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sales","header-align":"center",align:"center",label:"销量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isHot","header-align":"center",align:"center",label:"是否热销"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isHot?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("否")]):1===t.row.isHot?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("是")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isNew","header-align":"center",align:"center",label:"是否新商品"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isNew?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("否")]):1===t.row.isNew?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("是")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isLimited","header-align":"center",align:"center",label:"是否限购"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isLimited?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("否")]):1===t.row.isLimited?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("是")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"listPicUrl","header-align":"center",align:"center",label:"列表图"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{height:"50%",width:"50%"},attrs:{src:t.row.listPicUrl},on:{click:function(a){return e.openImg(t.row.listPicUrl)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"keywords","header-align":"center",align:"center",label:"关键词"}}),e._v(" "),a("el-table-column",{attrs:{"show-tooltip-when-overflow":"",prop:"goodsBrief","header-align":"center",align:"center",label:"简明介绍"}}),e._v(" "),a("el-table-column",{attrs:{prop:"unitPrice","header-align":"center",align:"center",label:"进价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"marketPrice","header-align":"center",align:"center",label:"市场价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"retailPrice","header-align":"center",align:"center",label:"零售价格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"counterPrice","header-align":"center",align:"center",label:"专柜价格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sellVolume","header-align":"center",align:"center",label:"销售量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isAppExclusive","header-align":"center",align:"center",label:"APP专属"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isAppExclusive?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("否")]):1===t.row.isAppExclusive?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("是")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"appExclusivePrice","header-align":"center",align:"center",label:"APP专享价"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sort","header-align":"center",align:"center",label:"排序"}}),e._v(" "),a("el-table-column",{attrs:{prop:"promotionTag","header-align":"center",align:"center",label:"推广标签"}}),e._v(" "),a("el-table-column",{attrs:{prop:"promotionDesc","header-align":"center",align:"center",label:"推广描述"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("mall:goods:info")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.showDetails(t.row.id)}}},[e._v("查看\n        ")]):e._e(),e._v(" "),e.isAuth("mall:goods:update")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.addOrUpdateHandle(t.row.id)}}},[e._v("修改\n        ")]):e._e(),e._v(" "),e.isAuth("mall:goods:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteHandle(t.row.id)}}},[e._v("\n          删除\n        ")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.goodsskuAddOrUpdateVisible?a("goodssku-add-or-update",{ref:"goodsskuAddOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},o=a("VU/8")(r,i,!1,null,null,null);t.default=o.exports},asre:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.el-dialog {\n  width: 70%;\n  min-width: 920px;\n}\n",""])}});