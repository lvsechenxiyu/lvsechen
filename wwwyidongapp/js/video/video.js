	var videos = document.querySelector('.videos');	
	var Videosmanager = new Hammer.Manager(videos);	
	var Tap = new Hammer.Tap({
            taps: 1
		});

	Videosmanager.add(Tap);
	Videosmanager.on('tap', function(e) {
		if(video.paused){
			video.play()				          
			$("#bf").addClass("bf2")
		}else{
			video.pause()
			$("#bf").removeClass("bf2")			 
		}
	});
	document.getElementById("video").addEventListener("ended", function(){
			$("#bf").removeClass("bf2")		
	});

var oDiv
for(let i=0;i<videotext.length;i++){
	oDiv=`<div class="video-list">
	          <div class="video-listsub"><img src=${videoimg[i]}/></div>
	          <p>${videotext[i]}</p>
	         </div>`
  $("#video-nav").append(oDiv)	
  }

$(".video-list").bind("touchend",function(e){
	e.preventDefault();	
	$("#video").attr("src",Videoss[$(this).index()])
})
var flag=true
$("#video-nav").on("click","#video-mustlist",function(){
	let h=($(".video-list").height()+10);
	
	let top=Math.ceil($(".video-list").length/3)*($(".video-list").height()+17);
	if(flag==true){
		flag=false
	}else{
		flag=true
	}
	if (flag==false){
		$(this).html("<span>收起</span><span class='iconfont'>&#xe685;</span>")
		$("#video-nav").css({"height":top})
	}else{
		$(this).html("<span>点击加载更多</span><span class='iconfont'>&#xe66d;</span>")
		$("#video-nav").css({"height":"320px"})
	}
	
})