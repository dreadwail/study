require "test_helper"
require "problem7"

class TestEuler < Minitest::Test
  include Euler

  def test_prime_at
    assert_equal 104743, prime_at(10_001)
  end

end
