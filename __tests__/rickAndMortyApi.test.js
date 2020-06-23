const { getCharacter, getManyCharacters } = require('../lib/rickAndMortyApi');
const mockApiData = require('../data/apiData');

jest.mock('superagent', () => ({
  get(url) {

    const id = url.split('/').slice(-1);
    return Promise.resolve({
      body: mockApiData[id - 1] 
    });
  }
}));

describe('api functions', () => {
  it('returns a character with GET', () => {
    return getCharacter(1)
      .then(body => {
        expect(body).toEqual({
          name: body.name,
          status: body.status,
          species: body.species
        });
      });
  });


  //not sure why this is no longer working after implementing jest.mock
  it('returns many characters with GET', () => {
    return getManyCharacters([1, 2])
      .then(body => {
        expect(body).toEqual(
          [
            {
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human'
            }, {
              name: 'Johnny Depp',
              status: 'Alive',
              species: 'Human'
            }
          ]
          
        );
      });
  });

});

