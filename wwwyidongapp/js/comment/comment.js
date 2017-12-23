     window.onload=function(){
		Ajax()
	   }
$("#btn").bind("touchend",function(){
	var txtN=$("#textarea").val();
	var data=new Date();
	var time=data.getMonth()+1+"/"+data.getDate()+"/"+ data.getHours().toString().padStart(2, '0')+":"+data.getMinutes().toString().padStart(2, '0')
	if(txtN.length>0){
    var spans=`<p class="osp">小名<span class="ospan">${time}</span></p>`;	
	var op=$("<p>"+txtN+"</p>").addClass("op");
     	op.prepend(spans);
     	$(".showMessage").prepend(op)
     	$("#textarea").val("")	
	  $.ajax({
		type:"post",
		url:"./js/comment.php",
		data:{
			nr:txtN,
			txt:"忘却，忘却",
			flag:1
		},
		success:function(data){
		}
	   });
	}	

})
function Ajax(){
	var data=new Date();
	var time=data.getMonth()+1+"/"+data.getDate()+"/"+ data.getHours().toString().padStart(2, '0')+":"+data.getMinutes().toString().padStart(2, '0')
	$.ajax({
		type:"post",
		url:"./js/comment.php",
		dataType:"json",
		data:{		
			flag:2,
		},
		success:function(data){
				$.each(data, function(v,k) {
					console.log(data[v].name)
		var spans=`<p class="osp">${data[v].name}<span class="ospan">${time}</span></p>`;	
	var op=$("<p>"+txtN+"</p>").addClass("op");
     	op.prepend(spans);
     	$(".showMessage").prepend(op)
     	$("#textarea").val("")	
			});
		}
	});
}




