const capitalizeAndFilter = require("./capitalize-and-filter.js");


const myArray = ['this', 'that', 'from'];

describe('capitalize and filter function', () => {
    it('takes in an array of strings, capitalizes and filters for the f', () => {

        const thisArray = capitalizeAndFilter(myArray);
        const myArr = ['THIS', 'THAT'];

        expect(thisArray).toEqual(myArr);
    });
});