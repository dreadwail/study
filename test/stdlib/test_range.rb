require "test_helper"
require "stdlib"

class RangeTest < Minitest::Test

  def test_multiples_of_any
    assert_equal [2,3,4,6,8,9,10], (1..10).multiples_of_any(2,3)
  end

  def test_sum_of_squares
    assert_equal 385, (1..10).sum_of_squares
  end

  def test_square_of_sums
    assert_equal 3025, (1..10).square_of_sums
  end

end
