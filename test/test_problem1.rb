require "test_helper"
require "problem1"

class TestProblem1 < Minitest::Test

  def test_small_number
    assert_equal 78, (1...20).sum_multiples_of_3_and_5
  end

  def test_actual_problem
    assert_equal 233168, (1...1000).sum_multiples_of_3_and_5
  end

end

