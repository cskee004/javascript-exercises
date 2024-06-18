const removeFromArray = function(contactArray, ...contactToDelete) {
    let contactsCopyArray = [...contactArray]
    
    for (toDelete of contactToDelete) {
        // let pos = contactArray.indexOf(toDelete)
        // contactsCopyArray.splice(pos, 1)
        while (contactsCopyArray.includes(toDelete)) {
            let pos = contactArray.indexOf(toDelete)
            contactsCopyArray.splice(pos, 1)
        }
       // else {
       //     continue;
       // }
       continue;
    }

    return contactsCopyArray;
};


// Do not edit below this line
module.exports = removeFromArray;
