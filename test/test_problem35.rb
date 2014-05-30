require "test_helper"
require "problem35"

class TestProblem35 < Minitest::Test
  include Problem35

  def test_sample_data
    assert_equal 13, num_circular_primes(1...100)
  end

  def test_actual_problem
    assert_equal 55, num_circular_primes(1...1_000_000)
  end

end
