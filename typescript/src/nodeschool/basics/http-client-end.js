import http from 'http';

const url = process.argv[2];
let output = '';

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    output += data;
  });
  response.on('end', () => {
    // eslint-disable-next-line no-console
    console.log(output.length);
    // eslint-disable-next-line no-console
    console.log(output);
  });
});
