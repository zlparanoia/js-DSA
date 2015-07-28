//二叉树的创建
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function BST() {
	this.root = null;
	this.insert = insert;
}

function show() {
	return this.data;
}

function insert(data) {
	var n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

//中序遍历（升序）
function inOrder(node) {
	if (!(node === null)) {
		inOrder(node.left);
		console.log(node.show());
		inOrder(node.right);
	}
}

//先序遍历
function preOrder(node) {
	if (!(node === null)) {
		console.log(node.show());
		preOrder(node.left);
		preOrder(node.right);
	}
}

//后序遍历
function postOrder(node) {
	if (!(node === null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show());
	}
}

//查找最小值
 function getMin() {
	var current = this.root;
	while (!(current.left === null)) {
		current = current.left;
	}
	return current.data;
}

//查找最大值
function getMax() {
	var current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

//查找给定值
function find(data) {
	var current = this.root;
	while (current !== null) {
		if (current.data == data) {
			return current.data;
		} else if (current.data < data) {
			current = current.right;
		} else {
			current = current.left;
		}
	}
	return null;
}

var nums = new BST();
nums.insert(2);
nums.insert(6);
nums.insert(9);
nums.insert(1);
inOrder(nums.root);
preOrder(nums.root);
postOrder(nums.root);

//快速排序
function qSort(arr) {
	if (arr.length === 0) {
		return [];
	}
	var left = [];
	var right = [];
	var num = arr[0];
	for (var i = 1, len = arr.length; i < len; i++) {
		if (arr[i] < num) {
			left.push(arr[i]);
		}
		else {
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(num, qSort(right));
}

//二分查找
function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while (lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		if (arr[mid] < data) {
			lowerBound = mid + 1;
		} else if (arr[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}
