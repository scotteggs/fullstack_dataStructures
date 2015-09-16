function BinarySearchTree (value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function traverse (value, currentTree) {
	if(value < currentTree.value) {
		return currentTree.left;
	} 
	return currentTree.right;
}

BinarySearchTree.prototype.insert = function (newVal) {
	var node = new BinarySearchTree (newVal);
	var _insert = function (currentTree, newTree) {
		var nextNode = traverse(newTree.value, currentTree);
		if(!nextNode) {
			if(newTree.value < currentTree.value) {
				currentTree.left = newTree;
			} else {
				currentTree.right = newTree;
			}
		} else {
			_insert(nextNode, newTree);
		}
	};


	_insert(this, node);
};



BinarySearchTree.prototype.contains = function (value) {
	//var _contains = function (value, tree) {
		if (value === this.value) return true;
		var nextNode = traverse(value, this);
		if (!nextNode) {
			return false;
		}
		return nextNode.contains(value);

};



BinarySearchTree.prototype.depthFirstForEach = function (func) {
	func(this.value)
	if(!this.left && !this.right) {
	} else if (this.left) {
		this.left.depthFirstForEach(func);
		this.right.depthFirstForEach(func);
	} else {
		this.right.depthFirstForEach(func);
	}

};
BinarySearchTree.prototype.breadthFirstForEach = function () {};
BinarySearchTree.prototype.size = function () {
	if(!this.left && !this.right) {
		return 1;
	} else if (!this.left) {
		return 1 + this.right.size();
	} else if (!this.right) {
		return 1 + this.left.size();
	} else {
		return 1 + this.left.size() + this.right.size();
	}

};