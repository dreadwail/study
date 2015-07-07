module Algos
  module Strings
    class Calculator

      ZERO = "0".ord

      attr_reader :value

      def initialize
        @value = 0
      end

      def add(*string_nums)
        string_nums.each do |string_num|
          @value += (string_num.ord - ZERO) unless string_num.empty?
        end
      end

    end
  end
end
