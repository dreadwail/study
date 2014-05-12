module Euler

  def divisible_by_all(range)
    candidate = range.last
    until range.all? { |i| candidate % i == 0 }
      candidate += range.last
    end
    candidate
  end

end
