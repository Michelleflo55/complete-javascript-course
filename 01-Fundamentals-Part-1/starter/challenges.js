
//CHALLENGE 1 STRINGS AND TEMPLATE LITERALS 
// //test 1
// let massMark = 78
// let massJohn= 92
// let heightMark = 1.69
// let heightJohn = 1.95
// //test 2
// let massMark2 = 95
// let massJohn2 = 85
// let heightMark2 = 1.99
// let heightJohn2 = 1.5

// let markBMI = massMark / heightMark **2
// let johnBMI = massJohn / heightJohn **2
// console.log(markBMI, johnBMI)

// let markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI)
//////////////////////////////////////////////
//CHALLENGE 2 IF/ELSE STATEMENTS WITH TEMPLATE LITERALS 
//     let bmiDifference 
// if (markBMI > johnBMI){
//     bmiDifference = markBMI - johnBMI
//     console.log(`Mark's BMI of (${markBMI}) is higher than John's by (${bmiDifference})!`)
// } else {
//     bmiDifference =  johnBMI - markBMI 
//     console.log( `John's BMI of (${johnBMI}) is higher than Mark's by (${bmiDifference})!`)
// }
///////////////////////////
///Challenge #3
// let averageScoreDolphins = (97 + 112 + 101 ) / 3;
// let averageScoreKoalas = (109 + 95+ 106) / 3;
// let minScore = 100
// let draw = averageScoreDolphins >= 100 && averageScoreKoalas >= 100

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= minScore ){
//     let scoreDifference = averageScoreDolphins - averageScoreKoalas
//     console.log(`Dolphin's average score is greater by ${scoreDifference} points` )
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= minScore){
//     let scoreDifference = averageScoreKoalas - averageScoreDolphins
//     console.log(`Koala's average score is greater by ${scoreDifference} points`)
// } else if(averageScoreKoalas === averageScoreDolphins && draw === true){
//     console.log('Both teams averaged a draw')
//     console.log(draw)
// } else {
//     console.log('Nobody wins')
    
// }

 //////////////////////////////////////
 // CHALLENGE #4 TERNARY OPERATORS
  
//   let bill =400
//   let tip
  
//   if (bill >= 50 && bill <=300){
//     tip = bill * .15
//     console.log(bill, tip, `your total of ${tip + bill} consists of your bill ${bill} plus tip ${tip}`)
//   } else {
//     tip = bill * .2
//     console.log(bill, tip, `your total of ${tip + bill} consists of your bill ${bill} plus tip ${tip}`)
//   }

//   const total = bill >= 50 && bill <= 300? (tip = bill * .15) && `Your bill of ${bill} plus ${tip} tip equals to ${bill + tip}`: (tip = bill * .2 )  &&  `Your bill of ${bill} plus ${tip} tip equals to ${bill + tip}`
//   console.log(total)