//  1.数组、字符去重  //
//数组：//
function uniqArray(arr) {
    var str = [];   // 新数组
    var obj = {};   // 创建一个空对象

    //for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
    for(var i = 0，len = arr.length; i < len;  i++) {    
         var key = arr[i];
         if(!obj[key]) {
              obj[key] = 1;
              str.push(arr[i]);
         }
    }
    return str;
}

//字符串：//
function uniqArray(arr) {
    var str = [];   // 新数组
    var obj = {};   // 创建一个空对象

    //for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。
    for(var i = 0，len = arr.length; i < len;  i++) {    
         var key = arr[i];
         if(!obj[key]) {
              obj[key] = 1;
              str.push(arr[i]);
         }
    }
    return str.join("");
}

// 2.字符重复 //
function repeat(str, n){
     return new Array(n + 1).join(str);
}
console.log(repeat("a",3));

// 3.找出第一个重复的字符 //
function strRepeat(str){
	var obj = {};
	for(var i = 0, len = str.length; i < str.length; i++) {
		var key = str[i];
		if(!obj[key]) {
			obj[key] = 1;
		} else {
			return str[i];
		}
	}
}
var str = [3,5,4,3];
alert(strRepeat(str));   //3

//  4.深度克隆 //
//判断对象类型
function isType(o) {
	if(o === null) {
		return "Null";
	} else if (o === undefined) {
		return "Undefined";
	} else {
		//截取对象类型
		return Object.prototype.toString.call(o).slice(8,-1);
	}
}
//深度克隆
function deepClone(obj) {
	//存放克隆的新对象
	var result;
	//存放变量的类型
	var type = isType(obj);
	//检测变量是对象还是数组
	if(type == "Object") {
		result = {};
	} else if (type == "Array") {
		result = [];
	} else {
		return obj;
	}
	//遍历原对象
	for(var key in obj) {
		//存放原对象每个属性的值
		var copy = obj[key];
		//检测原对象每个值的类型
		if(isType(copy) == "Array") {
			result[key] = arguments.callee(copy);   //调用自身
		} else if (isType(copy) == "Object") {
			result[key] = arguments.callee(copy);   //调用自身
		} else {
			result[key] = obj[key];
		}
	}
	return result;
}

// 5.实现一个简单的继承 //
function Animal(name){
     this.name = name;
}
Animal.prototype.getName = function(){
     return this.name;
};
function Dog(){}
Dog.prototype = new Animal("panda");
var dog = new Dog();
var n = dog.getName();
alert(n);       //panda

// 6.判断是否为IE浏览器，返回-1或者版本号 //
function isIE() {
    if(!+[1,]) {        //+[1,]在ie上==NaN, NaN永恒==false, !NaN永恒==true; +[1,]在非ie上==1,1==true,!1==false
         var agent = navigator.userAgent.toLowerCase();
         var vertion = /msie ([\d.]+)/.exec(agent);
         return vertion[1];
    } else {
         return -1;
    }
}

// 7.查找两个节点的最近一个共同父节点，可以包括自身
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){  //contains()：检测某个节点是不是另一个节点的后代，1是2的父节点
        return oNode1;
    }else if(oNode2.contains(oNode1)){  //2是1的父节点
        return oNode2;
    }else{
        return arguments.callee(oNode1.parentNode,oNode2); //1和2为同辈，1的父节点包含2
    }
}
// 8.提取额url参数
function getUrlParam(sUrl, sKey) {
	var params = sUrl.slice(sUrl.indexOf("?") + 1, sUrl.length),
		names = params.split("&"),
		nameArr,
		name,
		value,
		obj = {},
		i,
		temp,
		len = names.length;
	for (i = 0; i < len; i++) {
		nameArr = names[i].split("=");
		name = nameArr[0];
		value = nameArr[1];

		if (typeof obj[name] === "undefined") {
			
			obj[name] = value;
		} else if (!Array.isArray(obj[name])) {
			temp = obj[name];
			obj[name] = [];
			obj[name].push(temp, value);
		} else {
			obj[name].push(value);
		}
	}
	if (sKey === undefined) {
		return obj;
	} else {
		return obj[sKey] || "";
	}
}
console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe',"key"));

// 9.斐波那契数列，返回第几个数的值
function fibonacci(n) {
    if (n === 0 || n === 1) {
    	return n;
    } else {
    	return fibonacci(n-1) + fibonacci(n-2);
    }  
}
console.log(fibonacci(10));

// 10.获取字符串的长度
function strLength(s, bUnicode255For1) {
	var sLength = 0,
		i,
		len = s.length;
    if (bUnicode255For1) {
    	return s.length;
    } else {
    	for (i = 0; i < len; i++) {
    		if (s.charCodeAt(i) > 255) {
    			sLength += 2;
    		} else {
    			sLength += 1;
    		}
    	}
    }
    return sLength;
}
console.log(strLength('hello', true));

//11、完成foo()函数的内容，要求能够弹出对话框提示当前选中的是第几个单选框。
function foo() {
	var radios = document.getElementsByName("radio"),
		i,
		len = radios.length;
	for (i = 0; i < len; i++) {
		radios[i].onclick = function() {
			if (this.checked) {
				alert("the" + i + "selected");
			}
		};

	}
}
//12、字符串翻转功能
function reverse(str) {
	return str.split("").reverse().join("");
}
//13、全选(或者全不选)的所有指定名称的checkbox
function seleAll() {
	var all = document.getElementsByName("checkbox"),
		sub = document.getElementById("sub"),
		i,
		j,
		len = all.length;
	if (sub.value === "全选") {
		for (i = 0; i < len; i++) {
			all[i].checked = true;
			sub.value = "全不选";
		}
	} else {
		for (i = 0; i < len; i++) {
			all[i].checked = false;
			sub.value = "全选";
		}
	}
}
//14、写出简单描述html标签（不带属性的开始标签和结束标签）的正则表达式，
//并将以下字符串中的html标签去除掉 var str = "<div>这里是div<p>里面的段落</p></div>";
function deleteTag(str) {
	var re = /<\/?[a-z]+\/?>/gi;
	str = str.replace(re, "");
	return str;
}
//15、将文档中className有“test”的td标签背景色设为黄色
function changeBg() {
	var tds = document.getElementsByTagName("td"),
		i,
		len = tds.length;
	for (i = 0; i < len; i++) {
		(tds[i].className === "test") && (tds[i].style.background = "yellow");
	}
}
//16、用javascript实现控制一个文本框的输入字数限制，超出字数限制文本框飘红显示
function changeColor() {
	var content = document.getElementById("content");
	content.onkeyup = function() {
		(content.value.length > 10) && (content.style.border = "2px solid red");
	};
}
//17、使用Javascript打印出1-10000之间的所有素数
function printNum(start, end) {
	var i,
		j,
		flag = false,
		arr = [];
	if ((start === end) || (start > end)) {
		return;
	} else if ((start < 0) || (end < 0)) {
		return;
	} else {
		start = 2;
	}
	for (i = start; i < end; i++) {
		for (j = 2; j <= (i / 2); j++) { //最小倍数是2,如果不是素数的话，它的倍数肯定在(i/2)的范围内
			if ((i % j) === 0) {
				flag = true;
			}
		}
		(!flag) && (arr.push(i));
		(flag) && (flag = false);
	}
	return arr;
}
