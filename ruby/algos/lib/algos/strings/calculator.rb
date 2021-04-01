module Algos
  module Strings
    class Calculator

      ZERO = "0".ord

      attr_reader :value

      def initialize
        @value = 0
      end

      def add(*string_numbers)
        string_numbers.reject(&:empty?).each { |s| add_one(s) }
      end

      private

      def add_one(string_number)
        multiplier = 1
        string_number_value = 0
        string_number.chars.reject { |c| c == "-" }.reverse_each do |digit_char|
          string_number_value += value_of(digit_char) * multiplier
          multiplier *= 10
        end
        if string_number.chars[0] == "-"
          string_number_value *= -1
        end
        @value += string_number_value
      end

      def value_of(character)
        character.ord - ZERO
      end

    end
  end
end
