class String

  def palindrome?
    left = 0
    right = length - 1
    while left < right
      return false if self[left] != self[right]
      left += 1
      right -= 1
    end
    true
  end

end
