# Scrabble Score

We will be writing a program that, given a word, computes the scrabble score for that word.

## Constraint

However, it is not enough to simply solve the problem. Sometimes constraints help to inspire new ways of thinking about code. In this week's exercise we will be solving the problem with **no assignment operators**. This means you are not allowed to use the `=` to assign values to variables. Try and think about the problem in terms of pure functions that operate on data to return an answer.

## What is Scrabble?

From wikipedia:

> Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a gameboard which is divided into a 15×15 grid of squares. The tiles must form words which, in crossword fashion, flow left to right in rows or downwards in columns. The words must be defined in a standard dictionary.

## Rules

The scoring rules for scrabble vary based on what letters appear in the constructed words.

For the purposes of this code kata we will not consider "double" or "triple" bonus squares in scoring.

Scoring values:

```
Letter                           Value
----------------------------------------
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

## Examples

"cabbage" would be scored as worth 14 points:

```
3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
```

So totaled:

```
3 + 2*1 + 2*3 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14
```

## Test Suite

Here is a test suite that you can use if you would like. You can remove each `skip` as you make that case pass.

```ruby
class ScrabbleWordTest < Minitest::Test
  def test_empty_word_scores_zero
    skip
    assert_equal 0, ScrabbleWord.new('').score
  end

  def test_whitespace_scores_zero
    skip
    assert_equal 0, ScrabbleWord.new(" \t\n").score
  end

  def test_nil_scores_zero
    skip
    assert_equal 0, ScrabbleWord.new(nil).score
  end

  def test_scores_very_short_word
    skip
    assert_equal 1, ScrabbleWord.new('a').score
  end

  def test_scores_other_very_short_word
    skip
    assert_equal 4, ScrabbleWord.new('f').score
  end

  def test_simple_word_scores_the_number_of_letters
    skip
    assert_equal 6, ScrabbleWord.new('street').score
  end

  def test_complicated_word_scores_more
    skip
    assert_equal 22, ScrabbleWord.new('quirky').score
  end

  def test_scores_are_case_insensitive
    skip
    assert_equal 41, ScrabbleWord.new('OXYPHENBUTAZONE').score
  end

  def test_convenient_scoring
    skip
    assert_equal 13, ScrabbleWord.score('alacrity')
  end
end
```

## Ruby Starter Repo

Contained in this repo is a starter kit for ruby that will help you move past the boilerplate of creating a new project quickly. You do not need to use it; it is provided for your benefit only if you want it. The test cases above are ready to go.
