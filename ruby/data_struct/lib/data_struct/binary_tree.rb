module DataStruct
  class BinaryTree
    include Enumerable

    class Node

      attr_accessor :parent
      attr_accessor :value
      attr_accessor :left
      attr_accessor :right
      
      def initialize(value)
        @value = value
      end

      def to_s
        "#{left.value if left} <- #{value} -> #{right.value if right}"
      end

    end
    
    def initialize
      @root = nil
    end

    def size
      count = 0
      each { count += 1 }
      count
    end

    def add(value)
      new_node = Node.new(value)
      if !@root
        @root = new_node
      else
        add_node(new_node, @root)
      end
    end

    def remove(value)
      raise StandardError, "Can't remove from an empty tree." if !@root
      found = find(value)
      if !found
        return
      end
      if found.parent
        if found.parent.left == found
          found.parent.left = found.left
          add_node(found.right, found.parent) if found.right
        elsif found.parent.right == found
          found.parent.right = found.right
          add_node(found.left, found.parent) if found.left
        end
      else
        orphan = @root.right
        @root = @root.left
        add_node(orphan, @root) if orphan
      end
    end

    def each(traversal_style=nil)
      case traversal_style
      when :preorder
        preorder_traversal { |n| yield n.value }
      when :inorder
        inorder_traversal { |n| yield n.value }
      when :postorder
        postorder_traversal { |n| yield n.value }
      else
        preorder_traversal { |n| yield n.value }
      end
    end

    def to_s
      out = ""
      preorder_traversal do |n|
        out += n.to_s + "\n"
      end
      out
    end

    private

    def find(value)
      preorder_traversal do |node|
        return node if node.value == value
      end
    end

    def preorder_traversal
      return if !@root
      current = @root
      stack = []
      while current || !stack.empty?
        if current
          yield current
          stack.push current
          current = current.left
        else
          current = stack.pop
          current = current.right
        end
      end
    end

    def inorder_traversal
      return if !@root
      current = @root
      stack = []
      while current || !stack.empty?
        if current
          stack.push current
          current = current.left
        else
          current = stack.pop
          yield current
          current = current.right
        end
      end
    end

    def postorder_traversal
      return if !@root
      stack = [@root]
      previous = nil
      while !stack.empty?
        current = stack.last
        if !previous || previous.left == current || previous.right == current
          # descending
          if current.left
            stack.push current.left
          elsif current.right
            stack.push current.right
          else
            yield stack.pop
          end
        elsif current.left == previous
          # ascending from left
          if current.right
            stack.push current.right
          else
            yield stack.pop
          end
        elsif current.right == previous
          # ascending from right
          yield stack.pop
        end
        previous = current
      end
    end

    def postorder(node, &block)
      return if !node
      postorder(node.left, &block)
      postorder(node.right, &block)
      yield node
    end

    def add_node(node, current)
      while current
        if node.value <= current.value
          if !current.left
            current.left = node
            current.left.parent = current
            break
          else
            current = current.left
          end
        else
          if !current.right
            current.right = node
            current.right.parent = current
            break
          else
            current = current.right
          end
        end
      end
    end

  end
end
