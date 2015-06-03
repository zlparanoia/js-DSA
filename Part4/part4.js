function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function length() {
	return this.top;
}

function clear() {
	return this.top = 0;
}

// 1.将数字转化为二至九进制

function mulBase(num, base) {
	var s = new Stack();
		converted = "";
	while (num > 0) {
		s.push(num % base);
		num = Math.floor(num / base);
	}
	while (s.length() > 0) {
		converted += s.pop();
	}
	return converted;
}

// 2.判断给定字符串是否是回文

function isPalindrome(word) {
	var s = new Stack(),
		str = "",
		i;
	for (i = 0, len = word.length; i < len; i++) {
		s.push(word[i]);
	}
	while (s.length() > 0) {
		str += s.pop();
	}
	if (word === str) {
		return true;
	} else {
		return false;
	}
}

// 3.使用栈模拟递归过程

function fact(n) {
	var s = new Stack();
		product = 1;
	while (n > 1) {
		s.push(n--);
	}
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

// 4.判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。

function match(str) {
	var s = new Stack(),
		i,
		j;
	for (i = 0, len = str.length; i < len; i++) {
		(str[i] === "(") && (s.push(str[i]));
		if (str[i] === ")") {
			if (s.length() > 0) {
				s.pop();
			} else {
				return i;
			}
		}
	}
	if (s.length() === 0) {
		return true;
	} else {
		for(j = 0, le = str.length; j < le; j++) {
			if (str[j] === "(") {
				return j;
			}
		}
	}
}




