module Algos
  module Arrays

    def self.find_missing_number_in_ascending_consecutives(arr, max)
      sum_expected = (max * (max+1))/2
      sum = arr.inject(:+)
      sum_expected - sum
    end

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

    def self.binary_search(arr, val)
      return nil if !arr || arr.length == 0

      left_idx = 0
      right_idx = arr.length - 1

      while left_idx < right_idx
        center_idx = (left_idx + right_idx) / 2
        if val < arr[center_idx]
          right_idx = center_idx - 1
        elsif val > arr[center_idx]
          left_idx = center_idx + 1
        elsif val == arr[center_idx]
          return center_idx
        end
      end
      
    end

  end
end
