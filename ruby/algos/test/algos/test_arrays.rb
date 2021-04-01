require "test_helper"

class TestArrays < Minitest::Test

  def test_sum_closest_zero_empty_array
    assert_equal [], Algos::Arrays.sum_closest_zero
  end

  def test_sum_closest_zero_single_item_array
    assert_equal [], Algos::Arrays.sum_closest_zero(10)
  end

  def test_sum_closest_zero
    assert_equal [-80, 85], Algos::Arrays.sum_closest_zero(1, 60, -10, 70, -80, 85)
  end

  def test_largest_continuous_sum_nil_gets_zero
    assert_equal 0, Algos::Arrays.largest_continuous_sum(nil)
  end

  def test_largest_continuous_sum_empty_gets_zero
    assert_equal 0, Algos::Arrays.largest_continuous_sum([])
  end

  def test_largest_continuous_sum_single_gets_single
    assert_equal 10, Algos::Arrays.largest_continuous_sum([10])
  end

  def test_largest_continuous_sum_all_positive
    assert_equal 60, Algos::Arrays.largest_continuous_sum([10, 20, 30])
  end

  def test_largest_continuous_sum_positive_negative_positive
    assert_equal 10, Algos::Arrays.largest_continuous_sum([10, -5, 5])
  end

  def test_largest_continuous_sum_negative_positive_negative
    assert_equal 10, Algos::Arrays.largest_continuous_sum([-5, 10, -3])
  end

  def test_largest_continuous_sum_sample_input
    assert_equal 8, Algos::Arrays.largest_continuous_sum([-10, 2, 3, -2, 0, 5, -15])
  end

  def test_first_non_repeating_nil_returns_nil
    assert_nil Algos::Arrays.first_non_repeating(nil)
  end

  def test_first_non_repeating_empty_returns_nil
    assert_nil Algos::Arrays.first_non_repeating("")
  end

  def test_first_non_repeating_single_returns_single
    assert_equal "a", Algos::Arrays.first_non_repeating("a")
  end

  def test_first_non_repeating_no_non_repeaters_returns_nil
    assert_nil Algos::Arrays.first_non_repeating("abcdefgabcdefg")
  end

  def test_first_non_repeating
    assert_equal "z", Algos::Arrays.first_non_repeating("abczdefgabcdefg")
  end

  def test_find_number_seen_twice_nil_gets_nil
    assert_nil Algos::Arrays.find_number_seen_twice(nil)
  end

  def test_find_number_seen_twice_empty_gets_nil
    assert_nil Algos::Arrays.find_number_seen_twice([])
  end

  def test_find_number_seen_twice_no_repeaters_gets_nil
    assert_nil Algos::Arrays.find_number_seen_twice([1,2,3,4,5])
  end

  def test_find_number_seen_twice
    assert_equal 4, Algos::Arrays.find_number_seen_twice([1,6,5,8,9,4,3,4,2,7])
  end

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
