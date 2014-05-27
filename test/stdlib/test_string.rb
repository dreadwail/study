require "test_helper"
require "stdlib"

class TestString < Minitest::Test

  def test_letter_value
    assert_equal 3, "c".alphabetical_value
  end

  def test_word_value
    assert_equal 53, "colin".alphabetical_value
  end

end

