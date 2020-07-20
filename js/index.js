$(document).ready(function(){
		//导航鼠标事件
		$(".nav li").mouseenter(function(){
			$(this).addClass("navhover").siblings("li").removeClass("navhover");
		});
		$(".nav").mouseleave(function(){
			$(".nav li:first").addClass("navhover").siblings("li").removeClass("navhover");
		});
	// 	$(".ban-yqbox li").mouseover(function(){
	// 	var index=$(this).index();
	// 	$(".ban-img li").eq(index).show().siblings().hide();
	// 	$(this).addClass("on").siblings().removeClass("on");
	// });
});
		