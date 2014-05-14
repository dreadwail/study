require "test_helper"
require "range"

class RangeTest < Minitest::Test

  def test_multiples_of_any
    assert_equal [2,3,4,6,8,9,10], (1..10).multiples_of_any(2,3)
  end

end
