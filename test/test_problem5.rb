require "test_helper"
require "problem5"

class TestEuler < Minitest::Test

  def test_small_problem
    assert_equal 2520, (1..10).smallest_divisible_by_all
  end

  def test_actual_problem
    assert_equal 232792560, (1..20).smallest_divisible_by_all
  end

end
