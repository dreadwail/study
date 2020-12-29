require "minitest/autorun"
require "minitest/pride"

require "./string_calculator"

class StringCalculatorTest < Minitest::Test

  def test_can_handle_empty_string
    string_calculator = StringCalculator.new
    string_calculator.add("")
    assert_equal 0, string_calculator.result
  end

  def test_can_add_one_number
    string_calculator = StringCalculator.new
    string_calculator.add("2")
    assert_equal 2, string_calculator.result
  end

  def test_can_handle_two_numbers
    string_calculator = StringCalculator.new
    string_calculator.add("2,1")
    assert_equal 3, string_calculator.result
  end

  def test_can_handle_negatives
    string_calculator = StringCalculator.new
    string_calculator.add("2,-1")
    assert_equal 1, string_calculator.result
  end

  def test_can_handle_spaces
    string_calculator = StringCalculator.new
    string_calculator.add("2, 1")
    assert_equal 3, string_calculator.result
  end

  def test_can_handle_newlines
    string_calculator = StringCalculator.new
    string_calculator.add("1\n2,3", delimiters: [",", "\n"])
    assert_equal 6, string_calculator.result
  end

  def test_can_handle_invalid_input_because_wheeee
    string_calculator = StringCalculator.new
    string_calculator.add("1,\n", delimiters: [",", "\n"])
    assert_equal 1, string_calculator.result
  end

end
