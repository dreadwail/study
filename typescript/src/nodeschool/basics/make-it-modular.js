import read from './make-it-modular-lib';

const dirName = process.argv[2];
const extension = process.argv[3];

read(dirName, extension, (err, files) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Something bad happened.', err);
  } else {
    for (let i = 0; i < files.length; i += 1) {
      // eslint-disable-next-line no-console
      console.log(files[i]);
    }
  }
});
