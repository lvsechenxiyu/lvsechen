//面向对象编程，第一个事情，肯定得有构造函数
	//就是为了代码的复用性
	function Drag(id){
		this.oBox = document.getElementById(id);//获取用户传进来的ID，然后根据ID获取页面元素，把页面元素存进this.oBox;
		this.disX = 0;//默认X坐标
		this.disY = 0;//默认Y坐标
		var _this = this;//将我们的实例化对象用_this存起来，方便后面调用
		this.oBox.onmousedown=function(){//传进来的DIV触发鼠标按下事件
			_this.fnDown();//鼠标按下去之后，执行按下去的操作
		}
		
	}
	//把鼠标按下的操作，绑定到原型对象上面去
	Drag.prototype.fnDown=function(e){
		var e = e||event;//获取event事件
		this.disX = e.clientX - this.oBox.offsetLeft;////鼠标距离盒子左边的距离
		this.disY = e.clientY - this.oBox.offsetTop;////鼠标距离盒子上边的距离
		
		var _this = this;//将当前元素存为_this；
		document.onmousemove=function(){
			_this.fnMove();
		}
		document.onmouseup=function(){
			_this.fnUp();
		}
	}
	Drag.prototype.fnMove=function(e){
		var e = e||event;
		this.oBox.style.left = e.clientX - this.disX+'px';//鼠标X位置-鼠标距离盒子边的距离，得出盒子距离网页边框的距离
		this.oBox.style.top = e.clientY - this.disY+'px';
	}

	Drag.prototype.fnUp=function(){
		document.onmousedown = null;
		document.onmousemove = null;
	}
	

//第一件事情：创建一个构造函数，初始化所有属性，有哪些属性？元素、X坐标、Y坐标
//第二步，触发down事件，则执行down函数
//第三步，把down函数绑定在Drag原型上面，方便继承
//第四步，直接调用原型上面的down事件就可以了


