const copyAndPush = require("./copy-and-push");



describe('copy and push function', () => {
    it('takes in an array and adds a number to the end', () => {

        const myArray = [1, 2, 3,];
        const item = 4;
        const thisArray = copyAndPush(myArray, item);


        expect(thisArray).toEqual(myArray);
    });
});