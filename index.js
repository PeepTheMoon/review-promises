const fsPromises = require('fs').promises;

//sets a promise to READ a file
const promiseToReadREADME = fsPromises.readFile('./README.md', { encoding: 'utf8' });

promiseToReadREADME
  //waits for the promise to resolve, then returns the file contents
  .then(fileContents => {
    return fsPromises.readFile('./README.md', { encoding: 'utf8' });
  })
  //then console.log's the file contents and returns the value
  .then(fulfilledPromiseToReadREADME => {
    console.log(fulfilledPromiseToReadREADME);
    return fulfilledPromiseToReadREADME;
  });
//////////////////////////////////////////////////

//sets a promise to WRITE a file
const promiseToWriteFile = fsPromises.writeFile('./theWrittenFile.md', 'Yo, this the written file!');

promiseToWriteFile
  //when the promise resolves, console.log the file
  .then(file => {
    console.log('DONE!');
  });
//////////////////////////////////////////////////

//sets a promise to COPY a file

