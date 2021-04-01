require "test_helper"

class TestBinaryTree < Minitest::Test

  def setup
    @tree = DataStruct::BinaryTree.new
  end

  def test_empty_tree
    assert_equal [], @tree.to_a
  end

  def test_can_add_elements_to_empty_tree
    @tree.add 10
    assert_equal [10], @tree.to_a
  end

  def test_can_add_elements_to_non_empty_tree
    @tree.add 10
    @tree.add 5
    assert_equal [10, 5], @tree.to_a
  end

  def test_can_add_elements_in_correct_places
    test_can_traverse_preorder
  end

  def test_remove_from_empty_raises
    assert_raises StandardError do
      @tree.remove 5
    end
  end

  def test_remove_from_solo
    @tree.add 10
    @tree.remove 10
    assert_equal [], @tree.to_a
  end
  
  def test_remove_leaf
    @tree.add 10
    @tree.add 5
    @tree.remove 5
    assert_equal [10], @tree.to_a
  end

  def test_remove_non_leaf
    @tree.add 10
    @tree.add 5
    @tree.remove 10
    assert_equal [5], @tree.to_a
  end
  
  def test_can_add_duplicates
    @tree.add 10
    @tree.add 10
    assert_equal [10, 10], @tree.to_a
  end

  def test_remove_only_removes_one_instance
    @tree.add 10
    @tree.add 10
    @tree.remove 10
    assert_equal [10], @tree.to_a
  end

  def test_can_traverse_preorder
    [10,5,15,16,3,7].each { |v| @tree.add v }
    assert_equal [10, 5, 3, 7, 15, 16], @tree.to_a(:preorder)
  end

  def test_can_traverse_inorder
    [10,5,15,16,3,7].each { |v| @tree.add v }
    assert_equal [3, 5, 7, 10, 15, 16], @tree.to_a(:inorder)
  end

  def test_can_traverse_postorder
    [10,5,15,16,3,7].each { |v| @tree.add v }
    assert_equal [3, 7, 5, 16, 15, 10], @tree.to_a(:postorder)
  end

  def test_can_determine_size_of_empty_tree
    assert_equal 0, @tree.size
  end

  def test_can_determine_size_of_non_empty_tree
    node_count = rand(20)
    node_count.times do |i|
      @tree.add i
    end
    assert_equal node_count, @tree.size
  end

end
