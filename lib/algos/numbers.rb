module Algos
  module Numbers

    def self.bin2dec(str)
      return nil if !str || str == ""
      place = 1
      sum = 0
      (str.length-1).downto(0) do |i|
        digit = str[i].to_i
        sum += (place * digit)
        place *= 2
      end
      sum.to_s
    end

  end
end
