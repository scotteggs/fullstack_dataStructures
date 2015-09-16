function Hash () {
	this.numBuckets = 25;
	this.bucketArray = [];
};

function Data (key, value) {
	this.key = key;
	this.value = value;
}


Hash.prototype.set = function (key, value ) {
 if (typeof key !== 'string') {
 	throw new Error("Keys must be strings")
 }
	var bucket = this._hash(key);
	if(!this.bucketArray[bucket]) {
		this.bucketArray[bucket] = new LinkedList();
	}
	this.bucketArray[bucket].addToHead(new Data(key, value));
};


Hash.prototype.get = function (key) {
	var bucket = this._hash(key);
	return this.bucketArray[bucket].search(key).value;

};
Hash.prototype.hasKey = function (key) {
	var bucket = this._hash(key);
	if(this.bucketArray[bucket].search(key)) return true;
	return false;
};




Hash.prototype._hash = function (key) {

 var sum = 0;
 for(var i = 0; i < key.length; i++) {
   sum += key.charCodeAt(i)
 }
 return sum % this.numBuckets;
}





