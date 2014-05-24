require "test_helper"
require "stdlib"
require "problem12"

class TestProblem12 < Minitest::Test
  include Problem12

  def test_triangle_numbers
    assert_equal 28, triangle_number(7)
  end

  def test_sample_data
    assert_equal [1,3,6,10,15,21,28,36,45,55], (1..10).map { |n| triangle_number(n) }
  end

  def test_sample_data_factors
    assert_equal [1],             triangle_number(1).factors
    assert_equal [1,3],           triangle_number(2).factors
    assert_equal [1,2,3,6],       triangle_number(3).factors
    assert_equal [1,2,5,10],      triangle_number(4).factors
    assert_equal [1,3,5,15],      triangle_number(5).factors
    assert_equal [1,3,7,21],      triangle_number(6).factors
    assert_equal [1,2,4,7,14,28], triangle_number(7).factors
  end

  def test_first_triangle_with_factor_count
    assert_equal 28, first_triangle_number_with_factor_count(5)
  end

  def test_actual_problem
    assert_equal 76576500, first_triangle_number_with_factor_count(500)
  end

end
