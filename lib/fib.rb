module Fib

  KNOWN_FIBS = { 0 => 1, 1 => 1 }

  def self.fib_of(n)
    return 1 if n < 2
    idx = n - 1
    return KNOWN_FIBS[idx] if KNOWN_FIBS[idx]
    (2..idx).each do |i|
      KNOWN_FIBS[i] = KNOWN_FIBS[i - 1] + KNOWN_FIBS[i - 2]
    end
    KNOWN_FIBS[idx]
  end

end
