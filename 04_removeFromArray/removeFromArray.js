const removeFromArray = function(array, ...toDelete) {
    console.log(toDelete)
    let i = 0;
    let newArray = [];
    while (i < array.length) {
        if (toDelete.indexOf(array[i]) == -1) {
            newArray.push(array[i]);
        }
        i++;
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;

// array = [1, 2, 3, 4, 7, 15, 22];
// toDelete = [2, 7];

// i = 4
// array[i] = 7;
// toDelete.indexOf(array[i])
// toDelete.indexOf(7)
// 1

// i = 2
// array[i] = 3
// toDelete.indexOf(array[i])
// toDelete.indexOf(3)
// -1