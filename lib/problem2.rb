require "fib"

module Euler

  def sum_even_fibs(max)
    n = 1
    sum = 0
    while (Fib.fib_of(n) < max)
      sum += Fib.fib_of(n) if Fib.fib_of(n) % 2 == 0
      n += 1
    end
    sum
  end

end
