const sumAll = function(firstRange,lastRange) {
    if(firstRange<0||lastRange<0){
        return "ERROR";
    }
    if(!Number.isInteger(firstRange)||!Number.isInteger(lastRange)){
        return "ERROR";
    }
    let smallRange;
    let largeRange;
    let result = 0;
    firstRange>lastRange? (largeRange = firstRange,smallRange=lastRange):(largeRange = lastRange,smallRange=firstRange);
    for(let i = smallRange;i<=largeRange;i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
