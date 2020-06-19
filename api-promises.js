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

//get help for implementing this logic
const getRickAndMortyCharacterOrigins = req => {
  return Promise.all([
    getRickAndMortyCharacters()
      .then(characters => {
        return characters;
      })
      // .then(characters => {
      //   return characters
      .get('https://rickandmortyapi.com/api/character/')
      .then(({ origin }) => ([{
        origin: {
          name: origin.name,
          url: origin.url
        }
      }]))
      // })
  ]);};

module.exports = {
  getQuote,
  getBenderQuotes,
  getRickAndMortyCharacters,
  getRickAndMortyCharacterOrigins
};
