require "minitest/autorun"
require "minitest/emoji"

require "./anagrams"

class AnagramsTest < Minitest::Test

  def test_can_find_non_anagram
    filename = "testlist.txt"
    anagrams = Anagrams.new(filename)
    assert_equal ['zzzzzzz'], anagrams.for('zzzzzzz')
  end

  def test_can_find_anagrams
    filename = "testlist.txt"
    anagrams = Anagrams.new(filename)
    assert_equal(
      ['arrest', 'raster', 'raters', 'Sartre', 'starer'].sort,
      anagrams.for('arrest').sort)
  end

end
