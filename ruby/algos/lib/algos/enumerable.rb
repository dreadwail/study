module Enumerable

  def palindrome?
    (0..length/2).all? { |i| self[i] == self[length - 1 - i] }
  end

end
