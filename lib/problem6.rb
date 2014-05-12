module Euler

  def sum_square_difference(range)
    (square_of_sums(range) - sum_of_squares(range)).abs
  end

  def sum_of_squares(range)
    range.map { |i| i ** 2 }.inject(:+)
  end

  def square_of_sums(range)
    range.inject(:+) ** 2
  end

end
