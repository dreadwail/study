module Problem11

  class Grid

    def initialize(grid)
      @grid = grid
    end

    def sequences(count)
      hoz = horizontals(count)
      ver = verticals(count)
      fwd = forward_diagonals(count)
      bck = backward_diagonals(count)
      @sequences ||= [hoz, ver, fwd, bck].inject(:+)
    end

    private

    def horizontals(count)
      grid.flat_map { |row| row.each_cons(count).to_a }
    end

    def verticals(count)
      ans = []
      max_y = grid.length - count
      (0..max_y).each do |y|
        (0...grid.length).each do |x|
          ans << extract(count, y, x, 1, 0)
        end
      end
      ans
    end

    def forward_diagonals(count)
      max = grid.length - count
      ans = []
      (0..max).each do |y|
        (0..max).each do |x|
          ans << extract(count, y, x, 1, 1)
        end
      end
      ans
    end

    def backward_diagonals(count)
      min_x = count - 1
      max_y = grid.length - count
      ans = []
      (0..max_y).each do |y|
        (min_x...grid.length).each do |x|
          ans << extract(count, y, x, 1, -1)
        end
      end
      ans
    end

    def extract(count, y, x, y_diff, x_diff)
      ans = []
      count.times do
        ans << grid[y][x]
        y += y_diff; x += x_diff
      end
      ans
    end

    attr_reader :grid

  end

  def greatest_product_of_sequence_in_grid(grid, count)
    if count > grid.length
      raise ArgumentError, "count: (#{count}) > grid (#{grid.length})"
    end
    biggest = 0
    Grid.new(grid).sequences(count).each do |seq|
      biggest = [biggest, seq.inject(:*)].max
    end
    biggest
  end

end
