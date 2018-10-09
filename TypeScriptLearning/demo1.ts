var a:number = 100;
console.log(a);

var ds:string[] = ["aaa", "bbb", "ccc"];

// Method 01
console.log("Method 01: javascript")
for (let index = 0; index < ds.length; index++) {
    console.log(ds[index]);
}
console.log("-------------------------");

// Method 02
console.log("Method 02: forEach");
ds.forEach(element => {
    console.log(element);
});
console.log("-------------------------");

// Method 03
console.log("Method 03: for .. in ..");
for (let index in ds) {
    if (ds.hasOwnProperty(index)) {
        console.log(ds[index]);
    }
}
console.log("-------------------------");

// Method 04
console.log("Method 04: for .. of ..");
for (let element of ds) {
    console.log(element);
}
console.log("-------------------------");