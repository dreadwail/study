require "test_helper"
require "problem1"

class TestEuler < Minitest::Test
  include Euler

  def test_small_number
    assert_equal 78, multiples_of_3_and_5(20)
  end

  def test_actual_problem
    assert_equal 233168, multiples_of_3_and_5(1000)
  end

end

