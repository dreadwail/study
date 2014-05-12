require "test_helper"
require "problem9"

class TestEuler < Minitest::Test
  include Euler

  def test_pythagorean_triplet_for_product
    assert_equal 31875000, pythagorean_triplet_summing_to(1000).inject(:*)
  end

end
