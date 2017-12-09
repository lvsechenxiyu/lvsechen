 var oHot=document.getElementById("s-head-hot");
		var olist=document.getElementById("list");
		var lists=olist.getElementsByTagName("li");		
		var n=0
		$("#s-head-hot").on("swipeLeft",function(){
			clearInterval(times)
			n++
			if(n>lists.length-1){
				n=lists.length-1
			}
			olist.style.webkitTransform="translate3d(-"+n*25+"%,0,0)"
			$(".s-head-hotS").children().eq(n).addClass("addspanstyle").siblings().removeClass("addspanstyle")
		})
		$("#s-head-hot").on("swipeRight",function(){
			clearInterval(times)			
			n--
			if(n<0){
				n=0
			}
			olist.style.webkitTransform="translate3d(-"+n*25+"%,0,0)"
			$(".s-head-hotS").children().eq(n).addClass("addspanstyle").siblings().removeClass("addspanstyle")
		})
	var times=setInterval(function(){
			n++
			if(n>lists.length-1){
				n=0
			}
$(".s-head-hotS").children().eq(n).addClass("addspanstyle").siblings().removeClass("addspanstyle")
			
		olist.style.webkitTransform="translate3d(-"+n*25+"%,0,0)"			
		},2000)
	
$("#must").click=function(){
	
	window.location.href="newnav.html";
}
	
