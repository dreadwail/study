require "test_helper"
require "problem6"

class TestProblem6 < Minitest::Test
  include Problem6

  def test_small_problem
    assert_equal 2640, square_of_sums_diff_sum_of_squares(1..10)
  end

  def test_actual_problem
    assert_equal 25164150, square_of_sums_diff_sum_of_squares(1..100)
  end

end
