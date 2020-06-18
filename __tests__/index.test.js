const fsPromise = require('fs').promises;
const { copy } = require('../index');

describe('copy function', () => {
  beforeAll(() => {
    return fsPromise.writeFile('./test-file.txt', 'test file over here');
  });

  afterAll(() => {
    return Promise.all([
      fsPromise.unlink('./test-file.txt'),
      fsPromise.unlink('./test-file-copy.txt')
    ]);
  });

  it('copies a file', () => {
    return copy('./test-file.txt', './test-file-copy.txt')
      .then(() => {
        return fsPromise.readFile('./test-file-copy.txt', { encoding: 'utf8' });
      })
      .then(copiedFile => {
        expect(copiedFile).toEqual('test file over here');
      });
  });

});
