module Enumerable

  def palindrome?
    (0..length/2).all? { |i| self[i] == self[length - 1 - i] }
  end

  def sum_two_largest
    inject([]) do |largest, el|
      largest
        .push(el)
        .sort_by { |e| -e }
        .take(2)
    end.inject(0, :+)
  end

end
