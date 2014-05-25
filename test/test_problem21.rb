require "test_helper"
require "problem21"

class TestProblem21 < Minitest::Test
  include Problem21

  def test_sample_amicable
    assert amicable?(220)
    assert amicable?(284)
  end

  def test_actual_problem
    assert_equal 31626, sum_of_amicable_to(10000)
  end

end
