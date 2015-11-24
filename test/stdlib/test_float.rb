require "test_helper"
require "stdlib"

class TestFloat < Minitest::Test

  def test_mantissa_none
    assert_equal 0, 21.0.mantissa
  end

  def test_mantissa
    assert_equal 6462112467, 21.6462112467.mantissa
  end

end
