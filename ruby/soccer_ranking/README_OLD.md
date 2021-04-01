Thank you for your interest in Substantial.
===========================================

This is a small problem that we would like you to solve so that we can get an idea of your coding ability.
Your submission will be run in a clean environment to see if it produces the expected output. 
Please be sure to provide instructions for installing any dependancies.

What we look for
----------------
We will be looking at the quality and professionalism of your work. In particular we look for clean, well-designed, maintainable code. Although this is a rather small task, it should be approached as you would an actual task for a customer.

When you are finished
----------------------
Please push your solution to the master branch in the provided github repository.
There is no need to fork this repository to your own github account.

The Problem
===========
We want you to create a command-line application that will calculate the ranking table for a soccer league.

Input/output
------------
The input and output will be text. Either using stdin/stdout or taking filenames on the command line is fine.

The input contains results of games, one per line. See sample-input.txt for details.
The output should be ordered from most to least points, following the format specified in expected-output.txt.

You can expect that the input will be well-formed. There is no need to add special handling for malformed input files.

The rules
---------
In this league, a draw (tie) is worth 1 point and a win is worth 3 points. A loss is worth 0 points.
If two or more teams have the same number of points, they should have the same rank and be printed in alphabetical order (as in the tie for 3rd place in the sample data).

Guidelines
-----------
This should be implemented in a language with which you are familiar.
We would prefer that you use ruby, coffeescript, javascript, python, or C (in that order), if you are comfortable doing so.
If none of these is comfortable, please choose a language that is both comfortable for you and suited to the task.

If you use other libraries installed by a common package manager (rubygems/bundler, npm, pip), it is not necessary to commit the installed packages.

We write automated tests and we would like you to do so as well.

If there are any complicated setup steps necessary to run your solution, please document them.

Platform support
----------------
This will be run in a unix-ish environment (OS X).
If you choose to use a compiled language, please keep this in mind.
Please use platform-agnostic constructs where possible (line-endings and file-path-separators are two problematic areas).

Questions?
----------
Please email jobs+coding-test@substantial.com if you have any questions.
