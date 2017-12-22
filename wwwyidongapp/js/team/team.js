$(".EWteamlist li").bind("touchend",function(e){
	e.preventDefault(); 
	console.log($(this).index())
})