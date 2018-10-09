var a = 100;
console.log(a);
var ds = ["aaa", "bbb", "ccc"];
// Method 01
console.log("Method 01: javascript");
for (var index = 0; index < ds.length; index++) {
    console.log(ds[index]);
}
console.log("-------------------------");
// Method 02
console.log("Method 02: forEach");
ds.forEach(function (element) {
    console.log(element);
});
console.log("-------------------------");
// Method 03
console.log("Method 03: for .. in ..");
for (var index in ds) {
    if (ds.hasOwnProperty(index)) {
        console.log(ds[index]);
    }
}
console.log("-------------------------");
// Method 04
console.log("Method 04: for .. of ..");
for (var _i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
    var element = ds_1[_i];
    console.log(element);
}
console.log("-------------------------");
