require "test_helper"

class TestSequence < Minitest::Test

  def test_sum_two_largest_of_none_gets_zero
    assert_equal 0, Algos::Sequence.new.sum_two_largest
  end

  def test_sum_two_largest_of_empty_gets_zero
    assert_equal 0, Algos::Sequence.new([]).sum_two_largest
  end

  def test_sum_two_largest
    assert_equal 72, Algos::Sequence.new(60, 2, 9, 1, 5, 3, 12).sum_two_largest
  end

end
