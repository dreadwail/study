module Euler

  def greatest_product_of_consecutives(num_consecutives, number)
    numbers = number.to_s.split('')
    biggest = 0
    numbers.each_cons(5) do |candidates|
      biggest = [biggest, candidates.map { |c| c.to_i }.inject(:*)].max
    end
    biggest
  end

end
