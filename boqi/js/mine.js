
//个人  笔记
$(".wode li").eq(0).click(function(){
	$(this).addClass("wode_active").siblings("li").removeClass("wode_active");
	$(".wode li").eq(2).animate({
		"left":0
	},200)
	$(".zhongxin").show();
	$(".biji").hide();
})
$(".wode li").eq(1).click(function(){
	$(this).addClass("wode_active").siblings("li").removeClass("wode_active");
	$(".wode li").eq(2).animate({
		"left":"50%"
	},200)
	$(".zhongxin").hide();
	$(".biji").show();
})

if(localStorage.getItem("user")){
	var user = localStorage.getItem("user");
	$(".no").hide();
	$(".has").css("display","flex").find("b").html(user);
}

//var url = window.location.href;
//for (var i=0;i<url.length;i++) {
//	if(url[i]=="?"){
//		var user = url.split("?")[1];
//		$(".no").hide();
//		$(".has").css("display","flex").find("b").html(user);
//	}
//}