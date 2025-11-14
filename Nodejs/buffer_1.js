// implement a buffer
let buff = new Buffer.alloc(5);
console.log(buff);

// equals() method - compares two buffers
let name_1 = new Buffer.alloc(4, "Name");
let name_2 = new Buffer.alloc(4, "Name");
console.log(new Buffer.from(name_1).equals(name_2));

// copy() method - compies the given number of bytes of a buffer
let buff_1 = new Buffer.alloc(5, "Geeks");
let name_3 = new Buffer.alloc(5, "Name");
buff_1.copy(name_3);
console.log(name_3.toString());

// length() - Return the length of a buffer object
let buff_2 = new Buffer.alloc(5, 'ABCDE');
console.log(buff_2.length);

// toString() - return a string form of a buffer object
let name_4 = new Buffer.alloc(3, "GFG");
console.log(name_4);
console.log(name_4.toString());

// toJSON() - returns a JSON form olf a buffer object
let myJson = new Buffer.alloc(10, {name: "GFG"});
console.log(myJson.toJSON());

// create buffer from a String - by default 'utf-8'
const buff_3 = new Buffer.from("Hello, world!!", 'utf-8');
console.log(buff_3);

// create an uninitialized buffer - buffer of specific size without initialization
const buff_4 = Buffer.allocUnsafe(10);
console.log(buff_4);

// write buffer
const buff_5 = new Buffer.alloc(20);
buff_5.write("Hello world!!", 'utf-8');
console.log(buff_5.toString());

// reading a buffer
const buffer = Buffer.from("Hello world!!", 'utf-8');
console.log(buffer);
console.log(buffer[0]);
