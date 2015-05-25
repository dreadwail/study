require "test_helper"

class TestNumbers < Minitest::Test

  def test_bin2dec_nil_gets_nil
    assert_nil Algos::Numbers.bin2dec(nil)
  end

  def test_bin2dec_empty_gets_nil
    assert_nil Algos::Numbers.bin2dec("")
  end

  def test_bin2dec_zero
    assert_equal "0", Algos::Numbers.bin2dec("0")
  end

  def test_bin2dec_one
    assert_equal "1", Algos::Numbers.bin2dec("1")
  end

  def test_bin2dec_all_ones
    assert_equal "31", Algos::Numbers.bin2dec("11111")
  end

  def test_bin2dec
    assert_equal "17", Algos::Numbers.bin2dec("10001")
  end

end
