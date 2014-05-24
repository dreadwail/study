require "test_helper"
require "problem29"

class TestProblem29 < Minitest::Test
  include Problem29

  def test_sample_data
    assert_equal [4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125], distinct_powers(2,5)
  end

  def test_actual_problem
    assert_equal 9183, distinct_powers(2,100).length
  end

end

