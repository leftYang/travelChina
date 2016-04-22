// JavaScript Document
$(function(){
 var img=$("#bigBanner img");
 var num=img.size();
 var imgWidth=img.width();
 
 var imgParent=$("#bigBanner");
 imgParent.width(imgWidth*num);
 var imgParWidth=imgParent.width();
 var i=0 ;
 function eve(){
	 i++;
	imgParent.animate({"left":-(i*imgWidth)});
	$("#fra span").eq(i).addClass("ccc").siblings().removeClass("ccc");
	
	
	if(i == num){
		img.first().clone().appendTo(imgParent);
		$("#fra span").eq(0).addClass("ccc").siblings().removeClass("ccc");
		img=$("#imgBox img");
		imgParent.width(imgWidth*(num+1));
		
		imgParent.animate({"left":-(i*imgWidth)},function(){
			img.last().remove();
			imgParent.css("left","0");		
			i=0;
		});
	}	  
	}

var pp= setInterval(eve,2000);
	$("#fra span").hover(function(){
		$(this).addClass("ccc").siblings().removeClass("ccc");	
		
		clearInterval(pp);
		i=$(this).index();	
		imgParent.stop().animate({"left":-(i*imgWidth)});
	},function(){
		pp= setInterval(eve,2000);
		
	})
	
});


//near
$(function(){
	$(".nearList a").hover(function(){
		//$(this).addClass("cur").siblings().removeClass("cur");
		$(this).animate({"width":"300px"},300).parent().siblings().children().animate({"width":"188px"},300);	
		$(this).find("img").animate({"margin-left":"0"},300).end().parent().siblings().children().find("img").animate({"margin-left":"-112px"},300);
	});
	
});