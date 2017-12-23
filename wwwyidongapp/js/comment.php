<?php
   /*前端麻烦传两个参数过来，一个book表示书名，一个flag表示是添加书籍还是查询所有书本*/
	/*flag==1，则插入数据，flag==2则查询所有书本，flag==3则删除书本*/
	$us = $_POST['txt'];//想要添加或者删除的书本的名字
	$txt = $_POST['nr'];
	$flag = $_POST['flag'];//分辨传过来的参数是注册还是登录，值为0或者1
	//PHP连接数据库
	
	//第一步：实例化数据库对象
	$sql = new mysqli();
	
	//第二步：连接数据库
	//1.主机名	2.账号	3.密码（没有也放一个空）	4.数据库名字
	$sql -> connect('localhost','lvsechen','123456','lvsechen');
	
	//第三步：设置字符编码
	$sql -> set_charset('utf8');
	
	
	if($flag==1){//如果传过来的flag参数为1，则表示添加书本，那么就执行添加方法
		
		//执行数据库语句，将查询结构用$res存起来
		//在PHP里面，拼接字符串，不用+，用.
		$res = $sql -> query("INSERT INTO `lvsechen`.`comment` (`names`, `txts`) VALUES ('".$us."', '".$txt."')");
		//上面这句话执行完之后，就表示已经把数据插入数据库了		
		
	}else if($flag==2){
		$res = $sql -> query("SELECT * FROM `comment`");
		//上面这句话执行完，就表示已经从数据库查询完毕，并且，数据库会返回你的查询结果
		//数据库返回的结果，是一个集合，无法使用，所以，我们要遍历，并且取出来
        $content=array();
		while($arr = $res -> fetch_array()){
            $content[] = $arr;
        }
		echo json_encode($content);		
	}
?>