const leapYears = function(possibleLeapYear) {
    if(possibleLeapYear%4===0){
        if(possibleLeapYear%100===0){
            if(possibleLeapYear%400===0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
