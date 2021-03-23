const fetch = require('node-fetch');

const fetchQuotes = async () => {
    const myQuote = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
    const body = await myQuote.json();

    const {character, quote, image} = body[0];
    return {name:character, text:quote, image};

};



module.exports = fetchQuotes;