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
