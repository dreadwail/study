require "test_helper"
require "problem22"

class TestProblem22 < Minitest::Test
  include Problem22

  def test_sample_data
    names = (1...938).map { |n| "A" }
    names << "COLIN"
    assert_equal 49714, name_scores(names).last
  end

  def test_actual_problem
    current_path = File.expand_path(File.dirname(__FILE__))
    file = File.open(File.join(current_path, "../data/problem22.txt"), "r")
    names = file.each_line.flat_map do |line| 
      line.tr('"', '').split(",") 
    end.sort
    assert_equal 871198282, name_scores(names).inject(:+)
  end


end
