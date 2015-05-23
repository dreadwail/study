module Algos
  module Arrays

    def self.array_hopper(arr)
      return [] if arr.nil? || arr.empty?
      return arr if arr.length == 1 && arr[0] != 0

      jump_values = []

      arr.each_with_index do |value, index|
        jump_values << (index + value)
      end

      ptr = 0
      jumps = 0
      while(ptr < arr.length - 1)
        min = ptr + 1
        max = [ptr + arr[ptr], arr.length - 1].min
        ptr += 1
        (min..max).each do |idx|
          if jump_values[idx] > jump_values[ptr]
            ptr = idx
          end
        end
        jumps += 1
      end
      
      jumps
    end

  end
end
