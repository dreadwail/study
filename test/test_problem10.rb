require "test_helper"
require "problem10"

class TestProblem10 < Minitest::Test
  include Problem10

  def test_sample_problem
    assert_equal 17, sum_of_primes(10)
  end

  def test_sum_of_primes
    assert_equal 142913828922, sum_of_primes(2_000_000)
  end

end
