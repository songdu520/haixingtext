define([],function(){return{zhuche:(r=l=s=e=!0,$(".username").on("focus",function(){$(this).siblings().html("设置后不可更改，中英文均可，最长14个英文或7个汉字").css({color:"#666"})}),!void $(".username").on("blur",function(){var e;$(this).val()?(e=this.value.replace(/[\u4e00-\u9fa5]/g,"aa").length,console.log(e),7<=e&&e<=14?/^[a-zA-Z\u4e00-\u9fa5]+$/g.test(this.value)?$(this).siblings().html("√").css({color:"green"}):$(this).siblings().html("格式有误").css({color:"red"}):$(this).siblings().html("长度不对").css({color:"red"})):$(this).siblings().html("用户名不能为空").css({color:"red"})})("#rigistry").on("submit",function(){if(""===username.value&&(message[0].innerHTML="用户名不能为空",message[0].style.color="red",e=!1),""===telphone.value&&(message[1].innerHTML="手机号码不能为空",message[1].style.color="red",s=!1),""===email.value&&(message[2].innerHTML="电子邮箱不能为空",message[2].style.color="red",l=!1),""===password.value&&(message[4].innerHTML="密码不能为空",message[4].style.color="red",r=!1),!(e&&s&&l&&r))return!1}))};var e,s,l,r});