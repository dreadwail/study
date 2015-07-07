require "test_helper"

class TestStringCalculator < Minitest::Test

  def setup
    @calculator = Algos::Strings::Calculator.new
  end

  def test_calculate_with_empty_string
    @calculator.add("")
    assert_equal 0, @calculator.value
  end

  def test_calculate_with_single_string_number
    @calculator.add("4")
    assert_equal 4, @calculator.value
  end

  def test_calculate_with_two_string_numbers
    @calculator.add("4", "2")
    assert_equal 6, @calculator.value
  end

end
