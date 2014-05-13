require "test_helper"
require "problem16"

class TestEuler < Minitest::Test
  include Euler

  def test_actual_problem
    assert_equal 1366, sum_digits(2**1000)
  end

end
