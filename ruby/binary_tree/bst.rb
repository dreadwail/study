require "ostruct"

class BST

  def initialize
    @root = nil
  end

  def insert(value)
    new_node = OpenStruct.new(value: value)

    if @root.nil?
      @root = new_node
    else
      current = @root

      while current
        if value < current.value
          if current.left.nil?
            current.left = new_node
            new_node.parent = current
            break
          else
            current = current.left
          end
        else
          if current.right.nil?
            current.right = new_node
            new_node.parent = current
            break
          else
            current = current.right
          end
        end
      end
      
    end
  end

  def include?(value)
    node = traverse_to(value)
    !!node
  end

  def traverse_to(value)
    current = @root

    while current
      if current.value == value
        return current
      end

      if value < current.value
        if current.left.nil?
          return nil
        else
          current = current.left
        end
      else
        if current.right.nil?
          return nil
        else
          current = current.right
        end
      end
    end

    nil
  end

  def height
    calculate_height(@root)
  end

  def calculate_height(starting_node = nil)
    return 0 if starting_node.nil?

    [
      1 + calculate_height(starting_node.left),
      1 + calculate_height(starting_node.right)
    ].max
  end

  def diameter
    return 0 if @root.nil?

    1 + 
    calculate_height(@root.left) + 
    calculate_height(@root.right)
  end

end
