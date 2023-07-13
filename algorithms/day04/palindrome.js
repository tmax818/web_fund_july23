// racecar
// radar
// tacocat

// [1,2,3,2,1]
// [1, 1, 2, 2, 1]
function isArrayPal(arr){
    var newArr = []
    //for(start; stop; step)
    for(var i = arr.length -1; i >= 0; i-- ){
        console.log(arr[i])
        newArr.push(arr[i])
    }
    console.log(newArr)

    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== newArr[i]){
            return false
        }
    }
    return true

}

console.log(isArrayPal([1, 2, 3, 4, 5]))
// console.log(isArrayPal([3, 2, 1, 1, 2, 3]))

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);

test1 = [56, 56, 34]
test2 = [56, 56, 34]
