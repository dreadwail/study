require "test_helper"

class TestRomanNumerals < Minitest::Test

  def test_romanize_one
    assert_equal "I", 1.to_roman_numerals
  end

  def test_romanize_ones
    assert_equal "II", 2.to_roman_numerals
  end

  def test_romanize_four
    assert_equal "IV", 4.to_roman_numerals
  end

  def test_romanize_five
    assert_equal "V", 5.to_roman_numerals
  end

  def test_romanize_nine
    assert_equal "IX", 9.to_roman_numerals
  end

  def test_romanize_ten
    assert_equal "X", 10.to_roman_numerals
  end

  def test_romanize_ten_and_one
    assert_equal "XI", 11.to_roman_numerals
  end

  def test_romanize_fifty
    assert_equal "L", 50.to_roman_numerals
  end

  def test_romanize_fifty_and_one
    assert_equal "LI", 51.to_roman_numerals
  end

  def test_romanize_hundred
    assert_equal "C", 100.to_roman_numerals
  end

  def test_romanize_hundred_and_one
    assert_equal "CI", 101.to_roman_numerals
  end

  def test_romanize_hundreds
    assert_equal "CC", 200.to_roman_numerals
  end

  def test_romanize_four_hundred
    assert_equal "CD", 400.to_roman_numerals
  end

  def test_romanize_five_hundred
    assert_equal "D", 500.to_roman_numerals
  end

  def test_romanize_nine_hundred
    assert_equal "CM", 900.to_roman_numerals
  end

  def test_romanize_thousand
    assert_equal "M", 1000.to_roman_numerals
  end

  def test_romanize_thousands
    assert_equal "MM", 2000.to_roman_numerals
  end

  def test_romanize_largest
    assert_equal "MMMCMXCIX", 3999.to_roman_numerals
  end

end
