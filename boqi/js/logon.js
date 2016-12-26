//验证码
	$("#huoqu").click(function(){
		function Ran(min,max){
			return parseInt(Math.random()*(max-min+1)+min);
		}
		var count = 0;
		var str =  "";
		while(count<4){
			var num = Ran(48,122);
			if((num>=48&&num<=57)||(num>=65&&num<=90)||(num>=97&&num<=122)){
				str += String.fromCharCode(num);
				count++;
			}		
		}	
		$("#huoqu").val(str);
	})
	
	var a = true;
	$(".mainc").on("click","a",function(){
		if(a){
			$(this).html("账号密码登录");			
			$(".show").eq(0).hide().siblings(".hide").eq(0).show();
			$(".show").eq(1).slideUp(50);
			$(".hide").eq(1).slideDown(50);
			a = false;
		}else{
			$(this).html("手机验证码登录");
			$(".show").eq(0).show().siblings(".hide").eq(0).hide();
			$(".show").eq(1).slideDown(50);
			$(".hide").eq(1).slideUp(50);
			a = true;
		}
	})
	
	$(".denglu").on("click",function(){
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			data:{
				status:"login",
				userID:$("#txt").val(),
				password:$("#pwd").val()
			},
			success:function(data){
				if(a){
					if(data==0){
						alert("用户名不存在");
					}else if(data==2){
						alert("用户名密码不符");
					}else{
						document.location.href = "mine.html";
						localStorage.setItem("user",$("#txt").val());
					}
				}else{
					if(data==0){
						alert("用户名不存在");
					}else if($("#huoqu").val().toLowerCase()!=$("#yanzheng").val().toLowerCase()){
						alert("验证码输入不正确");
					}else{
						document.location.href = "mine.html";
						localStorage.setItem("user",$("#txt").val());
					}
					
				}
			}
		});
	})
	
	
	
	
	
	
	
	