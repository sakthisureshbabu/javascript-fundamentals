// Truthy and falsy value: falsy - 0, null, undefined
if(null)
    console.log("hello")
else
    console.log("bye");

console.log(2+"2");
console.log(2*"2", "2"*2);

// Program 2
for(let i=1;i<=3;i++){
    console.log("Hello");
}

// Program 3
for(let i=5; i>=1; i--) {
    console.log(i);
}

// program 4
// table of 2
for(let i=2; i<=20; i = i+2) {
    console.log(i);
}

// program 5
// break statement with for loop
for(let i=1; i<=5; i++) {
    if(i==3) {
        break
    }
    console.log(i);
}

// program 6
// continue with for loop
for(let i=1; i<=5; i++) {
    if(i==3)
        continue
    console.log(i);
}

// program 7
// while loop
let i=1;
while(i<=5) {
    console.log(i);
    i++;
}

// program 8
let i2 = 1
while(i2<=3) {
    console.log("Hello");
    i2++;
}

// program 9
// break statement with while loop
let i3 = 1
while(i3 <= 5) {
    console.log(i3);
    if(i3 == 3)
        break;
    i3++;
}

// program 10
// continue with while loop
let i4 = 1;
while(i4 <= 5) {
    if(i4 == 3) {
        i4++;
        continue;
    }
    console.log(i4);
    i4++;
}