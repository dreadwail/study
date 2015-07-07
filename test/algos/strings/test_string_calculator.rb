require "test_helper"

class TestStringCalculator < Minitest::Test

  def setup
    @calculator = Algos::Strings::Calculator.new
  end

  def test_calculate_with_empty_string
    @calculator.add("")
    assert_equal 0, @calculator.value
  end

  def test_calculate_with_one_numbers
    @calculator.add("4")
    assert_equal 4, @calculator.value
  end

  def test_calculate_with_two_numbers
    @calculator.add("4", "2")
    assert_equal 6, @calculator.value
  end

  def test_calculate_with_one_number_one_empty
    @calculator.add("4", "")
    assert_equal 4, @calculator.value
  end

  def test_calculate_with_all_empty
    @calculator.add("", "")
    assert_equal 0, @calculator.value
  end

  def test_calculate_with_three_numbers
    @calculator.add("2", "4", "6")
    assert_equal 12, @calculator.value
  end

  def test_calculate_with_addition_of_ten
    @calculator.add("10")
    assert_equal 10, @calculator.value
  end

  def test_calculate_with_unknown_number_of_numbers
    numbers = Random.new.rand(1..20).times.map { Random.new.rand(1..20) }
    actual_sum = numbers.inject(:+)
    @calculator.add(*numbers.map(&:to_s))
    assert_equal actual_sum, @calculator.value
  end

  def test_calculate_one_negative
    @calculator.add("-2")
    assert_equal -2, @calculator.value
  end

end
