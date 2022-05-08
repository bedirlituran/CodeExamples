// Array concat()

Array.prototype.customConcat = function(arr) {
    const tempArr = this
    for (let val of arr) {
        tempArr.push(val)
    }

    return tempArr
};


// Usage

arr01 = [1, 3, 78, 23, 78]
arr02 = [45, 90]

console.log(arr01.customConcat(arr02))