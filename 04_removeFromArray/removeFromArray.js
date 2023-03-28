const removeFromArray = function (array, ...argsToBeDelete) {
    if (argsToBeDelete.length === 0) {
        return array;
    }
    for (let j = argsToBeDelete.length - 1; j >= 0; j--) {
        for (let i = 0; i < array.length; i++) {
            if (argsToBeDelete[j] === array[i]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};
// Do not edit below this line
    module.exports = removeFromArray;
