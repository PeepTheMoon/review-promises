const { getQuote, getBenderQuotes } = require('../api-promises');

describe('api functions', () => {

  it('returns a quote from the api with GET', () => {
    return getQuote('1')
      .then(body => {
        expect(body).toEqual({
          character: body.character,
          quote: body.quote,
          image: body.image
        });
      });
  });

  it('returns n quotes from the api with GET', () => {
    return getQuote('3')
      .then(body => {
        expect(body).toEqual([
          {
            character: body.character,
            quote: body.quote,
            image: body.image
          }
        ]);
      });
  });

  it('returns a list of quotes by Bender with GET', () => {
    return getBenderQuotes('bender')
      .then(body => {
        expect(body).toEqual([{
          character: body.character,
          quote: body.quote,
          image: body.image
        }]);
      });
  });

});
