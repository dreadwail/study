require "test_helper"
require "problem3"

class TestProblem3 < Minitest::Test

  def test_small_values
    assert_equal 29, 13195.largest_prime_factor
  end

  def test_actual_problem
    assert_equal 6857, 600851475143.largest_prime_factor
  end

end
