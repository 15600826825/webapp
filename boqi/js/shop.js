//二级tab切换
$(".two_tab .tab_title").click(function(){
	var count = $(this).index()-1;
	console.log(count);
	if(count==3){
		$(".po_tab").css("border-left","none")
		$(".po_tab").css("border-right","none")
		$(".po_tab_righta").addClass("po_tab_right")
	}
	else{
		$(".po_tab").css("border-left","0.01rem solid #dbdbdb")
		$(".po_tab").css("border-right","0.01rem solid #dbdbdb")
		$(".po_tab_righta").removeClass("po_tab_right")
	}
	$.each($(".tab_title"),function(index){
		if(index==count){
			$(".po_tab").animate({
				"left":index*25+"%"
			},500,function(){
				switch(index){
						case 0:	$(".po_tab p").html("狗狗");
							break;
						case 1: $(".po_tab p").html("猫猫");
							break;
						case 2: $(".po_tab p").html("小宠");
							break;
						case 3: $(".po_tab p").html("水族");
							break;
						default:alert("ERRor");
				}	
			})	
		}		
	});	
	
	$.each($(".tab_content"),function(index){
		if(index==count){
			$(".tab_content").eq(index).css("display","flex")
		}else{
			$(".tab_content").eq(index).css("display","none")
		}
	});
	
	$.each($(".main_tab"),function(index){
		if(index==count){
			$(".main_tab").eq(index).css("display","block")
			if(index==2||index==3){
				$(".main").css("display","none")
			}else{
				$(".main").css("display","block")
			}
		}else{
			$(".main_tab").eq(index).css("display","none")
		}			
	})
});


