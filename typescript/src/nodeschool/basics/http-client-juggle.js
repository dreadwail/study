import http from 'http';

const urls = process.argv.slice(2, 5);
const outputs = ['', '', ''];
const done = [false, false, false];

const maybePrint = () => {
  if (done[0] && done[1] && done[2]) {
    // eslint-disable-next-line no-console
    console.log(outputs[0]);
    // eslint-disable-next-line no-console
    console.log(outputs[1]);
    // eslint-disable-next-line no-console
    console.log(outputs[2]);
  }
};

const retrieve = (index) => {
  http.get(urls[index], (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      outputs[index] += data;
    });
    response.on('end', () => {
      done[index] = true;
      maybePrint();
    });
  });
};

for (let idx = 0; idx < 3; idx += 1) {
  retrieve(idx);
}
