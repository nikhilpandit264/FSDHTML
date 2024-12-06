// const output=document.getElementById('output');
// const button = document.getElementById("btn");
// console.dir(button);



// function selectLanguage(language) {
//   console.log("hi inside select");
//   let data;
//   if (language == "c") {
//     function cCompiler() {
//       return " C Compiler";
//     }
//     data = cCompiler();
//   }
//   if (language == "java") {
//     function javaCompiler() {
//       return " Java Compiler";
//     }
//     data = javaCompiler();
//   }
//   return data;
// }


// // button.addEventListener("click", selectLanguage);
// button.addEventListener("click",()=>{
//     const comp =selectLanguage('Java');
//     output.innerHTML=comp;
//     console.log(comp);
// });



const myPromise=new Promise(
    (resolve,reject)=>{
        let a=12;
        if(a>10){
            resolve("data resolve ");
        }
        else{
            reject("data is rejected");
        }
    })
    myPromise.then(msg=>console.log(msg))
    .catch(error=>console.log(error));