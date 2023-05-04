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
// // below is CALLING / RUNNING / INVOKING FUNCTION
// logger()

// function fruitProcessor(apples, oranges){
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice
// }

// const appleJuice = fruitProcessor(5,0) //make it appleJuice variable in order to run and save fruitprocessor function 
// console.log(appleJuice) 

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice) 

  ///////////////////////////////////////

// FUNCTION DECLARATIONS VS EXPRESSIONS

///BELOW is function declaration
//function declaration can be called before theyre defined/
//below age1 is being called before and then calcAge is defined after
// const age1 = calcAge1(1994)
// console.log(age1)


// function calcAge1(birthYear){
//     return  2022 - birthYear
// }



// //calAge2 will be the variable that is called the funcition
// // BELOW function expression
// //functino expression CANNOT be called before it is defined

// const calcAge2 = function (birthYear){
//     return 2040 - birthYear
// }
// const age2 = calcAge2(1994)
// console.log(age1, age2)

  ///////////////////////////////////////
//   //ARROW FUNCTIONS 

// //special form of a function expression. 
// //ARROW FUNCTION
//   const calcAge3 = birthYear => 2037 - birthYear
//   const age3 = calcAge3(1994)
//   console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1994, 'Michelle'))
// console.log(yearsUntilRetirement(1993, 'Ruby'))


// ///////////////////////////////////////\
//FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit){
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges){
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)


//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces .`
//   return juice
// }
// console.log(fruitProcessor(2,3))


// const person = (firstName, lastName) => {
//   return `Hello, my name is ${firstName} ${lastName}`
// }
// const firstUser = person('Mitch', 'Flores')
// console.log(firstUser)


  ///////////////////////////////////////

//REVIEWING FUNCTIONS


// const calcAge = function(birthYear){
//   return 2037 - birthYear
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age
//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retires in ${retirement} years`) //console wont be read because return statement immediately exits and returns function
//     // console code wont be reached  
//   } else {
//     console.log(`${firstName} has already retired`) // this one will run because its above return statement 
//     return -1
//   }

// }

// console.log(yearsUntilRetirement(1994, 'Michelle'))
// console.log(yearsUntilRetirement(1950, 'Ruby'))

  ///////////////////////////////////////
  // INTRO TO ARRAYS 

  const friend1 = 'Michael'
  const friend2 = 'Steven'
  const friend3 = 'Peter'

  const friends = ['Michelle', 'Ruby', 'Jazmin']
  console.log(friends)

  // const years = new Array(1992, 1993, 1994)
  // console.log(years)

  console.log(friends[0])
  console.log(friends[2])
  console.log(friends.length)//compute length of elements in array
  console.log(friends[friends.length-1])//expression to retreive last element

   friends[2] = 'Michelle'//mutating the array replace elements 
   console.log(friends)
  //  friends = ['Bob', 'Alice'] //cant mutatue entire array

// you can add multiple data types to array  
  const firstName  = 'Michelle '
  const michelle = [firstName, 'Flores ', 2022-1994, friends]
  console.log(michelle)



  //EXERCISE 
  //subtracting an array from a number will NOT work
  const calcAge = function (birthYear){
    return 2037 - birthYear 
  }
  const years = [1990, 1951, 1994, 2022]
  console.log(calcAge(years)) //NAN //cant do a number - array
  const age1 = (calcAge([0]))
  const age2 = (calcAge([1]))
  const age3 = (calcAge(years[years.length - 1]))//calculating last element
  console.log(age1,age2,age3)

  const ages = [calcAge(years[0]), calcAge(years[1])]
  calcAge(years[years.length - 1])
  console.log(ages)
