  
//let arr= $(".hotnews-listtime").text().substring(0,10)
 


//$(".hotnews-listtime").html(arr)

//if($(".hotnews-listli img").attr("src","undefined")){
//	console.log($(this).parent())
//}

//$(".hotnews-list").bind("touchstart",function(e){
//		sessionStorage.setItem("index", $(this).index());		
//		$(".hotnews-list").bind("touchend",function(e){
//			 e.preventDefault();
//		 window.location.href="newpege.html"
// })
//})
	$(".hotnews-list").on("click",function(e){
			 e.preventDefault();
		sessionStorage.setItem("index", $(this).index());					 
		 window.location.href="newpege.html"
})
window.onload=function(){	
	if($(".hotnews-listsb1 li").length==1){
		$(this).parent().addClass("addhotnews-listsb")
	}
}
