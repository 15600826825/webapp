
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
var re = /^1[3,4,5,7,8]\d{9}$/;//手机号验证
	var re2 =  /^\w{6,20}$/;//密码是否合法
$(".zhuce").on("click",function(){
	var a = b = c = d = false;	
	//验证码是否正确
			if($("#yanzheng").val().toLowerCase() == $("#huoqu").val().toLowerCase()){
				a = true;
			}else{
				alert("验证码输入不正确");
			}
	//手机号是否合法
			if(re.test($("#txt").val())){
				b = true;
			}else{
				alert("手机格式不正确")
			}
	//密码是否合法
			if(re2.test($("#pwd").val())){
				c = true;
			}else{
				alert("密码格式不正确")
			}			
		if($(".check").is(":checked")){
			d = true;
		}else{
			alert("请同意协议");
		}
	if(a&&b&&c&&d){
		console.log(1)
		$.ajax({
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{
			status:"register",
			userID:$("#txt").val(),
			password:$("#pwd").val()
		},
		success:function(data){
			if(data == 0){
				alert("用户名重名");
			}else if(data == 1){
				document.location.href = "../index.html?"+$("#txt").val();
				}
			}
		});
		}
	
})	

	









