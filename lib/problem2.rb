module Euler

  def sum_even_fibs(max)
    n = 0
    sum = 0
    while (fib_of(n) < max)
      sum += fib_of(n) if fib_of(n) % 2 == 0
      n += 1
    end
    sum
  end

  KNOWN_FIBS = { 0 => 1, 1 => 1 }

  def fib_of(n)
    return KNOWN_FIBS[n] if KNOWN_FIBS[n]
    (2..n).each do |i|
      KNOWN_FIBS[i] = KNOWN_FIBS[i - 1] + KNOWN_FIBS[i - 2]
    end
    KNOWN_FIBS[n]
  end

end
