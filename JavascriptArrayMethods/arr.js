// Array concat()

Array.prototype.customConcat = function(arr) {
    const tempArr = this
    for (let val of arr) {
        tempArr.push(val)
    }

    return tempArr
};

// Array map ()
Array.prototype.customMap = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {

        newArr.push(callback(this[i]))
    }

    return newArr;
}

// Array foreEach
Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

// Usage

arr01 = [1, 3, 78, 23, 78]
arr02 = [45, 90]

const mergedArr = arr01.customConcat(arr02)
