$(function(){
	$(document).ready(function(){
		$dragBln1 = false;
		
		$(".main_image").touchSlider({
			flexible : true,
			speed : 200,
			btn_prev : $(".banner #btn_prev"),
			btn_next : $(".banner #btn_next"),
			paging : $(".banner .flicking_con a"),
			counter : function (e){
				$(".banner .flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
			}
		});
		
		$(".main_image").bind("mousedown", function() {
			$dragBln1 = false;
		});
		
		$(".main_image").bind("dragstart", function() {
			$dragBln1 = true;
		});
		
		$(".main_image a").click(function(){
			if($dragBln1) {
				return false;
			}
		});
		
		timer = setInterval(function(){
			$(".banner #btn_next").click();
		}, 5000);
		
		$(".banner").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				$(".banner #btn_next").click();
			},5000);
		});
		
		$(".main_image").bind("touchstart",function(){
			clearInterval(timer);
		}).bind("touchend", function(){
			timer = setInterval(function(){
				$(".banner #btn_next").click();
			}, 5000);
		});
		
		
	});
});

