require "test_helper"
require "problem36"

class TestProblem36 < Minitest::Test
  include Problem36

  def test_sample_data
    assert_equal 585, sum_of_palindromes_in_bases(585..585, 2, 10)
  end

  def test_actual_problem
    assert_equal 872187, sum_of_palindromes_in_bases(1...1_000_000, 2, 10)
  end

end
