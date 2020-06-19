const { getCharacter, getManyCharacters } = require('../lib/rickAndMortyApi');

describe('api functions', () => {

  it('returns a character with GET', () => {
    return getCharacter(6)
      .then(body => {
        expect(body).toEqual({
          name: body.name,
          status: body.status,
          species: body.species
        });
      });
  });

  it('returns many characters with GET', () => {
    return getManyCharacters([6, 10, 12])
      .then(body => {
        expect(body).toEqual([
          {
            name: 'Abadango Cluster Princess',
            status: 'Alive',
            species: 'Alien'
          }, {
            name: 'Alan Rails',
            status: 'Dead',
            species: 'Human'
          }, {
            name: 'Alexander',
            status: 'Dead',
            species: 'Human'
          }
        ]);
      });
  });

});

