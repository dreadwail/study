import net from 'net';

const port = process.argv[2];

const server = net.createServer((socket) => {
  const now = new Date();
  let output = '';
  output += now.getFullYear();
  output += '-';
  output += `0${now.getMonth() + 1}`.slice(-2);
  output += '-';
  output += `0${now.getDate()}`.slice(-2);
  output += ' ';
  output += `0${now.getHours()}`.slice(-2);
  output += ':';
  output += `0${now.getMinutes()}`.slice(-2);
  output += '\n';
  socket.end(output);
});

server.listen(port);
