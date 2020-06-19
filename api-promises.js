const request = require('superagent');

//seems to only work with one.  I thought I set it ip to accept any number, check back for assistance on this one
const getQuote = count => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(({ body }) => ({
      character: body.character,
      quote: body.quote,
      image: body.image
    }));
};

const getBenderQuotes = name => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/characters/${name}`)
    .then(({ body }) => ([{
      character: body.character,
      quote: body.quote,
      image: body.image
    }]));
};

const getRickAndMortyCharacters = req => {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(({ body }) => ([{
      name: body.name,
      status: body.status,
      image: body.image
    }]));
};

module.exports = {
  getQuote,
  getBenderQuotes,
  getRickAndMortyCharacters
};
