require "test_helper"
require "problem1"

class TestEuler < Minitest::Test
  include Euler

  def test_multiples_of_3_and_5
    assert_equal 78, multiples_of_3_and_5(20)
  end

end

