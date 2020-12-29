module Euler

  FIB_CACHE = {
    0 => 1,
    1 => 1
  }

  def fib(n)
    FIB_CACHE[n] ||= (fib(n-1) + fib(n-2))
  end

  def sum_even_fibs(max:)
    (1..Float::INFINITY)
      .lazy
      .map { |i| fib(i) }
      .take_while { |result| result < max }
      .select { |result| result % 2 == 0 }
      .inject(:+)
  end

end
