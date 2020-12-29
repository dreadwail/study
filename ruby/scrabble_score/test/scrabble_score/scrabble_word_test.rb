require "test_helper"

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
