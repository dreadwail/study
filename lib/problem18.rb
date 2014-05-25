module Problem18

  class Tree

    attr_accessor :value
    attr_accessor :left
    attr_accessor :right

    def initialize(value)
      @value = value
    end

  end

  KNOWN_GREATEST_PATHS = {}

  def maximum_path_sum(rows)
    tree = load_tree(rows)
    connect_tree!(tree)
    greatest_path(tree.first[0])
  end

  def load_tree(rows)
    rows.map do |row|
      row.map do |val|
        Tree.new(val)
      end
    end
  end

  def connect_tree!(tree)
    tree.each_cons(2) do |pair|
      current_row = pair[0]
      next_row = pair[1]
      current_row.each_with_index do |node, idx|
        node.left = next_row[idx]
        node.right = next_row[idx+1]
      end
    end
  end

  def greatest_path(tree)
    return 0 if tree.nil?
    return KNOWN_GREATEST_PATHS[tree] if KNOWN_GREATEST_PATHS[tree]
    left_greatest = tree.value + greatest_path(tree.left)
    right_greatest = tree.value + greatest_path(tree.right)
    greatest = [left_greatest, right_greatest].max
    KNOWN_GREATEST_PATHS[tree] = greatest
    greatest
  end

end
