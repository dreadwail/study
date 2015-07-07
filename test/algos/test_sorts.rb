require "test_helper"

class TestSorts < Minitest::Test

  SORTS = [
    :selection_sort,
    :insertion_sort,
    :quick_sort,
    :merge_sort,
    :shell_sort
  ]

  SORT_DATA_LENGTH = 10

  SORTS.each do |sort|

    define_method("test_#{sort}_nil_returns_nil") do
      assert_equal nil, Algos::Sorts.send(sort, nil)
    end

    define_method("test_#{sort}_empty") do
      assert_equal [], Algos::Sorts.send(sort, [])
    end

    define_method("test_#{sort}") do
      number_of_items = 20
      junk = number_of_items.times.map { Random.rand(100) }
      sorted = Algos::Sorts.send(sort, junk)
      assert (1...number_of_items).all? { |i| sorted[i - 1] <= sorted[i] }
    end

  end

end
