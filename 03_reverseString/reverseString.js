const reverseString = function(string) {
    let tempString = "";
    const len = string.length;
    
    for (let i = len - 1; i >= 0; --i) {
        let letter = string.charAt(i);
        tempString = tempString + letter;
    }
    
    return tempString;
    

};

// Do not edit below this line
module.exports = reverseString;
