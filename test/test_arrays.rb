require "test_helper"

class TestArrays < Minitest::Test

  def test_find_missing_number_in_ascending_consecutives
    numbers = 100
    arr = (0..numbers).to_a.shuffle
    removed = arr.delete rand(numbers)
    missing = Algos::Arrays.find_missing_number_in_ascending_consecutives(arr, numbers)
    assert_equal removed, missing
  end

  def test_array_hopper_single_el
    assert_equal [5], Algos::Arrays.array_hopper([5])
  end

  def test_array_hopper
    assert_equal 3, Algos::Arrays.array_hopper([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])
  end

  def test_array_hopper_clever_case
    assert_equal 2, Algos::Arrays.array_hopper([4, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  end

  def test_binary_search_nil_returns_nil
    assert_nil Algos::Arrays.binary_search(nil, 42)
  end
  
  def test_binary_search_empty_array_returns_nil
    assert_nil Algos::Arrays.binary_search([], 42)
  end

  def test_binary_search_can_find_in_even_count_array
    assert_equal 2, Algos::Arrays.binary_search([10, 20, 42, 30], 42)
  end

  def test_binary_search_can_find_in_odd_count_array
    assert_equal 3, Algos::Arrays.binary_search([10, 20, 22, 42, 30], 42)
  end

  def test_binary_search_not_in_array
    assert_nil Algos::Arrays.binary_search([10,20,30], 42)
  end

end
