//获取某个元素的样式
/*

 * 
 * obj 元素
 * attr css属性
 * */
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr]; //针对IE
	} else {
		return getComputedStyle(obj)[attr];
	}
}

//获取随机数
function getRandom(min, miax) {
	if(min > max) {
		var temp = max;
		max = min;
		min = temp;
	}
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//封装匀速运动完美版

function startMove(obj, attr, speed, iTarget) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		var attrValue = parseInt(getStyle(obj, attr))
		if(Math.abs(iTarget - attrValue) <= Math.abs(speed)) {
			//如果元素的左边距小于 等于 速度  那么 元素的左边距等于想要到达的距离
			obj.style[attr] = iTarget + "px";
			clearInterval(timer)
		} else {
			//每0.002秒  元素的左边距 = 元素的左边距加 速度
			obj.style[attr] = attrValue + speed + "px";
		}
	}, 20)
}

function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr]; //针对IE
	} else {
		return getComputedStyle(obj)[attr];
	}
}

//缓冲运动 opacity
function easeMove(obj, attr, speed, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var attrValue = getStyle(obj, attr);
		//三目运算
		attrValue = attr == "opacity" ? attrValue * 100 : parseInt(attrValue);
		var speedEnd = (iTarget - attrValue) / speed;
		speedEnd = speedEnd > 0 ? Math.ceil(speedEnd) : Math.floor(speedEnd);
		if(attrValue == iTarget) {
			clearInterval(obj.timer);
		} else {
			if(attr == "opacity") {

				obj.style.opacity = (attrValue + speedEnd) / 100;
			} else {
				obj.style[attr] = attrValue + speedEnd + "px";
			}
		}
	}, 20);
}


//随机颜色
function getNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + 1);
}

function getColor() {
	var r = getNumber(0, 255);
	var g = getNumber(0, 255);
	var b = getNumber(0, 255);
	var colorString = "rgb(" + r + ", " + g + ", " + b + ")";
	return colorString;

}


//滚轮事件封装完美版
function changeStyle(obj, down) {
	if (down) {
		obj.style.width = oDiv1.offsetWidth + 1 + "px";
		obj.style.height = oDiv1.offsetHeight + 1 + "px";
	} else {
		obj.style.width = oDiv1.offsetWidth - 1 + "px";
		obj.style.height = oDiv1.offsetHeight - 1 + "px";
	}
}
	function mouseWheel(obj, fn) {
		var isFireFox = window.navigator.userAgent.indexOf("FireFox") > 0;
		//绑定相同的响应事件（函数）
		if (isFireFox) {
			//火狐浏览器绑定滚轮事件
			obj.addEventListener("DOMMouseScroll", progress, false);
		} else {
			obj.onmousewheel = progress;
		}
		function progress(ev) {
			var ev = ev || window.event;
			var down = true; //记录滚轮方向  默认向上
			console.log(ev.detail)
			//ev.detail 火狐获取滚轮滚动系数
			if (ev.detail) {
				//小于0  页面向下  改变down记录的状态
				if (ev.detail < 0) {
					down = false;
				}
			} else {
				//非火狐  大于0  页面向下
				if (ev.wheelDelta > 0) {
					down = false;
				}
			}
			//fn changeStyle(obj,down)
			fn(obj, down);
		}
	}



//封装ajax  get请求
function ajax_get(url, callback) {
	var xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XXMLHTTP");
	}

	xhr.open("get", url, true);
	xhr.send();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				callback(xhr.responseText);
			}

		}
	}


}
//封装ajax  post请求
function ajax_post(url,args,callback) {
	var xhr = null;
	if(window.XMLHttpRequest)
	{
		xhr = new XMLHttpRequest()
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.open("post",url,true);
	//设置请求头
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	//post请求参数包
	xhr.send(args);

	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			callback(xhr.responseText);
		}
	}
}

//时间戳转化为 时间的封装函数

function getLocalTime(nS) {
	return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}

