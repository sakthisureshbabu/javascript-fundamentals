//1. Readable stream
// Access stream
const { Readable } = require('stream');

// Reading the data
const inStream = new Readable({
    read() { }
});

// Pushing the data to the stream
inStream.push("Name: ");
inStream.push("Sakthi Sureshbabu");

// Indicates no more data is left in the stream
inStream.push(null);

// Echoing data to the standard output
inStream.pipe(process.stdout);

// 2. Writable stream
const { Writable } = require('stream');

// whatever is passed in standard input is out streamed here.
const outStream = new Writable({
    write(chunk, encoding, callback = function(err) {
        if(err)
            console.log("Error occured", err);
        else
            console.log("Successfull");
    }) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(outStream);