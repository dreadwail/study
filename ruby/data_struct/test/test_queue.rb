require "test_helper"

class TestQueue < Minitest::Test

  def test_can_enqueue_dequeue
    queue = DataStruct::Queue.new
    queue.enqueue 10
    assert_equal 10, queue.dequeue
  end

  def test_dequeue_empty_raises
    assert_raises RuntimeError do
      DataStruct::Queue.new.dequeue
    end
  end
  
  def test_multiple_values
    queue = DataStruct::Queue.new
    queue.enqueue 10
    queue.enqueue 20
    assert_equal 10, queue.dequeue
    assert_equal 20, queue.dequeue
  end

  def test_empty_queue_identified
    refute DataStruct::Queue.new.any?
  end

  def test_non_empty_queue_identified
    queue = DataStruct::Queue.new
    queue.enqueue 10
    assert queue.any?
  end


end

