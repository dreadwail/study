require "algos/strings/calculator"
require "algos/strings/palindrome"

module Algos
  module Strings

    def self.strstr(haystack, needle)
      haystack ||= ""
      needle ||= ""
      needle_end = needle.length - 1
      (0...haystack.length).each do |haystack_index|
        needle.each_char.with_index do |needle_char, needle_index|
          break if haystack[haystack_index] != needle_char
          return haystack_index - needle_end if needle_index == needle_end
          haystack_index += 1
        end
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

  end
end
