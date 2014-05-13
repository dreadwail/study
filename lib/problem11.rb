module Euler

  def greatest_product_of_sequence_in_grid(grid, count)
    if count > grid.length
      raise ArgumentError, "#{count} > grid (#{grid.length})"
    end

    biggest = 0
    sequences = []

    horizontal_sequences = extract_horizontal_sequences(grid, count)
    sequences += horizontal_sequences

    vertical_sequences = extract_vertical_sequences(grid, count)
    sequences += vertical_sequences

    back_diagonal_sequences = extract_back_diagonal_sequences(grid, count)
    sequences += back_diagonal_sequences

    forward_diagonal_sequences = extract_forward_diagonal_sequences(grid, count)
    sequences += forward_diagonal_sequences

    sequences.each { |s| biggest = [biggest, s.inject(:*)].max }

    biggest

  end

  def extract_back_diagonal_sequences(grid, count)

    sequences = []
    max_idx = grid.length - count

    (0..max_idx).each do |y|
      (0..max_idx).each do |x|
        sequences << take_back_diagonal_from(grid, count, y, x)
      end
    end

    sequences

  end

  def extract_forward_diagonal_sequences(grid, count)

    sequences = []

    min_x = count - 1
    max_y = grid.length - count

    (0..max_y).each do |y|
      (min_x..(grid.length - 1)).each do |x|
        sq = take_forward_diagonal_from(grid, count, y, x)
        sequences << sq
      end
    end

    sequences

  end

  def take_back_diagonal_from(grid, count, y, x)
    sequence = []
    while sequence.length < count
      value = grid[y][x]
      break unless value
      sequence << value
      x += 1
      y += 1
    end
    sequence
  end

  def take_forward_diagonal_from(grid, count, y, x)
    sequence = []
    while sequence.length < count
      value = grid[y][x]
      break unless value
      sequence << value
      x -= 1
      y += 1
    end
    sequence
  end
  
  def extract_vertical_sequences(grid, count)
    transformed = []
    (0...grid.length).each do |y|
      (0...grid.length).each do |x|
        transformed[x] ||= []
        transformed[x][y] = grid[y][x]
      end
    end
    extract_horizontal_sequences(transformed, count)
  end

  def extract_horizontal_sequences(grid, count)
    sequences = []
    grid.each do |row|
      row.each_cons(count) do |seq|
        sequences << seq
      end
    end
    sequences
  end

end
