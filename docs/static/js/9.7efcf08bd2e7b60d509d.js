webpackJsonp([9],{BBY9:function(t,o,n){o=t.exports=n("FZ+f")(!1),o.push([t.i,"\n#video {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 48px;\n  background: #fff;\n}\n#video .content {\n  position: relative;\n}\n#video .content .container .globalTip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n#video .content .container .globalTip div {\n  height: 32px;\n  line-height: 34px;\n  font-size: 14px;\n  color: #2a90d7;\n  background: rgba(213,233,247,0.9);\n  text-align: center;\n  display: none;\n}\n#video .content .container .globalTip div.requestFail {\n  color: #f56767;\n  background: #fbe9ef;\n}\n#video .content .container .mint-loadmore-top {\n  height: 50px;\n  line-height: 50px;\n  font-size: 14px;\n  color: #999;\n}\n#video .content .container .mint-loadmore-top span {\n  display: block;\n}\n#video .content .container .mint-loadmore-top .pullLoading {\n  width: 24px;\n  height: 24px;\n  vertical-align: middle;\n  margin-top: -4px;\n  margin-right: 3px;\n}\n",""])},JRsF:function(t,o,n){t.exports=n.p+"static/img/loading.70b31c2.gif"},Rd3V:function(t,o,n){var i=n("BBY9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("88ac9596",i,!0,{})},SfBL:function(t,o,n){"use strict";(function(t){var i=n("Gu7T"),a=n.n(i),e=n("Dd8w"),s=n.n(e),l=n("NYxO");o.a={name:"video",data:function(){return{classPage:1,contentJson:[],dataCount:0,topStatus:"",bottomLock:!1,bottomLoading:!0,bottomNoData:!1,loading:!1,error:!1,location:0}},methods:s()({},Object(l.b)("video",["get_videoItem_data"]),{init:function(){0===this.contentJson.length&&(this.loading=!0,this.loadTopAjax())},loadTopAjax:function(){var o=this;this.get_videoItem_data(this.classPage).then(function(n){if(o.loading=!1,n){var i;(i=o.contentJson).unshift.apply(i,a()(n)),o.dataCount=n.length,o.classPage++,o.globalTip="dataCount",t("#video .dataCount").slideDown(200).delay(1e3).slideUp(200)}else t("#video .noNewData").slideDown(200).delay(1e3).slideUp(200);o.$refs.loadmore.onTopLoaded(),o.error=!1,t("#video .requestFail").hide()}).catch(function(n){console.log(n),o.contentJson.length>0?t("#video .requestFail").show():o.error=!0,o.loading=!1})},loadBottomAjax:function(){var t=this;this.bottomNoData||(this.bottomLock=!0,this.get_videoItem_data(this.classPage).then(function(o){if(o){var n;(n=t.contentJson).push.apply(n,a()(o)),t.classPage++}else t.bottomLoading=!1,t.bottomNoData=!0;t.bottomLock=!1}))},handleTopChange:function(t){this.topStatus=t},handleLocaltion:function(o){var n=this;"get"===o?this.$nextTick(function(){t("#video .container").scrollTop(n.location)}):"set"===o&&(this.location=t("#video .container").scrollTop())}}),created:function(){this.init()},activated:function(){this.handleLocaltion("get")},deactivated:function(){this.handleLocaltion("set")}}}).call(o,n("7t+N"))},SnTU:function(t,o,n){t.exports=n.p+"static/img/loading.c6bc779.png"},cmpk:function(t,o,n){"use strict";function i(t){n("Rd3V")}Object.defineProperty(o,"__esModule",{value:!0});var a=n("SfBL"),e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{attrs:{id:"video"}},[i("my-header",{directives:[{name:"goTop",rawName:"v-goTop:click",value:!0,expression:"true",arg:"click"}],attrs:{fixed:"",title:"视频"}}),t._v(" "),i("div",{staticClass:"content",class:{isIOS:"ios"==t.$store.state.device}},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadBottomAjax,expression:"loadBottomAjax"}],staticClass:"container",attrs:{"infinite-scroll-disabled":"bottomLock","infinite-scroll-distance":"10","infinite-scroll-immediate-check":"false"}},[i("div",{staticClass:"globalTip"},[i("div",{staticClass:"dataCount"},[t._v("已为你推荐"+t._s(t.dataCount)+"条新内容")]),t._v(" "),i("div",{staticClass:"noNewData"},[t._v("没有最新的内容了")]),t._v(" "),i("div",{staticClass:"requestFail"},[t._v("网络请求失败,请检查网络")])]),t._v(" "),i("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTopAjax,"auto-fill":!1},on:{"top-status-change":t.handleTopChange}},[i("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[i("span",{directives:[{name:"show",rawName:"v-show",value:"pull"===t.topStatus,expression:"topStatus === 'pull'"}]},[i("img",{staticClass:"pullLoading",attrs:{src:n("SnTU")}}),t._v(" 下拉刷新↓")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:"drop"===t.topStatus,expression:"topStatus === 'drop'"}]},[i("img",{staticClass:"pullLoading",attrs:{src:n("SnTU")}}),t._v(" 释放更新↑")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[i("img",{staticClass:"pullLoading",attrs:{src:n("JRsF")}}),t._v(" 加载中...")])]),t._v(" "),t.contentJson.length>0?i("list-item",{attrs:{itemJson:t.contentJson}}):t._e(),t._v(" "),t.contentJson.length>0?i("div",{staticClass:"bottomLoad"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.bottomLoading,expression:"bottomLoading"}],staticClass:"loading"},[t._v("加载中...")]),t._v(" "),t.bottomNoData?i("div",{staticClass:"noData"},[t._v("没有更多的内容了")]):t._e()]):t._e()],1)],1)]),t._v(" "),i("my-loading",{attrs:{visible:t.loading}}),t._v(" "),i("my-error",{attrs:{visible:t.error,method:t.init}})],1)},s=[],l={render:e,staticRenderFns:s},d=l,c=n("VU/8"),r=i,p=c(a.a,d,!1,r,null,null);o.default=p.exports}});