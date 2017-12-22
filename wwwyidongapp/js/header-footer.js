
$("#h-nav-list li").bind("touchend", function (e) {
    e.preventDefault(); 
	$(this).addClass("acolor").siblings().removeClass("acolor")
});
$("#arrangs").bind("touchend",function(){
	
	 window.location.href="arrange.html"
})
$("#rangking").bind("touchend",function(){
	 window.location.href="Personalrankings.html"
})
$("#newvideos").bind("touchend",function(){
	 window.location.href="video.html"
})
$("#AllTeam").bind("touchend",function(){
	 window.location.href="team.html"
})
$("#new").bind("touchend",function(){	
	 window.location.href="index.html"
})
$("#back").bind("touchend",function(){	
	 window.history.go(-1)
})
$("#next").bind("touchend",function(){	
	 window.history.go(1)
})


