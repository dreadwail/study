# Graph Consolidator Instructions

The files in the input directory represent directed graphs. Each line
contains two tab-separated node IDs, and defines an edge. We want to
eliminate nodes that have exactly one input and one output edge, by connecting
their neighbors directly.

The output directory contains correct output for the first few graphs, which
may answer some of your questions about _ahem_ edge cases. Your challenge is
to write a program that can produce correct output for the rest!
