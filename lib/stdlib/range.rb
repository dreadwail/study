class Range

  def multiples_of_any(*nums)
    select { |i| nums.any? { |n| i % n == 0 } }
  end

  def sum_of_squares
    map { |i| i ** 2 }.inject(:+)
  end

  def square_of_sums
    inject(:+) ** 2
  end

end

