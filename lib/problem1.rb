module Euler

  def multiples_of_3_and_5(max)
    (1...max)
      .select { |n| n % 3 == 0 || n % 5 == 0 }
      .inject(:+)
  end

end
