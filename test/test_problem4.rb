require "test_helper"
require "problem4"

class TestProblem4 < Minitest::Test
  include Problem4

  def test_two_digits
    assert_equal 9009, largest_palindrome_product_using_digits(2)
  end

  def test_three_digits
    assert_equal 906609, largest_palindrome_product_using_digits(3)
  end

end
