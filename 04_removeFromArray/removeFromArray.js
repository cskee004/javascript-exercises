const removeFromArray = function(array, ...valueArray) {
    
    let newArray = []
    
    


    for (let i = 0; i < array.length; ++i) {
        let tempValue = array[i]
        
        
        
        if(tempValue == valueArray) {
            console.log("Removing " + valueArray)
        }
        else {
            console.log("Keeping: " + tempValue)
            newArray.push(tempValue)
        }
        
        
    }
    
    
    console.log("The returned array before being returned " + newArray)
    return newArray; 

};

// Do not edit below this line
module.exports = removeFromArray;
