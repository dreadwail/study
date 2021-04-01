require "test_helper"

class TestPalindrome < Minitest::Test

  def test_is_palindrome_empty_gets_true
    assert "".palindrome?
  end

  def test_is_palindrome_single_gets_true
    assert "a".palindrome?
  end

  def test_is_palindrome_palindrome
    assert "abcba".palindrome?
  end

  def test_is_palindrome_non_palindrome
    refute "abcde".palindrome?
  end

end
