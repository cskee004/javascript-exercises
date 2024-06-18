const removeFromArray = function(contactArray, ...contactToDelete) {
    let contactsCopyArray = [...contactArray]
    
    for (toDelete of contactToDelete) {
        let pos = contactArray.indexOf(toDelete)
        contactsCopyArray.splice(pos, 1)
        if (contactsCopyArray.includes(toDelete)) {
            let pos = contactArray.indexOf(toDelete)
            contactsCopyArray.splice(pos, 1)
        }
        else {
            continue;
        }
    }

    return contactsCopyArray;
};


// Do not edit below this line
module.exports = removeFromArray;
