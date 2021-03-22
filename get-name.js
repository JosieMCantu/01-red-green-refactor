const myObj = {name: 'josie', hair: 'brown', eyes: 'brown'};

const getName = (newObj) => {
    const {name} = newObj;
    return name;
};

module.exports = getName;