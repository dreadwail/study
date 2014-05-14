class Range

  def multiples_of_any(*nums)
    select { |i| nums.any? { |n| i % n == 0 } }
  end

end

