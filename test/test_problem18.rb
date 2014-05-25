require "test_helper"
require "problem18"

class TestProblem18 < Minitest::Test
  include Problem18

  def test_small
    tree_rows = []
    tree_rows << [10]
    tree_rows << [20, 30]
    assert_equal 40, maximum_path_sum(tree_rows)
  end

  def test_sample_data
    tree_rows = []
    tree_rows << [3]
    tree_rows << [7,4]
    tree_rows << [2,4,6]
    tree_rows << [8,5,9,3]
    assert_equal 23, maximum_path_sum(tree_rows)
  end

  def test_actual_problem
    tree_rows = []
    tree_rows << [75]
    tree_rows << [95,64]
    tree_rows << [17,47,82]
    tree_rows << [18,35,87,10]
    tree_rows << [20,04,82,47,65]
    tree_rows << [19,01,23,75,03,34]
    tree_rows << [88,02,77,73,07,63,67]
    tree_rows << [99,65,04,28,06,16,70,92]
    tree_rows << [41,41,26,56,83,40,80,70,33]
    tree_rows << [41,48,72,33,47,32,37,16,94,29]
    tree_rows << [53,71,44,65,25,43,91,52,97,51,14]
    tree_rows << [70,11,33,28,77,73,17,78,39,68,17,57]
    tree_rows << [91,71,52,38,17,14,91,43,58,50,27,29,48]
    tree_rows << [63,66,04,68,89,53,67,30,73,16,69,87,40,31]
    tree_rows << [04,62,98,27,23, 9,70,98,73,93,38,53,60,04,23]
    assert_equal 1074, maximum_path_sum(tree_rows)
  end

end
