function Queue() {
	this.arr = [];
}

Queue.prototype.enqueue = function(arg) {
	this.arr[this.size()] = arg;
}

Queue.prototype.dequeue = function() {
	var popped = this.arr[0];
	this.arr = this.arr.slice(1, this.size());
	return popped;
}

Queue.prototype.size = function() {
	return this.arr.length;
}