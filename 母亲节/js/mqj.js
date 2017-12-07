	var videos = document.querySelector('.videos');	
	var Videosmanager = new Hammer.Manager(videos);	
	var Tap = new Hammer.Tap({
            taps: 1
		});

	Videosmanager.add(Tap);
	Videosmanager.on('tap', function(e) {
		if(video.paused){
			video.play()				          
			
		}else{
			video.pause()
		}

            bf.classList.toggle('bf2');
	});
	

var oIcomment = document.querySelectorAll('.comment');	
var oIfabulous = document.querySelectorAll('.fabulous');	

	
for(var i=0;i<oIfabulous.length;i++){
     oIfabulous[i].addEventListener("click",function(){
     	$(this).addClass("addfabulous")
     	$(this).next().addClass("spanaddfabulous")
     	this.nextSibling.innerHTML=Number(this.nextSibling.innerHTML)+1
     	
     })
} 
for(var i=0;i<oIcomment.length;i++){
     oIcomment[i].addEventListener("click",function(){
     	window.location.href="comment.html"
     	
     	
     })
} 
first.addEventListener("click",function(){   
     	window.location.href="comment.html"
     })
 