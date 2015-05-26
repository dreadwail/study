module Algos
  module Strings

    def self.reverse_string(str, front=0, back=(str && str.length-1))
      return nil if str.nil?
      while front < back
        str[front], str[back] = str[back], str[front]
        front += 1
        back -= 1
      end
      str
    end

    def self.is_rotation(str1, str2)
      (str1+str1).include?(str2) || (str2+str2).include?(str1)
    end

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
