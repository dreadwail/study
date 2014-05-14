class Range

  def square_of_sums_diff_sum_of_squares
    (square_of_sums - sum_of_squares).abs
  end

  def sum_of_squares
    map { |i| i ** 2 }.inject(:+)
  end

  def square_of_sums
    inject(:+) ** 2
  end

end
