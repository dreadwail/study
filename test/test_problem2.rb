require "test_helper"
require "problem2"

class TestEuler < Minitest::Test
  include Euler

  def test_zero
    assert_equal 0, sum_even_fibs(0)
  end

  def test_one
    assert_equal 0, sum_even_fibs(1)
  end

  def test_small_values
    assert_equal 44, sum_even_fibs(100)
  end

  def test_actual_problem
    assert_equal 4613732, sum_even_fibs(4000000)
  end

end
