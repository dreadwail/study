require "test_helper"

class TestArrays < Minitest::Test

  def test_array_hopper_single_el
    assert_equal [5], Algos::Arrays.array_hopper([5])
  end

  def test_array_hopper
    assert_equal 3, Algos::Arrays.array_hopper([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])
  end

  def test_array_hopper_clever_case
    assert_equal 2, Algos::Arrays.array_hopper([4, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  end

end
