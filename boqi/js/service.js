$(function(){
	
/*banner轮播*/      
	var mySwiper = new Swiper ('.swiper-container', {
		/*direction: 'vertical',*/
		loop: true,
		
		// 如果需要分页器
		pagination: '.swiper-pagination',
	})  
	
	
/*tab切换*/
	/*$(".nav div").click(function(){
		$(this).addClass("nav_active").siblings("div").removeClass("nav_active");
	})*/
	/*底部*/
	$(".nav div").eq(1).click(function(){
		$(".nav_posi").animate({
			"left":"50%"
		},300)
		$(this).addClass("nav_active").siblings("div").removeClass("nav_active");
		$(".list2").addClass("list_active").siblings().removeClass("list_active");
	})
	$(".nav div").eq(0).click(function(){
		$(".nav_posi").animate({
			"left":0
		},300)
		$(this).addClass("nav_active").siblings("div").removeClass("nav_active");
		$(".list1").addClass("list_active").siblings().removeClass("list_active");
	})
	
/*附近推荐JSON传值*/
	$.ajax({
		type:"get",
		url:"../json/service.json",
		async:true,
		success:function(res){
			var html = "";
			for(var i = 0;i<res.length;i++){
				html+='<div class="nearMain"><img src="'+res[i].src+'" alt="" /><div><h2><span>元起</span><span class="price">'+res[i].price+'&nbsp;</span>'+res[i].name+'</h2><h3><span>'+res[i].assess+'</span>&nbsp;已售'+res[i].sold+'</h3><p><span class="range">'+res[i].range+'km</span>'+res[i].address+'</p></div></div>';
			}
			
			$(".near").html(html);
			
			/*<div class="nearMain">
        		<img src="../img/service/near1.jpg" alt="" />
        		<div>
        			<h2><span>元起</span><span class="price">26&nbsp;</span>派多格宠物（红石路店）</h2>
        			<h3><span>★★★★☆</span>&nbsp;已售26</h3>
        			<p><span class="range">1067.47km</span>嘉定镇&nbsp;<span class="appro">认证</span></p>
        		</div>
        	</div>*/
		}
	});	
	
})
