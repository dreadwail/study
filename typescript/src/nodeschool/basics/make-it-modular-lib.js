import path from 'path';
import fs from 'fs';

const read = (dirName, extension, callback) => {
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return callback(err);
    } else {
      const files = [];
      for (let i = 0; i < list.length; i += 1) {
        const file = list[i];
        if (path.extname(file) === '.' + extension) {
          files.push(file);
        }
      }
      callback(null, files);
    }
  });
};

export default read;
