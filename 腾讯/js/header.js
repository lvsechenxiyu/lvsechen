 var oheader=document.getElementById("new-nav");
 var oMust=document.getElementById("must");
 
		var Navlist=document.getElementById("new-nav-list");	
		var offsetL
		oheader.addEventListener("touchstart",function(e){
		  e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等 
		 offsetL=Navlist.offsetLeft;
        var x = e.touches[0].pageX; //页面触点X坐标        
		oheader.addEventListener("touchmove",function(e){	
			var lft=e.targetTouches[0].pageX-x
				Navlist.style.left=lft+offsetL+"px";					
		})
		oheader.addEventListener("touchend",function(e){
			offsetL=Navlist.offsetLeft;

			if(offsetL>=0){
					Navlist.style.left=0+"px";
				}
			if(offsetL<-1765){
					Navlist.style.left=-1765+"px";
				}
			
		})
			
	})
		
	
$("body").on("touchstart", function(e) {
    e.preventDefault();
    startY = e.originalEvent.changedTouches[0].pageY;
});

$("body").on("touchmove", function(e) {
    e.preventDefault();
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    Y = moveEndY - startY;
if  (Y>0){
//      则说明手指是从上往下划动
   $("header").removeClass("addheaderstyle") ;
   $("body").removeClass("addbodystyle")
   }
if  (Y<-100) {
//      则说明手指是从下往上划动
   $("header").addClass("addheaderstyle")     
   $("body").addClass("addbodystyle")     
    }

})
	
	
	var newnavlist=$("#new-nav-list").children("li")
	$.each(newnavlist, function(v,k) {
	newnavlist[v].addEventListener("tap",function(e){
		e.preventDefault()
		$(this).children().addClass("newFa")
		$(this).siblings().children().removeClass("newFa")
	  })		
	});
		
	