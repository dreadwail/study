module DataStruct
  class LinkedList
    include Enumerable

    class Node

      attr_accessor :value
      attr_accessor :next_node

      def initialize(value, next_node=nil)
        @value = value
        @next_node = next_node
      end

    end

    def initialize
      @head = nil
      @tail = nil
    end

    def reverse!
      return if !@head || !@head.next_node
      @tail = @head
      prev = nil
      curr = @head
      nxt = @head.next_node
      while nxt
        curr.next_node = prev
        prev = curr
        curr = nxt
        nxt = nxt.next_node
      end
      curr.next_node = prev
      @head = curr
    end

    def middle
      return nil if !@head
      return @head.value if @head == @tail
      ptr1 = ptr2 = @head
      while ptr2 && ptr2.next_node
        ptr1 = ptr1.next_node
        ptr2 = ptr2.next_node.next_node
      end
      ptr1.value
    end

    def has_cycle
      return false if !@head
      ptr1 = ptr2 = @head
      while ptr2 && ptr2.next_node
        ptr1 = ptr1.next_node
        ptr2 = ptr2.next_node.next_node
        return true if ptr1 == ptr2
      end
      false
    end

    def last
      @tail.value if @tail
    end

    def remove(element)
      return nil if !@head
      return shift if @head.value == element
      return pop if @tail && @tail.value == element
      previous = nil
      current = @head
      while current
        if current.value == element
          previous.next_node = current.next_node
          return element
        end
        previous = current
        current = current.next_node
      end
    end

    def add(element)
      new_node = Node.new(element)
      add_node(new_node)
    end

    def add_node(new_node)
      if !@head
        @head = new_node
      else
        current = @head
        while current.next_node
          current = current.next_node
        end
        current.next_node = new_node
      end
      @tail = new_node
    end

    def insert(element)
      @head = Node.new(element, @head)
      @tail = @head if !@head.next_node
    end

    def shift
      raise "Cant shift from empty list" if !@head
      shifted = @head
      @head = @head.next_node
      @tail = nil if !@head
      shifted.value
    end

    def pop
      raise "Cant pop from empty list" if !@head
      if !@head.next_node
        value = @head.value
        @head = @tail = nil
        return value
      end
      previous = nil
      current = @head
      while current.next_node
        previous = current
        current = current.next_node
      end
      previous.next_node = nil
      @tail = previous
      current.value
    end

    def each
      current = @head
      while current
        yield current.value
        current = current.next_node
      end
    end
  end
end
