require "test_helper"

class TestLinkedList < Minitest::Test

  def setup
    @list = DataStruct::LinkedList.new
  end

  def test_empty_list
    assert_equal [], @list.to_a
  end

  def test_can_add_element_to_end_of_empty_list
    @list.add 10 
    assert_equal [10], @list.to_a
  end

  def test_can_add_element_to_end_of_non_empty_list
    @list.add 10 
    @list.add 20 
    assert_equal [10, 20], @list.to_a
  end

  def test_can_insert_element_at_start_of_empty_list
    @list.insert 10 
    assert_equal [10], @list.to_a
  end

  def test_can_insert_element_at_start_of_non_empty_list
    @list.add 10 
    @list.insert 20 
    assert_equal [20, 10], @list.to_a
  end

  def test_can_remove_element_from_front_of_list
    @list.add 10 
    @list.add 20 
    removed = @list.shift
    assert_equal 10, removed
    assert_equal [20], @list.to_a
  end

  def test_can_remove_element_from_end_of_list
    @list.add 10 
    @list.add 20 
    removed = @list.pop
    assert_equal 20, removed
    assert_equal [10], @list.to_a
  end

  def test_shift_from_empty_list_raises
    assert_raises(RuntimeError) { @list.shift }
  end

  def test_pop_from_empty_list_raises
    assert_raises(RuntimeError) { @list.pop }
  end

  def test_remove_from_empty_list_gives_nil
    assert_nil @list.remove(10)
  end

  def test_remove_non_existent_element_from_list_gives_nil
    @list.add 5
    assert_nil @list.remove(10)
  end

  def test_can_remove_from_start
    @list.add 10
    @list.add 20
    removed = @list.remove 10
    assert_equal 10, removed
    assert_equal [20], @list.to_a
  end

  def test_can_remove_from_end
    @list.add 10
    @list.add 20
    removed = @list.remove 20
    assert_equal 20, removed
    assert_equal [10], @list.to_a
  end

  def test_can_remove_from_middle
    @list.add 10
    @list.add 20
    @list.add 30
    removed = @list.remove 20
    assert_equal 20, removed
    assert_equal [10, 30], @list.to_a
  end

  def test_can_reverse_empty
    @list.reverse!
    assert_equal [], @list.to_a
  end

  def test_can_reverse_single
    @list.add 10 
    @list.reverse!
    assert_equal [10], @list.to_a
  end

  def test_can_reverse_many
    @list.add 10 
    @list.add 20 
    @list.add 30 
    @list.reverse!
    assert_equal [30,20,10], @list.to_a
  end

  def test_last_is_nil_for_nil_list
    assert_nil @list.last
  end

  def test_last_is_head_in_single_element_list
    @list.add 10
    assert_equal @list.first, @list.last
  end

  def test_can_get_last_from_non_empty_list
    @list.add 10
    @list.add 20
    @list.add 30
    assert_equal 30, @list.last
  end

  def test_last_is_maintained_when_inserting
    @list.insert 20
    @list.insert 30
    assert_equal 20, @list.last
  end

  def test_last_is_maintained_when_removing
    @list.add 10
    @list.add 20
    @list.remove 20
    assert_equal 10, @list.last
  end

  def test_last_is_maintained_when_shifting
    @list.add 10
    @list.add 20
    @list.shift
    assert_equal 20, @list.last
  end

  def test_last_is_maintained_when_popping
    @list.add 10
    @list.add 20
    @list.pop
    assert_equal 10, @list.last 
  end

  def test_last_is_nil_when_list_is_emptied_via_shift
    @list.add 10
    @list.shift
    assert_nil @list.last
  end

  def test_last_is_nil_when_list_is_emptied_via_pop
    @list.add 10
    @list.pop
    assert_nil @list.last
  end

  def test_middle_of_empty_is_nil
    assert_nil @list.middle
  end

  def test_middle_of_single_is_single
    @list.add 10
    assert_equal 10, @list.middle
  end

  def test_middle_of_double_is_last
    @list.add 10
    @list.add 20
    assert_equal 20, @list.middle
  end

  def test_middle_odd_count_list
    @list.add 10
    @list.add 20
    @list.add 30
    @list.add 40
    @list.add 50
    assert_equal 30, @list.middle
  end

  def test_middle_even_count_list
    @list.add 10
    @list.add 20
    @list.add 30
    @list.add 40
    assert_equal 30, @list.middle
  end

  def test_cycle_identification_even_count
    first_node = DataStruct::LinkedList::Node.new(10)
    @list.add_node first_node
    @list.add 20
    @list.add 30
    @list.add_node DataStruct::LinkedList::Node.new(40, first_node)
    assert @list.has_cycle
  end

  def test_cycle_identification_odd_count
    first_node = DataStruct::LinkedList::Node.new(10)
    @list.add_node first_node
    @list.add 20
    @list.add_node DataStruct::LinkedList::Node.new(30, first_node)
    assert @list.has_cycle
  end

  def test_cycle_identification_empty
    refute @list.has_cycle
  end

  def test_cycle_identification_single
    @list.add 10
    refute @list.has_cycle
  end

  def test_cycle_identification_non_cyclic
    @list.add 10
    @list.add 20
    refute @list.has_cycle
  end

end

