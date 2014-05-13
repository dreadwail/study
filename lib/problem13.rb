module Euler

  def first_digits_of_sum(count, numbers)
    numbers.inject(:+).to_s[0...count].to_i
  end

end
