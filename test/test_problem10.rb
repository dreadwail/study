require "test_helper"
require "problem10"

class TestEuler < Minitest::Test
  include Euler

  def test_sum_of_primes
    assert_equal 142913828922, sum_of_primes(2_000_000)
  end

end
