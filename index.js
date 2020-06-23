const fsPromises = require('fs').promises;

//sets a promise to READ a file
const promiseToReadREADME = fsPromises.readFile('./README.md', { encoding: 'utf8' });

promiseToReadREADME
  //waits for the promise to resolve, then returns the file contents
  //then console.log's the file contents and returns the value
  .then(fulfilledPromiseToReadREADME => {
    console.log(fulfilledPromiseToReadREADME);
  });

////////////////////////////////////////////////

// sets a promise to WRITE a file
const promiseToWriteFile = fsPromises.writeFile('./theWrittenFile.md', 'Yo, this the written file!');

promiseToWriteFile
  //when the promise resolves, console.log the file
  .then(file => {
    console.log('DONE!');
  });

////////////////////////////////////////////////

const promiseToRead = fsPromises.readFile('./README.md', { encoding: 'utf8' });

const promiseToReadAndCopyREADME = Promise.all([
  promiseToRead
    //first, reads the file
    .then(fulfilledPromiseToRead => {
      console.log(fulfilledPromiseToRead);
      return fulfilledPromiseToRead;
    })
    //then takes that file and copies it to another file
    .then(fulfilledPromiseToRead => {
      const copy = fsPromises.writeFile('./copyREADME.md', fulfilledPromiseToRead);
      console.log(copy);
      return copy;
    })
    .then(copy => console.log(copy, 'DONE!'))
]);

//////////////////////////////////////////////

//A copy function that takes in a source and a destination
const copy = (src, dest) => {
  //promises to read a file and return it
  return fsPromises.readFile(src, { encoding: 'utf8' })
    //then takes the data from the returned file
    .then(data => {
      //and returns a promise to write a new file with the first file's data
      return fsPromises.writeFile(dest, data);
    });
  //data is the fulfilled value.  in the test, there is a .then happening AFTER this code block because it needs to read the file again to check that the data is the same.  You don't need to utf8 encode here because it doesn't need to be human readable.
};

//////////////////////////////////////////////

const transform = (src) => {
  //reads a file and returns the data
  return fsPromises.readFile(src, { encoding: 'utf8' })
    .then(fileData => {
      // then, takes the data and removes all capital letters
      return fileData.replace(/[A-Z]/g, '');
    })
    //then, takes the fileData, spreads it, and returns it in all caps
    .then(fileData => {
      return fileData.toUpperCase();
    })
    //then spreads the string into an array and reverse's it
    .then(fileData => {
      return [...fileData].reverse();
    })
    //then returns the file data rejoined as a string
    .then(fileData => {
      return fileData.join('');
    });
};

module.exports = { copy, transform };
