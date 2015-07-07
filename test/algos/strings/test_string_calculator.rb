require "test_helper"

class TestStringCalculator < Minitest::Test

  def setup
    @calculator = Algos::Strings::Calculator.new
  end

  def test_calculate_with_empty_string
    @calculator.add("")
    assert_equal 0, @calculator.value
  end

end
