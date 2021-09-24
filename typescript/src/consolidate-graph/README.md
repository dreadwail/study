# Graph Consolidator

_PLEASE NOTE: This code was written way WAY back when I didn't really know Javascript or Node.js very well, and was pre-ES6. There are lots of things wrong with this but I've not had time to come back and clean it up._

Consolidates directed graph nodes that have only 1 input and 1 output.

See [INSTRUCTIONS.md](INSTRUCTIONS.md) for the full problem description.

## Tests

To run the tests:

`node run_tests.js`

## Running

To run the program against input, pipe it in from stdin:

`cat input/5 | node consolidator.js`
