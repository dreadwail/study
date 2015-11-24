require "test_helper"

class Problem001Test < Minitest::Test
  include Euler

  def test_can_find_sum_multiples_under_10
    assert_equal 23, find_sum_multiples(3, 5, max: 10)
  end

  def test_can_find_sum_multiples_under_1000
    assert_equal 233168, find_sum_multiples(3, 5, max: 1000)
  end

end
