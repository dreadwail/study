require "test_helper"
require "problem15"

class TestProblem15 < Minitest::Test
  include Problem15

  def test_one_by_one
    assert_equal 2, num_lattice_routes(1)
  end

  def test_two_by_two
    assert_equal 6, num_lattice_routes(2)
  end

  def test_twenty_by_twenty
    assert_equal 137846528820, num_lattice_routes(20)
  end

end
