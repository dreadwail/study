require "test_helper"

class TestNumbers < Minitest::Test

  def test_deromanize_one
    assert_equal 1, Algos::Numbers.deromanize("I")
  end

  def test_deromanize_two
    assert_equal 2, Algos::Numbers.deromanize("II")
  end

  def test_deromanize_four
    assert_equal 4, Algos::Numbers.deromanize("IV")
  end

  def test_deromanize_five
    assert_equal 5, Algos::Numbers.deromanize("V")
  end

  def test_deromanize_six
    assert_equal 6, Algos::Numbers.deromanize("VI")
  end

  def test_deromanize_nine
    assert_equal 9, Algos::Numbers.deromanize("IX")
  end

  def test_deromanize_ten
    assert_equal 10, Algos::Numbers.deromanize("X")
  end

  def test_deromanize_eleven
    assert_equal 11, Algos::Numbers.deromanize("XI")
  end

  def test_deromanize_fourteen
    assert_equal 14, Algos::Numbers.deromanize("XIV")
  end

  def test_deromanize_sixteen
    assert_equal 16, Algos::Numbers.deromanize("XVI")
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
