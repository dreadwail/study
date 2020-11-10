require "minitest/autorun"
require "minitest/pride"
require_relative "bst"

class BSTTest < Minitest::Test

  def setup
    @bst = BST.new
  end

  def test_include_can_identify_missing_values
    refute @bst.include?(6)
  end

  def test_include_can_identify_present_values
    @bst.insert(5)
    @bst.insert(6)

    assert @bst.include?(5)
  end

  def test_can_calculate_height_of_tree
    @bst.insert(8)
    @bst.insert(3)
    @bst.insert(1)
    @bst.insert(6)
    @bst.insert(4)
    @bst.insert(7)
    @bst.insert(10)
    @bst.insert(14)
    @bst.insert(13)

    assert_equal 4, @bst.height
  end

  def test_can_calculate_diameter_of_provided_tree
    @bst.insert(8)
    @bst.insert(3)
    @bst.insert(1)
    @bst.insert(6)
    @bst.insert(4)
    @bst.insert(7)
    @bst.insert(10)
    @bst.insert(14)
    @bst.insert(13)

    assert_equal 7, @bst.diameter
  end

  def test_can_calculate_diameter_of_tree_with_no_side
    @bst.insert(8)
    @bst.insert(3)

    assert_equal 2, @bst.diameter
  end

  def test_can_calculate_diameter_of_tree_with_single_root
    @bst.insert(8)

    assert_equal 1, @bst.diameter
  end

  def test_can_calculate_diameter_of_empty_tree
    assert_equal 0, @bst.diameter
  end

end
