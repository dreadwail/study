import path from 'path';
import fs from 'fs';

const directoryName = process.argv[2];
const extension = process.argv[3];

fs.readdir(directoryName, (err, list) => {
  for (let i = 0; i < list.length; i += 1) {
    const file = list[i];
    if (path.extname(file) === '.' + extension) {
      // eslint-disable-next-line no-console
      console.log(file);
    }
  }
});
