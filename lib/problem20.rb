module Euler

  def sum_factorial_digits(num)
    num
      .downto(1)
      .inject(:*)
      .to_s
      .split('')
      .map { |s| s.to_i }
      .inject(:+)
  end

end
