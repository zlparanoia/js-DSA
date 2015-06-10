function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	var restr = "",
		i = 0,
		len = this.dataStore.length;
	for (; i < len; i++) {
		restr += this.dataStore[i] + "\n";
	}
	return restr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

// 1.模拟方块舞

function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers(males, females) {
	var names = read("dancers.txt").split("\n"),
		i = 0,
		len = names.length,
		dance,
		sex,
		name;

	for (; i < len; i++) {
		names[i] = names[i].trim();
	}
	for (; i < len; i++) {
		dancer = names[i].split(" ");
		sex = dancer[0];
		name = dancer[1];
		if (sex == "F") {
			femaleDancers.enqueue(new Dancer(name, sex));
		} else {
			maleDancers.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females) {
	while (!femals.empty() && !males.empty()) {
		person = femals.dequeue();
		person = males.dequeue();
	}
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
	console.log(femaleDancers.front().name);
}
if (!maleDancers.empty()) {
	console.log(maleDancers.front().name);
}

// 2.基数排序

function distribute(nums, queue, n, digit) {
	for (var i = 0; i < n; i++) {
		if (digit == 1) {
			queue[nums[i]%10].enqueue(nums[i]);
		} else {
			queue[Math.floor(nums[i] / 10)].equeue(nums[i]);
		}
	}
}

function collect(queues, nums) {
	var i = 0;
	for (var digit = 0; digit < 10; ++digit) {
		while (!queue[digit].empty()) {
			nums[i++] = queue[digit].dequeue();
		}
	}
}

function dispArray(arr) {
	for (var i = 0; i < arr.length; ++i) {
		console.log(arr[i] + " ");
	}
}

