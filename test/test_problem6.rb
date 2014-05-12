require "test_helper"
require "problem6"

class TestEuler < Minitest::Test
  include Euler

  def test_small_problem
    assert_equal 2640, sum_square_difference(1..10)
  end

  def test_actual_problem
    assert_equal 25164150, sum_square_difference(1..100)
  end

end
