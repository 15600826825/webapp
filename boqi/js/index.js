var count = selIndex = newIndex = startIndex = 0;
var selLeft = $(".box-left").eq(0);
var selRight = $(".box-right").eq(0);
var newLeft = $(".box-left").eq(1);
var newRight = $(".box-right").eq(1);
var focusLeft = $(".box-left").eq(2);
var focusRight = $(".box-right").eq(2);
function getData(like, leftBox, rightBox, str){
  var nowIndex = 0;
  if(str == "selIndex"){
    nowIndex = selIndex;
  }else{
    nowIndex = newIndex;
  }
  $.ajax({
  	type:"get",
  	url:"json/pets.json",
  	success:function(data){
  	  var pets = data.pets;
  	  var pet = "";
  	  $.each(pets, function(index, val) {
  	  	if(count < 10 && index == nowIndex){
  	  	  nowIndex++;
  	  	  if(val.like >= like){
  	  	    count++;
  	  	    pet = "<div class='pet'><img src='"
  	  	                +val.img+"'><p>"
  	  	                +val.cont+"</p><div class='host'><p><img src='"
  	  	                +val.usericon+"'><span>"
  	  	                +val.username+"</span></p><p><i class='iconfont icon-xin like' data-id='"
  	  	                +val.num+"'></i><span>"
  	  	                +val.like+"</span></p></div></div>";
  	  	    if(leftBox.outerHeight() <= rightBox.outerHeight()){
  	  	      leftBox.append(pet);
  	  	    }else{
  	  	      rightBox.append(pet);
  	  	    }
  	  	  }
  	  	}
  	  });
  	  count = 0;
  	  if(str == "selIndex"){
        selIndex = nowIndex;
      }else{
        newIndex = nowIndex;
      }
  	}
  });
}
var winHeight = $(window).height();
function getMoreData(box, like, leftBox, rightBox, str){
$(window).scroll(function(){
  var boxTop = box.offset().top - $(document).scrollTop();
  var pos = winHeight - boxTop - box.outerHeight();
  if(pos > -10){
    getData(like, leftBox, rightBox, str);
  }
})
}
getData(15, selLeft, selRight, "selIndex");
getMoreData($(".selection"), 15, selLeft, selRight, "selIndex");

//打开搜索页
$("#search-txt").focus(function(){
  $(".search-page").fadeIn().siblings().hide();
})
//清空搜索框
$("#clear").click(function(){
  $("#ipt-txt").val("").attr("placeholder", "").focus();
})
//关闭搜索页
$("#cancle").click(function(){
  $(".search-page").hide().siblings().show();
})

//tab切换
$("section span").click(function(){
  var index = $(this).index();
  $(this).addClass("active-span").siblings().removeClass("active-span");
    $(".main>div").eq(index).show(function(){
      if(index == 1){
        getData(0, newLeft, newRight, "newIndex");
        getMoreData($(".new"), 0, newLeft, newRight, "newIndex");
      }
    }
  ).siblings().hide();
})

//点赞
$(".main>div").delegate(".like", "click", function(){
  $(this).css("color", "#FF5321");
  var next = $(this).next();
  console.log(next)
  next.html(next.html()*1 + 1);
/*var likeStr = localStorage.getItem("likes");
  var newId = $(this).data("id");
  if(likeStr){
    if (likeStr.split("|").indexOf(newId)) {
      likeStr += "|" + newId;
    }
  }else{
    likeStr = newId;
  }
  localStorage.setItem("likes", likeStr);*/
})
