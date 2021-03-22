const myObj = {name: 'josie', hair: 'brown', eyes: 'brown'};

const getName = (myObj) => {
    const returnName = myObj['name'];
    return returnName;
};

module.exports = getName;