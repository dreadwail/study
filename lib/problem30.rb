module Problem30

  def numbers_equaling_sum_of_nth_power_of_digits(power)
    (2..999999).select do |n| 
      digits(n).map { |d| d**power }.inject(:+) == n
    end
  end

  def digits(num)
    num.to_s.split('').map { |s| s.to_i }
  end

end
