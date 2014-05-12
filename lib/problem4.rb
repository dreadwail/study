require "ostruct"

module Euler

  def largest_pair_with_palindrome_product(max_digits_each)
    max_value = ("9" * max_digits_each).to_i
    answers = []
    (1..max_value).each do |left|
      (1..max_value).each do |right|
        product = left * right
        answers << OpenStruct.new(product: product, parts: [left, right]) if palindrome?(product)
      end
    end
    answers.sort_by { |a| a.product }.last.parts
  end

  def palindrome?(suspect)
    str = suspect.to_s
    str == str.reverse
  end

end
