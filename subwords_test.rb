require "minitest/autorun"

require "./subwords"

class SubwordsTest < Minitest::Test

  def test_can_find_subwords
    dictionary = Dictionary.new("testlist.txt")
    words_and_sub_words = dictionary.all_sub_words

    assert_equal({
      "albums" => [Pair.new("al", "bums")],
      "barely" => [Pair.new("bar", "ely")],
      "foobar" => [Pair.new("fo", "obar"), Pair.new("foo", "bar")]
    }, words_and_sub_words)
  end

end
