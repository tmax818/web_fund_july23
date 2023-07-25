// TODO: Print all the integers from 1 to 255.
function print1to255(){
    // for(var i = 1; i <= 255; i++ ){
    //     console.log(i)
    // }

    var i = 1
    while(i <= 255){
        console.log(i);
        i++;
    }
}

// print1to255()

// TODO: Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0to255(){
    var sum = 0
    for(var i = 0; i <= 255; i++){
        sum += i
        console.log('current number: ', i, 'current sum:', sum)
    }
}

printIntsAndSum0to255()

// TODO: Given an array, find and print its largest element.
function printMaxOfArray(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
    return max;
}

let arrmax = printMaxOfArray([1,5,78,3,4,5])
console.log(arrmax)
// TODO: Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1to255(){
    var odds = []
    for(var i = 1; i < 256; i += 2){
        console.log(i);
        odds.push(i)
    }

    return odds

}

var oddsArray = returnOddsArray1to255()
console.log(oddsArray)

// TODO: Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y){}

// TODO: Given an array, print the max, min and average values for that array.
function printMaxMinAvgArray(arr){
    var max = printMaxOfArray(arr)
}

// TODO: Replace any negative array values with 'Dojo'.
function swapStringForArrayNeg(arr){}

function swapStringForArrayNeg2(arr){}
    
// TODO: Print all odd integers from 1 to 255.
function printOdds1to255(){}

// TODO: Iterate through a given array, printing each value.
function printArrayVal(arr){}

// TODO: Analyze an array’s values and print the average
function printAvgOfArray(arr){}

// TODO: Square each value in a given array, returning that same array with changed values
function squareArrayVals(arr){}

// TODO: Return the given array, after setting any negative values to zero.
function zeroOutArrayNegativeVals(arr){}

// TODO: Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
function shiftArrayValsLeft(arr){}