//json数据传出
	$.ajax({
		type:"get",
		url:"../json/shop.json",
		success:function(data){
			console.log(data[1]);
		//狗狗
			$(".main .hot_json_onea").html('<a href="list.html?id='+data.dogshop[0].id+'&kind_thing=dogshop"><img src="'+data.dogshop[0].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .hot_json_oneb").html('<a href="list.html?id='+data.dogshop[1].id+'&kind_thing=dogshop"><img src="'+data.dogshop[1].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .hot_json_onec").html('<a href="list.html?id='+data.dogshop[2].id+'&kind_thing=dogshop"><img src="'+data.dogshop[2].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .hot_json_twoa").html('<a href="list.html?id='+data.dogshop[3].id+'&kind_thing=dogshop"><img src="'+data.dogshop[3].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .hot_json_twob").html('<a href="list.html?id='+data.dogshop[4].id+'&kind_thing=dogshop"><img src="'+data.dogshop[4].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .doctor_json_onea").html('<a href="list.html?id='+data.dogshop[5].id+'&kind_thing=dogshop"><img src="'+data.dogshop[5].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .doctor_json_oneb").html('<a href="list.html?id='+data.dogshop[6].id+'&kind_thing=dogshop"><img src="'+data.dogshop[6].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .doctor_json_twoa").html('<a href="list.html?id='+data.dogshop[7].id+'&kind_thing=dogshop"><img src="'+data.dogshop[7].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .doctor_json_twob").html('<a href="list.html?id='+data.dogshop[8].id+'&kind_thing=dogshop"><img src="'+data.dogshop[8].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .doctor_json_threea").html('<a href="list.html?id='+data.dogshop[9].id+'&kind_thing=dogshop"><img src="'+data.dogshop[9].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .doctor_json_threeb").html('<a href="list.html?id='+data.dogshop[10].id+'&kind_thing=dogshop"><img src="'+data.dogshop[10].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .life_json_onea").html('<a href="list.html?id='+data.dogshop[11].id+'&kind_thing=dogshop"><img src="'+data.dogshop[11].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .life_json_oneb").html('<a href="list.html?id='+data.dogshop[12].id+'&kind_thing=dogshop"><img src="'+data.dogshop[12].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .life_json_twoa").html('<a href="list.html?id='+data.dogshop[13].id+'&kind_thing=dogshop"><img src="'+data.dogshop[13].dog_src+'" alt="主体狗狗" /></a>')
			$(".main .life_json_twob").html('<a href="list.html?id='+data.dogshop[14].id+'&kind_thing=dogshop"><img src="'+data.dogshop[14].dog_src+'" alt="主体狗狗" /></a>')
		//猫猫
			$(".main .cat_main .doctor_json_onea").html('<a href="list.html?id='+data.catshop[0].id+'&kind_thing=catshop"><img src="'+data.catshop[0].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .doctor_json_oneb").html('<a href="list.html?id='+data.catshop[1].id+'&kind_thing=catshop"><img src="'+data.catshop[1].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .doctor_json_twoa").html('<a href="list.html?id='+data.catshop[2].id+'&kind_thing=catshop"><img src="'+data.catshop[2].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .doctor_json_twob").html('<a href="list.html?id='+data.catshop[3].id+'&kind_thing=catshop"><img src="'+data.catshop[3].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .doctor_json_threea").html('<a href="list.html?id='+data.catshop[4].id+'&kind_thing=catshop"><img src="'+data.catshop[4].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .doctor_json_threeb").html('<a href="list.html?id='+data.catshop[5].id+'&kind_thing=catshop"><img src="'+data.catshop[5].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .life_json_onea").html('<a href="list.html?id='+data.catshop[6].id+'&kind_thing=catshop"><img src="'+data.catshop[6].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .life_json_oneb").html('<a href="list.html?id='+data.catshop[7].id+'&kind_thing=catshop"><img src="'+data.catshop[7].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .life_json_twoa").html('<a href="list.html?id='+data.catshop[8].id+'&kind_thing=catshop"><img src="'+data.catshop[8].cat_src+'" alt="主体猫猫" /></a>')
			$(".main .cat_main .life_json_twob").html('<a href="list.html?id='+data.catshop[9].id+'&kind_thing=catshop"><img src="'+data.catshop[9].cat_src+'" alt="主体猫猫" /></a>')
		//小宠
			$(".tutu_main .hot_tutu .tutua").html('<a href="list.html?id='+data.tutushop[0].id+'&kind_thing=tutushop"><img src="'+data.tutushop[0].tutu_src+'" alt="主体小宠" /></a>')
			$(".tutu_main .hot_tutu .tutub").html('<a href="list.html?id='+data.tutushop[1].id+'&kind_thing=tutushop"><img src="'+data.tutushop[1].tutu_src+'" alt="主体小宠" /></a>')
			$(".tutu_main .hot_tutu .tutuc").html('<a href="list.html?id='+data.tutushop[2].id+'&kind_thing=tutushop"><img src="'+data.tutushop[2].tutu_src+'" alt="主体小宠" /></a>')
			$(".tutu_main .hot_tutu .tutud").html('<a href="list.html?id='+data.tutushop[3].id+'&kind_thing=tutushop"><img src="'+data.tutushop[3].tutu_src+'" alt="主体小宠" /></a>')
		//水族
			$(".shuizu_main .shuizu_one_left").html('<a href="list.html?id='+data.shuizushop[0].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[0].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_one_right").html('<a href="list.html?id='+data.shuizushop[1].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[1].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_two_left").html('<a href="list.html?id='+data.shuizushop[2].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[2].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_two_right").html('<a href="list.html?id='+data.shuizushop[3].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[3].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_three_left").html('<a href="list.html?id='+data.shuizushop[4].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[4].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_three_right").html('<a href="list.html?id='+data.shuizushop[5].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[5].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_four_left").html('<a href="list.html?id='+data.shuizushop[6].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[6].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_four_right").html('<a href="list.html?id='+data.shuizushop[7].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[7].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_five_left").html('<a href="list.html?id='+data.shuizushop[8].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[8].shuizu_src+'" alt="主体水族" /></a>')
			$(".shuizu_main .shuizu_five_right").html('<a href="list.html?id='+data.shuizushop[9].id+'&kind_thing=shuizushop"><img src="'+data.shuizushop[9].shuizu_src+'" alt="主体水族" /></a>')
		}
	})
