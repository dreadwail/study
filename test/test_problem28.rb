require "test_helper"
require "problem28"

class TestProblem28 < Minitest::Test
  include Problem28

  def test_sample_problem
    assert_equal 101, sum_spiral_diagonals(5)
  end

  def test_actual_problem
    assert_equal 669171001, sum_spiral_diagonals(1001)
  end

  def test_spiral_one
    expected_spiral = []
    expected_spiral << [1]
    assert_equal expected_spiral, generate_spiral(1)
  end

  def test_spiral_three
    expected_spiral = []
    expected_spiral << [7, 8, 9]
    expected_spiral << [6, 1, 2]
    expected_spiral << [5, 4, 3]
    assert_equal expected_spiral, generate_spiral(3)
  end

  def test_spiral_five
    expected_spiral = []
    expected_spiral << [21, 22, 23, 24, 25]
    expected_spiral << [20,  7,  8,  9, 10]
    expected_spiral << [19,  6,  1,  2, 11]
    expected_spiral << [18,  5,  4,  3, 12]
    expected_spiral << [17, 16, 15, 14, 13]
    assert_equal expected_spiral, generate_spiral(5)
  end

end
