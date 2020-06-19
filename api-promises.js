const request = require('superagent');

const getOneQuote = count => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(({ body }) => ({
      character: body.character,
      quote: body.quote,
      image: body.image
    }));
};

module.exports = {
  getOneQuote
  // getZoidbergQuotes
};
