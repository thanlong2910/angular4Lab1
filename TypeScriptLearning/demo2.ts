// function
console.log("-- demo function --");
function Hello(){
    console.log("Hi Everybody !");
}

function Goodbye(){
    return "Goodbye"
}
Hello();

var str:string = Goodbye();
console.log(str);