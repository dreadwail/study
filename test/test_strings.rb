require "test_helper"

class TestSorts < Minitest::Test

  def test_is_palindrome_nil_gets_false
    refute Algos::Strings.is_palindrome(nil)
  end

  def test_is_palindrome_empty_gets_true
    assert Algos::Strings.is_palindrome("")
  end

  def test_is_palindrome_single_gets_true
    assert Algos::Strings.is_palindrome("a")
  end

  def test_is_palindrome_palindrome
    assert Algos::Strings.is_palindrome("abcba")
  end

  def test_is_palindrome_non_palindrome
    refute Algos::Strings.is_palindrome("abcde")
  end

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

end
