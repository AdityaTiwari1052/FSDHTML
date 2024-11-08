// console.log("Hello World")
// const a=12;
// if(a>10){
//     b=20;
//     a=40;
//     console.log("a inside:" +a);

// }
// console.log("a outside:"+b);
// function fun(a,b){
//     console.log("Hii");
//     return a+b;
    
// }
// const result = fun(23,12);
// console.log(result);

const button = document.getElementById("btn");
console.dir(button);
function selectLanguage(language){
    console.log("hi,inside selectLanguage")
    let data ;
    if(language=='C'){
        function cCompiler()
        {
        return"c Compiler"
        }
        data =cCompiler();
    }
    if(language=="java"){
    
    function javaCompiler(){
    return "Java Compiler";
}
data = javaCompiler();
}
return data;
}
console.log(selectLanguage("C"));