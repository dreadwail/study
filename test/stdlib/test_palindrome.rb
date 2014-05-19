require "test_helper"
require "ostruct"
require "stdlib"

class TestPalindrome < Minitest::Test

  def test_nil
    assert nil.palindrome?
  end

  def test_empty_string
    assert "".palindrome?
  end
  
  def test_single_char_string
    assert "a".palindrome?
  end

  def test_even_char_palindrome_string
    assert "aa".palindrome?
  end

  def test_even_char_non_palindrome_string
    refute "ab".palindrome?
  end

  def test_odd_char_palindrome_string
    assert "aba".palindrome?
  end

  def test_odd_char_non_palindrome_string
    refute "aab".palindrome?
  end

  def test_fixnum_zero
    assert 0.palindrome?
  end

  def test_fixnum_positive_palindrome
    assert 5.palindrome?
  end

  def test_fixnum_positive_non_palindrome
    refute 15.palindrome?
  end

  def test_fixnum_single_digit_negative
    refute -5.palindrome?
  end

  def test_fixnum_double_digit_negative_palindrome
    refute -55.palindrome?
  end

  def test_fixnum_double_digit_negative_non_palindrome
    refute -51.palindrome?
  end

  Arbitrary = Struct.new(:name) do
    def to_s
      name
    end
  end

  def test_arbitrary_class_with_palindrome_to_s
    assert Arbitrary.new("aba").palindrome?
  end

  def test_arbitrary_class_with_non_palindrome_to_s
    refute Arbitrary.new("abb").palindrome?
  end

end
