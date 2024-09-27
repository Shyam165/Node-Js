// console.log("start exe.....");
// console.log("logic exe.....");
// console.log("complete exe....");

//now in the above example we cannot be able to find the time of execution of the program

//---------------------Asynchronous operations task----------------
// console.log("start exe.....");
// setTimeout(() => {
//     console.log("logic exe.....");
// }, 2000);
// console.log("complete exe....");




//-------------------------------------

// let a = 10;
// let b = 0;

// setTimeout(() => {
//     b=20;
// }, 2000);

// console.log(a+b);  //now the actual out should be 30. but it will be print 10.

// so we have to handle the asynchronous with the help of callback , promises, async await.



//----------------------------------------------

// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })


// console.log(a+b);

// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b);
// })



//------------------------------------------------

//--------------how node js is works?------------------

console.log("starting up.............");

setTimeout(() => {
    console.log("two seconds");
}, 2000);

setTimeout(() => {
    console.log("zero second");
}, 0);

console.log("ending up..........");