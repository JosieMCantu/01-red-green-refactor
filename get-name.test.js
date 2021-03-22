const getName = require('./get-name.js');




const myObj = {name: 'josie', hair: 'brown', eyes: 'brown'};

describe('get name function', () => {
    it('gets the value of name from myObj', () => {

        const myName = getName(myObj);

        expect(myName).toEqual('josie');
    });
});