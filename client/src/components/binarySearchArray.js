/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */


  // create a first time switch
 var isFirstTime = true
 //create a switch to mess with the count under certain conditions
 //var secondArrayCountSwitch = false
 var count = 0;

var binarySearch = function (array, target) {

    if (array.length == 0) {
        return 0;
    }

    if (array.length === 1) {
        return (count++)
    }

    // create outside count variable that indicates the length of the array
    // split given array in half
    var middle = array[Math.floor(array.length / 2)];
    var firstArray = array.slice(0, middle)
    var secondArray = array.slice(middle, array.length - 1)
    // find what side of the array contains the target
    // if target is within the first array
    if (firstArray.includes(target)) {
        binarySearch(firstArray,target)
    } else {
       //  count = count + firstArray.length
        binarySearch(secondArray, target)
    }
      // binarySearch(firstArray,target)
    // if target is within the second array
    
      // add length of first array to outside count variable
      // binarySearch(secondArray,target)
};

binarySearch([1,2,3,4,5], 4)