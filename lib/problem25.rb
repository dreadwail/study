require "fib"

module Euler

  def first_fib_with_digit_count(count)
    target = (10 ** (count-1))
    i = 0
    i += 1 while (x = Fib.fib_of(i)) < target
    i
  end

end
