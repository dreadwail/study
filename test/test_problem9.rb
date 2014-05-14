require "test_helper"
require "problem9"

class TestProblem9 < Minitest::Test
  include Problem9

  def test_small_number
    assert_equal [3,4,5], pythagorean_triplet_summing_to(12)
  end

  def test_pythagorean_triplet_for_product
    assert_equal 31875000, pythagorean_triplet_summing_to(1000).inject(:*)
  end

end
