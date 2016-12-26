$(function(){
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		dataType:"jsonp",
		async:true,
		success:function(data){
			var html = "";
			for(var i in data){
				html+='<div class="list" data-id="'+data[i].goodsID+'"><img src="'+data[i].goodsListImg+'" alt="" /><div><h2>'+data[i].goodsName+'</h2><p><span class="listFloat">已售225183</span><span class="price">'+data[i].price+'</span><span>&ensp;评价 1686</p></div></div>'
			}
			$(".shangplist").html(html)
			
			/***list的点击事件  如果写到外面，需要用父级的on事件，寻找.list元素***/
			$(".list").click(function(){
				var shangpinID = $(this).attr("data-id");
				localStorage.setItem("shangpinID",shangpinID);
				window.location.href = "details.html";
			})
		}
	});
	
	
})

/*<div class="list">
	<img src="../../boqi/img/daily/10.jpg" alt="" />
	<div>
		<h2>路斯 火腿肠单只15g狗零食</h2>
		<p><span class="listFloat">已售225183</span><span class="price">1.00元</span>&ensp;评价 1686</p>
	</div>
</div>*/









