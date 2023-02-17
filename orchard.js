///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres = 0
//Defining a variable called totalAcres


for(i = 0; i < fujiAcres.length; i++){
    // Creating the for loop, i begins at 0 and later in the loop will be used to start the reference at the 0 index of the array. The loop will stop when every index of the first array has been checked.
    let dailyAcres = fujiAcres[i] + galaAcres[i] + pinkAcres[i]
    //A variable to hold the sum of the 3 arrays on a given day
    totalAcres += dailyAcres
    // Increases the value of totalAcres by the sum of the 3 arrays for a given day.
}
console.log(totalAcres)
// Logs the total acres for the week once the for loop has completed the calculation.





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / 7
//Takes the total from the totalAcres variable and divides it by the days of the week (7)
console.log(averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while(acresLeft > 0){
    days++
    //increments the value of the days variable by 1 when the loop runs.
    acresLeft -= averageDailyAcres
    //subtracts the value of averageDailyAcres (calculated earlier) from acresLeft
}

console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

let fujiTons = fujiAcres.slice(0,7)
let galaTons = galaAcres.slice(0,7)
let pinkTons = pinkAcres.slice(0,7)
//Creates copies of the above arrays for the loop below to work with.

for(let i = 0; i < fujiTons.length; i++){
    fujiTons[i] = fujiTons[i] * 6.5
    galaTons[i] = galaTons[i] * 6.5
    pinkTons[i] = pinkTons[i] * 6.5
}
//multiplies each element of the arrays mentioned by 6.5 to get the tons ready. 

console.log(fujiTons,galaTons,pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiTonsTotal = 0
let galaTonsTotal = 0
let pinkTonsTotal = 0

for(i = 0; i < fujiTons.length; i++){
   fujiTonsTotal += fujiTons[i]
   galaTonsTotal += galaTons[i]
   pinkTonsTotal += pinkTons[i]
   //adds up the tons of each variety
}

let fujiPounds = fujiTonsTotal * 2000
let galaPounds = galaTonsTotal * 2000
let pinkPounds = pinkTonsTotal * 2000
//Converts the total tons of each type to total pounds of each type

console.log(fujiPounds,galaPounds,pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

let fujiProfit = fujiPounds * .89
let galaProfit = galaPounds * .64
let pinkProfit = pinkPounds * .55

//Calculates the profit using the pound variables defined earlier

console.log(fujiProfit, galaProfit, pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit
//Sums up the totals of the profit variables calculated earlier
console.log(totalProfit)
