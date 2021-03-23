
const capitalizeAndFilter = (myArray) => {
    const newArr = [];
    for(let strings of myArray) {
        if(strings.charAt(0) !== 'f') {
            newArr.push(strings.toUpperCase()); 
        }
    }
    return newArr;
};



module.exports = capitalizeAndFilter;