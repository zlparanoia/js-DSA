//  1.数组、字符去重  //
数组：
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

字符串：
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
