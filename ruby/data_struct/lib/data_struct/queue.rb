module DataStruct

  class Queue
    include Enumerable

    class Entry

      attr_accessor :value
      attr_accessor :next
      
      def initialize(value, next_entry)
        @value = value
        @next_entry = next_entry
      end

    end

    def initialize
    end

    def enqueue(item)
      entry = Entry.new(item, nil)
      if @tail
        @tail.next = entry
      else
        @head = @tail = Entry.new(item, nil)
      end
    end

    def dequeue
      if !@head
        raise "Cannot dequeue from empty queue"
      end
      value = @head.value
      @head = @head.next
      value
    end

    def each
      current = @head
      while current
        yield current.value
        current == current.next
      end
    end

  end

end
