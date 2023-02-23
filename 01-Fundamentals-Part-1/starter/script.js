//VALUES AND VARIABLES 
// let js = 'amazing';
// console.log(40 + 8 + 23)

// console.log(' jonas')
// console.log(23)

// let fir$tName = ' Michelle' 
// console.log('hello, my name is' + fir$tName + '!')

// let myFirstJob = 'hosting'
// let mySecondJob = 'developer'

// console.log(myFirstJob + ' was my first job, but now I am a ' + mySecondJob)
////////////////////////////////////

// DATA TYPES

// let javascriptIsFun = true
// console.log(javascriptIsFun)

// // console.log(typeof true)
// // console.log(typeof javascriptIsFun)
// // console.log(typeof 23)
// // console.log(typeof 'michelle')

// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun)

// let year
// console.log(year)
// console.log(typeof year)

// year = 1994
// console.log(year)

// console.log(typeof null)
////////////////////////////////////////////////////////////

// LET CONST VAR

//   let age = 30
//     age = 31
     
//      const birthyear = 1994

//   var firstName = 'michelle'
//   firstName = 'liz'
//   console.log(firstName)

//////////////////////////////////////////////

// //Operators
// //using the (-) operator 
// const now = 2022
// const ageMichelle = now - 1994
// const ageChristian = now - 1996
//     console.log(ageMichelle, ageChristian)

// console.log(ageChristian *2, ageMichelle /2, 2 ** 3 )
// //2 **3 means 2 to the power of 3 = 2 * 2 * 2
// //MATH OPERATORS  
// const firstName = 'Michelle'
// const lastName = 'Flores'
// console.log(firstName + ' ' + lastName)

// //ASSIGNMENT OPERATORS
// let x = 10 + 5
// x += 10  // x = x + 10 =25
// x *= 2 // x = x * 2  = 50
// x ++   //x = x + 1
// x -- //opposite of + 1 
// console.log(x)

// // COMPARISON OPERATORS
//     console.log(ageChristian > ageMichelle) // >, < , <=, >=
//     console.log( ageChristian >= 20)

//     const isFullAge = ageChristian >= 20

//     console.log(now -1991 > now - 2022)



    ///////////////////////////////
    // //Operator Precedence

    // //left to right execution 
    

////////////////////////////////////////////////
//STRING & TEMPLATE LITERAL
//     const firstName  = 'Michelle'
//     const job = 'boxer'
//     const birthYear = 1994
//     const year = 2022

//     const michelle = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
//     console.log(michelle)
//         //this template string method below is way cleaner than the one above
//     const michelleNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
//     console.log(michelleNew)
// console.log(`Just a regular string...`)
//     //creating a string with multiple lines \n\ is new line, was actually a bug
//     console.log('String with \n\
//     multiple \n\
//     ') 
//     // OR you can use backticks to create a string with multiple lines  
//     console.log(`String
//     multiple 
//     lines`)

/////////////////////
//IF ELSE STATEMENTS

// const age = 15

// if (age >= 18){
//     console.log('Michelle can start driving license 🥹')
// } else {
//     const yearsLeft = 18-age
//     console.log(`Sorry you have ${yearsLeft} years until you can drive` )
// }

//  const bornIn = 2012    
//     let century;

//  if(bornIn <= 2000){
//    century = 20
//  } else{
//     century = 21
//  }
// console.log(century)

///////////////////////////////
//TYPE CONVERSION AND COERSION 
// CONVERSION converting strings to numbers
// const inputYear = '1991' //if data type is a string, the number wont be added
// console.log(Number(inputYear), inputYear) //how you convert string to number but value remains string
// console.log(Number(inputYear) + 18)// this converts value to number 

// console.log(Number('Jonas')) //won't work NaN
// console.log(typeof NaN) //still a number but invalid number

// //converting numbers to strings
// console.log(String(23),23)

// //COHERSION
//  console.log('I am ' +  23 + ' years old') 
//  //plus operator automatically executes cohersion by making 23 into a string same as below
//  console.log('I am ' +  '23' + ' years old')

//  console.log('23' - '10' - 3)
//  //javascript converted strings to numbers because of minus operators

//  console.log('23' + '10' + 3)
//  //3 is converted to string and strings are concatanated 

//  console.log('23' * '2')
// // multiplier  & divider operator turns strings to numbers 

// // will give you 10 because plus operators adds strings together 
// // instead of converting to number
// let n = '1' + 1
// n = n -1
// console.log(n)

///////////////////////
//TRUTHY AND FALSY VALUES
    //FIVE FALSY VALUES: 0, '', null, NaN, undefined
//     console.log(Boolean(0))
//     console.log(Boolean(undefined))
//     console.log(Boolean(NaN))
//     console.log(Boolean(''))
//     console.log(Boolean(null))

// // TRUTHY VALUES 
// console.log(Boolean('Michelle'))
// console.log(Boolean({}))

//     const money = 0 //switch to 2 to see what it consoles.
//     //money below converts to boolean which is FALSY value because it is 0,
//     // therefore else statement will execute 
//     // if value is switched to a number, if statements will execute
//     if(money ){
//         console.log("Don't spend it all")
//     } else {
//         console.log('You should get a job')
//     }
// //test code below with empty variable, 0, and a number
// //the bug below is that i
//     let height = 0
//     if (height){
//         console.log('YAY! Height is defined')
//     }
//     else {
//         console.log('Height is UNDEFINED')
//     }

////////////////////////
//EQUALITY OPERATORS == VS ===

// const age = 28
// //TIP: use === strict equal operator over loose equal operator when comparing values
// /// === has to be exact if i define age to '18' and run statement below, it will be false
// if (age === 28) console.log('You are an adult')

// // == is loose equality operator 
//     if ('18' == 18)console.log('True because == is a loose operator')

//getting a value from a web page
// const favorite = Number(prompt('What is your favorite number'))
// //store the value by creating a variable that user inputs in the prompt 
// console.log(typeof favorite, favorite )

// if (favorite === 23){ //this statement will return true because it is type cohersion due to loose equal operator
//     // if you use === it will not return the console.log below
//     console.log('Cool 23 is an amazing number')
// } 
// // in order strict equal operator to work, convert string to a number function 
// //          const favorite = Number(prompt('What is your favorite number')) 
// else if(favorite === 9){
//     console.log('9 is also a cool number')
// } else {
//     console.log('number is not 23 or 7 or 9')
// }
// if (favorite !== 23) console.log('why not 23?')

//  const hasDriversLicense = true
//  const hasGoodVision = true
//  console.log(hasDriversLicense && hasGoodVision)
//  console.log(hasDriversLicense || hasGoodVision)
//  console.log(! hasDriversLicense)



// if (hasDriversLicense && hasGoodVision){
//  console.log('sarah is good to drive')
// } else {
//     console.log('someone else should drive')
// }

// const isTired = true

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log('sarah is good to drive')
//    } else {
//        console.log('someone else should drive')
//    }