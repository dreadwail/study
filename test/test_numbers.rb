require "test_helper"

class TestNumbers < Minitest::Test

  def test_romanize_one
    assert_equal "I", Algos::Numbers.romanize(1)
  end

  def test_romanize_ones
    assert_equal "II", Algos::Numbers.romanize(2)
  end

  # TODO
  #def test_romanize_special_ones
  #  assert_equal "IV", Algos::Numbers.romanize(4)
  #end

  def test_romanize_ten
    assert_equal "X", Algos::Numbers.romanize(10)
  end

  def test_romanize_tens
    assert_equal "XI", Algos::Numbers.romanize(11)
  end

  def test_romanize_fifty
    assert_equal "L", Algos::Numbers.romanize(50)
  end

  def test_romanize_fifties
    assert_equal "LI", Algos::Numbers.romanize(51)
  end

  def test_romanize_hundred
    assert_equal "C", Algos::Numbers.romanize(100)
  end

  def test_romanize_hundreds
    assert_equal "CI", Algos::Numbers.romanize(101)
  end

  def test_dec2bin_nil_gets_nil
    assert_nil Algos::Numbers.dec2bin(nil)
  end

  def test_dec2bin_empty_gets_nil
    assert_nil Algos::Numbers.dec2bin("")
  end

  def test_dec2bin_zero_gets_zero
    assert_equal "", Algos::Numbers.dec2bin("0")
  end

  def test_dec2bin_one_gets_one
    assert_equal "1", Algos::Numbers.dec2bin("1")
  end

  def test_dec2bin_all_ones
    assert_equal "11111", Algos::Numbers.dec2bin("31")
  end

  def test_dec2bin
    assert_equal "10001", Algos::Numbers.dec2bin("17")
  end

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
