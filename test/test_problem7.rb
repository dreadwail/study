require "test_helper"
require "problem7"

class TestProblem7 < Minitest::Test
  include Problem7

  def test_small_problem
    assert_equal 11, prime_at(5)
  end

  def test_prime_at
    assert_equal 104743, prime_at(10_001)
  end

end
