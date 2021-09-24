let sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += parseInt(process.argv[i]);
}
// eslint-disable-next-line no-console
console.log(sum);
