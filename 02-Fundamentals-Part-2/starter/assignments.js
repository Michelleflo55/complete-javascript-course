'use strict'
// FUNCTIONS
// function describeCountry(country, population, capitalCity){
//     let description = `${country} has ${population} million people and its capital city is ${capitalCity}`
//     return description
// }

// let wholeDescription = describeCountry('USA', 'six', 'Washington')
//  console.log ( wholeDescription)
//     wholeDescription = describeCountry('Mexico', 'ten', 'df')
//     console.log(wholeDescription)
//     wholeDescription = describeCountry('Africa', 'eight', 'nigeria' )
//     console.log(wholeDescription)
/// above was function declaration

///////////////////////////////////////
//FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS
//function declaration 
//  function percentageOfWorld1(population){
//     return (population / 7900000000)* 100
// }
// //storing populations in variable below = populationPercentage
//     let populationPercentage = percentageOfWorld1(1441000000)
//     console.log(populationPercentage)
    
//     populationPercentage = percentageOfWorld1(1999999)
//    console.log(populationPercentage)

//    populationPercentage = percentageOfWorld1(1000000000)
//     console.log(populationPercentage)

// //function expression variable percentageOfWorld2 stored function

//     const percentageOfWorld2 = function(population ){
//     return (population / 7900000000)* 100
//  }

//     let populationPercentage2 = percentageOfWorld2(1441000000)
//         console.log(populationPercentage2)
    
//         populationPercentage2 = percentageOfWorld2(1999999)
//         console.log(populationPercentage2)

//         populationPercentage2 = percentageOfWorld2(1000000000)
//         console.log(populationPercentage2)

// ///////////////////////////////////////
//   //ARROW FUNCTIONS 
//   const percentageOfWorld3 = population => (population /7900000000 ) * 100
//   console.log(percentageOfWorld3(1999999))

// ///////////////////////////////////////
//FUNCTIONS CALLING OTHER FUNCTIONS
//funtion declaration below
//  function percentageOfWorld1(people){
//     return (people / 7900000000)* 100
// }
// //above will give you percentage based of people/ world population


// //function expression by using an arrow function
//  const describePopulation = (country, population) => {
//     let populationCount = percentageOfWorld1(population) //population is the argument for the parameter people above
//     return `${country} has ${population} people, which is about ${populationCount}% of the world.`
//  }
//  console.log(describePopulation('USA', 1000000))
//  console.log(describePopulation('Mexico', 2000000))
//  console.log(describePopulation('Costa Rica', 3000000))