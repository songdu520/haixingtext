!function(a){"function"!=typeof define||!define.amd&&!define.cmd||jQuery?"object"==typeof module&&module.exports?module.exports=function(t,e){return void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),a(e),e}:a(jQuery):define(["jquery"],a)}(function(i){function n(t,e){var o,p=e,a=i(document),c=i(t);this.setPageCount=function(t){return p.pageCount=t},this.getPageCount=function(){return p.totalData&&p.showData?Math.ceil(parseInt(p.totalData)/p.showData):p.pageCount},this.getCurrent=function(){return o},this.filling=function(t){var e="";o=parseInt(t)||parseInt(p.current);var a,n=this.getPageCount();switch(p.mode){case"fixed":e+='<a href="javascript:;" class="'+p.prevCls+'">'+p.prevContent+"</a>",p.coping&&(e+='<a href="javascript:;" data-page="1">'+(a=p.coping&&p.homePage?p.homePage:"1")+"</a>");for(var i=o>p.count-1?o+p.count-1>n?o-(p.count-(n-o)):o-2:1,s=o+p.count-1>n?n:i+p.count;i<=s;i++)e+=i!=o?'<a href="javascript:;" data-page="'+i+'">'+i+"</a>":'<span class="'+p.activeCls+'">'+i+"</span>";p.coping&&(e+='<a href="javascript:;" data-page="'+n+'">'+(p.coping&&p.endPage?p.endPage:n)+"</a>"),e+='<a href="javascript:;" class="'+p.nextCls+'">'+p.nextContent+"</a>";break;case"unfixed":p.keepShowPN||1<o?e+='<a href="javascript:;" class="'+p.prevCls+'">'+p.prevContent+"</a>":0==p.keepShowPN&&c.find("."+p.prevCls)&&c.find("."+p.prevCls).remove(),o>=p.count+2&&1!=o&&n!=p.count&&(a=p.coping&&p.homePage?p.homePage:"1",e+=p.coping?'<a href="javascript:;" data-page="1">'+a+"</a><span>...</span>":"");for(i=o-p.count<=1?1:o-p.count,s=o+p.count>=n?n:o+p.count;i<=s;i++)i<=n&&1<=i&&(e+=i!=o?'<a href="javascript:;" data-page="'+i+'">'+i+"</a>":'<span class="'+p.activeCls+'">'+i+"</span>");o+p.count<n&&1<=o&&n>p.count&&(s=p.coping&&p.endPage?p.endPage:n,e+=p.coping?'<span>...</span><a href="javascript:;" data-page="'+n+'">'+s+"</a>":""),p.keepShowPN||o<n?e+='<a href="javascript:;" class="'+p.nextCls+'">'+p.nextContent+"</a>":0==p.keepShowPN&&c.find("."+p.nextCls)&&c.find("."+p.nextCls).remove()}e+=p.jump?'<input type="text" class="'+p.jumpIptCls+'"><a href="javascript:;" class="'+p.jumpBtnCls+'">'+p.jumpBtn+"</a>":"",c.empty().html(e)},this.eventBind=function(){var e=this,n=e.getPageCount(),t=1;c.off().on("click","a",function(){if(i(this).hasClass(p.nextCls)){if(c.find("."+p.activeCls).text()>=n)return i(this).addClass("disabled"),!1;t=parseInt(c.find("."+p.activeCls).text())+1}else if(i(this).hasClass(p.prevCls)){if(c.find("."+p.activeCls).text()<=1)return i(this).addClass("disabled"),!1;t=parseInt(c.find("."+p.activeCls).text())-1}else if(i(this).hasClass(p.jumpBtnCls)){if(""===c.find("."+p.jumpIptCls).val())return;t=parseInt(c.find("."+p.jumpIptCls).val())}else t=parseInt(i(this).data("page"));e.filling(t),"function"==typeof p.callback&&p.callback(e)}),c.on("input propertychange","."+p.jumpIptCls,function(){var t=i(this),e=t.val(),a=/[^\d]/g;a.test(e)&&t.val(e.replace(a,"")),parseInt(e)>n&&t.val(n),0===parseInt(e)&&t.val(1)}),a.keydown(function(t){13==t.keyCode&&c.find("."+p.jumpIptCls).val()&&(t=parseInt(c.find("."+p.jumpIptCls).val()),e.filling(t),"function"==typeof p.callback&&p.callback(e))})},this.init=function(){this.filling(p.current),this.eventBind(),p.isHide&&"1"==this.getPageCount()||"0"==this.getPageCount()?c.hide():c.show()},this.init()}var s={totalData:0,showData:0,pageCount:9,current:1,prevCls:"prev",nextCls:"next",prevContent:"<",nextContent:">",activeCls:"active",coping:!1,isHide:!1,homePage:"",endPage:"",keepShowPN:!1,mode:"unfixed",count:4,jump:!1,jumpIptCls:"jump-ipt",jumpBtnCls:"jump-btn",jumpBtn:"跳转",callback:function(){}};i.fn.pagination=function(t,e){"function"==typeof t?(e=t,t={}):(t=t||{},e=e||function(){});var a=i.extend({},s,t);return this.each(function(){var t=new n(this,a);e(t)})}});