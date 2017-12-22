/*
	function getData(flag){
				$.ajax({
				type:"post",	
				data:{
					flag:flag,
				},
				url:"./js/app.php",
				success:function(data){
				  	console.log(data)
				  	txts=data
				  	let list=data.result.list;
	         	 	let list1=data.result.list[0];
	         	 	let list2=data.result.list[1];
	         	 	let list3=data.result.list[2];
	         	 	 let tr1=list1.tr 
	         	 	 let tr2=list2.tr 
	         	 	 let tr3=list3.tr
	         	 let obox=	 `<div class="team-list-arrangetimebox" id="team-list-arrangetimebox">        
				 <ul id="team-list-arrangetimex">
				    <p class="titles">${list1.title}</p>
				    ${tr1.map(addrs => `
				    <li class="team-list-arrangetimeli">
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player1logo}" /><span>${addrs.player1}</span></div>
				    <div><p class="vs">${addrs.time}</p><span>${addrs.score}</span></div>
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player2logo}" /><span>${addrs.player2}</span>
				    </div></li>
				     `).join('')}
				 </ul>
				     
		<ul id="ul">
         	<p class="titles">${list2.title}</p>		
				 ${tr2.map(addrs => `
				  <li class="team-list-arrangetimeli">
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player1logo}" /><span>${addrs.player1}</span></span></div>
				    <div><p class="vs">${addrs.time}</p><span>${addrs.score}</div>
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player2logo}" /><span>${addrs.player2}</span>
				    </div>
				  </li>
				     `).join('')}
		  </ul>
         	
         	<ul id="">
         	<p class="titles">${list3.title}</p>
				      ${tr3.map(addrs => `
				    <li class="team-list-arrangetimeli">
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player1logo}" />${addrs.player1}</div>
				    <div><p>${addrs.time}</p><span>${addrs.score}</div>
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player2logo}" /span><span>${addrs.player2}</span>
				    </div>
				 </li>
				     `).join('')}
			</ul>
				  </div>
				`
		 $(".team-list-arrangetime").append(obox);
				},     
				
			});
	}
		getData(2)*/
let tmpl=function(txts){
         	 	let list=txts.result.list;
         	 	let list1=txts.result.list[0];
         	 	let list2=txts.result.list[1];
         	 	let list3=txts.result.list[2];       	 	
         	 	 let tr1=list1.tr 
         	 	 let tr2=list2.tr 
         	 	 let tr3=list3.tr 
         	return  `<div class="team-list-arrangetimebox" id="team-list-arrangetimebox">
         
				 <ul id="team-list-arrangetimex">
				    <p class="titles">${list1.title}</p>
				    ${tr1.map(addrs => `
				    <li class="team-list-arrangetimeli">
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player1logo}" /><span>${addrs.player1}</span></div>
				    <div><p class="vs">${addrs.time}</p><span>${addrs.score}</span></div>
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player2logo}" /><span>${addrs.player2}</span>
				    </div></li>
				     `).join('')}
				 </ul>
				     
		<ul id="ul">
         	<p class="titles">${list2.title}</p>		
				 ${tr2.map(addrs => `
				  <li class="team-list-arrangetimeli">
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player1logo}" /><span>${addrs.player1}</span></span></div>
				    <div><p class="vs">${addrs.time}</p><span>${addrs.score}</div>
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player2logo}" /><span>${addrs.player2}</span>
				    </div>
				  </li>
				     `).join('')}
		  </ul>
         	
         	<ul id="">
         	<p class="titles">${list3.title}</p>
				      ${tr3.map(addrs => `
				    <li class="team-list-arrangetimeli">
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player1logo}" />${addrs.player1}</div>
				    <div><p>${addrs.time}</p><span>${addrs.score}</div>
				    <div class="team-list-arrangetimeshow"><img src="${addrs.player2logo}" /span><span>${addrs.player2}</span>
				    </div>
				 </li>
				     `).join('')}
			</ul>
				  </div>
				`        	
        }        	 
      $(".team-list-arrangetime").append(tmpl(txts));
 
 

   var timelistL=document.getElementById("timelistL");
   var timelistR=document.getElementById("timelistR");	
   var timelist=document.getElementById("timelist");		
   var arrangetime=document.getElementById("arrangetime");
   var arrangetimes=new Hammer(arrangetime);
   var teamlistarrangetimes=document.getElementById("team-list-arrangetimex");	
   teamlistarrangetimebox=document.getElementById("team-list-arrangetimebox");
    var n=1    
	var liwidth=$("#timelist li").width()
	var ulwidth=$("#team-list-arrangetimex").width()
			
		timelistR.addEventListener("touchend",function(e){
			n++
			if(n>=2){
				n=2
			}			
			timelist.style.left=-n*liwidth+"px";
			teamlistarrangetimebox.style.left=-n*ulwidth+"px";									
		})
		
		timelistL.addEventListener("touchend",function(e){
			n--
			if(n<=0){
					n=0
			}
			timelist.style.left=-n*liwidth+"px";			
			teamlistarrangetimebox.style.left=-n*ulwidth+"px";						
		})
			arrangetimes.on("swipeleft",function(e){
			n++
			if(n>=2){
				n=2
			}			
			timelist.style.left=-n*liwidth+"px";
			teamlistarrangetimebox.style.left=-n*ulwidth+"px";									
		})
		arrangetimes.on("swiperight",function(e){
			n--
			if(n<=0){
					n=0
			}
			timelist.style.left=-n*liwidth+"px";			
			teamlistarrangetimebox.style.left=-n*ulwidth+"px";						
		})
			
	