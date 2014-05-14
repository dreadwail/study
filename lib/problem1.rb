class Range

  def sum_multiples_of_3_and_5
    select { |n| n % 3 == 0 || n % 5 == 0 }.inject(:+)
  end

end
