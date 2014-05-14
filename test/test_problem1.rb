require "test_helper"
require "problem1"

class TestProblem1 < Minitest::Test
  include Problem1

  def test_small_number
    assert_equal 78, sum_multiples_of_3_or_5(1...20)
  end

  def test_actual_problem
    assert_equal 233168, sum_multiples_of_3_or_5(1...1000)
  end

end

