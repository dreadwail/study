module Algos
  class Sequence

    def initialize(*elements)
      @elements = Array(elements).flatten
    end

    def sum_two_largest
      elements.inject([]) do |largest, el|
        largest
          .push(el)
          .sort_by { |e| -e }
          .take(2)
      end.inject(0, :+)
    end

    private

    attr_reader :elements

  end
end
