module Euler
  
  def find_sum_multiples(*multipliers, max:)
    (1...max).select do |candidate|
      multipliers.any? { |m| candidate % m == 0 }
    end.inject(:+)
  end

end
