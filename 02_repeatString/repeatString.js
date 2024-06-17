const repeatString = function(string, num) {
    var temp = "";
    
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; ++i) {
        temp = string + temp;
    }
    return temp;
}


// Do not edit below this line
module.exports = repeatString;
