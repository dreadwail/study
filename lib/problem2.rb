require "fib"

module Fib

  def sum_even_fibs_to(max)
    n = 1
    sum = 0
    while (fib = Fib.fib_of(n)) < max
      sum += fib if fib % 2 == 0
      n += 1
    end
    sum
  end

end
