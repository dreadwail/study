BenLakeySoccer
==============

A command-line application that will calculate the ranking table for a soccer league.

In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A loss is worth 0 points.
If two or more teams have the same number of points, they should have the same rank and be printed in alphabetical order (as in the tie for 3rd place in the sample data).

Setup
-----

    $ gem build benlakey_soccer.gemspec 
    $ gem install ./benlakey_soccer-1.0.0.gem 

Running the tests
-----------------

    $ rake test

    Run options: --seed 41642
    
    # Running:
    
    .........

    Finished in 0.001480s, 6081.0811 runs/s, 6756.7568 assertions/s.

    9 runs, 10 assertions, 0 failures, 0 errors, 0 skips
    

Running the command-line
------------------------

    $ benlakey_soccer sample-input.txt

