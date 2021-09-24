import fs from 'fs';

const file = process.argv[2];

const buffer = fs.readFileSync(file);
const numLines = buffer.toString().split('\n').length - 1;

// eslint-disable-next-line no-console
console.log(numLines);
