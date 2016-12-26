$(function(){
	$(".headerTab p").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:"jsonp",
		async:true,
		success:function(data){
			var dataID = localStorage.getItem("shangpinID");
//			console.log(dataID);
			var html = "";
			for(var i in data){
				if(dataID == data[i].goodsID){
					html = '<div class="mainc"><img src="'+data[i].goodsListImg+'" alt="" /><h2>'+data[i].goodsName+'</h2><h3>'+data[i].price+'</h3><p><span>已售3456</span>10元</p>';
				}
				$(".main").html(html);
			}
		}
	});
	
	$(".btn").click(function(){
		window.location.href = "shopCart.html";
	})
})

/*<div class="main">
	<img src="../../boqi/img/daily/12.jpg" alt="" />
	<h2>路斯 火腿肠</h2>
	<h3>1.00元</h3>
	<p><span>yishou</span>1.20yuan</p>
</div>*/
