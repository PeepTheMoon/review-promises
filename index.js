const fsPromises = require('fs').promises;

// //sets a promise to READ a file
// const promiseToReadREADME = fsPromises.readFile('./README.md', { encoding: 'utf8' });

// promiseToReadREADME
//   //waits for the promise to resolve, then returns the file contents
//   //then console.log's the file contents and returns the value
//   .then(fulfilledPromiseToReadREADME => {
//     console.log(fulfilledPromiseToReadREADME);
//   });
// ////////////////////////////////////////////////

// // sets a promise to WRITE a file
// const promiseToWriteFile = fsPromises.writeFile('./theWrittenFile.md', 'Yo, this the written file!');

// promiseToWriteFile
//   //when the promise resolves, console.log the file
//   .then(file => {
//     console.log('DONE!');
//   });
// ////////////////////////////////////////////////
// const promiseToRead = fsPromises.readFile('./README.md', { encoding: 'utf8' });

// const promiseToReadAndCopyREADME = Promise.all([

//   promiseToRead

//     //first, reads the file
//     .then(fulfilledPromiseToRead => {
//       console.log(fulfilledPromiseToRead);
//       return fulfilledPromiseToRead;
//     })
//     //then takes that file and copies it to another file
//     .then(fulfilledPromiseToRead => {
//       const copy = fsPromises.writeFile('./copyREADME.md', fulfilledPromiseToRead);
//       console.log(copy);
//       return copy;
//     })
//     .then(copy => console.log(copy, 'DONE!'))
// ]);

////////////////////////////////////////////////
//A copy function that takes in a source and a destination
const copy = (src, dest) => {
  //promises to read a file and return it
  return fsPromises.readFile(src, { encoding: 'utf8' })
    //then takes the data from the returned file
    .then(data => {
      //and returns a promise to write a new file with the first file's data
      return fsPromises.writeFile(dest, data);
    });
};

module.exports = { copy };
