require "test_helper"

class NoConditionalsTest < Minitest::Test

  def test_common_letters
    assert_equal ["a", "b"], NoConditionals.common_letters(["abcdde", "baccd", "eeabg"])
  end

  def test_make_change
    item_cost = 5.20
    amount_tendered = 10.00

    expected = {
      100 => 4,
      25 => 3,
      5 => 1
    }
    assert_equal expected, NoConditionals.make_change(item_cost, amount_tendered)
  end

  def test_fizz_buzz
    expected = {
      1 => "",
      2 => "",
      3 => "Fizz",
      4 => "",
      5 => "Buzz",
      6 => "Fizz",
      7 => "",
      8 => "",
      9 => "Fizz",
      10 => "Buzz",
      11 => "",
      12 => "Fizz",
      13 => "",
      14 => "",
      15 => "FizzBuzz"
    }
    assert_equal expected, NoConditionals.fizz_buzz(15)
  end

end
