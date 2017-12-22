
window.onload=function(){
	var indexs=sessionStorage.getItem("index");
	console.log(indexs)
	var imgurl;
	 let newspage=function(data,index){ 
	 	let datap=data[index]
	 	imgurl=datap.imageUrls
  	return `<div class="hot-news">  	          
  		      <div class="new-page-list">
  		        <h4> ${datap.title}</h4>
  		        <p>${datap.posterScreenName}</p>
  		        <div>
  		           <p>${datap.content}</p>
  		           <div class="imageUrls">
  		         ${imgurl.map(i=>`<div><img src=${i}/></div>`)}</div> 		           
  		        </div>
  		      </div>
  		     
  	        </div>`
   }
       $("#new-contentpage").append(newspage(hotnews.data,indexs));
}

