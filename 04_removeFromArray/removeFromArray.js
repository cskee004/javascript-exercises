const removeFromArray = function(contactArray, ...contactToDelete) {
    let contactsCopyArray = [...contactArray]
    
    for (toDelete of contactToDelete) {
        console.log("Size of contact copy array: " + contactsCopyArray.length)
        

        while (contactsCopyArray.includes(toDelete)) {
            let pos = contactArray.indexOf(toDelete)
            contactsCopyArray.splice(pos, 1)
            if (contactsCopyArray.length === 1 && contactsCopyArray.includes(toDelete)) {
                contactsCopyArray.splice(-1, 1)
                break;
            }
        }
    
        continue;
    
}

    return contactsCopyArray;
};


// Do not edit below this line
module.exports = removeFromArray;
