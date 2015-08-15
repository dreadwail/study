require "byebug"

module Algos
  module Arrays

    def self.sum_two_largest(*items)
      items.inject([]) do |largest, el|
        largest
          .push(el)
          .sort_by { |e| -e }
          .take(2)
      end.inject(0, :+)
    end

    def self.sum_closest_zero(*arr)
      return [] if arr.length < 2
      arr.sort!
      closest = nil
      answer = nil
      left = 0
      right = arr.length - 1
      while left < right
        sum = arr[left] + arr[right]
        if closest.nil? || sum.abs < closest.abs
          closest = sum
          answer = [arr[left], arr[right]]
        end
        if sum < 0
          left += 1
        else
          right -= 1
        end
      end
      answer
    end

    def self.largest_continuous_sum(arr)
      return 0 if !arr || arr.length == 0
      current_sum = max_sum = arr[0]
      arr.drop(1).each do |el|
        current_sum = [current_sum + el, el].max
        max_sum = current_sum if current_sum >= max_sum
      end
      max_sum
    end

    def self.first_non_repeating(str)
      return nil if str.nil? || str.empty?
      seen = Hash.new(0)
      str.chars.each do |c|
        seen[c] += 1
      end
      str.chars.each do |c|
        return c if seen[c] == 1
      end
      nil
    end

    def self.find_number_seen_twice(arr)
      return nil if !arr || arr.length == 0
      seen = Hash.new(0)
      arr.each do |i|
        seen[i] += 1
      end
      seen.each do |k,v|
        return k if v > 1
      end
      nil
    end

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
