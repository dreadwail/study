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

end
