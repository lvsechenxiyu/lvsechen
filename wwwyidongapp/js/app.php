<?php

	 header('Content-Type:text/json;charset=utf-8');
	 header("Access-Control-Allow-Origin:*");
	 $flag = $_POST['flag'];
	 if($flag==1){
	 	     echo file_get_contents("http://120.76.205.241:8000/post/qqsport?baid=62&apikey=4v16Nwu8cgSQsA7Xd6UNN2BnS98uQmdjga0NPeCassPv7emDwnhiFNZRoMuK8n9P");
	 };
	 if($flag==2){
	 	     echo file_get_contents("http://op.juhe.cn/onebox/basketball/nba?key=67042f20be36c752c25062bbaff4ce30");
	 };	 	 
?>