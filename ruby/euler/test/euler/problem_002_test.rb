require "test_helper"

class Problem002Test < Minitest::Test
  include Euler

  def test_can_find_fib_0
    assert_equal 1, fib(0)
  end

  def test_can_find_fib_1
    assert_equal 1, fib(1)
  end

  def test_can_find_fib_n
    assert_equal 89, fib(10)
  end

  def test_can_find_sum_even_fib_values_less_than_100
    assert_equal 44, sum_even_fibs(max: 100)
  end

  def test_can_find_sum_even_fib_values_less_than_4_million
    assert_equal 4613732, sum_even_fibs(max: 4_000_000)
  end

end
