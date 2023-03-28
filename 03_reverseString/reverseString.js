const reverseString = function(stringToBeReverse) {
    let result='';
    for(let i = stringToBeReverse.length-1;i>=0;i--){
        result+=stringToBeReverse[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
