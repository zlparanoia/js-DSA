function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;
}

function append(elment) {
	this.dataStore[this.listSize++] = elment;
}

function remove(elment) {
	var p = this.find(elment);
	if (p > -1) {
		this.dataStore.splice(p, 1);
		this.listSize--;
		return true;
	} else {
		return false;
	}
}

function find(elment) {
	for (var i = 0, len = this.dataStore.length; i < len; i++) {
		if (this.dataStore[i] == elment) {
			return 1;
		}
	}
	return -1;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(element, after) {
	var p = this.find(after);
	if (p > -1) {
		this.dataStore.splice(p + 1, 0, element);
		++this.listSize;
		return true;
	} else {
		return false;
	}
}

function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = pos = 0;
}

function contains(element) {
	for (var i = 0, len = this.dataStore.length; i < len; i++) {
		if (this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = listSize - 1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize - 1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

//1.增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有
//  元素时才执行插入操作。这里的大于有多重含义，对于数字，她是指数值上
//  的大小；对于字母，他是指在字母表中出现的先后顺序。

function insertMax(element) {
	if (typeof element == "number") {
		var nums = this.dataStore.sort(function(a, b) {
			return a - b;
		};)
		if (element > nums[this.end]) {
			this.insert(element, nums[this.end]);
			return true;
		}
	} else (typeof element == "string") {
		var words = this.dataStore.sort();
		if (element > words[this.end]) {
			this.insert(element, words[this.end]);
			return true;
		}
	} else {
		return false;
	}
}

//2.增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有
//  元素时才执行插入操作。

function insertMin(element) {
	if (typeof element == "number") {
		var nums = this.dataStore.sort(function(a, b) {
			return a - b;
		};)
		if (element < nums[this.front]) {
			this.insert(element, nums[this.end]);
			return true;
		}
	} else (typeof element == "string") {
		var words = this.dataStore.sort();
		if (element < words[this.front]) {
			this.insert(element, words[this.end]);
			return true;
		}
	} else {
		return false;
	}
}

//3.创建Person类,该类用于保存人的姓名和性别信息。创建一个至少包含10个
//  Person对象的列表。写一个函数显示列表中所有拥有相同性别。

function Person(name, sex) {
	this.name = name;
	this.sex = sex;
}

var person1 = new Person("lu","b");
var person2 = new Person("ju","g");
var person3 = new Person("lo","b");
var person4 = new Person("lu","b");
var person5 = new Person("sam","b");
var person6 = new Person("loy","g");
var person7 = new Person("pu","g");
var person8 = new Person("pop","n");
var person9 = new Person("lan","n");
var person10 = new Person("lpo","g");

var names = new List(),
	blist = [],
	glist = [];

names.append(person1);
names.append(person2);
names.append(person3);
names.append(person4);
names.append(person5);
names.append(person6);
names.append(person7);
names.append(person8);
names.append(person9);
names.append(person10);

for(var i = 0, len = names.length(); i < len; i++) {
	if (names.dataStore[i].sex == "b") {
		blist.push(names.dataStore[i].name);
	} else {
		glist.push(names.dataStore[i].name);
	}
}

console.log("男：" + blist);
console.log("女：" + glist);









