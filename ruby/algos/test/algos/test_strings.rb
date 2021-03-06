require "test_helper"

class TestStrings < Minitest::Test

  def test_is_rotation_false_case
    refute Algos::Strings.is_rotation("testing", "ngetsti")
  end

  def test_is_rotation
    assert Algos::Strings.is_rotation("testing", "ngtesti")
  end

  def test_reverse_string_with_nil
    assert_equal nil, Algos::Strings.reverse_string(nil)
  end

  def test_reverse_string_with_empty
    assert_equal "", Algos::Strings.reverse_string("")
  end

  def test_reverse_string_with_single_char
    assert_equal "a", Algos::Strings.reverse_string("a")
  end

  def test_reverse_string
    assert_equal "bmal elttil a dah yram", Algos::Strings.reverse_string("mary had a little lamb")
  end

  def test_reverse_words_with_nil
    assert_equal nil, Algos::Strings.reverse_words(nil)
  end

  def test_reverse_words_with_empty
    assert_equal "", Algos::Strings.reverse_words("")
  end

  def test_reverse_words_with_single_char
    assert_equal "a", Algos::Strings.reverse_words("a")
  end

  def test_reverse_words_with_space_at_start
    assert_equal "the ", Algos::Strings.reverse_words(" the")
  end

  def test_reverse_words_with_space_at_end
    assert_equal " the", Algos::Strings.reverse_words("the ")
  end

  def test_reverse_words
    assert_equal "lamb little a had mary", Algos::Strings.reverse_words("mary had a little lamb")
  end

  def test_strstr_nil_haystack
    assert_equal -1, Algos::Strings.strstr(nil, "foo")
  end

  def test_strstr_nil_needle
    assert_equal -1, Algos::Strings.strstr("foo", nil)
  end

  def test_strstr_empty_haystack
    assert_equal -1, Algos::Strings.strstr("", "foo")
  end

  def test_strstr_empty_needle
    assert_equal -1, Algos::Strings.strstr("foo", "")
  end

  def test_strstr_can_find_needle_in_haystack
    assert_equal 3, Algos::Strings.strstr("foobar", "bar")
  end

end
