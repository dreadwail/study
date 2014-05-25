require "test_helper"
require "problem67"

class TestProblem67 < Minitest::Test
  include Problem18

  def test_data_from_file
      current_path = File.expand_path(File.dirname(__FILE__))
      file = File.open(File.join(current_path, "../data/problem67.txt"), "r")
      tree_rows = file.each_line.map { |line| line.split(' ').map { |s| s.to_i } }
      assert_equal 7273, maximum_path_sum(tree_rows)
  end

end
