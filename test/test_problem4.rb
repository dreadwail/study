require "test_helper"
require "problem4"

class TestEuler < Minitest::Test
  include Euler

  def test_two_digits
    assert_equal 9009, largest_pair_with_palindrome_product(2).inject(:*)
  end

  def test_three_digits
    assert_equal 906609, largest_pair_with_palindrome_product(3).inject(:*)
  end

end
