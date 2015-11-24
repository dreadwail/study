require "test_helper"
require "problem26"
require "bigdecimal"

class TestEuler < Minitest::Test
  include Euler

  def test_longest_fraction_repeater_in_1000
    assert_equal 983, longest_fraction_repeater(2...1000)
  end

  def test_longest_fraction_repeater_in_sample_data
    assert_equal 7, longest_fraction_repeater(2..10)
  end

  def test_longest_repeat
    assert_equal 1234, longest_repeat(12341234)
  end

  def test_longest_repeat_none
    assert_nil longest_repeat(1234134)
  end

  def test_repeats_same
    refute repeated_in(12, 12)
  end

  def test_repeats_twice
    assert repeated_in(12, 1212)
  end

  def test_none_repeater
    refute repeated_in(285714285714, 14285714285714285)
    #refute repeated_in(1, 1212)
  end

end
