var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction:false,
    },
    navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	    },
});
//window.onload=function(){
//	$(".hotnews").remove();
//	alert("aaa")
//		$.ajax({
//				type:"post",	
//				data:{
//					flag:1,
//				},
//				url:"./js/app.php",
//				success:function(data){
//					console.log(data.data)
//						 let Hotnews=function(data){ 		  	
//			  	return `<div class="hotnews">
//			  	         ${data.map(addrs => `
//				         <div class="hotnews-list">
//				            <h4>${addrs.title}</h4>
//				            <div class="hotnews-listsb">
//					             <ul class="hotnews-listsb1">
//					              ${addrs.imageUrls.map(i=>`<li class="hotnews-listli"><img src=${i}/>`)}
//					             </ul>
//					            <div class="hotnews-listtxt">
//					               ${addrs.content}
//					            </div>
//				            </div>
//				             
//				            <div class="hotnews-listper">
//				               <div>
//				                <span class="hotnews-listtime">${addrs.publishDateStr}<span>
//				               </div>
//				               <div>
//				               <span class="iconfont">&#xe67d;</span>
//				               <i class="iconfont">&#xe613;</i>
//				               </div>
//				              </div>
//				         </div>
//			  		`).join('')} 	             	
//			  	  </div>`
//			  }
//     $("#section-news-mail").append(Hotnews(data.data));
//					
//					
//			   }
//			});
//		$("#section-news-mail").on("click",".hotnews-list",function(e){
//		e.preventDefault()
// console.log($(this).index())
//		sessionStorage.setItem("index", $(this).index());					 
//		window.location.href="newpege.html"
//})	
//}

					 let Hotnews=function(data){ 		  	
			  	return `<div class="hotnews">
			  	         ${data.map(addrs => `
				         <div class="hotnews-list">
				            <h4>${addrs.title}</h4>
				            <div class="hotnews-listsb">
					             <ul class="hotnews-listsb1">
					              ${addrs.imageUrls.map(i=>`<li class="hotnews-listli"><img src=${i}/>`)}
					             </ul>
					            <div class="hotnews-listtxt">
					               ${addrs.content}
					            </div>
				            </div>
				             
				            <div class="hotnews-listper">
				               <div>
				                <span class="hotnews-listtime">${addrs.publishDateStr}<span>
				               </div>
				               <div>
				               <span class="iconfont">&#xe67d;</span>
				               <i class="iconfont">&#xe613;</i>
				               </div>
				              </div>
				         </div>
			  		`).join('')} 	             	
			  	  </div>`
			  }
       $("#section-news-mail").append(Hotnews(hotnews.data));
					
	$("#section-news-mail").on("click",".hotnews-list",function(e){
		e.preventDefault()
   console.log($(this).index())
		sessionStorage.setItem("index", $(this).index());					 
		window.location.href="newpege.html"
})
	

  