'use strict'

function describeCountry(country, population, capitalCity){
    let description = `${country} has ${population} million people and its capital city is ${capitalCity}`
    return description
}

let wholeDescription = describeCountry('USA', 'six', 'Washington')
 console.log ( wholeDescription)
 