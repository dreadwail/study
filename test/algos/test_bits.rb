require "test_helper"

class TestBits < Minitest::Test

  def test_count_set_bits_nil
    assert_equal 0, Algos::Bits.count_set_bits(nil)
  end

  def test_count_set_bits_zero
    assert_equal 0, Algos::Bits.count_set_bits(0)
  end

  def test_count_set_bits
    assert_equal 3, Algos::Bits.count_set_bits(7)
  end

  def test_alter_pixel_transparency_invalid_small_pixel
    assert_raises(RuntimeError) do
      Algos::Bits.alter_pixel_transparency(-1, 0)
    end
  end

  def test_alter_pixel_transparency_invalid_large_pixel
    assert_raises(RuntimeError) do
      Algos::Bits.alter_pixel_transparency(0b100000000000000000000000000000000, 0)
    end
  end

  def test_alter_pixel_transparency_apply_zero
    assert_equal 0b00000000000000001111111100000000, Algos::Bits.alter_pixel_transparency(0b11111111000000001111111100000000, 0)
  end

  def test_alter_pixel_transparency_apply_one
    assert_equal 0b11111111000000001111111100000000, Algos::Bits.alter_pixel_transparency(0b11111111000000001111111100000000, 1)
  end

  def test_alter_pixel_transparency_apply_half
    assert_equal 0b01111111000000001111111100000000, Algos::Bits.alter_pixel_transparency(0b11111111000000001111111100000000, 0.5)
  end

end
