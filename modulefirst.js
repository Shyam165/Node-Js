//COMMON JS MODULES  VS  ES6 MODULES

// const simple = require("./modulesecond")

//---------------------------------------------------------------------------------------


// "type":"module",   --> need to be used in the package.json file for using es6 module

//ES6 Module
// import {simple} from "./modulesecond.mjs"

// import {simple2 as simple} from "./modulesecond.mjs"

// import simple23 from "./modulesecond.mjs"   //now here default funtion will be called
// simple23()

// import {simple2 , simple1} from "./modulesecond.mjs"   //importing more than one func
// simple1()

import *as a2 from "./modulesecond.mjs"
console.log(a2)
console.log(a2.simple2())