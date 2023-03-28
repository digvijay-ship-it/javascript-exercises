const repeatString = function(stringToRepeat,noOfTimesRepeater) {
    if(noOfTimesRepeater<0){
        return "ERROR";
    }
    return stringToRepeat.repeat(noOfTimesRepeater);
};

// Do not edit below this line
module.exports = repeatString;
