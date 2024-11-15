// console.log("Hello World");

// const a=12;
// if(a>10){
//     let b=20;
//     a=40;
//     console.log("a inside:"+a);
// }
// console.log("a outside:"+b);
// console.log("Hi, inside index.js");
// function fun(a,b){
//     console.log("Hiiii");
//     return a+b;
// }
// const result=fun(23,12);
// console.log(result);

// const button=document.getElementById("btn");
// const output=document.getElementById('output');
// const select=document.getElementById('select');

// console.log(select.value);


// function selectLanguage(language){
//     console.log("hi, inside selectlanguage");
    
//     let data;
//     if(language=='c'){
//     function cCompiler()
//     {
//     return "C Compiler ";
//     }
//     data=cCompiler();
// }
// if(language=="java"){
//     function javaCompiler(){
//      return " Java Compiler";
//     }
// data=javaCompiler();
// }
//    return data; 
// }
// button.addEventListener("click",()=>{
    
//     const comp=selectLanguage(select.value);
// output.innerHTML=`<h2 style=color:red>${comp}</h2>`
//     console.log(comp);
// });
// console.log(selectLanguage("c"));

const mypromise=new Promise(
    (resolve,reject)=>{
        let a=12;
        if(a>10){
            resolve({name:"rahul",branch:"IT"})
        }
        else{
            reject("Data is rejected ");
        }
    }
);
mypromise.then(msg=>console.log(msg.branch))
.catch(error=>console.log(error))
// .finally(()=>console.log("finally Executed"));
function getdata(){
    const output=document.getElementById('output');
    const data=fetch("https://dummyjson.com/recipes");
        data.then(
            (res)=>{
            console.log(res);
            res.json().then(
                (response)=>{
                    console.log(response.recipes[0]);
                    const str=response.recipes[0].id+ " "+ response.recipes[0].name+ " "+ response.recipes[0].instructions;
                    
                    output.innerHTML=`${str}`;
                }
            )
            }
        )}