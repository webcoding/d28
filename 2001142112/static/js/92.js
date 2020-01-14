webpackJsonp([92],{jZju:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"用户账户余额变动记录",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{attrs:{inline:!0,model:e.searchForm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList()}}},[a("el-form-item",[a("el-select",{staticClass:"width185",attrs:{clearable:"",placeholder:"类型"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:"searchForm.type"}},[a("el-option",{key:"1",attrs:{label:"收入",value:"1"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"支出",value:"2"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname","header-align":"center",align:"center",label:"用户昵称"}}),e._v(" "),a("el-table-column",{attrs:{width:"120px",prop:"fromType","header-align":"center",align:"center",label:"下单来源"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.fromType?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("微信小程序")]):2===t.row.fromType?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("微信公众号")]):3===t.row.fromType?a("el-tag",{attrs:{size:"small",type:"warning"}},[e._v("APP")]):4===t.row.fromType?a("el-tag",{attrs:{size:"small",type:"warning"}},[e._v("H5")]):5===t.row.fromType?a("el-tag",{attrs:{size:"small",type:"warning"}},[e._v("支付宝小程序")]):6===t.row.fromType?a("el-tag",{attrs:{size:"small",type:"warning"}},[e._v("QQ小程序")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type","header-align":"center",align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.type?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("收入（待支付）")]):e._e(),e._v(" "),1===t.row.type?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("收入")]):2===t.row.type?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("支出")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"price","header-align":"center",align:"center",label:"变动金额"}}),e._v(" "),a("el-table-column",{attrs:{"show-tooltip-when-overflow":"",prop:"logDesc","header-align":"center",align:"center",label:"变动说明"}}),e._v(" "),a("el-table-column",{attrs:{prop:"addTime","header-align":"center",align:"center",label:"记录时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.addTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderType","header-align":"center",align:"center",label:"订单类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("充值")]):1===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("商城订单")]):2===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("秒杀订单")]):3===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("拼团订单")]):4===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("商城订单退款")]):5===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("秒杀订单退款")]):6===t.row.orderType?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("拼团订单退款")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderSn","header-align":"center",align:"center",label:"订单编号"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]},r=a("VU/8")({data:function(){return{userId:"",searchForm:{type:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,visible:!1}},methods:{init:function(e){this.userId=e,this.getDataList()},getDataList:function(){var e=this;this.visible=!0,this.$http({url:"/mall/accountlog/list",method:"get",params:{userId:this.userId,page:this.pageIndex,limit:this.pageSize,type:this.searchForm.type}}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.records,e.totalPage=a.page.total):(e.dataList=[],e.totalPage=0)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()}}},l,!1,null,null,null);t.default=r.exports}});