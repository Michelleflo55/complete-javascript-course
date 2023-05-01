  'use strict'

  ///////////////////////////////////////
  /////USE STRICT MODE ABOVE ANY CODE
//   let hasDriversLicense = false
//   const passTest = true

//   if(passTest) hasDriversLicense = true;
//   if (hasDriversLicense) console.log('I can drive')


// //const interface = 'Audio' //interface is a reserved word so your console will get an error
// //   const if = 23 // unexpected token 'if' will fail because it is a reserved word
  ///////////////////////////////////////
  //// FUNCTIONS
// function logger () {

//   console.log('My name is Michelle')

// }
// below is CALLING / RUNNING / INVOKING FUNCTION
// logger()

function fruitProcessor(apples, oranges){
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5,0) //make it appleJuice variable in order to run and save fruitprocessor function 
console.log(appleJuice) 

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice)