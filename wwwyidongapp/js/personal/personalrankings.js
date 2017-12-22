 let Ranking=function(data){	
	return `<div class="tranking">
	            ${data.map(addrs => `		     
	         <div class="tranking-eastwest">
	                <div class="serial">			          				         
				         <span>${addrs.serial}</span>				          
		            </div>
			        <div class="ranking-personallogo">			            
				          <img src=${addrs.badge} />
				          <span>${addrs.name}</span>				          
		            </div>
		            <div>			            				         
				         <span>${addrs.wins}</span>				          
		            </div>
		            <div>			            				         
				         <span>${addrs.losses}</span>				          
		            </div>
	         </div>
		`).join('')} 	            
	
	         </div>`
}
        $(".ranking-personaleast").append(Ranking(pm[1].east));            $(".ranking-personalwest").append(Ranking(pm[1].west));
        
$(".ranking-nav div").bind("touchend", function (e) { 
	$(this).addClass("ranking-navaddbg").siblings().removeClass("ranking-navaddbg")
});

$(".ranking-show div").bind("touchend", function (e) { 
	$(this).addClass("addrangkingbg").siblings().removeClass("addrangkingbg")
});
