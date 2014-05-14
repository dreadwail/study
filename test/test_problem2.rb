require "test_helper"
require "problem2"

class TestProblem2 < Minitest::Test
  include Fib

  def test_zero
    assert_equal 0, sum_even_fibs_to(0)
  end

  def test_one
    assert_equal 0, sum_even_fibs_to(1)
  end

  def test_small_values
    assert_equal 44, sum_even_fibs_to(100)
  end

  def test_actual_problem
    assert_equal 4613732, sum_even_fibs_to(4000000)
  end

end
