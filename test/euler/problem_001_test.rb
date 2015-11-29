require "test_helper"

class Problem001Test < Minitest::Test
  using Euler

  def test_can_find_sum_multiples_under_10
    assert_equal 23, (1...10).find_sum_multiples(3, 5)
  end

  def test_can_find_sum_multiples_under_1000
    assert_equal 233168, (1...1000).find_sum_multiples(3, 5)
  end

end
