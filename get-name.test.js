const getName = require('./get-name.js');


const newObj = {name: 'heart', nice: 'face', okay: 'diamond'};


describe('get name function', () => {
    it('gets the value of name from myObj', () => {

        const myName = getName(newObj);

        expect(myName).toEqual('heart');
    });
});


