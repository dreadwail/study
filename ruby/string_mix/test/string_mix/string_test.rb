require "test_helper"

class StringTest < Minitest::Test
  using StringMix

  def test_mix_example_1
    assert_equal "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss", 
      "my&friend&Paul has heavy hats! &".mix("my friend John has many many friends &")
  end

end
