import fs from 'fs';

const file = process.argv[2];

fs.readFile(file, (err, data) => {
  if (!err) {
    const numLines = data.toString().split('\n').length - 1;
    // eslint-disable-next-line no-console
    console.log(numLines);
  }
});
