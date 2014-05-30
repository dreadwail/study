require "stdlib"

module Problem34

  def sum_of_numbers_whose_digit_factorials_is_number

    max_digits = 1
    while max_digits <= (max_digits * 9.factorial).to_s.length
      upper_bound = max_digits * 9.factorial
      max_digits += 1
    end
    max_digits

    max = max_digits * 9.factorial
    
    sum = 0
    (3..max).each do |n|
      sum_digit_factorials = sum_of_factorials_of_digits(n)
      sum += sum_digit_factorials if sum_digit_factorials == n
    end
    sum
  end

  def sum_of_factorials_of_digits(n)
    n.digits.map { |d| d.factorial }.inject(:+)
  end

end
