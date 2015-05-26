module Algos
  module Strings

    def self.is_palindrome(str)
      return false if !str
      left = 0
      right = str.length - 1
      while left < right
        return false if str[left] != str[right]
        left += 1
        right -= 1
      end
      true
    end

  end
end
