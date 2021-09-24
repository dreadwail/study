import http from 'http';

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });
});
