const sumAll = function(start, end) {

    let sum = 0

    if (Math.sign(start) === -1 || Math.sign(end) === -1) {
        return 'ERROR';
    }
    else {
        for (let i = 0; i < Math.abs(start + end); ++i) {
            sum += i
        }
    }
    
    return sum
};

// Do not edit below this line
module.exports = sumAll;
