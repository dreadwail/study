require "test_helper"

class TestEnumerable < Minitest::Test

  def test_is_palindrome_empty_gets_true
    assert [].palindrome?
  end

  def test_is_palindrome_single_gets_true
    assert [42].palindrome?
  end

  def test_is_palindrome
    assert [10, 20, 30, 20, 10].palindrome?
  end

  def test_is_palindrome_non_palindrome
    refute [10, 20, 30, 40, 50].palindrome?
  end

end
