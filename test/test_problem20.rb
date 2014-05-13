require "test_helper"
require "problem20"

class TestEuler < Minitest::Test
  include Euler

  def test_sample_problem
    assert_equal 27, sum_factorial_digits(10)
  end

  def test_sum_factorial_digits
    assert_equal 648, sum_factorial_digits(100)
  end

end

