require "test_helper"
require "problem34"

class TestProblem34 < Minitest::Test
  include Problem34

  def test_sum_of_factorials_of_digits_145
    assert_equal 145, sum_of_factorials_of_digits(145)
  end

  def test_sum_of_factorials_of_digits_342
    assert_equal 32, sum_of_factorials_of_digits(342)
  end

  def test_actual_problem
    assert_equal 40730, sum_of_numbers_whose_digit_factorials_is_number
  end

end
