require "test_helper"

class TestBits < Minitest::Test

  def test_bit_count_zero
    assert_equal 0, 0.bit_count
  end

  def test_bit_count
    assert_equal 3, 7.bit_count 
  end

end
