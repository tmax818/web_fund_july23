var arr2d = [ [2, 5, 8], [3, 6, 1], [5, 7, 7,5,6,7,4,32,2,5,67,3,23,23,3,45,45] ];

for(var i=0; i < arr2d.length; i++) {
    console.log("i loop ------->", arr2d[i]);
    
    for(var j=0; j < arr2d[i].length; j++ ) {
        console.log("j loop =>", arr2d[i][j])
    }
}

// [2,5,8,3,6,1,5,7,7,5.....]

// get the last element of the 2nd index array
// console.log(arr2d[2][arr2d[2].length-1])

// console.log(arr2d.length-1)