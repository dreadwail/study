require "test_helper"
require "problem3"

class TestEuler < Minitest::Test
  include Euler

  def test_small_values
    assert_equal 29, largest_prime_factor(13195)
  end

  def test_actual_problem
    assert_equal 6857, largest_prime_factor(600851475143)
  end

end
