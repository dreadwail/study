module Algos
  module Strings

    def self.strstr(haystack, needle)
      return -1 if haystack.nil? || needle.nil? || needle.empty?
      haystack.each_char.with_index do |char, haystack_idx|
        start_idx = haystack_idx
        needle_idx = 0
        while(haystack[haystack_idx] == needle[needle_idx] && needle_idx < needle.length)
          haystack_idx += 1
          needle_idx += 1
        end
        return start_idx if needle_idx == needle.length
      end
      -1
    end

    def self.reverse_words(str)
      return nil if str.nil?
      reverse_string(str, 0, str.length - 1)
      in_word = false
      start_index = 0
      (0..str.length).each do |idx|
        if str[idx] == " " || str[idx] == "\t" || idx == str.length
          reverse_string(str, start_index, idx-1) if in_word
          in_word = false
        else
          start_index = idx if !in_word
          in_word = true
        end
      end
      str
    end

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
