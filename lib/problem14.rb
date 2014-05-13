module Euler

  def longest_collatz_sequence_from(range)
    longest = []
    range.each do |i|
      candidate = collatz_from(i)
      longest = candidate if candidate.length > longest.length
    end
    longest
  end

  COLLATZ_CHAINS = {}

  def collatz_from(num)
    return COLLATZ_CHAINS[num] if COLLATZ_CHAINS[num]
    ans = [num]
    while num > 1
      num = next_collatz(num)
      ans << num
    end
    COLLATZ_CHAINS[num] = ans
    ans
  end

  def next_collatz(num)
    (num % 2 == 0) ? (num/2) : ((3*num) + 1)
  end

end
