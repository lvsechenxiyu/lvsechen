function Ndrag(id){
	Drag.call(this,id);//构造函数属性的绑定
}
console.log(Ndrag.prototype)

//属性因为写在构造函数里面，可以绑定，方法写在原型对象上面，只能继承
for(var i in Drag.prototype){
	//console.log(Drag.prototype[i]);可以打印整个函数体，那么，把这个函数体拷贝给新对象，是不是就继承
	Ndrag.prototype[i] = Drag.prototype[i];//通过循环遍历，得到父对象的方法，然后赋值给子对象的原型对象上面
}

console.log(Ndrag.prototype.fnMove)
//因为是在移动的时候判断是否超出边界，所以要写在onmousemove里面
//我们是通过调用fnMove方法，来实现移动
//那我们，在不改变原父对象方法的情况下，怎么改变呢？
//直接用子元素覆盖之前继承的父元素的方法即可
Ndrag.prototype.fnMove = function(e){
	var e = e||event;
	var left = e.clientX - this.disX;//获取鼠标距离盒子左边编剧
	var top  = e.clientY - this.disY;
	
	
	//控制边界
	if(left<0){
		left=0;
	}else if(left>document.documentElement.clientWidth - this.oBox.offsetWidth){
		left = document.documentElement.clientWidth - this.oBox.offsetWidth;
	}
	
	if(top<0){
		top = 0;
	}else if(top> document.documentElement.clientHeight - this.oBox.offsetHeight){
		top = document.documentElement.clientHeight - this.oBox.offsetHeight
	}
	
	
	this.oBox.style.left = left+'px';
	this.oBox.style.top = top + 'px';
	
}
