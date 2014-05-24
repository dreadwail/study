require "test_helper"
require "problem19"
require "date"

class TestProblem19 < Minitest::Test
  include Problem19

  def test_actual_problem
    assert_equal 171, number_of_sundays_on_first_of_months(Date.new(1901, 1, 1), Date.new(2000, 12, 31))
  end

end
