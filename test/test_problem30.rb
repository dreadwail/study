require "test_helper"
require "problem30"

class TestProblem30 < Minitest::Test
  include Problem30

  def test_digits
    assert_equal [1,6,3,4], digits(1634)
  end

  def test_sample_data
    assert_equal [1634, 8208, 9474], numbers_equaling_sum_of_nth_power_of_digits(4)
  end

  def test_actual_problem
    assert_equal 443839, numbers_equaling_sum_of_nth_power_of_digits(5).inject(:+)
  end

end

