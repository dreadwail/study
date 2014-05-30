require "test_helper"
require "stdlib"

class TestFixnum < Minitest::Test

  def test_factorial_zero
    assert_equal 1, 0.factorial
  end

  def test_factorial_one
    assert_equal 1, 1.factorial
  end

  def test_factorial_two
    assert_equal 2, 2.factorial
  end

  def test_factorial_three
    assert_equal 6, 3.factorial
  end

  def test_factorial_99
    assert_equal 933262154439441526816992388562667004907159682643816214685929638952175999932299156089414639761565182862536979208272237582511852109168640000000000000000000000, 99.factorial
  end

  def test_triangle_numbers
    assert 29, 13195.largest_prime_factor
  end

  def test_zero
    assert_equal [], 0.factors
  end

  def test_one
    assert_equal [1], 1.factors
  end

  def test_factors_1
    assert_equal [1,3,5,9,15,45], 45.factors
  end

  def test_factors_2
    assert_equal [1,2,4,7,14,28], 28.factors
  end

  def test_factors_3
    assert_equal [1,5,25], 25.factors
  end

  def test_huge_number_factors
    assert_equal [99000000, 49500000, 33000000, 24750000, 19800000, 16500000, 12375000, 11000000, 9900000, 9000000, 8250000, 6600000, 6187500, 5500000, 4950000, 4500000, 4125000, 3960000, 3300000, 3093750, 3000000, 2750000, 2475000, 2250000, 2200000, 2062500, 1980000, 1800000, 1650000, 1546875, 1500000, 1375000, 1320000, 1237500, 1125000, 1100000, 1031250, 1000000, 990000, 900000, 825000, 792000, 750000, 687500, 660000, 618750, 600000, 562500, 550000, 515625, 500000, 495000, 450000, 440000, 412500, 396000, 375000, 360000, 343750, 330000, 309375, 300000, 281250, 275000, 264000, 250000, 247500, 225000, 220000, 206250, 200000, 198000, 187500, 180000, 171875, 165000, 158400, 150000, 140625, 137500, 132000, 125000, 123750, 120000, 112500, 110000, 103125, 100000, 99000, 93750, 90000, 88000, 82500, 79200, 75000, 72000, 68750, 66000, 62500, 61875, 60000, 56250, 55000, 52800, 50000, 49500, 46875, 45000, 44000, 41250, 40000, 39600, 37500, 36000, 34375, 33000, 31680, 31250, 30000, 28125, 27500, 26400, 25000, 24750, 24000, 22500, 22000, 20625, 20000, 19800, 18750, 18000, 17600, 16500, 15840, 15625, 15000, 14400, 13750, 13200, 12500, 12375, 12000, 11250, 11000, 10560, 10000, 9900, 9375, 9000, 8800, 8250, 8000, 7920, 7500, 7200, 6875, 6600, 6336, 6250, 6000, 5625, 5500, 5280, 5000, 4950, 4800, 4500, 4400, 4125, 4000, 3960, 3750, 3600, 3520, 3300, 3168, 3125, 3000, 2880, 2750, 2640, 2500, 2475, 2400, 2250, 2200, 2112, 2000, 1980, 1875, 1800, 1760, 1650, 1600, 1584, 1500, 1440, 1375, 1320, 1250, 1200, 1125, 1100, 1056, 1000, 990, 960, 900, 880, 825, 800, 792, 750, 720, 704, 660, 625, 600, 576, 550, 528, 500, 495, 480, 450, 440, 400, 396, 375, 360, 352, 330, 320, 300, 288, 275, 264, 250, 240, 225, 220, 200, 198, 192, 180, 176, 165, 160, 150, 144, 132, 125, 120, 110, 100, 99, 96, 90, 88, 80, 75, 72, 66, 64, 60, 55, 50, 48, 45, 44, 40, 36, 33, 32, 30, 25, 24, 22, 20, 18, 16, 15, 12, 11, 10, 9, 8, 6, 5, 4, 3, 2, 1].reverse, 99000000.factors
  end

  def test_one_thru_nine
    assert_equal "one",     1.to_words
    assert_equal "two",     2.to_words
    assert_equal "three",   3.to_words
    assert_equal "four",    4.to_words
    assert_equal "five",    5.to_words
    assert_equal "six",     6.to_words
    assert_equal "seven",   7.to_words
    assert_equal "eight",   8.to_words
    assert_equal "nine",    9.to_words
  end

  def test_ten_thru_nineteen
    assert_equal "ten",        10.to_words
    assert_equal "eleven",     11.to_words
    assert_equal "twelve",     12.to_words
    assert_equal "thirteen",   13.to_words
    assert_equal "fourteen",   14.to_words
    assert_equal "fifteen",    15.to_words
    assert_equal "sixteen",    16.to_words
    assert_equal "seventeen",  17.to_words
    assert_equal "eighteen",   18.to_words
    assert_equal "nineteen",   19.to_words
  end

  def test_twenties
    assert_equal "twenty one",  21.to_words
    assert_equal "twenty two",  22.to_words
  end

  def test_one_hundred
    assert_equal "one hundred", 100.to_words
  end

  def test_hundreds
    assert_equal "three hundred and forty two", 342.to_words
  end

  def test_one_thousand
    assert_equal "one thousand", 1000.to_words
  end

  def test_616
    assert_equal "six hundred and sixteen", 616.to_words
  end

  def test_115
    assert_equal "one hundred and fifteen", 115.to_words
  end

  def test_103
    assert_equal "one hundred and three", 103.to_words
  end

  def test_112
    assert_equal "one hundred and twelve", 112.to_words
  end

  def test_digits_zero
    assert_equal [0], 0.digits
  end

  def test_digits_one
    assert_equal [1], 1.digits
  end

  def test_digits
    assert_equal [1,4,2], 142.digits
  end

end
