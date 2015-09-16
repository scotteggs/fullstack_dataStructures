function Queue() {
	this.head = this.tail = 0
	this.memory = [];
	//this.arr = [];
}

Queue.prototype.enqueue = function(arg) {
	this.memory[this.tail++] = arg;
	//returns the value of the tail, assigning to arg, then increments tail
	//this.arr[this.size()] = arg;
}

Queue.prototype.dequeue = function() {
	if (this.size() === 0) return;
	return this.memory[this.head++];	

	// var popped = this.arr[0];
	// this.arr = this.arr.slice(1, this.size());
	// return popped;
}

Queue.prototype.size = function() {
	return this.tail - this.head;
	//return this.arr.length; (using array functions)
}