require "test_helper"
require "problem14"

class TestEuler < Minitest::Test
  include Euler

  def test_actual_problem
    assert_equal 837799, longest_collatz_sequence_from(0..1_000_000).first
  end

end

