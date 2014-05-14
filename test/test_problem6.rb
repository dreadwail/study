require "test_helper"
require "problem6"

class TestEuler < Minitest::Test

  def test_small_problem
    assert_equal 2640, (1..10).square_of_sums_diff_sum_of_squares
  end

  def test_actual_problem
    assert_equal 25164150, (1..100).square_of_sums_diff_sum_of_squares
  end

end
