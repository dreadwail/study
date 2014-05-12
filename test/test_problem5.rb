require "test_helper"
require "problem5"

class TestEuler < Minitest::Test
  include Euler

  def test_small_problem
    assert_equal 2520, divisible_by_all(1..10)
  end

  def test_actual_problem
    assert_equal 232792560, divisible_by_all(1..20)
  end

end
