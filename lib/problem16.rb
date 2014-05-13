module Euler

  def sum_digits(num)
    num.to_s
      .split('')
      .map { |s| s.to_i }
      .inject(:+)
  end

end
