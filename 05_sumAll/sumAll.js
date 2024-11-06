const sumAll = function(x,y) {
    let result = 0;
    if (typeof x != "number" || typeof y != "number") {
        return("ERROR")
    }
    if (x < 0 || y < 0) {
        return("ERROR")
    }
    if (Math.floor(x) != x || Math.floor(y) != y) {
        return("ERROR")
    }
    if (y > x) {
        result = y;
        for (i = x; i < y; i++) {
            result += i;
        }
    }
    else if (x > y) {
        result = x;
        for (i = y; i < x; i++) {
            result += i;
        }
    };


    return result;
};

// Do not edit below this line
module.exports = sumAll;
