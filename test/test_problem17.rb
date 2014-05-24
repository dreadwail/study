require "test_helper"
require "problem17"

class TestProblem17 < Minitest::Test
  include Problem17

  def test_sample_data
    assert_equal 19, num_chars_in_num_words(1..5)
  end

  def test_actual_problem
    assert_equal 21124, num_chars_in_num_words(1..1000)
  end

end

