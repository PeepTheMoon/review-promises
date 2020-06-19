const { getOneQuote } = require('../api-promises');

describe('api functions', () => {

  it('returns a quote from the api', () => {
    return getOneQuote('1')
      .then(body => {
        expect(body).toEqual({
          character: body.character,
          quote: body.quote,
          image: body.image
        });
      });
  });
});
