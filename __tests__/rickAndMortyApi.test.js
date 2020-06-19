const { getCharacter 
} = require('../lib/rickAndMortyApi');

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

});

