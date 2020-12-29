module Euler

  refine Range do
    def find_sum_multiples(*multipliers)
      select do |candidate|
        multipliers.any? { |m| candidate % m == 0 }
      end.inject(:+)
    end
  end

end
