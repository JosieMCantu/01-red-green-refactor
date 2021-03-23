const fetchQuotes = require('./fetch-quotes.js');

describe('fetchQuotes function', () => {
    it('returns a single quote from an API', async () => {

        const thisQuote = await fetchQuotes();

        expect(thisQuote).toEqual(expect.objectContaining({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String),
        })   
        );
    });
});