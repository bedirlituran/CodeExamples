// Array concat()

Array.prototype.customConcat = function(arr) {
    const tempArr = this
    for (let val of arr) {
        tempArr.push(val)
    }

    return tempArr
};
// Array copyWithin()
Array.prototype.customCopyWithin = function(target, start = 0, end = this.length) {
    const tempArr = []
        // get elements to copy
    const elementsForCopy = []
    for (let i = start; i < end; i++) {
        elementsForCopy.push(this[i])
    }
    // left side elements
    const leftSideElements = []
    i = 0
    while (i < target) {
        leftSideElements.push(this[i]);
        i++
    }
    // right side elements
    const rightSideElements = []
    for (let i = end; i < this.length; i++) {
        rightSideElements.push(this[i])
    }
    // joining all together
    tempArr.customConcat(leftSideElements).customConcat(elementsForCopy).customConcat(rightSideElements)
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

// Array foreEach ()
Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

// Array Some ()
Array.prototype.customSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true
        }
    }
    return false;
}

// Array Every ()
Array.prototype.customEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false
        }
    }
    return true;
}