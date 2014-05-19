require "stdlib"

module Problem4

  def largest_palindrome_product_using_digits(max_digits_each)
    max_value = (10 ** max_digits_each) - 1
    largest = 0
    (1..max_value).each do |left|
      (left..max_value).each do |right|
        product = left * right
        largest = [product, largest].max if product.palindrome?
      end
    end
    largest
  end

end

