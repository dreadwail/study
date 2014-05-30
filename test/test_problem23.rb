require "test_helper"
require "problem23"

class TestProblem23 < Minitest::Test
  include Problem23

  def test_actual_problem
    assert_equal 4179871, sum_uncomposable_by_two_abundants(1..28123)
  end

end
