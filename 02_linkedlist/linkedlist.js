function LinkedList() {
	this.head = undefined;
	this.tail = undefined;
}

LinkedList.prototype.addToTail = function(value) {
	var node = new Node(value);

	if (this.tail) {
		node.previous = this.tail;
		this.tail.next = node;
	}
	this.tail = node;
	if (!this.head) {
		this.head = node;
	}
	
}

LinkedList.prototype.addToHead = function(value) {
	var node = new Node(value);
	if(this.head) {
		node.next = this.head;
		this.head.previous = node;
	}
	this.head = node;
	if (!this.tail) {
		this.tail = node;
	}
}

LinkedList.prototype.removeHead = function() {
	if (this.head) {
		var oldHead = this.head.value;
		this.head = this.head.next;
		if (this.head) {
			this.head.previous = null;
		}
	}
	if (this.head === null) {
		this.head = undefined;
		this.tail = undefined;
	}
	return oldHead;
}

LinkedList.prototype.removeTail = function() {
	if (this.tail) {
		var oldTail = this.tail.value;
		this.tail = this.tail.previous;
		if (this.tail) {
			this.tail.next = null;
		}
	}
	if (this.tail === null) {
		this.head = undefined;
		this.tail = undefined;
	}
	return oldTail;
}

LinkedList.prototype.search = function(param) {


	var currentNode = this.head;
	while(currentNode !== null) {
		if (typeof param === 'string') {
			if (typeof currentNode.value === 'string' && currentNode.value === param) {
				return currentNode.value;
			}
			if (typeof currentNode.value === 'object') {
				for (var key in currentNode.value) {
					if (currentNode.value[key] === param) {
						return currentNode.value;
					}
				}
			}
		}
		if (typeof param === 'function') {
			if (param(currentNode)) {
				return currentNode.value;
			}
	 	}
		currentNode = currentNode.next;
	}
	return null;
}

function Node(value) {
	this.value = value;
	this.next = null;
	this.previous = null;
}













