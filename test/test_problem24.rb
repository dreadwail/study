require "test_helper"
require "problem24"

class TestProblem24 < Minitest::Test
  include Problem24

  def test_sample_data
    assert_equal "201", nth_lexicographic_permutation("012", 5)
    assert_equal "021", nth_lexicographic_permutation("012", 2)
  end

  def test_actual_problem
    assert_equal "2783915460", nth_lexicographic_permutation("0123456789", 1_000_000)
  end

end
