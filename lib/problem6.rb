require "stdlib"

module Problem6

  def square_of_sums_diff_sum_of_squares(range)
    (range.square_of_sums - range.sum_of_squares).abs
  end

end
