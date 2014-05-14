class Integer

  def greatest_product_of_consecutive_digits(num_consecutives)
    biggest = 0
    to_s.split('').each_cons(num_consecutives) do |candidates|
      product_of_these = candidates.map { |c| c.to_i }.inject(:*)
      biggest = [biggest, product_of_these].max
    end
    biggest
  end

end
