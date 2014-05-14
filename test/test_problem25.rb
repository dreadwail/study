require "test_helper"
require "problem25"

class TestEuler < Minitest::Test
  include Euler

  def test_sample
    assert_equal 12, first_fib_with_digit_count(3)
  end

  def test_actual_problem
    assert_equal 4782, first_fib_with_digit_count(1000)
  end

end

