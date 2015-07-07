module Algos
  module Strings
    class Calculator

      ZERO = "0".ord

      attr_reader :value

      def initialize
        @value = 0
      end

      def add(*string_nums)
        string_nums.reject(&:empty?).each do |string_num|
          multiplier = 1
          string_num.chars.reject { |c| c == "-" }.reverse_each do |digit_char|
            @value += (digit_char.ord - ZERO) * multiplier
            multiplier *= 10
          end
          if string_num.chars[0] == "-"
            @value *= -1
          end
        end
      end

    end
  end
end
