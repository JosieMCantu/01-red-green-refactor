

const myArray = [1, 2, 3,];

const copyAndPush = (myArray, item) => {
    const result = [...myArray, item];
    return result;
}
module.exports = copyAndPush;