module Problem28

  def sum_spiral_diagonals(n)
    spiral = generate_spiral(n)
    x = 0
    y = 0
    forward_diag = []
    n.times do
      forward_diag << spiral[y][x]
      x += 1
      y += 1
    end
    x = n - 1
    y = 0
    backward_diag = []
    n.times do
      backward_diag << spiral[y][x]
      x -= 1
      y += 1
    end
    forward_diag.inject(:+) + backward_diag.inject(:+) - 1
  end

  DIRECTION_DIFFS = {
    up:    [0, -1],
    down:  [0,  1],
    right: [1,  0],
    left:  [-1, 0]
  }

  NEXT_DIRECTION_FROM = {
    right: :down,
    down: :left,
    left: :up,
    up: :right
  }

  def generate_spiral(n)
    spiral = Array.new(n) { Array.new(n) }
    x = n / 2
    y = n / 2
    distance = 1
    value = 1
    direction = :right
    while value <= (n*n)
      turns = value == (n*n)-(n-1) ? 1 : 2
      turns.times do
        distance.times do
          spiral[y][x] = value
          x += DIRECTION_DIFFS[direction][0]
          y += DIRECTION_DIFFS[direction][1]
          value += 1
        end
        direction = NEXT_DIRECTION_FROM[direction]
      end
      distance += 1
    end
    spiral
  end

end
