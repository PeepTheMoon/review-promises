const fsPromises = require('fs').promises;
const { copy, transform } = require('../index');

describe('copy function', () => {
  beforeAll(() => {
    return fsPromises.writeFile('./test-file.txt', 'TEST file over here');
  });

  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./test-file.txt'),
      fsPromises.unlink('./test-file-copy.txt')
    ]);
  });

  it('copies a file', () => {
    return copy('./test-file.txt', './test-file-copy.txt')
      .then(() => {
        return fsPromises.readFile('./test-file-copy.txt', { encoding: 'utf8' });
      })
      .then(copiedFile => {
        expect(copiedFile).toEqual('TEST file over here');
      });
  });

  it('transforms a file', () => {
    return transform('./test-file.txt')
      .then((transformedFile => {
        expect(transformedFile).toEqual('EREH REVO ELIF ');
      }));
  });
});
